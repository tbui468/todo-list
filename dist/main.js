/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//seems like local storage works as expected\n//Todo List structure\n//  Project\n//    fields: name, ItemList\n//    actions: create, edit, delete \n//  Item\n//    fields: title, description, duedate, priority, status (complete or not)\n//      use 'date-fns' library for formatting dates\n//    actions: create, edit, delete\n//  UI\n//    project index\n//    item index of chosen project (serves as project detail)\n//    item details\n//\n\n\nconst container = document.querySelector('#container');\nconst msg = document.createElement('div');\n\nif(localStorage.clickcount) {\n  localStorage.clickcount = Number(localStorage.clickcount) + 1;\n}else{\n  localStorage.clickcount = 1;\n}\n\nmsg.textContent = String(localStorage.clickcount);\ncontainer.appendChild(msg);\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;