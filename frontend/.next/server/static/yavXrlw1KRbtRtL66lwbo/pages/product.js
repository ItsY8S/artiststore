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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-5q6xqw-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Title = function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title bold"
  }, props.title);
};

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  };
  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(2);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(4);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(6);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(13);

// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Product.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Product_Product =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Product, _React$Component);

  function Product() {
    _classCallCheck(this, Product);

    return _possibleConstructorReturn(this, _getPrototypeOf(Product).apply(this, arguments));
  }

  _createClass(Product, [{
    key: "render",
    value: function render() {
      var product = this.props.product;
      return external_react_default.a.createElement("div", {
        className: "product"
      }, external_react_default.a.createElement(link_default.a, {
        href: {
          pathname: '/product',
          query: {
            id: product.id
          }
        }
      }, external_react_default.a.createElement("a", null, product.image && external_react_default.a.createElement("img", {
        className: "image fluid",
        src: product.image,
        alt: product.title
      }), external_react_default.a.createElement("span", {
        className: "price"
      }, Object(formatMoney["a" /* default */])(product.price)))));
    }
  }]);

  return Product;
}(external_react_default.a.Component);

/* harmony default export */ var components_Product = (Product_Product);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(9);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(11);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Pagination.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query PAGINATION_QUERY {\n    productsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var PAGINATION_QUERY = external_graphql_tag_default()(_templateObject());

var Pagination_Pagination = function Pagination(props) {
  return external_react_default.a.createElement(external_react_apollo_["Query"], {
    query: PAGINATION_QUERY
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;
    if (loading) return external_react_default.a.createElement("p", null, "Loading...");
    var count = data.productsConnection.aggregate.count;
    var pages = Math.ceil(count / config["a" /* perPage */]);
    var page = props.page;
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Artist Store \u2014 Page ", page, " of ", pages)), external_react_default.a.createElement("div", {
      className: "pagination"
    }, external_react_default.a.createElement(link_default.a, {
      prefetch: true,
      href: {
        pathname: 'products',
        query: {
          page: page - 1
        }
      }
    }, external_react_default.a.createElement("a", {
      "aria-disabled": page <= 1
    }, "\u2190 Previous")), external_react_default.a.createElement("p", null, "Page ", page, " of ", pages), external_react_default.a.createElement(link_default.a, {
      prefetch: true,
      href: {
        pathname: 'products',
        query: {
          page: page + 1
        }
      }
    }, external_react_default.a.createElement("a", {
      "aria-disabled": page >= pages
    }, "Next \u2192"))));
  });
};

/* harmony default export */ var components_Pagination = (Pagination_Pagination);
// CONCATENATED MODULE: ./components/Products.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL_PRODUCTS_QUERY; });
function Products_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Products_typeof = function _typeof(obj) { return typeof obj; }; } else { Products_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Products_typeof(obj); }

function Products_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Products_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Products_createClass(Constructor, protoProps, staticProps) { if (protoProps) Products_defineProperties(Constructor.prototype, protoProps); if (staticProps) Products_defineProperties(Constructor, staticProps); return Constructor; }

function Products_possibleConstructorReturn(self, call) { if (call && (Products_typeof(call) === "object" || typeof call === "function")) { return call; } return Products_assertThisInitialized(self); }

function Products_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Products_getPrototypeOf(o) { Products_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Products_getPrototypeOf(o); }

function Products_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Products_setPrototypeOf(subClass, superClass); }

function Products_setPrototypeOf(o, p) { Products_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Products_setPrototypeOf(o, p); }

