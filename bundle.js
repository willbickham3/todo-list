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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --primary-dark: #333;\n  --secondary-dark: #444;\n  --primary-light: #eee;\n  --secondary-light: #ddd;\n  }\n\n  html, body {\n    height: 100%;\n    padding: 0;\n    margin: 0;\n  }\n\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n\n  header {\n    background-color: var(--primary-dark);\n    width: 100%;\n    height: 15%;\n  }\n\n  .main-container {\n    background-color: var(--primary-light);\n    width: 100%;\n    height: 70%;\n    display: flex;\n  }\n\n  .nav {\n    box-sizing: border-box;\n    background-color: var(--secondary-light);\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    font-size: 1.4em;\n  }\n\n  .project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n  }\n\n  .make-a-project {\n    font-size: 1em;\n    border-radius: 5px;\n  }\n\n  .project {\n    font-size: 0.8em;\n    width: 150px;\n    border-radius: 5px;\n  }\n\n  .to-do-container {\n    background-color: var(--vibrant-cyan);\n    width: 100%;\n    padding: 20px;\n    gap: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .to-do-container > fieldset, .to-do-list {\n    width: 70%;\n  }\n\n  fieldset {\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n  }\n\n  .taskInput {\n    border-radius: 5px;\n    font-size: 1.2em;\n    width: 400px;\n  }\n\n  .dateInput {\n\n  }\n\n  select {\n    width: 150px;\n  }\n\n  .add-task {\n    border-radius: 6px;\n  }\n\n  .to-do-list {\n    color: var(--secondary-dark);\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    gap: 10px;\n  }\n\n  .task {\n    display: grid;\n    grid-template-columns: 5fr 2fr 1fr;\n    font-size: 1.5em;\n    padding: 10px;\n    background-color: var(--secondary-light);\n    border: 2px solid var(--secondary-dark);\n    border-radius: 9px;\n    column-gap: 10px;\n  }\n\n  .task button {\n    border-radius: 5px;\n    cursor: pointer;\n  }\n\n  .task div {\n    cursor: pointer;\n  }\n\n  footer {\n    background-color: var(--primary-dark);\n    width: 100%;\n    height: 15%;\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));\n  utcDate.setUTCFullYear(date.getFullYear());\n  return date.getTime() - utcDate.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRoundingMethod: () => (/* binding */ getRoundingMethod)\n/* harmony export */ });\nvar roundingMap = {\n  ceil: Math.ceil,\n  round: Math.round,\n  floor: Math.floor,\n  trunc: function trunc(value) {\n    return value < 0 ? Math.ceil(value) : Math.floor(value);\n  } // Math.trunc is not supported by IE\n};\n\nvar defaultRoundingMethod = 'trunc';\nfunction getRoundingMethod(method) {\n  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/roundingMethods/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),\n/* harmony export */   daysInYear: () => (/* binding */ daysInYear),\n/* harmony export */   maxTime: () => (/* binding */ maxTime),\n/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),\n/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),\n/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),\n/* harmony export */   minTime: () => (/* binding */ minTime),\n/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),\n/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),\n/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),\n/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),\n/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),\n/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),\n/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),\n/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),\n/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),\n/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),\n/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * Days in 1 week.\n *\n * @name daysInWeek\n * @constant\n * @type {number}\n * @default\n */\nvar daysInWeek = 7;\n\n/**\n * Days in 1 year\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n *\n * @name daysInYear\n * @constant\n * @type {number}\n * @default\n */\nvar daysInYear = 365.2425;\n\n/**\n * Maximum allowed time.\n *\n * @name maxTime\n * @constant\n * @type {number}\n * @default\n */\nvar maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n\n/**\n * Milliseconds in 1 minute\n *\n * @name millisecondsInMinute\n * @constant\n * @type {number}\n * @default\n */\nvar millisecondsInMinute = 60000;\n\n/**\n * Milliseconds in 1 hour\n *\n * @name millisecondsInHour\n * @constant\n * @type {number}\n * @default\n */\nvar millisecondsInHour = 3600000;\n\n/**\n * Milliseconds in 1 second\n *\n * @name millisecondsInSecond\n * @constant\n * @type {number}\n * @default\n */\nvar millisecondsInSecond = 1000;\n\n/**\n * Minimum allowed time.\n *\n * @name minTime\n * @constant\n * @type {number}\n * @default\n */\nvar minTime = -maxTime;\n\n/**\n * Minutes in 1 hour\n *\n * @name minutesInHour\n * @constant\n * @type {number}\n * @default\n */\nvar minutesInHour = 60;\n\n/**\n * Months in 1 quarter\n *\n * @name monthsInQuarter\n * @constant\n * @type {number}\n * @default\n */\nvar monthsInQuarter = 3;\n\n/**\n * Months in 1 year\n *\n * @name monthsInYear\n * @constant\n * @type {number}\n * @default\n */\nvar monthsInYear = 12;\n\n/**\n * Quarters in 1 year\n *\n * @name quartersInYear\n * @constant\n * @type {number}\n * @default\n */\nvar quartersInYear = 4;\n\n/**\n * Seconds in 1 hour\n *\n * @name secondsInHour\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInHour = 3600;\n\n/**\n * Seconds in 1 minute\n *\n * @name secondsInMinute\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInMinute = 60;\n\n/**\n * Seconds in 1 day\n *\n * @name secondsInDay\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInDay = secondsInHour * 24;\n\n/**\n * Seconds in 1 week\n *\n * @name secondsInWeek\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInWeek = secondsInDay * 7;\n\n/**\n * Seconds in 1 year\n *\n * @name secondsInYear\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInYear = secondsInDay * daysInYear;\n\n/**\n * Seconds in 1 month\n *\n * @name secondsInMonth\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInMonth = secondsInYear / 12;\n\n/**\n * Seconds in 1 quarter\n *\n * @name secondsInQuarter\n * @constant\n * @type {number}\n * @default\n */\nvar secondsInQuarter = secondsInMonth * 3;\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/constants/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ differenceInCalendarDays)\n/* harmony export */ });\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ \"./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js\");\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\nvar MILLISECONDS_IN_DAY = 86400000;\n\n/**\n * @name differenceInCalendarDays\n * @category Day Helpers\n * @summary Get the number of calendar days between the given dates.\n *\n * @description\n * Get the number of calendar days between the given dates. This means that the times are removed\n * from the dates and then the difference in days is calculated.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of calendar days\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many calendar days are between\n * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?\n * const result = differenceInCalendarDays(\n *   new Date(2012, 6, 2, 0, 0),\n *   new Date(2011, 6, 2, 23, 0)\n * )\n * //=> 366\n * // How many calendar days are between\n * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?\n * const result = differenceInCalendarDays(\n *   new Date(2011, 6, 3, 0, 1),\n *   new Date(2011, 6, 2, 23, 59)\n * )\n * //=> 1\n */\nfunction differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(startOfDayLeft);\n  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(startOfDayRight);\n\n  // Round the number of days to the nearest integer\n  // because the number of milliseconds in a day is not constant\n  // (e.g. it's different in the day of the daylight saving time clock shift)\n  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/differenceInCalendarDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInDays/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ differenceInDays)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ \"./node_modules/date-fns/esm/differenceInCalendarDays/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n // Like `compareAsc` but uses local time not UTC, which is needed\n// for accurate equality comparisons of UTC timestamps that end up\n// having the same representation in local time, e.g. one hour before\n// DST ends vs. the instant that DST ends.\nfunction compareLocalAsc(dateLeft, dateRight) {\n  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1;\n    // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n/**\n * @name differenceInDays\n * @category Day Helpers\n * @summary Get the number of full days between the given dates.\n *\n * @description\n * Get the number of full day periods between two dates. Fractional days are\n * truncated towards zero.\n *\n * One \"full day\" is the distance between a local time in one day to the same\n * local time on the next or previous day. A full day can sometimes be less than\n * or more than 24 hours if a daylight savings change happens between two dates.\n *\n * To ignore DST and only measure exact 24-hour periods, use this instead:\n * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.\n *\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of full days according to the local timezone\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many full days are between\n * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?\n * const result = differenceInDays(\n *   new Date(2012, 6, 2, 0, 0),\n *   new Date(2011, 6, 2, 23, 0)\n * )\n * //=> 365\n * // How many full days are between\n * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?\n * const result = differenceInDays(\n *   new Date(2011, 6, 3, 0, 1),\n *   new Date(2011, 6, 2, 23, 59)\n * )\n * //=> 0\n * // How many full days are between\n * // 1 March 2020 0:00 and 1 June 2020 0:00 ?\n * // Note: because local time is used, the\n * // result will always be 92 days, even in\n * // time zones where DST starts and the\n * // period has only 92*24-1 hours.\n * const result = differenceInDays(\n *   new Date(2020, 5, 1),\n *   new Date(2020, 2, 1)\n * )\n//=> 92\n */\nfunction differenceInDays(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var sign = compareLocalAsc(dateLeft, dateRight);\n  var difference = Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dateLeft, dateRight));\n  dateLeft.setDate(dateLeft.getDate() - sign * difference);\n\n  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full\n  // If so, result must be decreased by 1 in absolute value\n  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);\n  var result = sign * (difference - isLastDayNotFull);\n  // Prevent negative zero\n  return result === 0 ? 0 : result;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/differenceInDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInHours/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInHours/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ differenceInHours)\n/* harmony export */ });\n/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ \"./node_modules/date-fns/esm/constants/index.js\");\n/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ \"./node_modules/date-fns/esm/differenceInMilliseconds/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ \"./node_modules/date-fns/esm/_lib/roundingMethods/index.js\");\n\n\n\n\n/**\n * @name differenceInHours\n * @category Hour Helpers\n * @summary Get the number of hours between the given dates.\n *\n * @description\n * Get the number of hours between the given dates.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @param {Object} [options] - an object with options.\n * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)\n * @returns {Number} the number of hours\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?\n * const result = differenceInHours(\n *   new Date(2014, 6, 2, 19, 0),\n *   new Date(2014, 6, 2, 6, 50)\n * )\n * //=> 12\n */\nfunction differenceInHours(dateLeft, dateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dateLeft, dateRight) / _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour;\n  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/differenceInHours/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ differenceInMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name differenceInMilliseconds\n * @category Millisecond Helpers\n * @summary Get the number of milliseconds between the given dates.\n *\n * @description\n * Get the number of milliseconds between the given dates.\n *\n * @param {Date|Number} dateLeft - the later date\n * @param {Date|Number} dateRight - the earlier date\n * @returns {Number} the number of milliseconds\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // How many milliseconds are between\n * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?\n * const result = differenceInMilliseconds(\n *   new Date(2014, 6, 2, 12, 30, 21, 700),\n *   new Date(2014, 6, 2, 12, 30, 20, 600)\n * )\n * //=> 1100\n */\nfunction differenceInMilliseconds(dateLeft, dateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dateRight).getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/differenceInMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/appLogic/populatePage.js":
/*!**************************************!*\
  !*** ./src/appLogic/populatePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getTasks: () => (/* binding */ getTasks)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/appLogic/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/appLogic/project.js\");\n\n\n\nfunction populatePage() {\n    getTasks();\n    projectAppender();\n}\n\n\nfunction getTasks() {\n    let retrievedTasks = localStorage.getItem('tasks');\n    if (retrievedTasks === null || retrievedTasks.length === 0) {\n        return\n    }\n    else {\n    retrievedTasks = JSON.parse(retrievedTasks);\n    retrievedTasks.forEach(tasks => {\n        let task = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](tasks.title, tasks.dueDate, tasks.project);\n        task.appendALittle();\n    })\n}\n}\n\nfunction projectAppender() {\n    let retrievedProjects = localStorage.getItem('projects');\n    if (retrievedProjects === null || retrievedProjects.length === 0) {\n        return\n    }\n    else {\n    retrievedProjects = JSON.parse(retrievedProjects);\n    retrievedProjects.forEach(project => {\n        let newProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](project);\n        newProject.projectSelector();\n        newProject.appendProject();\n    })}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populatePage);\n\n//# sourceURL=webpack://todo-list/./src/appLogic/populatePage.js?");

