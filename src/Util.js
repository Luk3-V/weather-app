import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
const { format } = require("date-fns")

const weatherIcons = {
    '01d': 'fa-sun',
    '02d': 'fa-cloud-sun',
    '03d': 'fa-cloud',
    '04d': 'fa-cloud',
    '09d': 'fa-cloud-showers-heavy',
    '10d': 'fa-cloud-sun-rain',
    '11d': 'fa-cloud-bolt',
    '13d': 'fa-snowflake',
    '50d': 'fa-cloud-smog',
    '01n': 'fa-moon',
    '02n': 'fa-cloud-moon',
    '03n': 'fa-cloud',
    '04n': 'fa-cloud',
    '09n': 'fa-cloud-showers-heavy',
    '10n': 'fa-cloud-moon-rain',
    '11n': 'fa-cloud-bolt',
    '13n': 'fa-snowflake',
    '50n': 'fa-cloud-smog'
};

export default class Util {
    static getDateTimeString(dt, timezone) {
        let dtObj;
        if(dt)
            dtObj = fromUnixTime(dt + timezone);
        else
            dtObj = fromUnixTime(getUnixTime(new Date()) + timezone - 7200); // need to sub 2 hrs for some reason
        let date = Util.formatDate(dtObj);
        let time = Util.formatTime(dtObj);

        return {date, time};
    }

    static getDayOfWeek(dt, timezone) {
        let dtObj;
        if(dt)
            dtObj = fromUnixTime(dt + timezone);
        else
            dtObj = fromUnixTime(getUnixTime(new Date()) + timezone - 7200);

        let day = dtObj.getUTCDay();
        switch(day){
            case 0: return 'Sun';
            case 1: return 'Mon';
            case 2: return 'Tue';
            case 3: return 'Wed';
            case 4: return 'Thu';
            case 5: return 'Fri';
            case 6: return 'Sat';
        }
        return;
    }

    static getDayOfMonth(dt, timezone) {
        let dtObj;
        if(dt)
            dtObj = fromUnixTime(dt + timezone);
        else
            dtObj = fromUnixTime(getUnixTime(new Date()) + timezone - 7200);

        let day = dtObj.getUTCDate();
        return day;
    }

    static formatDate(dtObj) {
        let date = dtObj.toUTCString().substring(0, Util.nthIndexOf(dtObj.toUTCString(), ' ', 4));

        return date;
    }

    static formatTime(dtObj) {
        let time = dtObj.toUTCString().substring(Util.nthIndexOf(dtObj.toUTCString(), ' ', 4), Util.nthIndexOf(dtObj.toUTCString(), ' ', 5));
        let [hour, min, sec] = time.split(':');
        let ampm;

        hour = parseInt(hour);
        if(hour < 12) {
            ampm = 'AM';
            if(hour == 0)
                hour = 12;
        } else {
            ampm = 'PM';
            if(hour != 12)
                hour -= 12;
        }

        return hour + ":" + min + " " + ampm;
    }

    static toCelcius(temp) {
        return (temp - 32) / 1.8;
    }

    static getWeatherIcon(id) {
        return weatherIcons[id];
    }

    static nthIndexOf(str, char, n) {
        return str.split(char).slice(0, n).join(char).length;
    }
}