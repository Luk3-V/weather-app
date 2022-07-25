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

    static showAll(location, data, unit, imageUrl) {
        View.showCurrentWeather(location, data, unit, imageUrl);
        View.showHourlyWeather(data, unit);
        View.showDailyWeather(data, unit);
    }

    static showCurrentWeather(location, data, unit, imageUrl) {
        let dt = Util.getDateTimeString(null, data.timezone_offset);

        locationElement.innerHTML = '' + location.charAt(0).toUpperCase() + location.substring(1);
        dateElement.innerHTML = dt.date;
        timeElement.innerHTML = dt.time;
        skyElement.innerHTML = data.current.weather[0].main;
        if(unit == 'C')
            tempElement.innerHTML = `<h1>${Math.round(Util.toCelcius(data.current.temp))}</h1><span>°${unit}</span>`;
        else
            tempElement.innerHTML = `<h1>${Math.round(data.current.temp)}</h1><span>°${unit}</span>`;
        feelsElement.innerHTML = 'Feels Like: ' + data.current.feels_like + '°';
    
        windElement.innerHTML = data.current.wind_speed + ' mph';
        rainElement.innerHTML = (data.hourly[0].rain ? Math.round(data.hourly[0].rain) : 0) + '%';
        precipitationElement.innerHTML = (data.hourly[0].precipitation ? Math.round(data.hourly[0].precipitation) : 0) + ' in';
        visibilityElement.innerHTML = data.current.visibility + ' mi';
        humidityElement.innerHTML = data.current.humidity + '%';
        if(unit == 'C')
            dewpointElement.innerHTML = Math.round(Util.toCelcius(data.current.dew_point)) + '°';
        else   
            dewpointElement.innerHTML = Math.round(data.current.dew_point) + '°';
        pressureElement.innerHTML = data.current.pressure + ' inHg';
        uvElement.innerHTML = data.current.uvi + ' of 10';

        imageElement.setAttribute('src', imageUrl);
    }

    static showHourlyWeather(data, unit) {
        hourlyList.innerHTML = '';
        data.hourly.forEach((hour, index) => {
            if(index == 0 || index >= 12)
                return;

            let dt = Util.getDateTimeString(hour.dt, data.timezone_offset);
            let hourTemp = Math.round(hour.temp);
            if(unit == 'C')
                hourTemp = Math.round(Util.toCelcius(hour.temp));

            let listItem = document.createElement('div');
            listItem.classList.add('hour');
            listItem.innerHTML = `
            <span>${dt.time.replace(dt.time.substring(dt.time.indexOf(':'), dt.time.indexOf(' ')), '')}</span>
            <span class='hour-temp'>${hourTemp}°</span>
            <i class="fa-solid ${Util.getWeatherIcon(hour.weather[0].icon)}"></i>
            <span class="hour-rain"><i class="fa-solid fa-droplet"></i> ${hour.rain ? Math.round(hour.rain) : 0}%</span>`;

            hourlyList.appendChild(listItem);
        });
    }

    static showDailyWeather(data, unit) {
        dailyList.innerHTML = '';
        data.daily.forEach((day, index) => {
            if(index == 0)
                return;

            let dayOfWeek = Util.getDayOfWeek(day.dt, data.timezone_offset);
            let dayOfMonth = Util.getDayOfMonth(day.dt, data.timezone_offset);
            let dayTemp = Math.round(day.temp.day);
            let nightTemp = Math.round(day.temp.night);
            if(unit == 'C'){
                dayTemp = Math.round(Util.toCelcius(day.temp.day));
                nightTemp = Math.round(Util.toCelcius(day.temp.night));
            }
                
            let listItem = document.createElement('div');
            listItem.classList.add('day');
            listItem.innerHTML = `
            <span class="day-of-week">${dayOfWeek} ${dayOfMonth}</span>
            <span class="day-temp"><span>${dayTemp}°</span>/<span>${nightTemp}°</span></span>
            <div class="weather"><i class="fa-solid ${Util.getWeatherIcon(day.weather[0].icon)}"></i><span>${day.weather[0].main}</span></div>
            <span class="rain"><i class="fa-solid fa-droplet"></i> ${day.rain ? Math.round(day.rain) : 0}%</span>
            <span class="rain"><i class="fa-solid fa-wind"></i> ${Math.round(day.wind_speed)}mph</span>`;

            dailyList.appendChild(listItem);
        });
    }

    static updateTemps(unit) {
        let data = Controller.getFromStorage("WEATHER");

        tempElement.querySelector('h1').innerHTML = Math.round(unit == 'C' ? Util.toCelcius(data.current.temp) : data.current.temp);
        tempElement.querySelector("span").innerHTML = '°' + unit;

        dewpointElement.innerHTML = Math.round(unit == 'C' ? Util.toCelcius(data.current.dew_point) : data.current.dew_point) + '°';

        document.querySelectorAll('.hour-temp').forEach((temp, i) => {
            temp.innerHTML = Math.round(unit == 'C' ? Util.toCelcius(data.hourly[i+1].temp) : data.hourly[i+1].temp)+'°';
        });

        document.querySelectorAll('.day-temp').forEach((temp, i) => {
            temp.firstChild.innerHTML = Math.round(unit == 'C' ? Util.toCelcius(data.daily[i+1].temp.day) : data.daily[i+1].temp.day)+'°';
            temp.lastChild.innerHTML = Math.round(unit == 'C' ? Util.toCelcius(data.daily[i+1].temp.night) : data.daily[i+1].temp.night)+'°';
        });

        unitToggle.querySelector('.f').classList.toggle('active');
        unitToggle.querySelector('.c').classList.toggle('active');
    }
}