/***/ }),

/***/ "./src/appLogic/project.js":
/*!*********************************!*\
  !*** ./src/appLogic/project.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulation_elementCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulation/elementCreater */ \"./src/domManipulation/elementCreater.js\");\n/* harmony import */ var _domManipulation_tasklist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domManipulation/tasklist */ \"./src/domManipulation/tasklist.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/appLogic/task.js\");\n\n\n\n\nlet projects = [];\n\nclass Project {\n    constructor(projectID) {\n        this.projectName = projectID\n    }\n\n    appendProject() {\n        const projectName = (0,_domManipulation_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'project', `${this.projectName}`, `${this.projectName}`);\n        document.querySelector('.project-container').append(projectName);\n        projectName.addEventListener('click', () => {\n            let tasks = document.querySelectorAll('.task');\n            let taskManager = localStorage.getItem('tasks');\n            taskManager = JSON.parse(taskManager);\n            tasks.forEach(taskdiv => {\n                    taskdiv.remove();\n                \n            })\n            taskManager.forEach(element => {\n                let taskItem = new _task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](element.title, element.dueDate, element.project)\n                if (element.project === this.projectName) {\n                    taskItem.appendALittle();\n                }\n            })\n        })\n        return projectName\n    }\n\n    projectSelector() {\n        const projectmaker = document.querySelector('select');\n        const newOption = document.createElement('option');\n        const optionText = document.createTextNode(`${this.projectName}`);\n        newOption.appendChild(optionText);\n        projectmaker.appendChild(newOption);\n        return { projectmaker, newOption, optionText }\n    }\n\n    arrayPush() {\n        const storedProjects = localStorage.getItem('projects');\n        if (storedProjects) {\n            projects = JSON.parse(storedProjects)\n        }\n        projects.push(this.projectName);\n        localStorage.setItem('projects', JSON.stringify(projects));\n        console.log(projects)\n        return { storedProjects, projects }\n    }\n\n    projectStoring() {\n        let storeProjects = JSON.stringify(projects);\n        localStorage.setItem('projects', storeProjects);\n        return storeProjects\n    }\n\n    projectAppender() {\n        let retrievedProjects = localStorage.getItem('projects');\n        if (retrievedProjects) {\n            projects = JSON.parse(retrievedProjects);\n        }\n        projects.forEach(project => {\n            if (project.project === this.projectName) {\n                let newTask = new _task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](project.title, project.dueDate, project.project, project.priority);\n                newTask.appendALittle();\n            }\n        })\n    }\n\n    doAllTheThings() {\n        this.arrayPush();\n        this.appendProject();\n        this.projectSelector();\n        this.projectStoring();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/appLogic/project.js?");

