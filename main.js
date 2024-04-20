(()=>{"use strict";var e={523:(e,n,t)=>{t.d(n,{A:()=>d});var o=t(601),r=t.n(o),a=t(314),c=t.n(a)()(r());c.push([e.id,"body, h1, h2, h3 {\n    margin: 0;\n    font-family: sans-serif;\n}\n\nimg {\n    height: 200px;\n    width: 400px;\n}\n\nnav, button, footer  {\n    background-color: #FFEA00;\n}\n\n#content > h1, #content > h2, #content > h3, #content > div, .menuItem {\n    background-color: #FFC000;\n}\n\nnav, footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 30px;\n}\n\n.menuItem, img, .box, #content > h1, #content > h2, #content > h3 {\n    border: #702963 solid 10px;\n    border-radius: 10px;\n}\n\nbutton {\n    font-size: 1.2rem;\n    padding: 10px;\n    border-radius: 10px;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #EE4B2B;\n    gap: 20px;\n    padding: 40px;\n}\n\n.menuItem {\n    padding: 10px;\n}\n\n.footer {\n    font-size: 1.2rem;\n}\n\nh1 {\n    font-size: 4.5rem;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh3 {\n    font-size: 1.5rem;\n    font-weight: 500;\n}\n\n.box {\n    padding: 10px;\n}\n\n.box h2, .box h3 {\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n#content > h1 {\n    padding: 20px;\n    margin-bottom: 60px;\n}\n\n#content > h2 {\n    padding: 10px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n\n#content > h3 {\n    padding: 5px;\n}\n\nh1 + .box {\n    margin-bottom: 30px;\n}\n\n#content > .menuItem + h2 {\n    margin-top: 90px;\n}",""]);const d=c},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(c[i]=!0)}for(var p=0;p<e.length;p++){var s=[].concat(e[p]);o&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],d=0;d<e.length;d++){var i=e[d],p=o.base?i[0]+o.base:i[0],s=a[p]||0,u="".concat(p," ").concat(s);a[p]=s+1;var l=t(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==l)n[l].references++,n[l].updater(m);else{var h=r(m,o);o.byIndex=d,n.splice(d,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var d=t(a[c]);n[d].references--}for(var i=o(e,r),p=0;p<a.length;p++){var s=t(a[p]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=i}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"0a6c4a7e4f94556bfaa5ba5073ccb007.jpeg",n=function(){const n=document.querySelector("#content");n.textContent="";const t=document.createElement("h1");t.textContent="McFonalds";const o=document.createElement("img");o.src=e;const r=document.createElement("h3");r.textContent="The best food you can buy for a cheap price!";const a=document.createElement("div");a.classList.add("box");const c=document.createElement("h2");c.textContent=" Hours:";const d=document.createElement("h3");d.textContent="Sunday: 7am - 6am";const i=document.createElement("h3");i.textContent="Monday: 9am - 5pm";const p=document.createElement("h3");p.textContent="Tuesday: 3am - 2am";const s=document.createElement("h3");s.textContent="Wednesday: 5pm - 1am";const u=document.createElement("h3");u.textContent="Thursday: 6am - 8pm";const l=document.createElement("h3");l.textContent="Friday: 12am - 12pm";const m=document.createElement("h3");m.textContent="Satuday: 7am - 8am",n.appendChild(t),n.appendChild(o),n.appendChild(r),a.appendChild(c),a.appendChild(d),a.appendChild(i),a.appendChild(p),a.appendChild(s),a.appendChild(u),a.appendChild(l),a.appendChild(m),n.appendChild(a)},o=t.p+"0321d7df31df77b3c29ccb453556fafa.jpeg",r=t.p+"118aaad8c24dbbb48e439411e2a597f3.jpeg",a=t.p+"2e936af991a7153d3b632633dc874ff7.jpeg",c=t.p+"db2b272923483a5dec1a13bd1e5828cd.jpeg",d=t.p+"56c978d1521a4a3f2d059f60f122b98d.jpeg",i=t.p+"88ae34fc92ef7d4a169b2943ac610e98.jpeg",p=t.p+"23f79aa9b0c7cb2e2b3812790efeb1dc.jpeg",s=t.p+"da66605037ac36ac67b6017f64b2ef86.jpeg",u=function(e,n,t){const o=document.createElement("div"),r=document.createElement("h2"),a=document.createElement("h3"),c=document.createElement("img");return r.innerHTML=e,a.textContent=n,c.src=t,c.classList.add("menuImg"),o.appendChild(r),o.appendChild(a),o.appendChild(c),o.classList.add("menuItem"),o};var l=t(72),m=t.n(l),h=t(825),f=t.n(h),g=t(659),C=t.n(g),b=t(56),x=t.n(b),v=t(540),y=t.n(v),E=t(113),w=t.n(E),S=t(523),T={};T.styleTagTransform=w(),T.setAttributes=x(),T.insert=C().bind(null,"head"),T.domAPI=f(),T.insertStyleElement=y(),m()(S.A,T),S.A&&S.A.locals&&S.A.locals,n();const j=document.querySelector(".home"),M=document.querySelector(".menu"),I=document.querySelector(".contact");j.addEventListener("click",(()=>{n()})),M.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content");e.textContent="";const n=document.createElement("h1");n.textContent="Menu";const t=document.createElement("h2");t.textContent="Beverages";const l=u("Hot Chocolate","$1.00",o),m=u("Green Tea","$1.05",r),h=document.createElement("h2");h.textContent="Main Dishes";const f=u("Fat Mac","$5.00",a),g=u("Cheeseburger","$2.00",c),C=u("Cheeseburger <br> with hashbrowns","$3.00",d),b=u("Chicken Nuggets","$3.00",i),x=u("French Fries","$2.00",p),v=u("Chickenburger","$3.00",s);e.appendChild(n),e.appendChild(t),e.appendChild(l),e.appendChild(m),e.appendChild(h),e.appendChild(f),e.appendChild(g),e.appendChild(C),e.appendChild(b),e.appendChild(x),e.appendChild(v)}()})),I.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content");e.textContent="";const n=document.createElement("h1");n.textContent="Contact Info";const t=document.createElement("div");t.classList.add("box");const o=document.createElement("h2");o.textContent="(613) 226-7604";const r=document.createElement("h2");r.textContent="mcfonalds@email.com";const a=document.createElement("h2");a.textContent="261 Centrepointe Dr";const c=document.createElement("h1");c.textContent="Misison";const d=document.createElement("h3");d.textContent="Our goal is to provide scrumptious and affordable food for all those in need!",e.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),e.appendChild(t),e.appendChild(c),e.appendChild(d)}()}))})()})();