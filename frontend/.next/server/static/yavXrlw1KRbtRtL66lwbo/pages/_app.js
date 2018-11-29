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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      permissions\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY
  }), function (payload) {
    return props.children(payload);
  });
};

/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export endpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perPage; });
var endpoint = "http://localhost:4444";
var prodEndpoint = "https://artist-store-yoga-prod.herokuapp.com";
var perPage = 7;

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,600,600i,700,700i|Oswald:400,600",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/css/normalize.css",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/css/style.css",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/css/skeleton.css",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/css/nprogress.css",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Artist Store"));
};

/* harmony default export */ __webpack_exports__["a"] = (Meta);

/***/ }),
/* 18 */
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
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(25);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(4);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/NavStyles.js

var NavStyles = external_styled_components_default.a.nav.withConfig({
  displayName: "NavStyles",
  componentId: "sc-1td1y7o-0"
})(["z-index:5;#sidebar{grid-area:sidebar;position:fixed;top:0;left:0;width:100%;max-width:150px;height:100vh;padding:50px;grid-area:sidebar;}#profile-picture{max-width:90%;height:auto;background:#fff;border:7.5px solid transparent;border-image:linear-gradient( to top right,#704ce5 0%,#4c66e6 50%,#4cb3e6 100% );border-radius:100%;border-image-slice:1;border-image-outset:3px;margin-bottom:75px;}ul{list-style:none;font-size:24px;color:#704ce5;text-align:center;display:flex;flex-direction:column;padding:0px;}li{text-align:center;margin-bottom:30px;position:relative;}a{color:inherit;text-decoration:none;}&:hover{color:inherit;}#logout{position:absolute;bottom:100px;left:0;width:100%;}}#selected:after{content:'';width:100%;height:3px;background:linear-gradient( 135deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 25%,white 25.1%,white 27.6%,rgba(255,255,255,0) 27.7%,rgba(255,255,255,0) 50%,white 50.1%,white 52.6%,rgba(255,255,255,0) 52.7%,rgba(255,255,255,0) 73%,white 73.1%,white 75.6%,rgba(255,255,255,0) 75.7%,rgba(255,255,255,0) 100% ),linear-gradient(to right,#864de6 0%,#4cb3e6 100%);position:absolute;bottom:-10px;left:0;border-radius:25px;}.divider{display:inline-block;border-right:3.5px solid transparent;border-image:linear-gradient( to bottom,#704ce5 0%,#cc4ce6 20%,#4c6de6 65%,#704ce5 100% );border-radius:100%;border-image-slice:1;border-image-outset:3px;height:calc(100vh - 50px);margin:25px 0;position:absolute;right:0;top:0;}"]);
/* harmony default export */ var styles_NavStyles = (NavStyles);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(12);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(23);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(2);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(1);

// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(8);

// EXTERNAL MODULE: ./components/styles/CartStyles.js
var CartStyles = __webpack_require__(18);

// CONCATENATED MODULE: ./components/Cart.js


function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleCart @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    cartOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var LOCAL_STATE_QUERY = external_graphql_tag_default()(_templateObject());
var TOGGLE_CART_MUTATION = external_graphql_tag_default()(_templateObject2());

var Cart_Cart = function Cart() {
  return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
    mutation: TOGGLE_CART_MUTATION
  }, function (toggleCart) {
    return external_react_default.a.createElement(external_react_apollo_["Query"], {
      query: LOCAL_STATE_QUERY
    }, function (_ref) {
      var data = _ref.data;
      return external_react_default.a.createElement(CartStyles["a" /* default */], {
        open: data.cartOpen
      }, external_react_default.a.createElement("header", null, external_react_default.a.createElement("h4", {
        className: "cart-title"
      }, "User's Cart"), external_react_default.a.createElement("button", {
        className: "cart-close",
        onClick: toggleCart
      }, "\xD7")), external_react_default.a.createElement("section", {
        className: "cart-items"
      }, external_react_default.a.createElement("div", {
        className: "cart-item"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/products/beige-hoodie.jpg",
        alt: "Beige Hoodie"
      }), external_react_default.a.createElement("h6", {
        className: "cart-item-title"
      }, "Beige Hoodie"), external_react_default.a.createElement("span", {
        className: "cart-item-price"
      }, "$77")), external_react_default.a.createElement("div", {
        className: "cart-item"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/products/red-hoodie.jpg",
        alt: "Red Hoodie"
      }), external_react_default.a.createElement("h6", {
        className: "cart-item-title"
      }, "Red Hoodie"), external_react_default.a.createElement("span", {
        className: "cart-item-price"
      }, "$77"), external_react_default.a.createElement("span", {
        className: "cart-item-remove"
      }, "\xD7"))), external_react_default.a.createElement("footer", null, external_react_default.a.createElement("h4", {
        className: "cart-total"
      }, "$219.42"), external_react_default.a.createElement("button", {
        className: "checkout"
      }, "Checkout")));
    });
  });
};

/* harmony default export */ var components_Cart = (Cart_Cart);

// CONCATENATED MODULE: ./components/Nav.js