/***/ }),

/***/ "./src/appLogic/task.js":
/*!******************************!*\
  !*** ./src/appLogic/task.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulation_elementCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulation/elementCreater */ \"./src/domManipulation/elementCreater.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/differenceInDays/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/differenceInHours/index.js\");\n\n\n\nlet taskManager = [];\n\nclass Task {\n    constructor(title, dueDate, project, priority) {\n        this.title = title;\n        this.dueDate = dueDate;\n        if (!project) {this.project == null}\n        this.project = project;\n        this.priority = priority;\n    }\n\n    \n        appendTitle() {\n            if (this.title.trim() === '') {\n                return\n            }\n            const taskDiv = (0,_domManipulation_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'task-name', null, `${this.title}`);\n            taskDiv.addEventListener('click', () => {\n                const newTitle = prompt('Update Task Name:', this.title);\n                if (newTitle !== null && newTitle.trim() !== '') {\n                    const index = taskManager.findIndex(task => task.title === this.title);\n                    taskManager[index].title = newTitle;\n                    this.title = newTitle;\n                    taskDiv.innerHTML = newTitle;\n                    this.localStoring();\n                }\n            })\n            return taskDiv\n        }\n\n        appendDate() {\n            const dueDateValue = (0,_domManipulation_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'due-date')\n\n            if (this.dueDate == '') {\n                dueDateValue.innerHTML = '';\n                return dueDateValue;\n            }\n\n            const today = new Date();\n            const formatDate = new Date(this.dueDate);\n            const dateDue = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(formatDate, today)\n            const hoursDifference = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(formatDate, today);\n\n            if (dateDue < 1) {\n                dueDateValue.innerHTML = `~${hoursDifference} Hours`;\n                return dueDateValue\n            }\n            else if (dateDue >= 2) {\n                dueDateValue.innerHTML = `Coming up in ~${dateDue} days`;\n                return dueDateValue\n            }\n            else {dueDateValue.innerHTML= `Coming up in ~${dateDue} day`;\n            return dueDateValue\n        }\n    }\n\n        titleChecker() {\n            let dupedTitle = taskManager.some(task => task.title === this.title);\n            if (dupedTitle) {\n                alert('Please choose different title!');\n            }\n            return !dupedTitle;\n        }\n\n        removeTask() {\n            const deleteBtn = (0,_domManipulation_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'delete', null, 'Remove Task');\n            deleteBtn.addEventListener('click', () => {\n                const parent = deleteBtn.parentElement;\n                parent.remove();\n                taskManager = taskManager.filter(task => !(task.title === this.title && task.dueDate === this.dueDate && task.project === this.project));\n                this.localStoring();\n            })\n            return deleteBtn\n        }\n\n        localStoring() {\n            const storedTasks = JSON.stringify(taskManager);\n            localStorage.setItem('tasks', storedTasks);\n            return storedTasks\n        }\n\n        // localRetrieval() {\n        //     if (taskManager) {\n        //     const retrievedTasks = JSON.parse(localStorage.getItem('tasks'));\n        //     return retrievedTasks \n        //     }\n        //     else {\n        //         return\n        //     }\n        // }\n\n        localClear() {\n            localStorage.clear();\n        }\n\n        appendALittle() {\n            const toDoList = document.querySelector('.to-do-list');\n            const projectName = (0,_domManipulation_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'project-name', null, `${this.project}`);\n            const taskList = (0,_domManipulation_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'task', `${this.project}`, null);\n            toDoList.appendChild(taskList);\n            taskList.append(this.appendTitle(), this.appendDate(), this.removeTask())\n        }\n        \n\n        appendItAll() {\n            if (taskManager) {\n                let taskManager = localStorage.getItem('tasks');\n                taskManager = JSON.parse(taskManager);\n            }\n            taskManager.push(this);\n            this.localStoring();\n            this.appendALittle();\n        \n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-list/./src/appLogic/task.js?");

