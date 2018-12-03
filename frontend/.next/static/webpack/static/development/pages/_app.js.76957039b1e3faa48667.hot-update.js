webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/CartProduct.js":
/*!***********************************!*\
  !*** ./components/CartProduct.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/Griffin/Downloads/Artist Store/frontend/components/CartProduct.js";




var CartProduct = function CartProduct(props) {
  var product = props.cartProduct.product;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.cartProduct.image,
    alt: props.cartProduct.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "cart-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.cartProduct.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cart-item-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.cartProduct.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cart-item-remove",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\xD7"));
};

CartProduct.propTypes = {
  cartProduct: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CartProduct);

/***/ })

})
//# sourceMappingURL=_app.js.76957039b1e3faa48667.hot-update.js.map