function Products_templateObject() {
  var data = Products_taggedTemplateLiteral(["\n  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    products(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n      id\n      title\n      price\n      description\n      image\n    }\n  }\n"]);

  Products_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Products_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var ALL_PRODUCTS_QUERY = external_graphql_tag_default()(Products_templateObject(), config["a" /* perPage */]);
var ProductsGrid = external_styled_components_default.a.div.withConfig({
  displayName: "Products__ProductsGrid",
  componentId: "sc-9nbhf4-0"
})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:50px;"]);

var Products_Products =
/*#__PURE__*/
function (_React$Component) {
  Products_inherits(Products, _React$Component);

  function Products() {
    Products_classCallCheck(this, Products);

    return Products_possibleConstructorReturn(this, Products_getPrototypeOf(Products).apply(this, arguments));
  }

  Products_createClass(Products, [{
    key: "render",
    value: function render() {
      var _this = this;

      return external_react_default.a.createElement(external_react_apollo_["Query"], {
        query: ALL_PRODUCTS_QUERY,
        variables: {
          skip: this.props.page * config["a" /* perPage */] - config["a" /* perPage */]
        },
        fetchPolicy: "network-only"
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return external_react_default.a.createElement("p", null, "Loading...");
        if (error) return external_react_default.a.createElement(ProductsGrid, null, external_react_default.a.createElement(link_default.a, {
          href: "/productAdd"
        }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
          src: "/static/add.svg",
          alt: "Add a Product"
        }))), external_react_default.a.createElement("p", null, "Error: ", error.message));
        console.log(data);
        return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(ProductsGrid, null, external_react_default.a.createElement(link_default.a, {
          href: "/productAdd"
        }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
          src: "/static/add.svg",
          alt: "Add a Product"
        }))), data.products.map(function (product) {
          return external_react_default.a.createElement(components_Product, {
            product: product,
            key: product.id
          });
        })), external_react_default.a.createElement(components_Pagination, {
          page: _this.props.page
        }));
      });
    }
  }]);

  return Products;
}(external_react_default.a.Component);

/* harmony default export */ var components_Products = __webpack_exports__["b"] = (Products_Products);


/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setAttributes; });
function setAttributes(element, attributes) {
  for (var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

/***/ }),
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
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation addToCart($id: ID!) {\n    addToCart(id: $id) {\n      id\n      quantity\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ADD_TO_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var AddToCart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddToCart, _React$Component);

  function AddToCart() {
    _classCallCheck(this, AddToCart);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddToCart).apply(this, arguments));
  }

  _createClass(AddToCart, [{
    key: "render",
    value: function render() {
      var id = this.props.id;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: ADD_TO_CART_MUTATION,
        variables: {
          id: id
        }
      }, function (addToCart) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: addToCart
        }, "Add To Cart \uD83D\uDED2");
      });
    }
  }]);

  return AddToCart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (AddToCart);

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(59);


/***/ }),
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
/* 58 */,
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Title.js
var Title = __webpack_require__(10);

// EXTERNAL MODULE: ./components/Products.js + 2 modules
var Products = __webpack_require__(14);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(2);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(13);

// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(17);

// EXTERNAL MODULE: ./lib/setAttributes.js
var setAttributes = __webpack_require__(16);

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(7);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(12);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/DeleteProduct.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_PRODUCT_MUTATION($id: ID!) {\n    deleteProduct(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var DELETE_PRODUCT_MUTATION = external_graphql_tag_default()(_templateObject());

var DeleteProduct_DeleteProduct =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DeleteProduct, _React$Component);

  function DeleteProduct() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteProduct);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteProduct)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (cache, payload) {
      var data = cache.readQuery({
        query: Products["a" /* ALL_PRODUCTS_QUERY */]
      });
      console.log(data);
      data.products = data.products.filter(function (product) {
        return product.id !== payload.data.deleteProduct.id;
      });
      cache.writeQuery({
        query: Products["a" /* ALL_PRODUCTS_QUERY */],
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteProduct, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: DELETE_PRODUCT_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update
      }, function (deleteProduct, _ref) {
        var error = _ref.error;
        return external_react_default.a.createElement("button", {
          onClick: function onClick() {
            if (confirm('Are you sure you want to delete this product?')) {
              deleteProduct().catch(function (err) {
                return alert("You don't have permission to delete this product.");
              });
            }

            router_default.a.push({
              pathname: '/products'
            });
          },
          className: "inherit delete"
        }, _this2.props.children);
      });
    }
  }]);

  return DeleteProduct;
}(external_react_default.a.Component);

/* harmony default export */ var components_DeleteProduct = (DeleteProduct_DeleteProduct);
// EXTERNAL MODULE: ./components/AddToCart.js
var AddToCart = __webpack_require__(21);

// CONCATENATED MODULE: ./components/ProductUpdate.js