/***/ }),

/***/ "./src/domManipulation/addATask.js":
/*!*****************************************!*\
  !*** ./src/domManipulation/addATask.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _appLogic_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/task */ \"./src/appLogic/task.js\");\n\n\nfunction addATask(button) {\n        button.addEventListener('click', () => {\n            let taskInput = document.querySelector('.taskInput');\n            let dateInput = document.querySelector('.dateInput');\n            let projectInput = document.querySelector('select');\n\n            const newTask = new _appLogic_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](taskInput.value, dateInput.value, projectInput.value);\n\n            if (taskInput.value == '') \n            {return}\n            taskInput.value = \"\";\n            dateInput.value = \"\";\n            newTask.appendItAll();\n})}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addATask);\n\n//# sourceURL=webpack://todo-list/./src/domManipulation/addATask.js?");

/***/ }),

/***/ "./src/domManipulation/elementCreater.js":
/*!***********************************************!*\
  !*** ./src/domManipulation/elementCreater.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// createAnElement takes 4 arguments (element that you want to create, class name, id (optional: can be set to null), string for innerHTML)\n\nfunction createAnElement(element, classList, id, string) {\n    const newEle = document.createElement(element);\n    newEle.classList.add(classList);\n    if (id) {\n        newEle.setAttribute('id', id);\n    }\n    newEle.innerHTML = string;\n\n    return newEle\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAnElement);\n\n//# sourceURL=webpack://todo-list/./src/domManipulation/elementCreater.js?");

/***/ }),

