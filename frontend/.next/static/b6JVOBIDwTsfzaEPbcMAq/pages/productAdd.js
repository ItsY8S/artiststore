(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{17:function(e,t,n){e.exports=n(38)},20:function(e,t,n){e.exports=n(57)},28:function(e,t,n){"use strict";t.a=function(e){var t={style:"currency",currency:"USD",minimumFractionDigits:2};return e%100==0&&(t.minimumFractionDigits=0),new Intl.NumberFormat("en-US",t).format(e/100)}},309:function(e,t,n){__NEXT_REGISTER_PAGE("/productAdd",function(){return e.exports=n(328),{page:e.exports.default}})},328:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),i=(n(51),n(4)),c=n.n(i),u=n(1),l=n(3),s=n.n(l),f=(n(28),n(74),n(72)),p=n(10),d=n(20),m=n.n(d);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function v(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){h(o,r,a,i,c,"next",e)}function c(e){h(o,r,a,i,c,"throw",e)}i(void 0)})}}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation CREATE_PRODUCT_MUTATION(\n    $title: String!\n    $price: Int!\n    $description: String!\n    $image: String\n  ) {\n    createProduct(\n      title: $title\n      price: $price\n      description: $description\n      image: $image\n    ) {\n      id\n    }\n  }\n"]);return S=function(){return e},e}var P=s()(S()),j=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return r=this,a=(e=b(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==y(a)&&"function"!=typeof a?w(r):a,O(w(w(n)),"state",{title:"",price:0,description:"",image:""}),O(w(w(n)),"handleChange",function(e){var t=e.target,r=t.name,a=t.type,o=t.value,i="number"===a?parseFloat(o):o;n.setState(O({},r,i))}),O(w(w(n)),"handleSwapInput",function(e){if(null==document.querySelector(".exists")){Object(f.a)(e.target,{class:"big-again fluid"});var t=document.createElement("input");Object(f.a)(t,{class:"live-input exists product-hero",type:"file",accept:"image/png, image/jpeg",name:"image",style:"display: none",onchange:"document.getElementById('hero').src = window.URL.createObjectURL(this.files[0])"}),e.target.parentNode.appendChild(t),t.click()}else{console.log("Still click it."),document.querySelector(".live-input").click()}}),O(w(w(n)),"uploadFile",function(){var e=v(c.a.mark(function e(t){var r,a,o,i,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("uploading file"),r=t.target.files,(a=new FormData).append("file",r[0]),a.append("upload_preset","artiststore"),e.next=7,fetch("https://api.cloudinary.com/v1_1/y8s/image/upload",{method:"POST",body:a});case 7:return o=e.sent,e.next=10,o.json();case 10:i=e.sent,console.log(i),n.setState({image:i.secure_url}),u=document.querySelector("#hero"),""!==n.state.image&&(u.src=n.state.image,u.classList.remove("two-hundred"));case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;return a.a.createElement(u.Mutation,{mutation:P,variables:this.state},function(t,n){n.loading;var r,o=n.error;return a.a.createElement("form",{onSubmit:(r=v(c.a.mark(function e(n){var r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t();case 3:r=e.sent,console.log(r),m.a.push({pathname:"/products"});case 6:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},a.a.createElement(p.a,{error:o}),a.a.createElement("div",{className:"product-details"},a.a.createElement("div",{className:"product-hero"},a.a.createElement("label",{htmlFor:"file"},a.a.createElement("img",{id:"hero",className:"fluid two-hundred",src:"/static/camera-icon.svg",alt:"Add Product Image"})),a.a.createElement("input",{type:"file",className:"live-input product-hero big-again fluid",id:"file",accept:"image/png, image/jpeg",name:"image",style:{display:"none"},onChange:e.uploadFile})),a.a.createElement("div",{className:"product-info"},a.a.createElement("div",{className:"title-and-price"},a.a.createElement("input",{className:"product-title live-input",type:"text",name:"title",placeholder:"Product Title",value:e.state.title,onChange:e.handleChange,required:!0}),a.a.createElement("input",{className:"product-price live-input",type:"number",name:"price",placeholder:"Price",value:e.state.price,onChange:e.handleChange,required:!0})),a.a.createElement("div",{className:"product-description"},a.a.createElement("textarea",{className:"autoExpand live-input",name:"description",placeholder:"Product Description",rows:"5",type:"text",onChange:e.handleChange,value:e.state.description})),a.a.createElement("div",{className:"product-buttons"},a.a.createElement("button",{className:"inherit"},"Back"),a.a.createElement("button",{className:"inherit save",type:"submit"},"Add")))))})}}])&&g(n.prototype,r),o&&g(n,o),t}(),_=n(84);t.default=function(e){return a.a.createElement(_.a,null,a.a.createElement(o.a,{title:"Add Product"}),a.a.createElement(j,null))}},38:function(e,t,n){"use strict";var r=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=h,t.default=void 0;var a=r(n(30)),o=r(n(12)),i=r(n(13)),c=r(n(21)),u=r(n(22)),l=r(n(23)),s=r(n(19)),f=r(n(0)),p=r(n(6)),d=r(n(39)),m=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return null}}]),t}(f.default.Component);(0,s.default)(m,"contextTypes",{headManager:p.default.object});var y="next-head";function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return[f.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var v=["name","httpEquiv","charSet","itemProp","property"],g=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var b=(0,d.default)(function(e){return e.map(function(e){return f.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return f.default.Fragment&&t.type===f.default.Fragment?e.concat(f.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(h("")).filter(Boolean).filter((t=new a.default,n=new a.default,r=new a.default,o={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var i=0,c=v.length;i<c;i++){var u=v[i];if(e.props.hasOwnProperty(u))if("charSet"===u){if(r.has(u))return!1;r.add(u)}else{var l=e.props[u],s=o[u]||new a.default;if(s.has(l)&&-1===g.indexOf(l))return!1;s.add(l),o[u]=s}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+y,r=e.key||t;return f.default.cloneElement(e,{key:r,className:n})});var t,n,r,o},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(m);t.default=b},39:function(e,t,n){"use strict";var r=n(32),a=n(9);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var a,h=new d.default;function v(r){a=e((0,p.default)(h)),g.canUseDOM?t.call(r,a):n&&(a=n(a))}var g=function(e){function t(e){var n;return(0,o.default)(this,t),n=(0,i.default)(this,(0,c.default)(t).call(this,e)),t.canUseDOM||(h.add((0,s.default)((0,s.default)(n))),v((0,s.default)((0,s.default)(n)))),n}return(0,l.default)(t,e),(0,u.default)(t,null,[{key:"peek",value:function(){return a}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=a;return a=void 0,h.clear(),e}}]),(0,u.default)(t,[{key:"componentDidMount",value:function(){h.add(this),v(this)}},{key:"componentDidUpdate",value:function(){v(this)}},{key:"componentWillUnmount",value:function(){h.delete(this),v(this)}},{key:"render",value:function(){return m.default.createElement(r,null,this.props.children)}}]),t}(m.Component);return(0,f.default)(g,"canUseDOM","undefined"!=typeof window),(0,f.default)(g,"contextTypes",r.contextTypes),(0,f.default)(g,"displayName","SideEffect(".concat((0,y.getDisplayName)(r),")")),g}};var o=a(n(12)),i=a(n(21)),c=a(n(22)),u=a(n(13)),l=a(n(23)),s=a(n(58)),f=a(n(19)),p=a(n(40)),d=a(n(30)),m=r(n(0)),y=n(33)},4:function(e,t,n){e.exports=n(55)},40:function(e,t,n){var r=n(41),a=n(42),o=n(50);e.exports=function(e){return r(e)||a(e)||o()}},41:function(e,t,n){var r=n(63);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},42:function(e,t,n){var r=n(43),a=n(47);e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},43:function(e,t,n){e.exports=n(44)},44:function(e,t,n){n(24),n(45),e.exports=n(5).Array.from},45:function(e,t,n){"use strict";var r=n(29),a=n(11),o=n(35),i=n(68),c=n(69),u=n(54),l=n(46),s=n(62);a(a.S+a.F*!n(70)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,f,p=o(e),d="function"==typeof this?this:Array,m=arguments.length,y=m>1?arguments[1]:void 0,h=void 0!==y,v=0,g=s(p);if(h&&(y=r(y,m>2?arguments[2]:void 0,2)),null==g||d==Array&&c(g))for(n=new d(t=u(p.length));t>v;v++)l(n,v,h?y(p[v],v):p[v]);else for(f=g.call(p),n=new d;!(a=f.next()).done;v++)l(n,v,h?i(f,y,[a.value,v],!0):a.value);return n.length=v,n}})},46:function(e,t,n){"use strict";var r=n(26),a=n(52);e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},47:function(e,t,n){e.exports=n(48)},48:function(e,t,n){n(37),n(24),e.exports=n(49)},49:function(e,t,n){var r=n(56),a=n(16)("iterator"),o=n(36);e.exports=n(5).isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(r(t))}},50:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},51:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n(3),c=n.n(i),u=n(15),l=(n(6),n(2)),s=n.n(l),f=n(28);n(14);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,y(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.product;return a.a.createElement("div",{className:"product"},a.a.createElement(s.a,{href:{pathname:"/product",query:{id:e.id}}},a.a.createElement("a",null,e.image&&a.a.createElement("img",{className:"image fluid",src:e.image,alt:e.title}),a.a.createElement("span",{className:"price"},Object(f.a)(e.price)))))}}])&&d(n.prototype,r),o&&d(n,o),t}(),g=n(8),b=n(17),E=n.n(b);function w(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query PAGINATION_QUERY {\n    productsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return w=function(){return e},e}var O=c()(w()),S=function(e){return a.a.createElement(o.Query,{query:O},function(t){var n=t.data,r=t.loading;if(t.error,r)return a.a.createElement("p",null,"Loading...");var o=n.productsConnection.aggregate.count,i=Math.ceil(o/g.a),c=e.page;return a.a.createElement(a.a.Fragment,null,a.a.createElement(E.a,null,a.a.createElement("title",null,"Artist Store — Page ",c," of ",i)),a.a.createElement("div",{className:"pagination"},a.a.createElement(s.a,{prefetch:!0,href:{pathname:"products",query:{page:c-1}}},a.a.createElement("a",{"aria-disabled":c<=1},"← Previous")),a.a.createElement("p",null,"Page ",c," of ",i),a.a.createElement(s.a,{prefetch:!0,href:{pathname:"products",query:{page:c+1}}},a.a.createElement("a",{"aria-disabled":c>=i},"Next →"))))})};function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ",") {\n    products(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n      id\n      title\n      price\n      description\n      image\n    }\n  }\n"]);return N=function(){return e},e}n.d(t,"a",function(){return C});var C=c()(N(),g.a),A=u.b.div.withConfig({displayName:"Products__ProductsGrid",componentId:"sc-9nbhf4-0"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:50px;"]),T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,x(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;return a.a.createElement(o.Query,{query:C,variables:{skip:this.props.page*g.a-g.a},fetchPolicy:"network-only"},function(t){var n=t.data,r=t.error;return t.loading?a.a.createElement("p",null,"Loading..."):r?a.a.createElement(A,null,a.a.createElement(s.a,{href:"/productAdd"},a.a.createElement("a",null,a.a.createElement("img",{src:"/static/add.svg",alt:"Add a Product"}))),a.a.createElement("p",null,"Error: ",r.message)):(console.log(n),a.a.createElement(a.a.Fragment,null,a.a.createElement(A,null,a.a.createElement(s.a,{href:"/productAdd"},a.a.createElement("a",null,a.a.createElement("img",{src:"/static/add.svg",alt:"Add a Product"}))),n.products.map(function(e){return a.a.createElement(v,{product:e,key:e.id})})),a.a.createElement(S,{page:e.props.page})))})}}])&&j(n.prototype,r),i&&j(n,i),t}();t.b=T},64:function(e,t,n){"use strict";var r=n(4),a=n.n(r),o=n(0),i=n.n(o),c=n(1),u=n(3),l=n.n(u),s=n(10),f=n(2),p=n.n(f),d=n(20),m=n.n(d),y=n(14);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    signin(email: $email, password: $password) {\n      id\n      name\n      email\n    }\n  }\n"]);return S=function(){return e},e}var P=l()(S()),j=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return r=this,a=(e=b(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==h(a)&&"function"!=typeof a?w(r):a,O(w(w(n)),"state",{name:"",email:"",password:""}),O(w(w(n)),"saveToState",function(e){n.setState(O({},e.target.name,e.target.value))}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,i.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;return i.a.createElement(c.Mutation,{mutation:P,variables:this.state,refetchQueries:[{query:y.a}]},function(t,n){var r,o,c=n.error;return n.loading,i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{error:c}),i.a.createElement("form",{className:"card",method:"POST",autoComplete:"off",onSubmit:(r=a.a.mark(function n(r){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,t();case 3:e.setState({name:"",email:"",password:""}),m.a.push({pathname:"/"});case 5:case"end":return n.stop()}},n,this)}),o=function(){var e=this,t=arguments;return new Promise(function(n,a){var o=r.apply(e,t);function i(e){v(o,n,a,i,c,"next",e)}function c(e){v(o,n,a,i,c,"throw",e)}i(void 0)})},function(e){return o.apply(this,arguments)})},i.a.createElement("h2",{className:"mb-50"},"Artist Store"),i.a.createElement("div",{className:"white"}," "),i.a.createElement("div",{className:"input-group full-width"},i.a.createElement("input",{className:"full-width",type:"email",name:"email",required:!0,value:e.state.email,onChange:e.saveToState}),i.a.createElement("label",{className:"text-black",htmlFor:"email"},"Email")),i.a.createElement("div",{className:"input-group full-width"},i.a.createElement("input",{className:"full-width",type:"password",name:"password",required:"required",value:e.state.password,onChange:e.saveToState}),i.a.createElement("label",{htmlFor:"password"},"Password")),i.a.createElement("button",{className:"gradient btn",type:"submit"},"Sign In"),i.a.createElement("div",{className:"mt-25 flex-apart"},i.a.createElement("p",null,"Need an account?  ",i.a.createElement(p.a,{href:"/signup"},i.a.createElement("a",null,"Sign Up"))),i.a.createElement("p",null,i.a.createElement(p.a,{href:"/requestReset"},i.a.createElement("a",null,"Forgot Password?"))))))})}}])&&g(n.prototype,r),o&&g(n,o),t}();t.a=j},72:function(e,t,n){"use strict";function r(e,t){for(var n in t)e.setAttribute(n,t[n])}n.d(t,"a",function(){return r})},74:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(17),i=n.n(o);t.a=function(){return a.a.createElement(i.a,null,a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("link",{rel:"shortcut icon",href:"/static/favicon.png"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,600,600i,700,700i|Oswald:400,600",rel:"stylesheet"}),a.a.createElement("link",{href:"/static/css/normalize.css",rel:"stylesheet"}),a.a.createElement("link",{href:"/static/css/style.css",rel:"stylesheet"}),a.a.createElement("link",{href:"/static/css/skeleton.css",rel:"stylesheet"}),a.a.createElement("link",{href:"/static/css/nprogress.css",rel:"stylesheet"}),a.a.createElement("title",null,"Artist Store"))}},8:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r="https://artist-store-yoga-prod.herokuapp.com",a=7},84:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n(14),c=n(64);t.a=function(e){return a.a.createElement(o.Query,{query:i.a},function(t){var n=t.data;return t.loading?a.a.createElement("p",null,"Loading..."):n.me?e.children:a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Please sign in before continuing."),a.a.createElement(c.a,null))})}}},[[309,1,0]]]);