function ProductUpdate_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProductUpdate_typeof = function _typeof(obj) { return typeof obj; }; } else { ProductUpdate_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProductUpdate_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ProductUpdate_defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ProductUpdate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductUpdate_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductUpdate_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductUpdate_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductUpdate_defineProperties(Constructor, staticProps); return Constructor; }

function ProductUpdate_possibleConstructorReturn(self, call) { if (call && (ProductUpdate_typeof(call) === "object" || typeof call === "function")) { return call; } return ProductUpdate_assertThisInitialized(self); }

function ProductUpdate_getPrototypeOf(o) { ProductUpdate_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProductUpdate_getPrototypeOf(o); }

function ProductUpdate_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProductUpdate_setPrototypeOf(subClass, superClass); }

function ProductUpdate_setPrototypeOf(o, p) { ProductUpdate_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProductUpdate_setPrototypeOf(o, p); }

function ProductUpdate_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProductUpdate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = ProductUpdate_taggedTemplateLiteral(["\n  mutation UPDATE_PRODUCT_MUTATION(\n    $id: ID!\n    $title: String\n    $price: Int\n    $description: String\n    $image: String\n  ) {\n    updateProduct(\n      id: $id\n      title: $title\n      price: $price\n      description: $description\n      image: $image\n    ) {\n      id\n      title\n      description\n      image\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ProductUpdate_templateObject() {
  var data = ProductUpdate_taggedTemplateLiteral(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    product(where: { id: $id }) {\n      id\n      title\n      description\n      price\n      image\n    }\n  }\n"]);

  ProductUpdate_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ProductUpdate_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










 // QUERY A USER HERE AND CONDITIONALLY RENDER COMPONENT???

var SINGLE_ITEM_QUERY = external_graphql_tag_default()(ProductUpdate_templateObject());
var UPDATE_PRODUCT_MUTATION = external_graphql_tag_default()(_templateObject2());

var ProductUpdate_ProductUpdate =
/*#__PURE__*/
function (_React$Component) {
  ProductUpdate_inherits(ProductUpdate, _React$Component);

  function ProductUpdate() {
    var _getPrototypeOf2;

    var _this;

    ProductUpdate_classCallCheck(this, ProductUpdate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ProductUpdate_possibleConstructorReturn(this, (_getPrototypeOf2 = ProductUpdate_getPrototypeOf(ProductUpdate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    ProductUpdate_defineProperty(ProductUpdate_assertThisInitialized(ProductUpdate_assertThisInitialized(_this)), "state", {});

    ProductUpdate_defineProperty(ProductUpdate_assertThisInitialized(ProductUpdate_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value; // console.log(e)

      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(ProductUpdate_defineProperty({}, name, val));
    });

    ProductUpdate_defineProperty(ProductUpdate_assertThisInitialized(ProductUpdate_assertThisInitialized(_this)), "handleSwapInput", function (e) {
      var itExists = document.querySelector('.exists');

      if (itExists == null) {
        Object(setAttributes["a" /* default */])(e.target, {
          class: 'big-again fluid'
        });
        var productImageInput = document.createElement('input');
        Object(setAttributes["a" /* default */])(productImageInput, {
          class: 'live-input exists product-hero',
          type: 'file',
          accept: 'image/png, image/jpeg',
          name: 'image',
          style: 'display: none',
          onchange: "document.getElementById('hero').src = window.URL.createObjectURL(this.files[0])"
        });
        e.target.parentNode.appendChild(productImageInput);
        productImageInput.click();
      } else {
        console.log('Still click it.');
        var productHeroInput = document.querySelector('.live-input');
        productHeroInput.click();
      }
    });

    ProductUpdate_defineProperty(ProductUpdate_assertThisInitialized(ProductUpdate_assertThisInitialized(_this)), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(e) {
        var files, data, res, file, hero;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('uploading file');
                files = e.target.files;
                data = new FormData();
                data.append('file', files[0]);
                data.append('upload_preset', 'artiststore');
                _context.next = 7;
                return fetch('https://api.cloudinary.com/v1_1/y8s/image/upload', {
                  method: 'POST',
                  body: data
                });

              case 7:
                res = _context.sent;
                _context.next = 10;
                return res.json();

              case 10:
                file = _context.sent;
                console.log(file);

                _this.setState({
                  image: file.secure_url
                });

                hero = document.querySelector('#hero');
                hero.src = _this.state.image;
                hero.classList.remove('two-hundred');

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    ProductUpdate_defineProperty(ProductUpdate_assertThisInitialized(ProductUpdate_assertThisInitialized(_this)), "updateProduct",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(e, updateProductMutation) {
        var res;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                console.log('updating product');
                console.log(_this.state);
                _context2.next = 5;
                return updateProductMutation({
                  variables: _objectSpread({
                    id: _this.props.id
                  }, _this.state)
                });

              case 5:
                res = _context2.sent;
                console.log('updated');

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  ProductUpdate_createClass(ProductUpdate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_apollo_["Query"], {
        query: SINGLE_ITEM_QUERY,
        variables: {
          id: this.props.id
        }
      }, function (_ref3) {
        var data = _ref3.data,
            loading = _ref3.loading;
        if (loading) return external_react_default.a.createElement("p", null, "Loading...");
        if (!data.product) return external_react_default.a.createElement("p", null, "No product found for ID: ", _this2.props.id);
        return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
          mutation: UPDATE_PRODUCT_MUTATION,
          variables: _this2.state
        }, function (updateProduct, _ref4) {
          var loading = _ref4.loading,
              error = _ref4.error;
          return external_react_default.a.createElement("form", {
            onSubmit: function onSubmit(e) {
              return _this2.updateProduct(e, updateProduct);
            }
          }, external_react_default.a.createElement(ErrorMessage["a" /* default */], {
            error: error
          }), external_react_default.a.createElement("div", {
            className: "product-details"
          }, external_react_default.a.createElement("div", {
            className: "product-hero"
          }, external_react_default.a.createElement("label", {
            htmlFor: "file"
          }, external_react_default.a.createElement("img", {
            id: "hero",
            className: "fluid",
            src: data.product.image || '/static/camera-icon.svg',
            alt: "Update Product Image"
          })), external_react_default.a.createElement("input", {
            type: "file",
            className: "live-input product-hero big-again fluid",
            id: "file",
            accept: "image/png, image/jpeg",
            name: "image",
            style: {
              display: 'none'
            },
            onChange: _this2.uploadFile
          })), external_react_default.a.createElement("div", {
            className: "product-info"
          }, external_react_default.a.createElement("div", {
            className: "title-and-price"
          }, external_react_default.a.createElement("input", {
            className: "product-title live-input",
            type: "text",
            name: "title",
            placeholder: "Product Title",
            defaultValue: data.product.title,
            onChange: _this2.handleChange,
            required: true
          }), external_react_default.a.createElement("input", {
            className: "product-price live-input",
            type: "number",
            name: "price",
            placeholder: "Price",
            defaultValue: data.product.price,
            onChange: _this2.handleChange,
            required: true
          })), external_react_default.a.createElement("div", {
            className: "product-description"
          }, external_react_default.a.createElement("textarea", {
            className: "autoExpand live-input",
            name: "description",
            placeholder: "Product Description",
            rows: "5",
            type: "text",
            onChange: _this2.handleChange,
            defaultValue: data.product.description
          })), external_react_default.a.createElement("div", {
            className: "product-buttons"
          }, external_react_default.a.createElement(components_DeleteProduct, {
            id: data.product.id
          }, "Delete"), external_react_default.a.createElement(AddToCart["a" /* default */], {
            id: data.product.id
          }), external_react_default.a.createElement("button", {
            className: "inherit save",
            type: "submit"
          }, "Save")))));
        });
      });
    }
  }]);

  return ProductUpdate;
}(external_react_default.a.Component);

/* harmony default export */ var components_ProductUpdate = (ProductUpdate_ProductUpdate);

// CONCATENATED MODULE: ./pages/product.js





var product_productUpdate = function productUpdate(props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Title["a" /* default */], {
    title: "Update Product"
  }), external_react_default.a.createElement(components_ProductUpdate, {
    id: props.query.id
  }));
};

/* harmony default export */ var product = __webpack_exports__["default"] = (product_productUpdate);

/***/ })
/******/ ]);