/***/ "./src/domManipulation/interface.js":
/*!******************************************!*\
  !*** ./src/domManipulation/interface.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elementCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreater */ \"./src/domManipulation/elementCreater.js\");\n/* harmony import */ var _taskcontainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskcontainer */ \"./src/domManipulation/taskcontainer.js\");\n/* harmony import */ var _todoboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoboard */ \"./src/domManipulation/todoboard.js\");\n/* harmony import */ var _tasklist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasklist */ \"./src/domManipulation/tasklist.js\");\n/* harmony import */ var _projectBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectBoard */ \"./src/domManipulation/projectBoard.js\");\n/* harmony import */ var _appLogic_populatePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../appLogic/populatePage */ \"./src/appLogic/populatePage.js\");\n// Import statements to import functions and components from other modules\n // Importing the createAnElement function from the 'elementCreater' module\n // Importing the 'taskcontainer' function from the 'taskcontainer' module\n // Importing the 'toDoBoard' function from the 'todoboard' module\n // Importing the 'tasklist' function from the 'tasklist' module\n // Importing the 'projectBoard' function from the 'projectBoard' module\n // Importing the 'populatePage' function from the 'appLogic/populatePage' module\n\nfunction interfaceGen() {\n    const documentBody = document.querySelector('body');\n\n    // Creating the main container element with a class 'main-container'\n    const mainContainer = (0,_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'main-container', null, null);\n\n    // Adding header and footer elements to the document body\n    documentBody.prepend((0,_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('header', 'header', null, null));\n    documentBody.append(mainContainer, (0,_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('footer', 'footer', null, null));\n\n    // Adding sub-containers 'nav' and 'to-do-container' to the main container\n    mainContainer.append((0,_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('nav', 'nav', 'sub-container', null), (0,_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'to-do-container', 'sub-container', null));\n\n\n    // Calling functions to populate the different sections of the interface\n    (0,_taskcontainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Populating the main body\n    (0,_projectBoard__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // Populates the project board section of the interface; Also establishes clickEvent for createProject button\n    (0,_tasklist__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // Handles creation of tasklist section of interface where the tasks are created and displayed\n    (0,_todoboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Creates div that tasks will be appended to\n    (0,_appLogic_populatePage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // Handles what the page looks like on load\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interfaceGen);\n\n//# sourceURL=webpack://todo-list/./src/domManipulation/interface.js?");

