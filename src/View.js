import Util from "./Util";
const { format } = require("date-fns")

const locationElement = document.querySelector(".location");
const skyElement = document.querySelector(".sky");
const tempElement = document.querySelector(".temp");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

const dailyList = document.querySelector(".daily > ul");

export default class View {
    static load() {

    }

    static showCurrentWeather(location, data) {
        console.log(data);
        let dt = Util.getDateTimeString(null, data.timezone_offset);

        locationElement.innerHTML = location;
        dateElement.innerHTML = dt.date;
        timeElement.innerHTML = dt.time;
        skyElement.innerHTML = data.current.weather[0].main;
        tempElement.innerHTML = data.current.temp + '°';
        
    }

    static showDailyWeather(data) {
        console.log(data);
        data.daily.forEach((day, index) => {
            if(index == 0)
                return;

            let dt = Util.getDateTimeString(day.dt, data.timezone_offset);

            let listItem = document.createElement('li');
            listItem.innerHTML = `
            <span>${dt.date}</span>
            <span>${day.temp.day}</span>
            <i class="fa-solid ${Util.getWeatherIcon(day.weather[0].icon)}">`;

            dailyList.appendChild(listItem);
        });
    }
}