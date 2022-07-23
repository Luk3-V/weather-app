import Util from "./Util";
import Controller from "./Controller";
const { format } = require("date-fns")

const queryForm = document.querySelector(".query");

const locationElement = document.querySelector(".location");
const skyElement = document.querySelector(".sky");
const tempElement = document.querySelector(".temp");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

const hourlyList = document.querySelector(".hourly > div");
const dailyList = document.querySelector(".daily > table");

export default class View {
    static load() {
        queryForm.onsubmit = Controller.queryWeatherEvent;
    }

    static showCurrentWeather(location, data) {
        let dt = Util.getDateTimeString(null, data.timezone_offset);

        locationElement.innerHTML = location;
        dateElement.innerHTML = dt.date;
        timeElement.innerHTML = dt.time;
        skyElement.innerHTML = data.current.weather[0].main;
        tempElement.innerHTML = data.current.temp + '°';
        
    }

    static showHourlyWeather(data) {
        hourlyList.innerHTML = '';
        data.hourly.forEach((hour, index) => {
            if(index == 0 || index >= 12)
                return;

            let dt = Util.getDateTimeString(hour.dt, data.timezone_offset);

            let listItem = document.createElement('div');
            listItem.classList.add('hour');
            listItem.innerHTML = `
            <span>${dt.time}</span>
            <i class="fa-solid ${Util.getWeatherIcon(hour.weather[0].icon)}"></i>
            <span>${hour.temp}°</span>`;

            hourlyList.appendChild(listItem);
        });
    }

    static showDailyWeather(data) {
        dailyList.innerHTML = '';
        data.daily.forEach((day, index) => {
            if(index == 0)
                return;

            let dayOfWeek = Util.getDayOfWeek(day.dt, data.timezone_offset);

            let listItem = document.createElement('tr');
            listItem.classList.add('day');
            listItem.innerHTML = `
            <td>${dayOfWeek}</td>
            <td>${day.temp.day}°</td>
            <td>${day.temp.night}°</td>
            <td><i class="fa-solid ${Util.getWeatherIcon(day.weather[0].icon)}"></i></td>`;

            dailyList.appendChild(listItem);
        });
    }
}