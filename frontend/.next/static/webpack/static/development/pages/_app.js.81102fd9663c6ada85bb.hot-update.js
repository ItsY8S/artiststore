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
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");
var _jsxFileName = "/Users/Griffin/Downloads/Artist Store/frontend/components/CartProduct.js";





var CartProduct = function CartProduct(_ref) {
  var cartProduct = _ref.cartProduct;
  if (!cartProduct.product) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "This product is no longer available.");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: cartProduct.product.image,
    alt: cartProduct.product.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cart-item-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "cart-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, cartProduct.product.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cart-item-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_1__["default"])(cartProduct.product.price), " \xD7", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, cartProduct.quantity))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: cartProduct.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

CartProduct.propTypes = {
  cartProduct: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CartProduct);

/***/ })

})
//# sourceMappingURL=_app.js.81102fd9663c6ada85bb.hot-update.js.map