/***/ }),

/***/ "./src/domManipulation/projectBoard.js":
/*!*********************************************!*\
  !*** ./src/domManipulation/projectBoard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _appLogic_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/project */ \"./src/appLogic/project.js\");\n/* harmony import */ var _elementCreater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementCreater */ \"./src/domManipulation/elementCreater.js\");\n/* harmony import */ var _appLogic_populatePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appLogic/populatePage */ \"./src/appLogic/populatePage.js\");\n\n\n\n\nlet projects = [];\n\nfunction projectBoard() {\n    const navBar = document.querySelector('.nav-bar');\n    const projectContainer = document.querySelector('.project-container');\n\n    const homeScreen = (0,_elementCreater__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', 'home-page', null, 'Home');\n    const today = (0,_elementCreater__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'today', null, `Today`);\n    const tomorrow = (0,_elementCreater__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'tomorrow', null, 'Tomorrow');\n\n    const projectCreater = (0,_elementCreater__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('h1', 'projects', null, 'Projects');\n    const createNewProject = (0,_elementCreater__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', 'make-a-project', null, '+ add a project!');\n\n    navBar.append(homeScreen, today, tomorrow);\n    projectContainer.append(projectCreater, createNewProject);\n\n    homeScreen.addEventListener('click', () => {\n        let tasks = document.querySelectorAll('.task');\n        const storedTasks = JSON.parse(localStorage.getItem('tasks'));\n        if (tasks.length !== storedTasks.length) {\n            tasks.forEach(task => {task.remove()});\n            (0,_appLogic_populatePage__WEBPACK_IMPORTED_MODULE_2__.getTasks)();\n        }\n    })\n\n    createNewProject.addEventListener('click', () => {\n        const newProject = prompt('Name of Project', )\n    if (newProject !== null && newProject.trim() !== '') {\n        let project = new _appLogic_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newProject);\n        project.doAllTheThings()\n    }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectBoard);\n\n//# sourceURL=webpack://todo-list/./src/domManipulation/projectBoard.js?");

