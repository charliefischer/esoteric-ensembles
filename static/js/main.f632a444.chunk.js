(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n(67)},44:function(e,t,n){},45:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},46:function(e,t,n){},47:function(e,t,n){},54:function(e,t,n){var r={"./action-bronson-feat-chance-the-rapper-baby-blue-official-music-video-ytmas-bVP_w1rQweE.mp3":55,"./tom-misch-it-runs-through-me-feat-de-la-soul-official-video-M1N_wbhAfQ4.mp3":56};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=54},55:function(e,t,n){e.exports=n.p+"static/media/action-bronson-feat-chance-the-rapper-baby-blue-official-music-video-ytmas-bVP_w1rQweE.0cc384f9.mp3"},56:function(e,t,n){e.exports=n.p+"static/media/tom-misch-it-runs-through-me-feat-de-la-soul-official-video-M1N_wbhAfQ4.95a11ab3.mp3"},57:function(e,t,n){},62:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(35),i=n.n(o),c=(n(44),n(45),n(46),n(24)),l=n(2),u=n(4);n(47);function s(e){var t=e.classes,n=void 0===t?"":t;return a.a.createElement("svg",{width:"69",height:"50",viewBox:"0 0 69 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:n},a.a.createElement("path",{d:"M-1.09278e-06 25L37.5 3.34936L37.5 46.6506L-1.09278e-06 25Z",fill:"#343434"}),a.a.createElement("path",{d:"M19 25L56.5 3.34936L56.5 46.6506L19 25Z",fill:"#343434"}))}function f(e){var t=e.classes,n=void 0===t?"":t;return a.a.createElement("svg",{width:"72",height:"72",viewBox:"0 0 72 72",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:n},a.a.createElement("circle",{cx:"36",cy:"36",r:"35",fill:"#FA2D3C",stroke:"#343434",strokeWidth:"2"}),a.a.createElement("path",{d:"M27.25 20.4785L55 36.5L27.25 52.5215L27.25 20.4785Z",fill:"#F5F3DC",stroke:"#343434",strokeWidth:"2"}))}function h(){return a.a.createElement("svg",{width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M1.75 17L16.8559 1.89413",stroke:"black",strokeWidth:"2",strokeLinecap:"round"}),a.a.createElement("path",{d:"M17.1036 17L1.7501 1.64649",stroke:"black",strokeWidth:"2",strokeLinecap:"round"}))}var m=n(20),p=n.n(m);function d(e){var t=Object(r.useRef)(null),o=n(54),i=o.keys().map(function(e){return o(e)}),c=0,l=Object(r.useRef)(null),m=Object(r.useState)(0),d=Object(u.a)(m,2),v=d[0],g=d[1],y=Object(r.useState)(0),E=Object(u.a)(y,2),w=E[0],b=E[1];return Object(r.useEffect)(function(){var e=t.current,n=function(){g(e.currentTime),b(e.duration)};return e.addEventListener("timeupdate",n),function(){e.removeEventListener("timeupdate",n)}},[]),a.a.createElement(p.a,{nodeRef:l},a.a.createElement("div",{className:"media-container",id:e.id,ref:l},a.a.createElement("div",{className:"media-wrapper"},a.a.createElement("nav",null,a.a.createElement("div",{className:"close-icon pointer",onClick:function(){return e.closeRadio()}},a.a.createElement(h,null))),a.a.createElement("div",{className:"action-buttons-wrapper flex"},a.a.createElement("div",{onClick:function(){return function(){var e=t.current;console.log(i,c),e.pause(),c=c-1<0?i.length-1:c-1,e.src=i[c],e.play()}()},className:"pointer"},a.a.createElement(s,null)),a.a.createElement("div",{onClick:function(){t.current.play()},className:"pointer"},a.a.createElement(f,null)),a.a.createElement("div",{onClick:function(){return function(){var e=t.current;console.log(i,c),e.pause(),c=c+1>i.length-1?0:c+1,e.src=i[c],e.play()}()},className:"pointer"},a.a.createElement(s,{classes:"flip"}))),a.a.createElement("div",{className:"progress-bar"},a.a.createElement("audio",{ref:t,id:"audio",src:i[c]}),a.a.createElement("div",null,v.toFixed(2)," / ",w.toFixed(2))))))}var v=n(69);n(57);function g(e){var t=Object(r.useRef)(null),n=Object(r.useState)([]),o=Object(u.a)(n,2),i=o[0],c=o[1];return Object(r.useEffect)(function(){console.log("start"),v.a.get("/messages").then(function(e){console.log("res",e.data),c(e.data)}).catch(function(e){console.error("Error fetching users:",e)})},[]),a.a.createElement(p.a,{nodeRef:t},a.a.createElement("div",{className:"chat-container",ref:t},a.a.createElement("div",{className:"chat-wrapper"},a.a.createElement("nav",null,a.a.createElement("div",{className:"close-icon pointer",onClick:function(){return e.closeChat()}},a.a.createElement(h,null))),a.a.createElement("div",{className:"messages-wrapper"},i.map(function(e){return a.a.createElement("div",{key:e[3]},e[2],"..",e[3])})),a.a.createElement("div",{className:"new-message-wrapper"},a.a.createElement("div",{className:"message-box"},a.a.createElement("input",{type:"text",placeholder:"Your Message...",className:"new-message-input"})),a.a.createElement("button",{className:"send-new-message pointer"},"Send")))))}n(62);function y(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(!1),c=Object(u.a)(i,2),l=c[0],s=c[1];return a.a.createElement("div",{className:"home-wrapper"},a.a.createElement("div",{className:"action-buttons"},a.a.createElement("button",{onClick:function(){return o(!0)},className:"pointer"},"Radio"),a.a.createElement("button",{onClick:function(){return s(!0)},className:"pointer"},"Chat")),n&&a.a.createElement(d,{closeRadio:function(){return o(!1)},id:"radio"}),l&&a.a.createElement(g,{closeChat:function(){return s(!1)},id:"chat"}))}var E=n(8),w=n(6),b=n(28),x=n.n(b);function L(){L=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new N(a||[]);return r(i,"_invoke",{value:b(e,n,c)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=u;var f={};function h(){}function m(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(j([])));g&&g!==t&&n.call(g,o)&&(d=g);var y=p.prototype=h.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function b(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:m,configurable:!0}),m.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var k=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(b.useSpeechRecognition)(),o=n.transcript,i=n.listening,c=n.resetTranscript,l=n.browserSupportsSpeechRecognition,u=n.stopListening,s=n.isMicrophoneAvailable;Object(r.useEffect)(function(){(function(){var e=Object(w.a)(L().mark(function e(){var t;return L().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0});case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error accessing microphone:",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}})()(),x.a.startListening({continuous:!0,language:"en-GB"});var n=function(n){var r=new(window.AudioContext||window.webkitAudioContext),a=r.createMediaStreamSource(n),o=r.createAnalyser();o.fftSize=256,o.smoothingTimeConstant=.8,a.connect(o),o.connect(r.destination);var i=o.frequencyBinCount,c=new Uint8Array(i),l=new Float32Array(i),u=document.querySelector(".test");requestAnimationFrame(function e(){o.getFloatFrequencyData(l);var t=f(l),n=h(t,-100,0,0,360),r="hsl(".concat(n,", 100%, 50%)");u.style.color=r,o.getByteTimeDomainData(c);var a=Math.max.apply(Math,Object(E.a)(c));u.style.fontSize="".concat(a,"px"),requestAnimationFrame(e)}),e.current=r,t.current=o}},[]);var f=function(e){return e.reduce(function(e,t){return e+t},0)/e.length},h=function(e,t,n,r,a){return(e-t)/(n-t)*(a-r)+r};return a.a.createElement("div",null,a.a.createElement("div",null,i?"yes":"no"),a.a.createElement("h1",{className:"test",style:{transition:"all 0.2s"}},o.length>0&&a.a.createElement("span",null,o),!o.length&&a.a.createElement("span",null,"Start Talking...")),a.a.createElement("button",{onClick:u},"stop"),a.a.createElement("button",{onClick:c},"reset"),(!l||!s)&&a.a.createElement("p",null,"browser support not met"))};var O=function(){return a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(c.a,null,a.a.createElement("nav",null,a.a.createElement(c.b,{to:"/"},"To Home"),a.a.createElement(c.b,{to:"/about"},"To About")),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",element:a.a.createElement(y,null)}),a.a.createElement(l.a,{path:"/esoteric-ensembles",element:a.a.createElement(y,null)}),a.a.createElement(l.a,{path:"/about",element:a.a.createElement(k,null)}))))},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null))),N()}},[[36,1,2]]]);
//# sourceMappingURL=main.f632a444.chunk.js.map