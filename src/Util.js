import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';

export default class Util {
    static getDateTimeString(dt, timezone) {
        let dtObj;
        if(dt)
            dtObj = fromUnixTime(dt + timezone);
        else
            dtObj = fromUnixTime(getUnixTime(new Date()) + timezone);
        let date = Util.formatDate(dtObj);
        let time = Util.formatTime(dtObj);

        return {date, time};
    }

    static getDayOfWeek(dt, timezone) {
        let dtObj;
        if(dt)
            dtObj = fromUnixTime(dt + timezone);
        else
            dtObj = fromUnixTime(getUnixTime(new Date()) + timezone);

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
            dtObj = fromUnixTime(getUnixTime(new Date()) + timezone);

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

    static nthIndexOf(str, char, n) {
        return str.split(char).slice(0, n).join(char).length;
    }
}