/***/ }),

/***/ "./src/domManipulation/taskcontainer.js":
/*!**********************************************!*\
  !*** ./src/domManipulation/taskcontainer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elementCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreater */ \"./src/domManipulation/elementCreater.js\");\n// createAnElement takes 4 arguments (element that you want to create, class name, id (optional: can be set to null), string for innerHTML)\n\n\n\nfunction taskcontainer() {\n    const navContainer = document.querySelector('.nav');\n    \n    const navBar = (0,_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'nav-bar', null, null);\n    const projectContainer = (0,_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'project-container', null, null);\n\n    navContainer.append(navBar, projectContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskcontainer);\n\n//# sourceURL=webpack://todo-list/./src/domManipulation/taskcontainer.js?");

/***/ }),

/***/ "./src/domManipulation/tasklist.js":
/*!*****************************************!*\
  !*** ./src/domManipulation/tasklist.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addATask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addATask */ \"./src/domManipulation/addATask.js\");\n/* harmony import */ var _elementCreater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementCreater */ \"./src/domManipulation/elementCreater.js\");\n\n\n\nfunction tasklist() {\n    const tasklist = document.querySelector('.to-do-container');\n    const fieldset = document.createElement('fieldset');\n\n    const legend = document.createElement('legend');\n    legend.innerHTML = 'Task List';\n\n    const taskInp = document.createElement('input');\n    taskInp.classList.add('taskInput');\n    taskInp.type = 'text';\n    taskInp.placeholder = ('Create a task...');\n\n    const dateInput = document.createElement('input');\n    dateInput.classList.add('dateInput');\n    dateInput.type = 'date';\n\n    const projectSelector = document.createElement('select');\n    const blankOption = document.createElement('option');\n    projectSelector.appendChild(blankOption)\n\n    const taskBtn = document.createElement('button');\n    taskBtn.classList.add('add-task');\n    taskBtn.innerHTML = 'Create Task';\n    taskBtn.addEventListener('click', (0,_addATask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskBtn));\n\n    tasklist.appendChild(fieldset);\n    fieldset.append(legend, taskInp, dateInput, projectSelector, taskBtn);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasklist);\n\n//# sourceURL=webpack://todo-list/./src/domManipulation/tasklist.js?");

/***/ }),

/***/ "./src/domManipulation/todoboard.js":
/*!******************************************!*\
  !*** ./src/domManipulation/todoboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elementCreater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreater */ \"./src/domManipulation/elementCreater.js\");\n\n\n// createAnElement takes 4 arguments (element that you want to create, class name, id (optional: can be set to null), string for innerHTML)\n\n\nfunction toDoBoard() {\n    const toDoBoard = document.querySelector('.to-do-container');\n\n    const list = (0,_elementCreater__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'to-do-list', null, null)\n\n    toDoBoard.appendChild(list);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoBoard);\n\n//# sourceURL=webpack://todo-list/./src/domManipulation/todoboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulation_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation/interface */ \"./src/domManipulation/interface.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n(0,_domManipulation_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconsole.log('poggers');\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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