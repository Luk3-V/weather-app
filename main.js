/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fromUnixTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Number} unixTime - the given Unix timestamp (in seconds)\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * const result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\n\nfunction fromUnixTime(dirtyUnixTime) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyUnixTime);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(unixTime * 1000);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/getTime/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getTime/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name getTime\n * @category Timestamp Helpers\n * @summary Get the milliseconds timestamp of the given date.\n *\n * @description\n * Get the milliseconds timestamp of the given date.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the given date\n * @returns {Number} the timestamp\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Get the timestamp of 29 February 2012 11:45:05.123:\n * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))\n * //=> 1330515905123\n */\n\nfunction getTime(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var timestamp = date.getTime();\n  return timestamp;\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/getTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/getUnixTime/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/getUnixTime/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getUnixTime)\n/* harmony export */ });\n/* harmony import */ var _getTime_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getTime/index.js */ \"./node_modules/date-fns/esm/getTime/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name getUnixTime\n * @category Timestamp Helpers\n * @summary Get the seconds timestamp of the given date.\n *\n * @description\n * Get the seconds timestamp of the given date.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the given date\n * @returns {Number} the timestamp\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Get the timestamp of 29 February 2012 11:45:05 CET:\n * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))\n * //=> 1330512305\n */\n\nfunction getUnixTime(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return Math.floor((0,_getTime_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate) / 1000);\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/getUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weather-app/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ \"./src/View.js\");\n\r\n\r\nconst WeatherAPPID = 'da27f8f94c858f37e7594ed4b936b4ee';\r\n\r\nlet unit = 'F'; \r\nconst images = {\r\n    clear: \"https://images.unsplash.com/photo-1614945762371-4d12a35d2890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80\",\r\n    clouds: \"https://images.unsplash.com/photo-1509803874385-db7c23652552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80\",\r\n    rain: \"https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80\",\r\n    thunderstorm: \"https://images.unsplash.com/photo-1465799522714-8eb0e6fccf73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1613&q=80\",\r\n    drizzle: \"https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80\",\r\n    snow: \"https://images.unsplash.com/photo-1547754980-3df97fed72a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80\"\r\n};\r\n\r\nconst weatherIcons = {\r\n    '01d': 'fa-sun',\r\n    '02d': 'fa-cloud-sun',\r\n    '03d': 'fa-cloud',\r\n    '04d': 'fa-cloud',\r\n    '09d': 'fa-cloud-showers-heavy',\r\n    '10d': 'fa-cloud-sun-rain',\r\n    '11d': 'fa-cloud-bolt',\r\n    '13d': 'fa-snowflake',\r\n    '50d': 'fa-cloud-smog',\r\n    '01n': 'fa-moon',\r\n    '02n': 'fa-cloud-moon',\r\n    '03n': 'fa-cloud',\r\n    '04n': 'fa-cloud',\r\n    '09n': 'fa-cloud-showers-heavy',\r\n    '10n': 'fa-cloud-moon-rain',\r\n    '11n': 'fa-cloud-bolt',\r\n    '13n': 'fa-snowflake',\r\n    '50n': 'fa-cloud-smog'\r\n};\r\n\r\nclass Controller {\r\n    static load() {\r\n        _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load();\r\n        Controller.queryWeather('New York');\r\n    }\r\n\r\n    static async getLocation(location) {\r\n        let requestOptions = {\r\n            method: 'GET',\r\n            redirect: 'follow'\r\n        };\r\n        let result = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${WeatherAPPID}`, requestOptions)\r\n            .then(response => response.json())\r\n            .catch(error => console.log('error', error));\r\n    \r\n        return result;\r\n    }\r\n    \r\n    static async getWeather(lat, lon, units) {\r\n        let requestOptions = {\r\n            method: 'GET',\r\n            redirect: 'follow'\r\n        };\r\n        let result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,alerts&lat=${lat}&lon=${lon}&units=${units}&appid=${WeatherAPPID}`, requestOptions)\r\n            .then(response => response.json())\r\n            .catch(error => console.log('error', error));\r\n    \r\n        return result;\r\n    }\r\n\r\n    static getImage(query) {\r\n        if(query.toLowerCase() in images)\r\n           return images[query.toLowerCase()];\r\n        return images[\"clear\"];\r\n    }\r\n\r\n\r\n    static async queryWeather(location) {\r\n        let locationData = await Controller.getLocation(location);\r\n        let weatherData = await Controller.getWeather(locationData[0].lat, locationData[0].lon, 'imperial');\r\n        let imageUrl = Controller.getImage(weatherData.current.weather[0].main);\r\n        Controller.saveToStorage(\"WEATHER\", weatherData);\r\n        _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showAll(location, weatherData, unit, imageUrl);\r\n    }\r\n\r\n    static saveToStorage(name, data) {\r\n        localStorage.setItem(name, JSON.stringify(data));\r\n    }\r\n\r\n    static getFromStorage(name) {\r\n        return JSON.parse(localStorage.getItem(name));\r\n    }\r\n\r\n    static getWeatherIcon(id) {\r\n        return weatherIcons[id];\r\n    }\r\n\r\n    // ------ EVENTS -----\r\n\r\n    static queryWeatherEvent(e) {\r\n        e.preventDefault()\r\n        Controller.queryWeather(e.target.location.value);\r\n    }\r\n\r\n    static toggleUnitEvent(e) {\r\n        if(unit == 'F') \r\n            unit = 'C';\r\n        else   \r\n            unit = 'F';\r\n        _View__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateTemps(unit);\r\n    }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/Controller.js?");

