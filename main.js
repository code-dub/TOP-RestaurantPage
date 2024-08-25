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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutLoad: () => (/* binding */ aboutLoad)\n/* harmony export */ });\nfunction aboutLoad(){\n    const aboutPage = document.querySelector('#content');\n    \n    aboutPage.replaceChildren();\n    \n    console.dir(aboutPage);\n\n    const heading = document.createElement('h1');\n    // const imageLogo = document.createElement('img');\n    const textPara = document.createElement('p');\n\n    heading.textContent = 'About us';\n    // imageLogo.src = 'https://edit.org/img/blog/gvs-hot-dog-poster-template-menu.webp';\n    textPara.textContent = \"We are the world's first full service hotdog restaurant\";\n\n    aboutPage.appendChild(heading);\n    // aboutPage.appendChild(imageLogo);\n    aboutPage.appendChild(textPara);\n    \n}\n\n\n\n//# sourceURL=webpack://top-restaurantpage/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n// import home from './pageLoad.js';\n\n\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst menu = document.querySelector('#btn-menu');\nmenu.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.menuLoad);\n\nconst about = document.querySelector('#btn-about');\nabout.addEventListener('click', _about_js__WEBPACK_IMPORTED_MODULE_2__.aboutLoad);\n\n\nconst home = document.querySelector('#btn-home');\nhome.addEventListener('click', _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://top-restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\nfunction menuLoad(){\n    const menuPage = document.querySelector('#content');\n    \n    menuPage.replaceChildren();\n    \n    console.dir(menuPage);\n\n    const heading = document.createElement('h1');\n    const imageLogo = document.createElement('img');\n    const textPara = document.createElement('p');\n\n    heading.textContent = 'Tasty treats';\n    imageLogo.src = 'https://edit.org/img/blog/gvs-hot-dog-poster-template-menu.webp';\n    textPara.textContent = \"Sunday Offer: 20% off on purchases above $20\";\n\n    menuPage.appendChild(heading);\n    menuPage.appendChild(imageLogo);\n    menuPage.appendChild(textPara);\n    \n}\n\n\n\n//# sourceURL=webpack://top-restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nfunction pageLoad(){\n    const homePage = document.querySelector('#content');\n    // console.dir(homePage);\n\n    homePage.replaceChildren();\n\n    const heading = document.createElement('h1');\n    heading.textContent = 'Welcome to Hotdog House';\n\n    const imageLogo = document.createElement('img');\n    imageLogo.src = \"https://images.pexels.com/photos/7974806/pexels-photo-7974806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\";\n\n    const textPara = document.createElement('p');\n    textPara.textContent = \"You've come to right place. Let your hunger be rocked by thunder. The joke might me lame but not our hotdog. You've got to try it to believe it.\";\n\n    homePage.appendChild(heading);\n    homePage.appendChild(imageLogo);\n    homePage.appendChild(textPara);\n    \n}\n\n//# sourceURL=webpack://top-restaurantpage/./src/pageLoad.js?");

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