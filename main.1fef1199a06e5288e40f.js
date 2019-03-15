!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);window.WebSocket=window.WebSocket||window.MozWebSocket;let r=new WebSocket("wss://young-lowlands-88811.herokuapp.com/"),o=document.querySelector(".left-div"),i=document.querySelector(".right-div"),s=document.getElementById("content"),a=(document.getElementById("sub-name"),document.querySelector("#input>input")),l=document.getElementById("Username"),c=!1,u=!1,d=[];v(!1),window.addEventListener("orientationchange",h),window.addEventListener("resize",h),h(),r.onopen=(()=>{v(!0),a.removeAttribute("disabled")}),r.onerror=(e=>{v(!1,"Connection failed")}),r.onclose=(e=>{v(!1,"Connection aborted")}),r.onmessage=(e=>{let t;try{t=JSON.parse(e.data)}catch(e){console.error("Invalid JSON recieved from server"),console.error(e)}"color"===t.type?(u=t.data.userColor,l.style.display="block",l.style.color=u,l.textContent=c):"notif"===t.type?f(t.data):"peer_list"===t.type?((d=JSON.parse(t.data.peers)).splice(d.indexOf(c),1),function(e){document.querySelector("#peers>ul").innerHTML=e.reduce((e,t)=>e+`<li>${t}</li>`,"")}(d)):"message"===t.type&&p(t.data)}),document.getElementById("userName-input").addEventListener("keydown",m),document.getElementById("sub-name").addEventListener("click",m),a.addEventListener("keydown",m);let f=e=>{let t=document.createElement("div");switch(e.type){case"+":t.setAttribute("class","userMan addUser"),t.innerHTML=`<span>${e.notif}</span>`;break;case"-":t.setAttribute("class","userMan removeUser"),t.innerHTML=`<span>${e.notif}</span>`}s.appendChild(t)},p=e=>{let t=document.createElement("div");e.userName===c?t.setAttribute("class","mess mine"):t.setAttribute("class","mess notmine"),t.innerHTML=`<p style="color: ${e.userColor};">${e.userName}</p>\n    <p>${e.data}</p>\n  `,s.appendChild(t),s.scrollTop=s.scrollHeight};function m(e){if("keydown"===e.type&&13==e.keyCode||"click"===e.type){let t="keydown"===e.type?e.target:e.target.previousElementSibling,n=t.value;if(!n)return;r.send(n),t.value="",c||(c=n,t.removeEventListener("keydown",m),this.removeEventListener("click",m),function(){let e=document.getElementById("overlay");e.classList.add("close-over"),e.addEventListener("transitionend",t=>{e.parentElement.removeChild(e)})}())}}function v(e,t){let n=document.getElementById("sub-name");n&&(e?(n.innerText="Enter chat",n.parentElement.querySelectorAll("input, button").forEach(e=>{e.removeAttribute("disabled"),e.classList.remove("disabled")})):(n.innerText=t||"Connecting...",n.parentElement.querySelectorAll("input, button").forEach(e=>{e.setAttribute("disabled",!0),e.classList.add("disabled")})))}function h(){let e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);document.documentElement.style.height=`${e}px`}let y,b,g=0,w=0,E=!1,L=0,S=75,x=o;function A(e,t){if(console.log(e+" ---- "+t),b=t-e,Math.abs(b)<=1||Math.abs(b)>=99)return cancelAnimationFrame(y),b=0,g=0,w=0,E=!1,L=0,void(x.style.transform=`translate3d(${t}%,0,0)`);e+=2*Math.sign(b),x.style.transform=`translate3d(${e}%,0,0)`,y=requestAnimationFrame(()=>{A(e,t)})}i.addEventListener("touchstart",function(e){console.log("%cStarting touch","background-color: #004800; color: #fff;"),console.log(e.changedTouches[0].clientX),g=e.changedTouches[0].clientX,E=g<20},{passive:!0}),i.addEventListener("touchmove",function(e){e.preventDefault(),console.log("SwipeDir --- "+L),(E||x.className.split(" ").indexOf("visible")>=0)&&(L=e.changedTouches[0].clientX-g,w=100*L/x.clientWidth,L>0&&(w-=100),requestAnimationFrame(function(){x.style.transform=`translate3d(${w}%,0,0)`}));console.log(100+w)}),i.addEventListener("touchend",function(e){console.log("%cEnding touch","background-color: #0E2F44; color: #fff;"),console.log(e),console.log(100+w),100+w>=S?(console.log(L),y=requestAnimationFrame(()=>{A(w,0)}),x.classList.add("visible")):(y=requestAnimationFrame(()=>{A(w,-100)}),x.classList.remove("visible"))},{passive:!0})},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,u=[],d=n(4);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function m(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),m(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=c++;n=l||(l=h(t)),r=E.bind(null,n,s,!1),o=E.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&f(p(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function E(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);