(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>l});var a=t(354),r=t.n(a),i=t(314),s=t.n(i),o=t(417),c=t.n(o),d=new URL(t(603),t.b),A=s()(r()),p=c()(d);A.push([n.id,`:root{\n    --white-theme: rgb(239, 232, 232);\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    display: grid;\n    height: 100vh;\n    grid-template-rows: 100px 1fr 70px;\n    background-color: var(--white-theme);\n}\n\nnav{\n    height: 100px;\n    background-color: rgb(89, 155, 231);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 80px;\n}\n\nnav img{\n    height: auto;\n    width: 80px;\n}\n\nbutton{\n    height: 60px;\n    width: 100px;\n    font-size: 1.2rem;\n    font-weight: 700;\n    background-color: var(--white-theme);\n    border: 0;\n    padding: 0;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n#content{\n    background-image: url(${p});\n    display: grid;\n    color: rgb(0, 0, 0);\n}\n\n.wrapper{\n    box-sizing: border-box;\n    width: 1000px;\n    margin: 12px auto;\n    border-radius: 1em;\n    padding: 2em 4em;\n    background-color: rgb(141, 189, 213);\n}\n\n.wrapper-home{\n    display: grid;\n    justify-items: center;\n    gap: 6em;\n}\n\n.home-name,\n.menu-title,\n.contact-title{\n    font-size: 4rem;\n    font-weight: 700;\n}\n\n.home-headline{\n    font-size: 2rem;\n    letter-spacing: 1px;\n}\n\n.home-text{\n    font-size: 1.7rem;\n    line-height: 1.6;\n}\n\n.wrapper-menu{\n    display: grid;\n    grid-template: min-content 3fr 2fr 2fr / 700px;\n    justify-content: center;\n    gap: 80px;\n}\n\n.menu-title{\n    justify-self: center;\n}\n\n.main-dishes-box, \n.side-dishes-box,\n.beverage-box{\n    display: grid;\n    grid-template: 100px 1fr / calc((700px - 45%) / 2) 45% calc((700px - 45%) / 2);\n    row-gap: 50px;\n    place-items: center;\n}\n\n.main-dishes-title, :last-child\n.side-dishes-title,\n.beverage-title{\n    grid-area: 1 / 2 / 1 / 3;\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\n.main-dishes-cards, \n.side-dishes-cards,\n.beverage-cards{\n    grid-area: 2 / 1 / -1 / -1;\n    display: grid;\n    gap: 32px;\n}\n\n.main-dishes-cards{\n    grid-template: repeat(3, 1fr) / 550px;\n}\n\n.side-dishes-cards,\n.beverage-cards{\n    grid-template: repeat(2, 1fr) / 550px;\n}\n\n.card{\n    display: grid;\n    grid-template: 1fr 3fr 100px 50px / 1fr 150px;\n    row-gap: 24px;\n}\n\n\n.name{\n    grid-area: 1 / 1 / 2 / -1;\n    font-size: 1.6rem;\n    font-weight: 700;\n}\n\n.description{\n    grid-area: 2 / 1 / 3 / -1;\n    font-size: 1.1rem;\n    margin: 30px 24px 0 24px;\n}\n\n.price{\n    grid-area: 3 / 1 / 4 / -2;\n    font-weight: 700;\n    font-size: 1.4rem;\n    place-self: center;\n}\n\n.image{\n    grid-area: 3 / 2 / 5 / -1;\n    border: 2px solid purple;\n    border-radius: 8px;\n}\n\n.wrapper-contact{\n    display: grid;\n    grid-template: min-content 1fr / 700px;\n    justify-content: center;\n    gap: 80px;\n}\n\n.contact-title{\n    width: 6.5em;\n    height: min-content;\n    display: grid;\n    place-items: center;\n    place-self: center;\n}\n\n.contact-box{\n    display: grid;\n    grid-template: repeat(3, 1fr) / 550px;\n    gap: 24px;\n    justify-content: center;\n    \n}\n\n.contact-card{\n    display: grid;\n    grid-template-rows: 2fr repeat(3, 1fr);\n    row-gap: 12px;\n}\n\n.contact-header{\n    font-size: 1.6rem;\n    font-weight: 700;\n    justify-self: center;\n}\n\n.contact-name,\n.contact-number,\n.contact-email{\n    font-size: 1.3rem;\n}\n\n.has-border{\n    box-sizing: border-box;\n    border: 12px solid rgb(120, 75, 6);\n    background-color: #FFA500;\n    padding: 12px 36px;\n    border-radius: 8px;\n}\n\nfooter{\n    height: 70px;\n    background-color: rgb(82, 78, 78);\n    display: grid;\n    align-items: center;\n}\n\na{\n    text-decoration: none;\n    color: white;\n    padding: 12px;\n}\n\n`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,iCAAiC;AACrC;;AAEA;IACI,UAAU;IACV,SAAS;IACT,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,oCAAoC;IACpC,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yDAA6C;IAC7C,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,QAAQ;AACZ;;AAEA;;;IAGI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;;IAGI,aAAa;IACb,8EAA8E;IAC9E,aAAa;IACb,mBAAmB;AACvB;;AAEA;;;IAGI,wBAAwB;IACxB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;;;IAGI,0BAA0B;IAC1B,aAAa;IACb,SAAS;AACb;;AAEA;IACI,qCAAqC;AACzC;;AAEA;;IAEI,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,6CAA6C;IAC7C,aAAa;AACjB;;;AAGA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,SAAS;IACT,uBAAuB;;AAE3B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;;;IAGI,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,kCAAkC;IAClC,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,aAAa;AACjB",sourcesContent:[':root{\n    --white-theme: rgb(239, 232, 232);\n}\n\nbody{\n    padding: 0;\n    margin: 0;\n    display: grid;\n    height: 100vh;\n    grid-template-rows: 100px 1fr 70px;\n    background-color: var(--white-theme);\n}\n\nnav{\n    height: 100px;\n    background-color: rgb(89, 155, 231);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 80px;\n}\n\nnav img{\n    height: auto;\n    width: 80px;\n}\n\nbutton{\n    height: 60px;\n    width: 100px;\n    font-size: 1.2rem;\n    font-weight: 700;\n    background-color: var(--white-theme);\n    border: 0;\n    padding: 0;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n#content{\n    background-image: url("./img/background.jpg");\n    display: grid;\n    color: rgb(0, 0, 0);\n}\n\n.wrapper{\n    box-sizing: border-box;\n    width: 1000px;\n    margin: 12px auto;\n    border-radius: 1em;\n    padding: 2em 4em;\n    background-color: rgb(141, 189, 213);\n}\n\n.wrapper-home{\n    display: grid;\n    justify-items: center;\n    gap: 6em;\n}\n\n.home-name,\n.menu-title,\n.contact-title{\n    font-size: 4rem;\n    font-weight: 700;\n}\n\n.home-headline{\n    font-size: 2rem;\n    letter-spacing: 1px;\n}\n\n.home-text{\n    font-size: 1.7rem;\n    line-height: 1.6;\n}\n\n.wrapper-menu{\n    display: grid;\n    grid-template: min-content 3fr 2fr 2fr / 700px;\n    justify-content: center;\n    gap: 80px;\n}\n\n.menu-title{\n    justify-self: center;\n}\n\n.main-dishes-box, \n.side-dishes-box,\n.beverage-box{\n    display: grid;\n    grid-template: 100px 1fr / calc((700px - 45%) / 2) 45% calc((700px - 45%) / 2);\n    row-gap: 50px;\n    place-items: center;\n}\n\n.main-dishes-title, :last-child\n.side-dishes-title,\n.beverage-title{\n    grid-area: 1 / 2 / 1 / 3;\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n\n.main-dishes-cards, \n.side-dishes-cards,\n.beverage-cards{\n    grid-area: 2 / 1 / -1 / -1;\n    display: grid;\n    gap: 32px;\n}\n\n.main-dishes-cards{\n    grid-template: repeat(3, 1fr) / 550px;\n}\n\n.side-dishes-cards,\n.beverage-cards{\n    grid-template: repeat(2, 1fr) / 550px;\n}\n\n.card{\n    display: grid;\n    grid-template: 1fr 3fr 100px 50px / 1fr 150px;\n    row-gap: 24px;\n}\n\n\n.name{\n    grid-area: 1 / 1 / 2 / -1;\n    font-size: 1.6rem;\n    font-weight: 700;\n}\n\n.description{\n    grid-area: 2 / 1 / 3 / -1;\n    font-size: 1.1rem;\n    margin: 30px 24px 0 24px;\n}\n\n.price{\n    grid-area: 3 / 1 / 4 / -2;\n    font-weight: 700;\n    font-size: 1.4rem;\n    place-self: center;\n}\n\n.image{\n    grid-area: 3 / 2 / 5 / -1;\n    border: 2px solid purple;\n    border-radius: 8px;\n}\n\n.wrapper-contact{\n    display: grid;\n    grid-template: min-content 1fr / 700px;\n    justify-content: center;\n    gap: 80px;\n}\n\n.contact-title{\n    width: 6.5em;\n    height: min-content;\n    display: grid;\n    place-items: center;\n    place-self: center;\n}\n\n.contact-box{\n    display: grid;\n    grid-template: repeat(3, 1fr) / 550px;\n    gap: 24px;\n    justify-content: center;\n    \n}\n\n.contact-card{\n    display: grid;\n    grid-template-rows: 2fr repeat(3, 1fr);\n    row-gap: 12px;\n}\n\n.contact-header{\n    font-size: 1.6rem;\n    font-weight: 700;\n    justify-self: center;\n}\n\n.contact-name,\n.contact-number,\n.contact-email{\n    font-size: 1.3rem;\n}\n\n.has-border{\n    box-sizing: border-box;\n    border: 12px solid rgb(120, 75, 6);\n    background-color: #FFA500;\n    padding: 12px 36px;\n    border-radius: 8px;\n}\n\nfooter{\n    height: 70px;\n    background-color: rgb(82, 78, 78);\n    display: grid;\n    align-items: center;\n}\n\na{\n    text-decoration: none;\n    color: white;\n    padding: 12px;\n}\n\n'],sourceRoot:""}]);const l=A},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var d=0;d<n.length;d++){var A=[].concat(n[d]);a&&s[A[0]]||(void 0!==i&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=i),t&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=t):A[2]=t),r&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=r):A[4]="".concat(r)),e.push(A))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},s=[],o=0;o<n.length;o++){var c=n[o],d=a.base?c[0]+a.base:c[0],A=i[d]||0,p="".concat(d," ").concat(A);i[d]=A+1;var l=t(p),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(g);else{var m=r(g,a);a.byIndex=o,e.splice(o,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=a(n=n||[],r=r||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var o=t(i[s]);e[o].references--}for(var c=a(n,r),d=0;d<i.length;d++){var A=t(i[d]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},603:(n,e,t)=>{n.exports=t.p+"2dba56d12c20795ac7e0.jpg"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=a[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t.d({},{A:()=>L});var a=t(72),r=t.n(a),i=t(825),s=t.n(i),o=t(659),c=t.n(o),d=t(56),A=t.n(d),p=t(540),l=t.n(p),g=t(113),m=t.n(g),u=t(365),C={};function f(n){const e=document.createElement("div");return n.appendChild(e),e}C.styleTagTransform=m(),C.setAttributes=A(),C.insert=c().bind(null,"head"),C.domAPI=s(),C.insertStyleElement=l(),r()(u.A,C),u.A&&u.A.locals&&u.A.locals;const h=function(){const n=f(L);n.classList.add("wrapper","wrapper-home");const e=f(n);e.classList.add("home-name","has-border"),e.textContent="Baratie";const t=f(n);t.classList.add("home-headline","has-border"),t.textContent="Dive into Delectable Depths at Baratie";const a=f(n);a.classList.add("home-text","has-border"),a.textContent="Experience a world of flavor with our fresh, sustainably sourced seafood. Enjoy exquisite dishes in a serene, coastal-inspired setting, perfect for any occasion. Immerse yourself in exceptional service and culinary artistry that transforms every meal into a masterpiece."},b=t.p+"73401722ab2063920d0f.png",x=t.p+"ac5eacd6f74272771589.png",B=document.querySelector("nav"),I=new Image,y=new Image;I.src=b,y.src=x,B.insertBefore(I,B.querySelector(".home")),B.appendChild(y);const v=document.querySelector("#content");function w(){for(;v.firstChild;)v.removeChild(v.firstChild)}document.querySelector("body"),document.addEventListener("click",(n=>{n.target.classList.contains("home")&&(w(),h()),n.target.classList.contains("menu")&&(w(),function(){const n=f(L);n.classList.add("wrapper","wrapper-menu");const e=f(n);e.classList.add("menu-title","has-border"),e.textContent="Menu",function(n){const e=f(n);e.classList.add("main-dishes-box");const t=f(e);t.classList.add("main-dishes-title","has-border"),t.textContent="Main Dishes";const a=f(e);a.classList.add("main-dishes-cards");for(let n=0;n<3;n++){const e=f(a);e.classList.add("main-dish-card","card","has-border");const t=f(e);t.classList.add("main-dish-name","name");const r=f(e);r.classList.add("main-dish-description","description");const i=f(e);i.classList.add("main-dish-price","price"),f(e).classList.add("main-dish-image","image"),0===n&&(t.textContent="Seafood Paella",r.textContent="A traditional Spanish rice dish with shrimp, mussels, and calamari, cooked with saffron and vegetables.",i.textContent="$25.50"),1===n&&(t.textContent="Seared Scallops",r.textContent="Scallops seared to perfection, served in a white wine butter sauce with a hint of lemon and fresh herbs.",i.textContent="$29.95"),2===n&&(t.textContent="Grilled Lobster Tail",r.textContent="Succulent lobster tail basted with garlic herb butter, offering a rich flavor and a touch of lemon.",i.textContent="$38.99")}}(n),function(n){const e=f(n);e.classList.add("side-dishes-box");const t=f(e);t.classList.add("side-dishes-title","has-border"),t.textContent="side Dishes";const a=f(e);a.classList.add("side-dishes-cards");for(let n=0;n<2;n++){const e=f(a);e.classList.add("side-dish-card","card","has-border");const t=f(e);t.classList.add("side-dish-name","name");const r=f(e);r.classList.add("side-dish-description","description");const i=f(e);i.classList.add("side-dish-price","price"),f(e).classList.add("side-dish-image","image"),0===n&&(t.textContent="Garlic Butter Asparagus",r.textContent="Tender asparagus sautéed in garlic butter, topped with parmesan and lemon for a vibrant and savory side dish.",i.textContent="$7.99"),1===n&&(t.textContent="Crispy Calamari Rings",r.textContent="Lightly breaded and fried calamari rings, served with marinara sauce and lemon, offering a delightful crispiness to accompany your seafood meal.",i.textContent="$9.50")}}(n),function(n){const e=f(n);e.classList.add("beverage-box");const t=f(e);t.classList.add("beverage-title","has-border"),t.textContent="Beverages";const a=f(e);a.classList.add("beverage-cards");for(let n=0;n<2;n++){const e=f(a);e.classList.add("beverage-card","card","has-border");const t=f(e);t.classList.add("beverage-name","name");const r=f(e);r.classList.add("beverage-description","description");const i=f(e);i.classList.add("beverage-price","price"),f(e).classList.add("beverage-image","image"),0===n&&(t.textContent="Coastal Breeze Lemonade",r.textContent="A blend of freshly squeezed lemons, mint, and sparkling water over ice, offering a refreshing balance of tartness and sweetness.",i.textContent="$4.50"),1===n&&(t.textContent="Ocean Blue Margarita",r.textContent="A tropical cocktail with premium tequila, blue curaçao, lime juice, and agave syrup, served on the rocks with a salted rim for a vibrant and relaxing drink.",i.textContent="$8.00")}}(n)}()),n.target.classList.contains("contact")&&(w(),function(){const n=f(L);n.classList.add("wrapper","wrapper-contact");const e=f(n);e.classList.add("contact-title","has-border"),e.textContent="Contact Us";const t=f(n);t.classList.add("contact-box"),function(n){const e=f(n);e.classList.add("contact-card","has-border");const t=f(e);t.classList.add("contact-header"),t.textContent="Chef";const a=f(e);a.classList.add("contact-name"),a.textContent="Sanji";const r=f(e);r.classList.add("contact-number"),r.textContent="222-222-2222";const i=f(e);i.classList.add("contact-email"),i.textContent="totallyrealsanji@notfake.com"}(t),function(n){const e=f(n);e.classList.add("contact-card","has-border");const t=f(e);t.classList.add("contact-header"),t.textContent="Manager";const a=f(e);a.classList.add("contact-name"),a.textContent="Zeff";const r=f(e);r.classList.add("contact-number"),r.textContent="333-333-3333";const i=f(e);i.classList.add("contact-email"),i.textContent="totallyrealzeff@notfake.com"}(t),function(n){const e=f(n);e.classList.add("contact-card","has-border");const t=f(e);t.classList.add("contact-header"),t.textContent="Waiter";const a=f(e);a.classList.add("contact-name"),a.textContent="Luffy";const r=f(e);r.classList.add("contact-number"),r.textContent="444-444-4444";const i=f(e);i.classList.add("contact-email"),i.textContent="totallyrealluffy@notfake.com"}(t)}())}));const L=v;h()})();
//# sourceMappingURL=bundle.js.map