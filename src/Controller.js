import View from "./View";

const WeatherAPPID = 'da27f8f94c858f37e7594ed4b936b4ee';

let unit = 'F'; 
const images = {
    clear: "https://images.unsplash.com/photo-1614945762371-4d12a35d2890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    clouds: "https://images.unsplash.com/photo-1509803874385-db7c23652552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rain: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
    thunderstorm: "https://images.unsplash.com/photo-1465799522714-8eb0e6fccf73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1613&q=80",
    drizzle: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80",
    snow: "https://images.unsplash.com/photo-1547754980-3df97fed72a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
};

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
        let result = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${WeatherAPPID}`, requestOptions)
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

    static getImage(query) {
        console.log(query.toLowerCase());
        if(query.toLowerCase() in images)
           return images[query.toLowerCase()];
        return images["clear"];
    }


    static async queryWeather(location) {
        let locationData = await Controller.getLocation(location);
        let weatherData = await Controller.getWeather(locationData[0].lat, locationData[0].lon, 'imperial');
        let imageUrl = Controller.getImage(weatherData.current.weather[0].main);
        console.log(weatherData);
        Controller.saveToStorage("WEATHER", weatherData);
        View.showAll(location, weatherData, unit, imageUrl);
    }

    static saveToStorage(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    static getFromStorage(name) {
        return JSON.parse(localStorage.getItem(name));
    }

    // ------ EVENTS -----

    static queryWeatherEvent(e) {
        e.preventDefault()
        Controller.queryWeather(e.target.location.value);
    }

    static toggleUnitEvent(e) {
        if(unit == 'F') 
            unit = 'C';
        else   
            unit = 'F';
        View.updateTemps(unit);
    }
}