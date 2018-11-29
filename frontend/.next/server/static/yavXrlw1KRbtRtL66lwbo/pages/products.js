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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ 10:
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

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 13:
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

/***/ 14:
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);




var products = function products(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    title: "Products"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Products__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], {
    page: parseFloat(props.query.page) || 1
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (products);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 8:
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

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export endpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perPage; });
var endpoint = "http://localhost:4444";
var prodEndpoint = "https://artist-store-yoga-prod.herokuapp.com";
var perPage = 7;

/***/ })

/******/ });