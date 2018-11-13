webpackHotUpdate("static/development/pages/product.js",{

/***/ "./components/ProductUpdate.js":
/*!*************************************!*\
  !*** ./components/ProductUpdate.js ***!
  \*************************************/
/*! exports provided: default, UPDATE_PRODUCT_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PRODUCT_MUTATION", function() { return UPDATE_PRODUCT_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _lib_setAttributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/setAttributes */ "./lib/setAttributes.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/Griffin/Downloads/Artist Store/frontend/components/ProductUpdate.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation UPDATE_PRODUCT_MUTATION(\n    $title: String!\n    $price: Int!\n    $description: String!\n    $image: String\n  ) {\n    updateProduct(\n      title: $title\n      price: $price\n      description: $description\n      image: $image\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    product(where: { id: $id }) {\n      id\n      title\n      description\n      price\n      image\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var UPDATE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());

var ProductUpdate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductUpdate, _React$Component);

  function ProductUpdate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProductUpdate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProductUpdate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value; // console.log(e)

      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSwapInput", function (e) {
      var itExists = document.querySelector('.exists');

      if (itExists == null) {
        Object(_lib_setAttributes__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target, {
          class: 'big-again fluid'
        });
        var productImageInput = document.createElement('input');
        Object(_lib_setAttributes__WEBPACK_IMPORTED_MODULE_6__["default"])(productImageInput, {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var files, data, res, file, hero;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateProduct", function (e, updateProductMutation) {
      e.preventDefault();
      console.log('updating product');
      console.log(_this.state);
    });

    return _this;
  }

  _createClass(ProductUpdate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: SINGLE_ITEM_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, function (_ref2) {
        var data = _ref2.data,
            loading = _ref2.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "Loading...");
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
          mutation: UPDATE_PRODUCT_MUTATION,
          variables: _this2.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, function (updateProduct, _ref3) {
          var loading = _ref3.loading,
              error = _ref3.error;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
            onSubmit: function onSubmit(e) {
              return _this2.updateProduct(e, updateProduct);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "product-details",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "product-hero",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "file",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            id: "hero",
            className: "fluid two-hundred",
            src: "/static/camera-icon.svg",
            alt: "Update Product Image",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            className: "live-input product-hero big-again fluid",
            id: "file",
            accept: "image/png, image/jpeg",
            name: "image",
            style: {
              display: 'none'
            },
            onChange: _this2.uploadFile,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "product-info",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "title-and-price",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            className: "product-title live-input",
            type: "text",
            name: "title",
            placeholder: "Product Title",
            defaultValue: data.product.title,
            onChange: _this2.handleChange,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            className: "product-price live-input",
            type: "number",
            name: "price",
            placeholder: "Price",
            defaultValue: data.product.price,
            onChange: _this2.handleChange,
            required: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "product-description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
            className: "autoExpand live-input",
            name: "description",
            placeholder: "Product Description",
            rows: "5",
            type: "text",
            onChange: _this2.handleChange,
            defaultValue: data.product.description,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "product-buttons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            className: "inherit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }, "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            className: "inherit save",
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, "Add")))));
        });
      });
    }
  }]);

  return ProductUpdate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductUpdate);


/***/ })

})
//# sourceMappingURL=product.js.1ff8b2e81c6a8375a0c5.hot-update.js.map