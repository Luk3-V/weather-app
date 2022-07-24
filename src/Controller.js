import View from "./View";

const WeatherAPPID = 'da27f8f94c858f37e7594ed4b936b4ee';
var pexelsHeaders = new Headers();
pexelsHeaders.append("Authorization", "563492ad6f9170000100000144b4d9c9d3f4468584121dd0da47ab4c");

let unit = 'F'; 

export default class Controller {
    static load() {
        View.load();
        Controller.queryWeather('Houston');
    }

    static async getLocation(location) {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let result = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${WeatherAPPID}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    
        return result;
    }
    
    static async getWeather(lat, lon, units) {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,alerts&lat=${lat}&lon=${lon}&units=${units}&appid=${WeatherAPPID}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    
        return result;
    }

    static async getImage(query) {
        let requestOptions = {
            method: 'GET',
            headers: pexelsHeaders,
            redirect: 'follow'
        };
        let result = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=5&orientation=landscape`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    
        return result;
    }
    
    static queryWeatherEvent(e) {
        e.preventDefault()
        Controller.queryWeather(e.target.location.value);
    }

    static async queryWeather(location) {
        let locationData = await Controller.getLocation(location);
        let weatherData = await Controller.getWeather(locationData[0].lat, locationData[0].lon, 'imperial');
        console.log(weatherData);
        let imageData = await Controller.getImage(weatherData.current.weather[0].main + ' sky');
        console.log(imageData);
        let imageUrl = imageData.photos[0].src.original;
        console.log(imageUrl);
        View.showAll(location, weatherData, imageUrl);
    }

    static get unit() {
        return unit;
    }

    static toggleUnitEvent() {
        if(unit == 'F') 
            unit = 'C';
        else   
            unit = 'F';
        View.updateTemps(unit);
    }
}