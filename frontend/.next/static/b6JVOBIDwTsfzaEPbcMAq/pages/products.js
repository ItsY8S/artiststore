(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{17:function(e,t,n){e.exports=n(38)},28:function(e,t,n){"use strict";t.a=function(e){var t={style:"currency",currency:"USD",minimumFractionDigits:2};return e%100==0&&(t.minimumFractionDigits=0),new Intl.NumberFormat("en-US",t).format(e/100)}},310:function(e,t,n){__NEXT_REGISTER_PAGE("/products",function(){return e.exports=n(311),{page:e.exports.default}})},311:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),u=n(51);t.default=function(e){return a.a.createElement("div",null,a.a.createElement(o.a,{title:"Products"}),a.a.createElement(u.b,{page:parseFloat(e.query.page)||1}))}},38:function(e,t,n){"use strict";var r=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=h,t.default=void 0;var a=r(n(30)),o=r(n(12)),u=r(n(13)),i=r(n(21)),c=r(n(22)),l=r(n(23)),f=r(n(19)),p=r(n(0)),s=r(n(6)),d=r(n(39)),m=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return null}}]),t}(p.default.Component);(0,f.default)(m,"contextTypes",{headManager:s.default.object});var y="next-head";function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return[p.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var v=["name","httpEquiv","charSet","itemProp","property"],g=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var b=(0,d.default)(function(e){return e.map(function(e){return p.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return p.default.Fragment&&t.type===p.default.Fragment?e.concat(p.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(h("")).filter(Boolean).filter((t=new a.default,n=new a.default,r=new a.default,o={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var u=0,i=v.length;u<i;u++){var c=v[u];if(e.props.hasOwnProperty(c))if("charSet"===c){if(r.has(c))return!1;r.add(c)}else{var l=e.props[c],f=o[c]||new a.default;if(f.has(l)&&-1===g.indexOf(l))return!1;f.add(l),o[c]=f}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+y,r=e.key||t;return p.default.cloneElement(e,{key:r,className:n})});var t,n,r,o},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(m);t.default=b},39:function(e,t,n){"use strict";var r=n(32),a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var a,h=new d.default;function v(r){a=e((0,s.default)(h)),g.canUseDOM?t.call(r,a):n&&(a=n(a))}var g=function(e){function t(e){var n;return(0,o.default)(this,t),n=(0,u.default)(this,(0,i.default)(t).call(this,e)),t.canUseDOM||(h.add((0,f.default)((0,f.default)(n))),v((0,f.default)((0,f.default)(n)))),n}return(0,l.default)(t,e),(0,c.default)(t,null,[{key:"peek",value:function(){return a}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=a;return a=void 0,h.clear(),e}}]),(0,c.default)(t,[{key:"componentDidMount",value:function(){h.add(this),v(this)}},{key:"componentDidUpdate",value:function(){v(this)}},{key:"componentWillUnmount",value:function(){h.delete(this),v(this)}},{key:"render",value:function(){return m.default.createElement(r,null,this.props.children)}}]),t}(m.Component);return(0,p.default)(g,"canUseDOM","undefined"!=typeof window),(0,p.default)(g,"contextTypes",r.contextTypes),(0,p.default)(g,"displayName","SideEffect(".concat((0,y.getDisplayName)(r),")")),g}};var o=a(n(12)),u=a(n(21)),i=a(n(22)),c=a(n(13)),l=a(n(23)),f=a(n(58)),p=a(n(19)),s=a(n(40)),d=a(n(30)),m=r(n(0)),y=n(33)},40:function(e,t,n){var r=n(41),a=n(42),o=n(50);e.exports=function(e){return r(e)||a(e)||o()}},41:function(e,t,n){var r=n(63);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},42:function(e,t,n){var r=n(43),a=n(47);e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},43:function(e,t,n){e.exports=n(44)},44:function(e,t,n){n(24),n(45),e.exports=n(5).Array.from},45:function(e,t,n){"use strict";var r=n(29),a=n(11),o=n(35),u=n(68),i=n(69),c=n(54),l=n(46),f=n(62);a(a.S+a.F*!n(70)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,p,s=o(e),d="function"==typeof this?this:Array,m=arguments.length,y=m>1?arguments[1]:void 0,h=void 0!==y,v=0,g=f(s);if(h&&(y=r(y,m>2?arguments[2]:void 0,2)),null==g||d==Array&&i(g))for(n=new d(t=c(s.length));t>v;v++)l(n,v,h?y(s[v],v):s[v]);else for(p=g.call(s),n=new d;!(a=p.next()).done;v++)l(n,v,h?u(p,y,[a.value,v],!0):a.value);return n.length=v,n}})},46:function(e,t,n){"use strict";var r=n(26),a=n(52);e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},47:function(e,t,n){e.exports=n(48)},48:function(e,t,n){n(37),n(24),e.exports=n(49)},49:function(e,t,n){var r=n(56),a=n(16)("iterator"),o=n(36);e.exports=n(5).isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(r(t))}},50:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},51:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),u=n(3),i=n.n(u),c=n(15),l=(n(6),n(2)),f=n.n(l),p=n(28);n(14);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,y(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.product;return a.a.createElement("div",{className:"product"},a.a.createElement(f.a,{href:{pathname:"/product",query:{id:e.id}}},a.a.createElement("a",null,e.image&&a.a.createElement("img",{className:"image fluid",src:e.image,alt:e.title}),a.a.createElement("span",{className:"price"},Object(p.a)(e.price)))))}}])&&d(n.prototype,r),o&&d(n,o),t}(),g=n(8),b=n(17),E=n.n(b);function w(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query PAGINATION_QUERY {\n    productsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return w=function(){return e},e}var O=i()(w()),x=function(e){return a.a.createElement(o.Query,{query:O},function(t){var n=t.data,r=t.loading;if(t.error,r)return a.a.createElement("p",null,"Loading...");var o=n.productsConnection.aggregate.count,u=Math.ceil(o/g.a),i=e.page;return a.a.createElement(a.a.Fragment,null,a.a.createElement(E.a,null,a.a.createElement("title",null,"Artist Store — Page ",i," of ",u)),a.a.createElement("div",{className:"pagination"},a.a.createElement(f.a,{prefetch:!0,href:{pathname:"products",query:{page:i-1}}},a.a.createElement("a",{"aria-disabled":i<=1},"← Previous")),a.a.createElement("p",null,"Page ",i," of ",u),a.a.createElement(f.a,{prefetch:!0,href:{pathname:"products",query:{page:i+1}}},a.a.createElement("a",{"aria-disabled":i>=u},"Next →"))))})};function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ",") {\n    products(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n      id\n      title\n      price\n      description\n      image\n    }\n  }\n"]);return A=function(){return e},e}n.d(t,"a",function(){return C});var C=i()(A(),g.a),N=c.b.div.withConfig({displayName:"Products__ProductsGrid",componentId:"sc-9nbhf4-0"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:50px;"]),T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,S(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;return a.a.createElement(o.Query,{query:C,variables:{skip:this.props.page*g.a-g.a},fetchPolicy:"network-only"},function(t){var n=t.data,r=t.error;return t.loading?a.a.createElement("p",null,"Loading..."):r?a.a.createElement(N,null,a.a.createElement(f.a,{href:"/productAdd"},a.a.createElement("a",null,a.a.createElement("img",{src:"/static/add.svg",alt:"Add a Product"}))),a.a.createElement("p",null,"Error: ",r.message)):(console.log(n),a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,a.a.createElement(f.a,{href:"/productAdd"},a.a.createElement("a",null,a.a.createElement("img",{src:"/static/add.svg",alt:"Add a Product"}))),n.products.map(function(e){return a.a.createElement(v,{product:e,key:e.id})})),a.a.createElement(x,{page:e.props.page})))})}}])&&k(n.prototype,r),u&&k(n,u),t}();t.b=T},8:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r="https://artist-store-yoga-prod.herokuapp.com",a=7}},[[310,1,0]]]);