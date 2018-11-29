module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CartStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.aside.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1tzec6h-0"
})(["padding:25px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:400px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);box-sizing:border-box;z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{display:flex;justify-content:space-between;width:100%;margin-bottom:50px;}.cart-title{font-weight:500;margin-bottom:0px;}.cart-close{font-size:42px;margin:0px;border:none;padding:0px;}.cart-item{width:auto;display:flex;justify-content:space-around;margin:35px 0px;}.cart-item img{width:75px;height:75px;object-fit:contain;}button.checkout{background:linear-gradient( to top right,#704ce5 0%,#4c66e6 50%,#4cb3e6 100% );border-image-slice:1;border-radius:10px;border-image-outset:0px;color:white;font-size:1.6rem;border:none;}footer{display:flex;justify-content:space-between;width:100%;}"], function (props) {
  return props.open && "transform: translateX(0);";
});
/* harmony default export */ __webpack_exports__["a"] = (CartStyles);

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_styles_CartStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



var cart = function cart(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_CartStyles__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    className: "carts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "close-cart"
  }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "cart-title"
  }, "User's Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/products/beige-hoodie.jpg",
    alt: "Beige Hoodie"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Beige Hoodie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$49")));
};

/* harmony default export */ __webpack_exports__["default"] = (cart);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });