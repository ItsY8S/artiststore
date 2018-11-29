(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{17:function(e,t,n){e.exports=n(38)},28:function(e,t,n){"use strict";t.a=function(e){var t={style:"currency",currency:"USD",minimumFractionDigits:2};return e%100==0&&(t.minimumFractionDigits=0),new Intl.NumberFormat("en-US",t).format(e/100)}},317:function(e,t,n){__NEXT_REGISTER_PAGE("/singleProduct",function(){return e.exports=n(330),{page:e.exports.default}})},330:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(18),i=(n(51),n(3)),u=n.n(i),c=n(1),l=n(10),f=(n(15),n(17),n(85)),p=n(28);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    product(where: { id: $id }) {\n      id\n      title\n      image\n      price\n      description\n    }\n  }\n"]);return h=function(){return e},e}var v=u()(h()),g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,m(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this;return o.a.createElement(c.Query,{query:v,variables:{id:this.props.id}},function(t){var n=t.error,r=t.loading,a=t.data;if(n)return o.a.createElement(l.a,{error:n});if(r)return o.a.createElement("p",null,"Loading...");if(!a.product)return o.a.createElement("p",null,"No Product found for ID: ",e.props.id);var i=a.product;return o.a.createElement("div",{className:"product-details"},o.a.createElement("div",{className:"product-hero"},o.a.createElement("img",{id:"hero",className:"fluid",src:i.image||"/static/camera-icon.svg",alt:"Update Product Image"})),o.a.createElement("div",{className:"product-info"},o.a.createElement("div",{className:"title-and-price"},o.a.createElement("h4",{className:"product-title live-input"},i.title),o.a.createElement("h4",{className:"product-price live-input"},Object(p.a)(i.price))),o.a.createElement("div",{className:"product-description"},o.a.createElement("textarea",{className:"autoExpand live-input",placeholder:"Product Description",type:"text",rows:"5",readOnly:!0},i.description)),o.a.createElement("div",{className:"product-buttons"},o.a.createElement("button",{id:i.id},"Temp"),o.a.createElement(f.a,{id:i.id}))))})}}])&&d(n.prototype,a),i&&d(n,i),t}();t.default=function(e){return o.a.createElement("div",null,o.a.createElement(a.a,{title:"Product"}),o.a.createElement(g,{id:e.query.id}))}},38:function(e,t,n){"use strict";var r=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=b,t.default=void 0;var o=r(n(30)),a=r(n(12)),i=r(n(13)),u=r(n(21)),c=r(n(22)),l=r(n(23)),f=r(n(19)),p=r(n(0)),s=r(n(6)),d=r(n(39)),y=function(e){function t(){return(0,a.default)(this,t),(0,u.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return null}}]),t}(p.default.Component);(0,f.default)(y,"contextTypes",{headManager:s.default.object});var m="next-head";function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return[p.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var h=["name","httpEquiv","charSet","itemProp","property"],v=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var g=(0,d.default)(function(e){return e.map(function(e){return p.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return p.default.Fragment&&t.type===p.default.Fragment?e.concat(p.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(b("")).filter(Boolean).filter((t=new o.default,n=new o.default,r=new o.default,a={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var i=0,u=h.length;i<u;i++){var c=h[i];if(e.props.hasOwnProperty(c))if("charSet"===c){if(r.has(c))return!1;r.add(c)}else{var l=e.props[c],f=a[c]||new o.default;if(f.has(l)&&-1===v.indexOf(l))return!1;f.add(l),a[c]=f}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+m,r=e.key||t;return p.default.cloneElement(e,{key:r,className:n})});var t,n,r,a},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(y);t.default=g},39:function(e,t,n){"use strict";var r=n(32),o=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var o,b=new d.default;function h(r){o=e((0,s.default)(b)),v.canUseDOM?t.call(r,o):n&&(o=n(o))}var v=function(e){function t(e){var n;return(0,a.default)(this,t),n=(0,i.default)(this,(0,u.default)(t).call(this,e)),t.canUseDOM||(b.add((0,f.default)((0,f.default)(n))),h((0,f.default)((0,f.default)(n)))),n}return(0,l.default)(t,e),(0,c.default)(t,null,[{key:"peek",value:function(){return o}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,b.clear(),e}}]),(0,c.default)(t,[{key:"componentDidMount",value:function(){b.add(this),h(this)}},{key:"componentDidUpdate",value:function(){h(this)}},{key:"componentWillUnmount",value:function(){b.delete(this),h(this)}},{key:"render",value:function(){return y.default.createElement(r,null,this.props.children)}}]),t}(y.Component);return(0,p.default)(v,"canUseDOM","undefined"!=typeof window),(0,p.default)(v,"contextTypes",r.contextTypes),(0,p.default)(v,"displayName","SideEffect(".concat((0,m.getDisplayName)(r),")")),v}};var a=o(n(12)),i=o(n(21)),u=o(n(22)),c=o(n(13)),l=o(n(23)),f=o(n(58)),p=o(n(19)),s=o(n(40)),d=o(n(30)),y=r(n(0)),m=n(33)},40:function(e,t,n){var r=n(41),o=n(42),a=n(50);e.exports=function(e){return r(e)||o(e)||a()}},41:function(e,t,n){var r=n(63);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},42:function(e,t,n){var r=n(43),o=n(47);e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},43:function(e,t,n){e.exports=n(44)},44:function(e,t,n){n(24),n(45),e.exports=n(5).Array.from},45:function(e,t,n){"use strict";var r=n(29),o=n(11),a=n(35),i=n(68),u=n(69),c=n(54),l=n(46),f=n(62);o(o.S+o.F*!n(70)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,p,s=a(e),d="function"==typeof this?this:Array,y=arguments.length,m=y>1?arguments[1]:void 0,b=void 0!==m,h=0,v=f(s);if(b&&(m=r(m,y>2?arguments[2]:void 0,2)),null==v||d==Array&&u(v))for(n=new d(t=c(s.length));t>h;h++)l(n,h,b?m(s[h],h):s[h]);else for(p=v.call(s),n=new d;!(o=p.next()).done;h++)l(n,h,b?i(p,m,[o.value,h],!0):o.value);return n.length=h,n}})},46:function(e,t,n){"use strict";var r=n(26),o=n(52);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},47:function(e,t,n){e.exports=n(48)},48:function(e,t,n){n(37),n(24),e.exports=n(49)},49:function(e,t,n){var r=n(56),o=n(16)("iterator"),a=n(36);e.exports=n(5).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||a.hasOwnProperty(r(t))}},50:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},51:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(3),u=n.n(i),c=n(15),l=(n(6),n(2)),f=n.n(l),p=n(28);n(14);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,m(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.product;return o.a.createElement("div",{className:"product"},o.a.createElement(f.a,{href:{pathname:"/product",query:{id:e.id}}},o.a.createElement("a",null,e.image&&o.a.createElement("img",{className:"image fluid",src:e.image,alt:e.title}),o.a.createElement("span",{className:"price"},Object(p.a)(e.price)))))}}])&&d(n.prototype,r),a&&d(n,a),t}(),v=n(8),g=n(17),E=n.n(g);function w(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query PAGINATION_QUERY {\n    productsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return w=function(){return e},e}var O=u()(w()),j=function(e){return o.a.createElement(a.Query,{query:O},function(t){var n=t.data,r=t.loading;if(t.error,r)return o.a.createElement("p",null,"Loading...");var a=n.productsConnection.aggregate.count,i=Math.ceil(a/v.a),u=e.page;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,null,o.a.createElement("title",null,"Artist Store — Page ",u," of ",i)),o.a.createElement("div",{className:"pagination"},o.a.createElement(f.a,{prefetch:!0,href:{pathname:"products",query:{page:u-1}}},o.a.createElement("a",{"aria-disabled":u<=1},"← Previous")),o.a.createElement("p",null,"Page ",u," of ",i),o.a.createElement(f.a,{prefetch:!0,href:{pathname:"products",query:{page:u+1}}},o.a.createElement("a",{"aria-disabled":u>=i},"Next →"))))})};function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ",") {\n    products(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n      id\n      title\n      price\n      description\n      image\n    }\n  }\n"]);return N=function(){return e},e}n.d(t,"a",function(){return C});var C=u()(N(),v.a),T=c.b.div.withConfig({displayName:"Products__ProductsGrid",componentId:"sc-9nbhf4-0"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:50px;"]),A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,x(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;return o.a.createElement(a.Query,{query:C,variables:{skip:this.props.page*v.a-v.a},fetchPolicy:"network-only"},function(t){var n=t.data,r=t.error;return t.loading?o.a.createElement("p",null,"Loading..."):r?o.a.createElement(T,null,o.a.createElement(f.a,{href:"/productAdd"},o.a.createElement("a",null,o.a.createElement("img",{src:"/static/add.svg",alt:"Add a Product"}))),o.a.createElement("p",null,"Error: ",r.message)):(console.log(n),o.a.createElement(o.a.Fragment,null,o.a.createElement(T,null,o.a.createElement(f.a,{href:"/productAdd"},o.a.createElement("a",null,o.a.createElement("img",{src:"/static/add.svg",alt:"Add a Product"}))),n.products.map(function(e){return o.a.createElement(h,{product:e,key:e.id})})),o.a.createElement(j,{page:e.props.page})))})}}])&&P(n.prototype,r),i&&P(n,i),t}();t.b=A},8:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var r="https://artist-store-yoga-prod.herokuapp.com",o=7},85:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n(3);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation addToCart($id: ID!) {\n    addToCart(id: $id) {\n      id\n      quantity\n    }\n  }\n"]);return s=function(){return e},e}var d=n.n(i)()(s()),y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,f(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.id;return o.a.createElement(a.Mutation,{mutation:d,variables:{id:e}},function(e){return o.a.createElement("button",{onClick:e},"Add To Cart 🛒")})}}])&&c(n.prototype,r),i&&c(n,i),t}();t.a=y}},[[317,1,0]]]);