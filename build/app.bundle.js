!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){e.exports=React},function(e,t){e.exports=PropTypes},function(e,t,n){e.exports={APPBAR_HEIGHT:"3rem",container:"src-components-app-__App.module__container--JvP_f",appbar:"src-components-app-__App.module__appbar--19YHx",appcontent:"src-components-app-__App.module__appcontent--2H8I3",sidetab:"src-components-app-__App.module__sidetab--1n6Yp",tab:"src-components-app-__App.module__tab--2l3Wb",divider:"src-components-app-__App.module__divider--2_ouo",vertical:"src-components-app-__App.module__vertical--1KUpO",maincontent:"src-components-app-__App.module__maincontent--1hDC6",pane:"src-components-app-__App.module__pane--1gyI_"}},function(e,t,n){e.exports={container:"src-components-drawer-__DrawerLayout.module__container--BIhOu",viewport:"src-components-drawer-__DrawerLayout.module__viewport--1z2p_",drawer:"src-components-drawer-__DrawerLayout.module__drawer--2Q7Xt",content:"src-components-drawer-__DrawerLayout.module__content--20PP8",handle:"src-components-drawer-__DrawerLayout.module__handle--xgh_c"}},function(e,t,n){e.exports={container:"src-components-workspace-__WorkspaceLayout.module__container--CLz1g",background:"src-components-workspace-__WorkspaceLayout.module__background--1tGj1",foreground:"src-components-workspace-__WorkspaceLayout.module__foreground--19Bj6"}},function(e,t,n){e.exports={container:"src-components-sidebar-__SideBarLayout.module__container--IRmyy",sidebar:"src-components-sidebar-__SideBarLayout.module__sidebar--3QCjY",viewport:"src-components-sidebar-__SideBarLayout.module__viewport--YrPLf"}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),i=n.n(a);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u="flapjs",l={debug:"#7F8C8D",log:"#2ECC71",warn:"#f39c12",error:"#c0392b"};function s(e){return["background: ".concat(l[e]),"border-radius: 0.5em","color: white","font-weight: bold","padding: 2px 0.5em"]}function f(e){for(var t,n=["%c".concat(u),s(e).join(";")],r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];(t=console)[e].apply(t,n.concat(o))}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"out",value:function(e,t){f("log","["+e+"] "+t)}},{key:"error",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;f("error","["+e+"] "+(n?n.message+" : ":"")+t)}}],(n=null)&&c(t.prototype,n),r&&c(t,r),e}(),d=n(1),y=n.n(d),m=n(2),h=n.n(m);function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}var g=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.entities=t,this.defaultValue=n}return v(e,null,[{key:"fetchFromURL",value:function(t){return fetch(t).then(function(t){if(!t.ok)throw new Error(t.statusText);return t.text().then(function(t){return e.parse(t)})})}},{key:"parse",value:function(t){var n=new Map,r=t.split("\n"),o=0,a=!0,i=!1,c=void 0;try{for(var u,l=r[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var s=u.value;if(++o,!((s=s.trim()).startsWith("//")||s.length<=0)){var f=s.indexOf("=");if(f<0)throw new Error("Invalid language file format - cannot find assignment for line ".concat(o,"."));var p=s.substring(0,f).trim();if(p.length<=0)throw new Error("Invalid language entity name format - cannot be empty string.");if(/[^-_.A-Za-z0-9]/.test(p))throw new Error("Invalid language entity name format - entity name must only use alphanumeric characters, periods, hyphens, and dashes.");var d=s.substring(f+1).trim();n.set(p,d)}}}catch(e){i=!0,c=e}finally{try{a||null==l.return||l.return()}finally{if(i)throw c}}return new e(n)}}]),v(e,[{key:"hasEntityName",value:function(e){return this.entities.has(e)}},{key:"getTranslatedString",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(this.entities.has(e)){var o=this.entities.get(e);return i=n,o.replace(/\$(\d+)/g,function(e,t){var n=Number(t);return i.length>n?i[n]:"$"+n})}var a,i;return"function"==typeof this.defaultValue?(a=this.defaultValue).call.apply(a,[null,e].concat(n)):this.defaultValue}}]),e}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j="Localization",P=new g(new Map,"..."),k="en",C=new Map,D={localeCode:"default",getLocaleString:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return P.getTranslatedString.apply(P,[e].concat(n))},changeLocale:function(e){throw new Error("No localization provider found for locale '".concat(e,"'."))}},N=o.a.createContext(D),x=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=O(this,E(t).call(this,e))).shouldUpdateLocale=!0,n.state={localeCode:"default",getLocaleString:function(e){for(var t=n.state.localeCode,r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];if(C.has(t)){var i=C.get(t);if(i.hasEntityName(e))return i.getTranslatedString.apply(i,[e].concat(o));if(C.has(k)){var c=C.get(t);return c.hasEntityName(e)?c.getTranslatedString.apply(c,[e].concat(o)):L(e,o)}return null}return L(e,o)},changeLocale:function(e){n.state.localeCode!==e&&(function(e){return C.has(e)?Promise.resolve(e):(C.set(e,P),g.fetchFromURL(function(e){return"langs/"+e+".lang"}(e)).then(function(t){return C.set(e,t),e}).catch(function(t){return p.error(j,"Could not find language file for locale '".concat(e,"'."),t),C.delete(e),null}))}(e).then(function(t){n.shouldUpdateLocale&&(t?n.setState({localeCode:e}):n.setState({localeCode:D.localeCode}))}),n.shouldUpdateLocale&&n.setState({localeCode:e}))}},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.state.changeLocale(this.props.localeCode)}},{key:"componentWillUnmount",value:function(){this.shouldUpdateLocale=!1}},{key:"render",value:function(){return o.a.createElement(N.Provider,{value:this.state},this.props.children)}}])&&_(n.prototype,r),a&&_(n,a),t}();function L(e,t){return t.length>0?e+JSON.stringify(t):e}x.propTypes={localeCode:y.a.string,children:y.a.node.isRequired},x.defaultProps={localeCode:D.localeCode};var T=N.Consumer;function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,H(t).call(this,e))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.entity,n=e.params;return o.a.createElement(T,null,function(e){return e.getLocaleString.apply(e,[t].concat(M(n)))})}}])&&B(n.prototype,r),a&&B(n,a),t}();R.propTypes={entity:y.a.string.isRequired,params:y.a.arrayOf(y.a.string)},R.defaultProps={params:[]};var I=R,U=n(4),V=n.n(U);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),X(this,q(t).call(this,e))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.renderBackground;return o.a.createElement("section",{ref:this.container,className:V.a.container+" "+(e.className||"")},o.a.createElement("div",{className:V.a.foreground},e.children),o.a.createElement("div",{className:V.a.background},t&&t(this)))}}])&&Y(n.prototype,r),a&&Y(n,a),t}();J.propTypes={className:y.a.string,children:y.a.node,renderBackground:y.a.func},J.defaultProps={};var Q=J,$=n(3),K=n.n($);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var oe=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=te(t).call(this,e))||"object"!==Z(a)&&"function"!=typeof a?ne(r):a).state={size:100},n.container=o.a.createRef(),n.onDrawerHandleDragBegin=n.onDrawerHandleDragBegin.bind(ne(n)),n.onDrawerHandleDragMove=n.onDrawerHandleDragMove.bind(ne(n)),n.onDrawerHandleDragEnd=n.onDrawerHandleDragEnd.bind(ne(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(t,o.a.Component),n=t,(r=[{key:"onDrawerHandleDragBegin",value:function(e){document.addEventListener("mousemove",this.onDrawerHandleDragMove),document.addEventListener("mouseup",this.onDrawerHandleDragEnd)}},{key:"onDrawerHandleDragMove",value:function(e){var t,n=this.container.current.getBoundingClientRect();switch(this.props.side){case"left":t=(e.clientX-n.left)/n.width;break;case"right":t=-(e.clientX-n.right)/n.width;break;case"top":t=(e.clientY-n.top)/n.height;break;case"bottom":t=-(e.clientY-n.bottom)/n.height;break;default:throw new Error("Invalid drawer side for layout")}t=Math.min(Math.max(0,100*t),100),Math.abs(this.state.size-t)>.1&&this.setState({size:t})}},{key:"onDrawerHandleDragEnd",value:function(e){document.removeEventListener("mousemove",this.onDrawerHandleDragMove),document.removeEventListener("mouseup",this.onDrawerHandleDragEnd)}},{key:"render",value:function(){var e=this.props,t=this.state,n=e.side,r=t.size,a=e.open,i="left"===n||"right"===n,c={width:i?"".concat(r,"%"):"100%",height:i?"100%":"".concat(r,"%")},u="left"===n?"row":"right"===n?"row-reverse":"top"===n?"column":"column-reverse";return o.a.createElement("div",{ref:this.container,className:K.a.container,style:{flexDirection:u}},o.a.createElement("div",{className:K.a.drawer+" "+(e.className||"")+" "+n+(a?" open":""),style:c},o.a.createElement("div",{className:K.a.handle,role:"presentation",onMouseDown:this.onDrawerHandleDragBegin}),o.a.createElement("div",{className:K.a.content},e.renderDrawer&&e.renderDrawer(this))),o.a.createElement("div",{className:K.a.viewport},e.children))}}])&&ee(n.prototype,r),a&&ee(n,a),t}();oe.propTypes={className:y.a.string,children:y.a.node,open:y.a.bool,side:y.a.oneOf(["left","right","top","bottom"]),renderDrawer:y.a.func,renderViewport:y.a.func},oe.defaultProps={side:"left",open:!0};var ae=oe,ie=n(5),ce=n.n(ie);function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function se(e,t){return!t||"object"!==ue(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var de=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),se(this,fe(t).call(this,e))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.side,n="left"===t||"right"===t,r="left"===t?"row":"right"===t?"row-reverse":"top"===t?"column":"column-reverse";return o.a.createElement("div",{className:ce.a.container+" "+(e.className||""),style:{flexDirection:r}},o.a.createElement("div",{className:ce.a.sidebar+" "+t},e.renderSideBar&&e.renderSideBar(this,n)),o.a.createElement("div",{className:ce.a.viewport},e.children))}}])&&le(n.prototype,r),a&&le(n,a),t}();de.propTypes={className:y.a.string,children:y.a.node,renderSideBar:y.a.func,side:y.a.oneOf(["left","right","top","bottom"])},de.defaultProps={side:"left"};var ye=de;function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var he=o.a.createElement("path",{fill:"currentColor",d:"M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"}),be=function(e){return o.a.createElement("svg",me({viewBox:"0 0 24 24"},e),he)};function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ge=o.a.createElement("path",{fill:"currentColor",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"}),we=function(e){return o.a.createElement("svg",ve({viewBox:"0 0 24 24"},e),ge)};function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Oe=o.a.createElement("path",{fill:"currentColor",d:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"}),Ee=function(e){return o.a.createElement("svg",_e({viewBox:"0 0 24 24"},e),Oe)};function Se(e){return(Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function je(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Pe(e,t){return!t||"object"!==Se(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ke(e){return(ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var De=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Pe(this,ke(t).call(this,e))).state={open:!1,side:"right"},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props;return o.a.createElement("div",{className:h.a.container+(t.className||"")},o.a.createElement(x,{localeCode:"en"},o.a.createElement("nav",{className:h.a.appbar},o.a.createElement("h2",null,"Flap.js"),o.a.createElement("p",null,o.a.createElement(I,{entity:"hi"})),o.a.createElement("button",{onClick:function(){return e.setState(function(e){return{open:!e.open}})}})),o.a.createElement("div",{className:h.a.appcontent},o.a.createElement(Q,{renderBackground:function(){return o.a.createElement("div",{style:{background:"dodgerblue",width:"100%",height:"100%"}})}},o.a.createElement(ye,{side:this.state.side,renderSideBar:function(){return o.a.createElement("div",{className:h.a.sidetab},o.a.createElement("button",{className:h.a.tab,onClick:function(){return e.setState({open:!0})}},o.a.createElement(be,{className:"icon",color:"#FFFFFF"})),o.a.createElement("button",{className:h.a.tab,onClick:function(){return e.setState({open:!0})}},o.a.createElement(we,{className:"icon",color:"#FFFFFF"})),o.a.createElement("button",{className:h.a.tab,onClick:function(){return e.setState({open:!0})}},o.a.createElement(Ee,{className:"icon",color:"#FFFFFF"})),o.a.createElement("div",{className:h.a.divider}),o.a.createElement("button",{className:h.a.tab,onClick:function(){return e.setState({open:!0})}},o.a.createElement(we,{className:"icon",color:"#FFFFFF"})))}},o.a.createElement(ae,{side:this.state.side,open:this.state.open,renderDrawer:function(){return o.a.createElement("div",{style:{width:"100%",height:"100%"}},"I am content")}},o.a.createElement("div",{style:{background:"white",width:"100%",height:"100%"}},"I am content")))))))}}])&&je(n.prototype,r),a&&je(n,a),t}();De.propTypes={className:y.a.string},De.defaultProps={};var Ne,xe=De;p.out("Main","Preparing app for ".concat(NODE_ENV," environment...")),p.out("Main","Loading app version '".concat("0.5.0","'...")),Ne=xe,i.a.render(o.a.createElement(Ne),document.getElementById("root"))}]);