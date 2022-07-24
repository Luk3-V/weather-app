import Util from "./Util";
import Controller from "./Controller";
const { format } = require("date-fns")

const queryForm = document.querySelector(".query");
const unitToggle = document.querySelector(".unit-toggle");

const imageElement = document.querySelector(".current > img");
const locationElement = document.querySelector(".location");
const skyElement = document.querySelector(".sky");
const tempElement = document.querySelector(".temp");
const feelsElement = document.querySelector(".feels");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

const windElement = document.querySelector(".wind");
const rainElement = document.querySelector(".rain");
const precipitationElement = document.querySelector(".precipitation");
const visibilityElement = document.querySelector(".visibility");
const humidityElement = document.querySelector(".humidity");
const dewpointElement = document.querySelector(".dew-point");
const pressureElement = document.querySelector(".pressure");
const uvElement = document.querySelector(".uv-index");

const hourlyList = document.querySelector(".hourly > div");
const dailyList = document.querySelector(".daily > div");


export default class View {
    static load() {
        queryForm.onsubmit = Controller.queryWeatherEvent;
        unitToggle.onclick = Controller.toggleUnitEvent;
    }

    static showAll(location, data, imageUrl) {
        View.showCurrentWeather(location, data, imageUrl);
        View.showHourlyWeather(data);
        View.showDailyWeather(data);
    }

    static showCurrentWeather(location, data, imageUrl) {
        let dt = Util.getDateTimeString(null, data.timezone_offset);

        locationElement.innerHTML = '' + location;
        dateElement.innerHTML = dt.date;
        timeElement.innerHTML = dt.time;
        skyElement.innerHTML = data.current.weather[0].main;
        tempElement.innerHTML = `<h1>${Math.round(data.current.temp)}</h1><span>°${Controller.unit}</span>`;
        feelsElement.innerHTML = 'Feels Like: ' + data.current.feels_like + '°';
    
        windElement.innerHTML = data.current.wind_speed + ' mph';
        rainElement.innerHTML = (data.hourly[0].rain ? Math.round(data.hourly[0].rain) : 0) + '%';
        precipitationElement.innerHTML = (data.hourly[0].precipitation ? Math.round(data.hourly[0].precipitation) : 0) + ' in';
        visibilityElement.innerHTML = data.current.visibility + ' mi';
        humidityElement.innerHTML = data.current.humidity + '%';
        dewpointElement.innerHTML = Math.round(data.current.dew_point) + '°';
        pressureElement.innerHTML = data.current.pressure + ' inHg';
        uvElement.innerHTML = data.current.uvi + ' of 10';

        imageElement.setAttribute('src', imageUrl);
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
            <span>${dt.time.replace(dt.time.substring(dt.time.indexOf(':'), dt.time.indexOf(' ')), '')}</span>
            <span class='hour-temp'>${Math.round(hour.temp)}°</span>
            <i class="fa-solid ${Util.getWeatherIcon(hour.weather[0].icon)}"></i>
            <span class="hour-rain"><i class="fa-solid fa-droplet"></i> ${hour.rain ? Math.round(hour.rain) : 0}%</span>`;

            hourlyList.appendChild(listItem);
        });
    }

    static showDailyWeather(data) {
        dailyList.innerHTML = '';
        data.daily.forEach((day, index) => {
            if(index == 0)
                return;

            let dayOfWeek = Util.getDayOfWeek(day.dt, data.timezone_offset);
            let dayOfMonth = Util.getDayOfMonth(day.dt, data.timezone_offset);

            let listItem = document.createElement('div');
            listItem.classList.add('day');
            listItem.innerHTML = `
            <span class="day-of-week">${dayOfWeek} ${dayOfMonth}</span>
            <span class="day-temp"><span>${Math.round(day.temp.day)}°</span>/<span>${Math.round(day.temp.night)}°</span></span>
            <div class="weather"><i class="fa-solid ${Util.getWeatherIcon(day.weather[0].icon)}"></i><span>${day.weather[0].main}</span></div>
            <span class="rain"><i class="fa-solid fa-droplet"></i> ${day.rain ? Math.round(day.rain) : 0}%</span>
            <span class="rain"><i class="fa-solid fa-wind"></i> ${Math.round(day.wind_speed)}mph</span>`;

            dailyList.appendChild(listItem);
        });
    }

    static updateTemps(unit) {
        let currentTemp = tempElement.querySelector('h1');
        currentTemp.innerHTML = Math.round(Util.convertTemp(currentTemp.innerHTML, unit));
        tempElement.querySelector("span").innerHTML = '°' + Controller.unit;

        dewpointElement.innerHTML = Math.round(Util.convertTemp(dewpointElement.innerHTML.replace('°', ''), unit))+'°';

        document.querySelectorAll('.hour-temp').forEach(temp => {
            temp.innerHTML = Math.round(Util.convertTemp(temp.innerHTML.replace('°', ''), unit))+'°';
        });

        document.querySelectorAll('.day-temp').forEach(temp => {
            temp.firstChild.innerHTML = Math.round(Util.convertTemp(temp.firstChild.innerHTML.replace('°', ''), unit))+'°';
            temp.lastChild.innerHTML = Math.round(Util.convertTemp(temp.lastChild.innerHTML.replace('°', ''), unit))+'°';
        });

        unitToggle.querySelector('.f').classList.toggle('active');
        unitToggle.querySelector('.c').classList.toggle('active');
    }
}