function Nav_templateObject() {
  var data = Nav_taggedTemplateLiteral(["\n  mutation SIGNOUT_MUTATION {\n    signout {\n      message\n    }\n  }\n"]);

  Nav_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Nav_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












router_default.a.onRouteChangeStart = function () {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = function () {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = function () {
  external_nprogress_default.a.done();
};

var SIGNOUT_MUTATION = external_graphql_tag_default()(Nav_templateObject());

var Nav_Nav = function Nav() {
  return external_react_default.a.createElement(User["b" /* default */], null, function (_ref) {
    var data = _ref.data;
    return external_react_default.a.createElement(styles_NavStyles, {
      id: "sidebar"
    }, external_react_default.a.createElement(components_Cart, null), external_react_default.a.createElement("img", {
      id: "profile-picture",
      src: "/static/profile.jpg",
      alt: "Store Image"
    }), external_react_default.a.createElement("ul", null, data.me && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("li", {
      id: "selected"
    }, external_react_default.a.createElement(link_default.a, {
      href: "/"
    }, external_react_default.a.createElement("a", null, "Dashboard"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
      href: "/products"
    }, external_react_default.a.createElement("a", null, "Products"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
      href: "/orders"
    }, external_react_default.a.createElement("a", null, "Orders"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
      href: "/concerts"
    }, external_react_default.a.createElement("a", null, "Concerts"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
      href: "/manage"
    }, external_react_default.a.createElement("a", null, "Manage"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: SIGNOUT_MUTATION,
      refetchQueries: [{
        query: User["a" /* CURRENT_USER_QUERY */]
      }]
    }, function (signout) {
      return external_react_default.a.createElement(link_default.a, {
        href: "/signout"
      }, external_react_default.a.createElement("a", {
        onClick: signout
      }, "Sign Out"));
    }))), !data.me && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
      href: "/products"
    }, external_react_default.a.createElement("a", null, "Products"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
      href: "/concerts"
    }, external_react_default.a.createElement("a", null, "Concerts"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
      href: "/about"
    }, external_react_default.a.createElement("a", null, "About"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: TOGGLE_CART_MUTATION
    }, function (toggleCart) {
      return external_react_default.a.createElement("button", {
        className: "nav-button",
        onClick: toggleCart
      }, "Cart");
    })), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
      href: "/signin"
    }, external_react_default.a.createElement("a", null, "Sign In")))), external_react_default.a.createElement("span", {
      className: "divider"
    })));
  });
};

/* harmony default export */ var components_Nav = (Nav_Nav);
// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(17);

// CONCATENATED MODULE: ./components/Page.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var theme = {
  maxWidth: '1000px',
  fontFamily: 'Muli',
  backgroundColor: '#fff'
};
var StyledPage = external_styled_components_default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-12qg6x5-0"
})(["background-color:#fff;color:#000;font-family:'Muli';grid-template-columns:253px 1fr;grid-template-areas:'sidebar main';"]);
var Inner = external_styled_components_default.a.main.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-12qg6x5-1"
})(["max-width:100%;margin-left:253px;padding:25px 50px;height:100%;grid-area:main;"]);

var Page_Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
        theme: theme
      }, external_react_default.a.createElement(StyledPage, null, external_react_default.a.createElement(Meta["a" /* default */], null), external_react_default.a.createElement(components_Nav, null), external_react_default.a.createElement(Inner, null, this.props.children)));
    }
  }]);

  return Page;
}(external_react_default.a.Component);

/* harmony default export */ var components_Page = (Page_Page);
// EXTERNAL MODULE: external "next-with-apollo"
var external_next_with_apollo_ = __webpack_require__(26);
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__(27);
var external_apollo_boost_default = /*#__PURE__*/__webpack_require__.n(external_apollo_boost_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(9);

// CONCATENATED MODULE: ./lib/withData.js





function createClient(_ref) {
  var headers = _ref.headers;
  return new external_apollo_boost_default.a({
    uri:  false ? undefined : config["b" /* prodEndpoint */],
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    },
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart: function toggleCart(_, variables, _ref2) {
            var cache = _ref2.cache;

            var _cache$readQuery = cache.readQuery({
              query: LOCAL_STATE_QUERY
            }),
                cartOpen = _cache$readQuery.cartOpen;

            var data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: false
      }
    }
  });
}

/* harmony default export */ var withData = (external_next_with_apollo_default()(createClient));
// CONCATENATED MODULE: ./pages/_app.js



function _app_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app_typeof = function _typeof(obj) { return typeof obj; }; } else { _app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app_createClass(Constructor, protoProps, staticProps) { if (protoProps) _app_defineProperties(Constructor.prototype, protoProps); if (staticProps) _app_defineProperties(Constructor, staticProps); return Constructor; }

function _app_possibleConstructorReturn(self, call) { if (call && (_app_typeof(call) === "object" || typeof call === "function")) { return call; } return _app_assertThisInitialized(self); }

function _app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app_getPrototypeOf(o) { _app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _app_getPrototypeOf(o); }

function _app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _app_setPrototypeOf(subClass, superClass); }

function _app_setPrototypeOf(o, p) { _app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _app_setPrototypeOf(o, p); }






var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app_inherits(MyApp, _App);

  function MyApp() {
    _app_classCallCheck(this, MyApp);

    return _app_possibleConstructorReturn(this, _app_getPrototypeOf(MyApp).apply(this, arguments));
  }

  _app_createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          apollo = _this$props.apollo,
          pageProps = _this$props.pageProps;
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(external_react_apollo_["ApolloProvider"], {
        client: this.props.apollo
      }, external_react_default.a.createElement(components_Page, null, external_react_default.a.createElement(Component, pageProps))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (withData(_app_MyApp));

/***/ })
/******/ ]);