/***/ }),

/***/ "./src/Util.js":
/*!*********************!*\
  !*** ./src/Util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Util)\n/* harmony export */ });\n/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/fromUnixTime */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n/* harmony import */ var date_fns_getUnixTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/getUnixTime */ \"./node_modules/date-fns/esm/getUnixTime/index.js\");\n\r\n\r\n\r\nclass Util {\r\n    static getDateTimeString(dt, timezone) {\r\n        let dtObj;\r\n        if(dt)\r\n            dtObj = (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dt + timezone);\r\n        else\r\n            dtObj = (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,date_fns_getUnixTime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new Date()) + timezone);\r\n        let date = Util.formatDate(dtObj);\r\n        let time = Util.formatTime(dtObj);\r\n\r\n        return {date, time};\r\n    }\r\n\r\n    static getDayOfWeek(dt, timezone) {\r\n        let dtObj;\r\n        if(dt)\r\n            dtObj = (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dt + timezone);\r\n        else\r\n            dtObj = (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,date_fns_getUnixTime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new Date()) + timezone);\r\n\r\n        let day = dtObj.getUTCDay();\r\n        switch(day){\r\n            case 0: return 'Sun';\r\n            case 1: return 'Mon';\r\n            case 2: return 'Tue';\r\n            case 3: return 'Wed';\r\n            case 4: return 'Thu';\r\n            case 5: return 'Fri';\r\n            case 6: return 'Sat';\r\n        }\r\n        return;\r\n    }\r\n\r\n    static getDayOfMonth(dt, timezone) {\r\n        let dtObj;\r\n        if(dt)\r\n            dtObj = (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dt + timezone);\r\n        else\r\n            dtObj = (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,date_fns_getUnixTime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(new Date()) + timezone);\r\n\r\n        let day = dtObj.getUTCDate();\r\n        return day;\r\n    }\r\n\r\n    static formatDate(dtObj) {\r\n        let date = dtObj.toUTCString().substring(0, Util.nthIndexOf(dtObj.toUTCString(), ' ', 4));\r\n\r\n        return date;\r\n    }\r\n\r\n    static formatTime(dtObj) {\r\n        let time = dtObj.toUTCString().substring(Util.nthIndexOf(dtObj.toUTCString(), ' ', 4), Util.nthIndexOf(dtObj.toUTCString(), ' ', 5));\r\n        let [hour, min, sec] = time.split(':');\r\n        let ampm;\r\n\r\n        hour = parseInt(hour);\r\n        if(hour < 12) {\r\n            ampm = 'AM';\r\n            if(hour == 0)\r\n                hour = 12;\r\n        } else {\r\n            ampm = 'PM';\r\n            if(hour != 12)\r\n                hour -= 12;\r\n        }\r\n\r\n        return hour + \":\" + min + \" \" + ampm;\r\n    }\r\n\r\n    static toCelcius(temp) {\r\n        return (temp - 32) / 1.8;\r\n    }\r\n\r\n    static nthIndexOf(str, char, n) {\r\n        return str.split(char).slice(0, n).join(char).length;\r\n    }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/Util.js?");

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ \"./src/Util.js\");\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller */ \"./src/Controller.js\");\n\r\n\r\n\r\nconst queryForm = document.querySelector(\".query\");\r\nconst unitToggle = document.querySelector(\".unit-toggle\");\r\n\r\nconst imageElement = document.querySelector(\".current > img\");\r\nconst iconElement = document.querySelector(\".current-icon\");\r\nconst locationElement = document.querySelector(\".location\");\r\nconst skyElement = document.querySelector(\".sky\");\r\nconst tempElement = document.querySelector(\".temp\");\r\nconst feelsElement = document.querySelector(\".feels\");\r\nconst timeElement = document.querySelector(\".time\");\r\nconst dateElement = document.querySelector(\".date\");\r\n\r\nconst windElement = document.querySelector(\".wind\");\r\nconst rainElement = document.querySelector(\".rain\");\r\nconst precipitationElement = document.querySelector(\".precipitation\");\r\nconst visibilityElement = document.querySelector(\".visibility\");\r\nconst humidityElement = document.querySelector(\".humidity\");\r\nconst dewpointElement = document.querySelector(\".dew-point\");\r\nconst pressureElement = document.querySelector(\".pressure\");\r\nconst uvElement = document.querySelector(\".uv-index\");\r\n\r\nconst hourlyList = document.querySelector(\".hourly > div\");\r\nconst dailyList = document.querySelector(\".daily > div\");\r\n\r\n\r\nclass View {\r\n    static load() {\r\n        queryForm.onsubmit = _Controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].queryWeatherEvent;\r\n        unitToggle.onclick = _Controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleUnitEvent;\r\n    }\r\n\r\n    static showAll(location, data, unit, imageUrl) {\r\n        View.showCurrentWeather(location, data, unit, imageUrl);\r\n        View.showHourlyWeather(data, unit);\r\n        View.showDailyWeather(data, unit);\r\n    }\r\n\r\n    static showCurrentWeather(location, data, unit, imageUrl) {\r\n        let dt = _Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDateTimeString(null, data.timezone_offset);\r\n\r\n        locationElement.innerHTML = '' + location.charAt(0).toUpperCase() + location.substring(1);\r\n        dateElement.innerHTML = dt.date;\r\n        timeElement.innerHTML = dt.time;\r\n        iconElement.classList = 'current-icon fa-solid ' + _Controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getWeatherIcon(data.current.weather[0].icon);\r\n        skyElement.innerHTML = data.current.weather[0].main;\r\n        if(unit == 'C')\r\n            tempElement.innerHTML = `<h1>${Math.round(_Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toCelcius(data.current.temp))}</h1><span>°${unit}</span>`;\r\n        else\r\n            tempElement.innerHTML = `<h1>${Math.round(data.current.temp)}</h1><span>°${unit}</span>`;\r\n        feelsElement.innerHTML = 'Feels Like: ' + data.current.feels_like + '°';\r\n    \r\n        windElement.innerHTML = data.current.wind_speed + ' mph';\r\n        rainElement.innerHTML = (data.hourly[0].rain ? Math.round(data.hourly[0].rain) : 0) + '%';\r\n        precipitationElement.innerHTML = (data.hourly[0].precipitation ? Math.round(data.hourly[0].precipitation) : 0) + ' in';\r\n        visibilityElement.innerHTML = data.current.visibility + ' mi';\r\n        humidityElement.innerHTML = data.current.humidity + '%';\r\n        if(unit == 'C')\r\n            dewpointElement.innerHTML = Math.round(_Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toCelcius(data.current.dew_point)) + '°';\r\n        else   \r\n            dewpointElement.innerHTML = Math.round(data.current.dew_point) + '°';\r\n        pressureElement.innerHTML = data.current.pressure + ' inHg';\r\n        uvElement.innerHTML = data.current.uvi + ' of 10';\r\n\r\n        imageElement.setAttribute('src', imageUrl);\r\n    }\r\n\r\n    static showHourlyWeather(data, unit) {\r\n        hourlyList.innerHTML = '';\r\n        data.hourly.forEach((hour, index) => {\r\n            if(index == 0 || index >= 12)\r\n                return;\r\n\r\n            let dt = _Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDateTimeString(hour.dt, data.timezone_offset);\r\n            let hourTemp = Math.round(hour.temp);\r\n            if(unit == 'C')\r\n                hourTemp = Math.round(_Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toCelcius(hour.temp));\r\n\r\n            let listItem = document.createElement('div');\r\n            listItem.classList.add('hour');\r\n            listItem.innerHTML = `\r\n            <span>${dt.time.replace(dt.time.substring(dt.time.indexOf(':'), dt.time.indexOf(' ')), '')}</span>\r\n            <span class='hour-temp'>${hourTemp}°</span>\r\n            <i class=\"fa-solid ${_Controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getWeatherIcon(hour.weather[0].icon)}\"></i>\r\n            <span class=\"hour-rain\"><i class=\"fa-solid fa-droplet\"></i> ${hour.rain ? Math.round(hour.rain) : 0}%</span>`;\r\n\r\n            hourlyList.appendChild(listItem);\r\n        });\r\n    }\r\n\r\n    static showDailyWeather(data, unit) {\r\n        dailyList.innerHTML = '';\r\n        data.daily.forEach((day, index) => {\r\n            if(index == 0)\r\n                return;\r\n\r\n            let dayOfWeek = _Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDayOfWeek(day.dt, data.timezone_offset);\r\n            let dayOfMonth = _Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDayOfMonth(day.dt, data.timezone_offset);\r\n            let dayTemp = Math.round(day.temp.day);\r\n            let nightTemp = Math.round(day.temp.night);\r\n            if(unit == 'C'){\r\n                dayTemp = Math.round(_Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toCelcius(day.temp.day));\r\n                nightTemp = Math.round(_Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toCelcius(day.temp.night));\r\n            }\r\n                \r\n            let listItem = document.createElement('div');\r\n            listItem.classList.add('day');\r\n            listItem.innerHTML = `\r\n            <span class=\"day-of-week\">${dayOfWeek} ${dayOfMonth}</span>\r\n            <span class=\"day-temp\"><span>${dayTemp}°</span>/<span>${nightTemp}°</span></span>\r\n            <div class=\"weather\"><i class=\"fa-solid ${_Controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getWeatherIcon(day.weather[0].icon)}\"></i><span>${day.weather[0].main}</span></div>\r\n            <span class=\"rain\"><i class=\"fa-solid fa-droplet\"></i> ${day.rain ? Math.round(day.rain) : 0}%</span>\r\n            <span class=\"rain\"><i class=\"fa-solid fa-wind\"></i> ${Math.round(day.wind_speed)}mph</span>`;\r\n\r\n            dailyList.appendChild(listItem);\r\n        });\r\n    }\r\n\r\n    static updateTemps(unit) {\r\n        let data = _Controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFromStorage(\"WEATHER\");\r\n\r\n        tempElement.querySelector('h1').innerHTML = Math.round(unit == 'C' ? _Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toCelcius(data.current.temp) : data.current.temp);\r\n        tempElement.querySelector(\"span\").innerHTML = '°' + unit;\r\n\r\n        dewpointElement.innerHTML = Math.round(unit == 'C' ? _Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toCelcius(data.current.dew_point) : data.current.dew_point) + '°';\r\n\r\n        document.querySelectorAll('.hour-temp').forEach((temp, i) => {\r\n            temp.innerHTML = Math.round(unit == 'C' ? _Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toCelcius(data.hourly[i+1].temp) : data.hourly[i+1].temp)+'°';\r\n        });\r\n\r\n        document.querySelectorAll('.day-temp').forEach((temp, i) => {\r\n            temp.firstChild.innerHTML = Math.round(unit == 'C' ? _Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toCelcius(data.daily[i+1].temp.day) : data.daily[i+1].temp.day)+'°';\r\n            temp.lastChild.innerHTML = Math.round(unit == 'C' ? _Util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toCelcius(data.daily[i+1].temp.night) : data.daily[i+1].temp.night)+'°';\r\n        });\r\n\r\n        unitToggle.querySelector('.f').classList.toggle('active');\r\n        unitToggle.querySelector('.c').classList.toggle('active');\r\n    }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/View.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ \"./src/Controller.js\");\n\r\n\r\n_Controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load();\r\n\r\n// OPTIONAL ADDITIONS:\r\n// use current location\r\n// hourly & daily line graph\r\n// better image loading\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;