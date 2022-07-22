import View from "./View";

const APPID = 'da27f8f94c858f37e7594ed4b936b4ee';

async function getLocation(location) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let result = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${APPID}`, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));

    return result;
}

async function getWeather(lat, lon, units) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,alerts&lat=${lat}&lon=${lon}&units=${units}&appid=${APPID}`, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));

    return result;
}

async function queryWeather(location) {
    let locationData = await getLocation(location);
    let weatherData = await getWeather(locationData[0].lat, locationData[0].lon, 'imperial');
    console.log(weatherData);
    View.showCurrentWeather(location, weatherData);
    View.showDailyWeather(weatherData);

}

queryWeather('Houston');







// TODO:
// current stats ----------
// current time ----------

// dynamic icons
// hourly stats
// daily stats
// search location
// use current location
// dynamic BG
// hourly & daily graph
// extra stats
// toggle c/f
