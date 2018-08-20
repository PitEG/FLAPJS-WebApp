(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{13:function(n,e,t){(n.exports=t(2)(!1)).push([n.i,".quote-container {\n  font-family: 'Arvo', sans-serif;\n\n  color: white;\n  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);\n}\n.quote {\n  min-width: 7em;\n  font-size: 3em;\n  text-align: left;\n}\n.quote, .subquote {\n  transition: text-shadow 0.8s ease;\n}\n.quote:hover, .subquote:hover {\n  text-shadow: 0px 0px 8px white;\n}\n.subquote {\n  cursor: pointer;\n  font-size: 2em;\n  text-align: right;\n\n  padding-top: 10px;\n}\n",""])},14:function(n,e,t){(n.exports=t(2)(!1)).push([n.i,".landing-container {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.landing-container .content-container {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  min-height: 100vh;\n  background-color: #077787;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);\n\n  z-index: 1;\n}\n.landing-container header {\n  position: relative;\n  display: block;\n  height: 6em;\n  border-bottom: 4px solid black;\n\n  background: white;\n}\n.landing-container .content {\n  flex: 1;\n  position: relative;\n  display: block;\n  min-height: 240px;\n}\n.landing-container footer {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-top: 6em;\n  margin-bottom: 1em;\n}\n.nobreak {\n  white-space: nowrap!important;\n}\n\n#logo {\n  width: 70%;\n  height: 100%;\n}\n\n/** QUOTE CONTAINER **/\n.content-quote-container {\n  margin-top: 8vw;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: calc((60vw + 60vh) / 2);\n\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n@media screen and (max-height: 600px) {\n  .content-quote-container {\n    font-size: 0.7em;\n  }\n}\n@media screen and (max-height: 520px) {\n  .content-quote-container {\n    opacity: 0;\n  }\n}\n\n/** TUTORIAL BUTTON **/\n#tutorial-button {\n  background: none;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  padding-top: 1em;\n\n  font-family: 'Arvo', sans-serif;\n  /* If increase font, subtract from bottom-padding of launch button */\n  font-size: 1.2em;\n\n  color: lightgray;\n  transition: color 0.3s ease;\n}\n#tutorial-button:hover {\n  color: white;\n}\n\n/** LAUNCH BUTTON **/\n\n.launch-container {\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  padding-bottom: 1em;\n}\n#launch-button {\n  background: none;\n  outline: none;\n  border: 8px solid white;\n  padding: 8px;\n  cursor: pointer;\n\n  font-family: 'Arvo', sans-serif;\n  font-size: 4em;\n\n  width: 100%;\n  max-width: 80vw;\n  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\n\n  color: white;\n  transition: color 0.3s ease, background-color 0.3s ease, text-shadow 0.3s ease;\n}\n#launch-button:hover {\n  background: white;\n  color: #05535E;\n  text-shadow: none;\n}\n@media screen and (max-width: 400px) {\n  #launch-button {\n    font-size: 2em;\n    animation: fadein 0.8s linear forwards;\n  }\n  #launch-button:after {\n    content: \"pls?\";\n  }\n  #launch-button:hover:after {\n    content: \"thx!\";\n  }\n}\n@keyframes fadein {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n@keyframes fadeout {\n    0% { opacity: 1; }\n    80% { opacity: 0; }\n    100% { opacity: 0; }\n}\n\n/** SET CONTAINER **/\n\n.set-container {\n  display: flex;\n  flex-direction: row;\n  color: white;\n\n  width: 100%;\n}\n.set-container .openset, .set-container .closeset {\n  display: inline-block;\n  padding: 20px;\n\n  font-family: 'Arvo', sans-serif;\n  font-size: 4em;\n  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\n}\n.set-container .openset {\n  text-align: right;\n  width: 4em;\n}\n.set-container .closeset {\n  text-align: left;\n  width: 4em;\n}\n\n/** INFO LINKS **/\n\n.landing-container a.info {\n  cursor: pointer;\n  color: #C9B55D;\n  fill: #C9B55D;\n\n  transition: color 0.3s ease, fill 0.3s ease;\n}\n.landing-container a.info:hover {\n  color: #DEC557;\n  fill: #DEC557;\n}\n.landing-container a.info > svg {\n  display: inline-block;\n  vertical-align: middle;\n  margin-bottom: 3px;\n  margin-right: 5px;\n}\n\n/** RETURN HOME ICON **/\n#return-home {\n  position: absolute;\n  bottom: -3em;\n  right: 0;\n  margin-right: 2em;\n  cursor: pointer;\n\n  fill: gray;\n  transition: fill 0.3s ease;\n}\n#return-home:hover {\n  fill: #DEC557\n}\n\n/** UTILITY **/\n\n.landing-container .utility {\n  margin-bottom: 2em;\n}\n.landing-container .utility > * {\n  line-height: 2em;\n}\n\n/** CREDITS **/\n\n.landing-container .credits {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1em;\n\n  color: gray;\n}\n.landing-container .credits > * {\n  padding-right: 10px;\n  padding-left: 10px;\n  margin-bottom: 1em;\n}\n.landing-container .credits .space {\n  flex: 1;\n}\n.landing-container .credits .left {\n  flex: 1;\n  text-align: right;\n\n  max-width: 10em;\n}\n.landing-container .credits .right {\n  flex: 1;\n  text-align: left;\n\n  max-width: 10em;\n}\n.landing-container .credits .left div {\n  font-weight: bold;\n}\n.landing-container .credits .right div {\n  font-weight: bold;\n}\n.landing-container .credits a {\n  display: inline-block;\n}\n.landing-container .credits .left a {\n  padding-left: 10px;\n}\n.landing-container .credits .right a {\n  padding-right: 10px;\n}\n.landing-container .credits a:hover {\n  cursor: pointer;\n  color: #DEC557;\n\n  transition: color 0.3s ease;\n}\n@media screen and (max-width: 480px) {\n  .landing-container .credits {\n    flex-direction: column;\n  }\n  .landing-container .credits .left, .landing-container .credits .right {\n    text-align: center;\n\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .landing-container .credits .left a {\n    padding-left: 0;\n  }\n  .landing-container .credits .right a {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n\n/** SUBTITLES **/\n\n.landing-container .subtitle-container {\n  margin-top: 3em;\n}\n.landing-container .subtitle {\n  margin: 10px;\n\n  font-size: 14px;\n  color: lightgray;\n}\n",""])},73:function(n,e,t){var o=t(13);"string"==typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},i=t(1)(o,a);o.locals&&(n.exports=o.locals),n.hot.accept(13,function(){var e=t(13);if("string"==typeof e&&(e=[[n.i,e,""]]),!function(n,e){var t,o=0;for(t in n){if(!e||n[t]!==e[t])return!1;o++}for(t in e)o--;return 0===o}(o.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(e)}),n.hot.dispose(function(){i()})},74:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=function(n){return n&&n.__esModule?n:{default:n}}(t(0));t(73);var i=function(n){function e(n){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,a.default.Component),o(e,[{key:"render",value:function(){return a.default.createElement("div",{className:"quote-container"},a.default.createElement("div",{className:"quote"},this.props.value),a.default.createElement("div",{className:"subquote"},this.props.label))}}]),e}();e.default=i},75:function(n,e,t){n.exports=t.p+"images/flapjs.svg"},76:function(n,e,t){var o=t(14);"string"==typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},i=t(1)(o,a);o.locals&&(n.exports=o.locals),n.hot.accept(14,function(){var e=t(14);if("string"==typeof e&&(e=[[n.i,e,""]]),!function(n,e){var t,o=0;for(t in n){if(!e||n[t]!==e[t])return!1;o++}for(t in e)o--;return 0===o}(o.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(e)}),n.hot.dispose(function(){i()})},77:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=function(){return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,e){var t=[],o=!0,a=!1,i=void 0;try{for(var r,l=n[Symbol.iterator]();!(o=(r=l.next()).done)&&(t.push(r.value),!e||t.length!==e);o=!0);}catch(n){a=!0,i=n}finally{try{!o&&l.return&&l.return()}finally{if(a)throw i}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=u(t(0)),r=t(66);t(76);var l=u(t(75)),c=u(t(74));function u(n){return n&&n.__esModule?n:{default:n}}var s=[["Explore what it means to be 'computable'.","- Prof. Mia Minnes"],["okay foshos foshos","- David"],["also mood","- David"],["Lush has an interactive background in Mozilla but not in Google Chrome","- David"],["fasho","- Maya"],["yeah I can!","- Maya"],["uh","- Andrew"],["Hi Andrew","- Erik"],["Hey Erik","- Andrew"],["Hi","- Lixuan"],["Good almost afternoon (I totally didn’t just wake up).","- Noah"],["RONALDO IS MY GOD","- David"]],d=a(s[Math.floor(Math.random()*s.length)],2),f=d[0],p=d[1],m=function(n){function e(n){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.footer=i.default.createRef(),t.returnHome=i.default.createRef(),t.onLaunchButton=t.onLaunchButton.bind(t),t.onTutorialButton=t.onTutorialButton.bind(t),t.onReturnHomeButton=t.onReturnHomeButton.bind(t),t.onReportBugButton=t.onReportBugButton.bind(t),t.onAboutButton=t.onAboutButton.bind(t),t.onHelpButton=t.onHelpButton.bind(t),t.onGithubButton=t.onGithubButton.bind(t),t}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,i.default.Component),o(e,[{key:"componentDidMount",value:function(){var n=this;window.onscroll=function(e){var t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight,o=window.pageYOffset,a=Math.round(t-o)/5;n.footer.style.bottom=a+"px",n.returnHome.style.opacity=o/t}}},{key:"onLaunchButton",value:function(n){document.body.style.animation="fadeout 300ms ease forwards",setTimeout(function(){window.location.href="app.html"},300)}},{key:"onTutorialButton",value:function(n){window.open("https://github.com/flapjs/FLAPJS-WebApp/blob/master/HELP.md","_blank").focus()}},{key:"onReturnHomeButton",value:function(n){window.scrollTo({top:0,behavior:"smooth"})}},{key:"onReportBugButton",value:function(n){window.open("https://github.com/flapjs/FLAPJS-WebApp/","_blank").focus()}},{key:"onAboutButton",value:function(n){window.open("https://github.com/flapjs/FLAPJS-WebApp/blob/master/README.md","_blank").focus()}},{key:"onHelpButton",value:function(n){window.open("https://github.com/flapjs/FLAPJS-WebApp/blob/master/HELP.md","_blank").focus()}},{key:"onGithubButton",value:function(n){window.open("https://github.com/flapjs/FLAPJS-WebApp/","_blank").focus()}},{key:"render",value:function(){var n=this,e=void 0;return e=window.matchMedia("(max-width: 400px)").matches?"":window.matchMedia("(max-width: 760px)").matches?"Proceed.":window.matchMedia("(max-width: 68em)").matches?"Get Started!":"Launch Workspace",i.default.createElement("div",{className:"landing-container"},i.default.createElement("div",{className:"content-container"},i.default.createElement("header",null,i.default.createElement("img",{id:"logo",src:l.default})),i.default.createElement("div",{className:"content"},i.default.createElement("div",{className:"content-quote-container"},i.default.createElement(c.default,{value:f,label:p})),i.default.createElement("div",{className:"launch-container"},i.default.createElement("div",{className:"set-container"},i.default.createElement("span",{className:"openset"},"{"),i.default.createElement("button",{id:"launch-button",onClick:this.onLaunchButton},e),i.default.createElement("span",{className:"closeset"},"}")),i.default.createElement("div",{id:"tutorial-button-container"},i.default.createElement("button",{id:"tutorial-button",onClick:this.onTutorialButton},"= Want to try our awesome tutorial? =")))),i.default.createElement("div",{ref:function(e){return n.returnHome=e},id:"return-home"},i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",onClick:this.onReturnHomeButton},i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),i.default.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"})))),i.default.createElement("footer",{ref:function(e){return n.footer=e}},i.default.createElement("div",{className:"utility"},i.default.createElement("div",null,i.default.createElement("a",{className:"info",onClick:this.onReportBugButton},"Report a Bug")),i.default.createElement("div",null,i.default.createElement("a",{className:"info",onClick:this.onAboutButton},"About")),i.default.createElement("div",null,i.default.createElement("a",{className:"info",onClick:this.onHelpButton},"Help"))),i.default.createElement("div",{className:"credits"},i.default.createElement("span",{className:"space"}),i.default.createElement("span",{className:"left"},i.default.createElement("div",null,"Professor"),i.default.createElement("a",{className:"nobreak",onClick:function(){return window.open("http://cseweb.ucsd.edu/~minnes/","_blank").focus()}},"Mia Minnes")),i.default.createElement("span",{className:"right"},i.default.createElement("div",null,"Developers"),i.default.createElement("a",{onClick:function(){return window.open("https://github.com/flapjs/FLAPJS-WebApp/","_blank").focus()}},"Maya"),i.default.createElement("a",{onClick:function(){return window.open("https://github.com/flapjs/FLAPJS-WebApp/","_blank").focus()}},"Noah"),i.default.createElement("a",{onClick:function(){return window.open("https://github.com/flapjs/FLAPJS-WebApp/","_blank").focus()}},"David"),i.default.createElement("a",{onClick:function(){return window.open("https://github.com/flapjs/FLAPJS-WebApp/","_blank").focus()}},"Erik"),i.default.createElement("a",{onClick:function(){return window.open("https://github.com/flapjs/FLAPJS-WebApp/","_blank").focus()}},"Lixuan"),i.default.createElement("a",{onClick:function(){return window.open("https://github.com/flapjs/FLAPJS-WebApp/","_blank").focus()}},"Andrew")),i.default.createElement("span",{className:"space"})),i.default.createElement("div",null,i.default.createElement("a",{className:"info",onClick:this.onGithubButton},i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),i.default.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})),"Find it on ",i.default.createElement("b",null,"GitHub"))),i.default.createElement("div",{className:"subtitle-container"},i.default.createElement("div",{className:"subtitle"},"© 2018 University of California, San Diego. All rights reserved."),i.default.createElement("div",{className:"subtitle"},i.default.createElement("label",null,"Thank you for reading me! Stay amazing!")))))}}]),e}();e.default=(0,r.hot)(n)(m)}).call(this,t(67)(n))},78:function(n,e,t){"use strict";var o=r(t(0)),a=r(t(68)),i=r(t(77));function r(n){return n&&n.__esModule?n:{default:n}}window.addEventListener("load",function(n){l=document.getElementById("root"),window.requestAnimationFrame(c)});var l=null;function c(n){a.default.render(o.default.createElement(i.default),l),n,window.requestAnimationFrame(c)}}},[[78,1,0]]]);