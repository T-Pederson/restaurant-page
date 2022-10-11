(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),i=t.n(r),a=t(879),o=t.n(a),d=t(667),c=t.n(d),s=new URL(t(957),t.b),l=o()(i()),p=c()(s);l.push([e.id,"@font-face {\n  font-family: 'EB Garamond';\n  src: url("+p+") format('truetype');\n}\n\n* {\n  font-family: 'EB Garamond', serif;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 1.5fr 12fr 1fr ;\n}\n\n.header {\n  display: flex;\n  padding: 16px 16px 12px 16px;\n  gap: 12px;\n  justify-content: center;\n  background-color: #faf9f6;\n}\n\nimg {\n  border-radius: 8px;\n}\n\n#burger-icon {\n  height: 76px;\n}\n\nh1 {\n  font-size: 4em;\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #faf9f6;\n}\n\nul {\n  list-style: none;\n}\n\n.navbar ul {\n  display: flex;\n  gap: 32px;\n  justify-content: center;\n}\n\n.navbar li {\n  border: 2px solid black;\n  padding: 2px 12px;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  font-size: 2.5em;\n  font-weight: bold;\n  background-color: white;\n}\n\n.navbar li:hover {\n  scale: 105%;\n}\n\n.container {\n  box-shadow: inset 0 3px 6px rgb(141 141 141 / 26%);\n  display: grid;\n  grid-template-columns: 450px 450px;\n  grid-auto-rows: min-content;\n  justify-content: center;\n  align-content: center;\n  gap: 24px;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 1.1em;\n}\n\n#brickWall {\n  height: 300px;\n}\n\nh2 {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: black;\n}\n\n#bar { \n  height: 300px;\n  grid-row: 2 / 4;\n  grid-column: 2 / 3;\n  align-self: flex-end;\n}\n\n#wings,\n#platter,\n#cheeseburger,\n#fish {\n  height: 200px;\n}\n\n#wings,\n#cheeseburger,\n#platterInfo,\n#fishInfo {\n  justify-self: end;\n}\n\n#family {\n  height: 675px;\n}\n\n#aboutText {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.footer {\n  background-color: rgba(0, 0, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}",""]);const u=l},879:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},o=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=i(m,r);r.byIndex=d,n.splice(d,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var d=t(a[o]);n[d].references--}for(var c=r(e,i),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},957:(e,n,t)=>{e.exports=t.p+"baa0e0cf79395becf7d7.ttf"}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"a07c91cb7619a2fe320b.png",n=t.p+"c53afbef04b7c6bf0980.jpg",r=t.p+"eca80b1574d9d22db06d.jpg",i=document.getElementById("content");const a=t.p+"06a6384a83d959f1c6aa.jpg",o=t.p+"7b81ae7065616ab6fd77.jpg",d=t.p+"06d70386ed695a50d77b.jpg",c=t.p+"1e4d7924e2d93b7a2e35.jpg",s=document.getElementById("content");const l=t.p+"315f94117f305bbe356c.jpg",p=document.getElementById("content");var u=t(379),m=t.n(u),h=t(795),f=t.n(h),g=t(569),b=t.n(g),C=t(565),y=t.n(C),E=t(216),x=t.n(E),v=t(589),w=t.n(v),T=t(28),A={};function k(){for(;content.firstChild;)content.removeChild(content.lastChild)}function H(){document.getElementById("home").addEventListener("click",I),document.getElementById("menu").addEventListener("click",L),document.getElementById("about").addEventListener("click",j)}function I(){k(),function(){const n=document.createElement("div");n.classList.add("header"),i.appendChild(n);const t=document.createElement("img");t.setAttribute("src",e),t.setAttribute("alt","burger"),t.id="burger-icon",n.appendChild(t);const r=document.createElement("h1");r.innerText="Hudson & Co.",n.appendChild(r)}(),function(){const e=document.createElement("div");e.classList.add("navbar"),i.appendChild(e);const n=document.createElement("ul");e.appendChild(n);let t=document.createElement("li");t.id="home",t.innerText="Home",n.appendChild(t),t=document.createElement("li"),t.id="menu",t.innerText="Menu",n.appendChild(t),t=document.createElement("li"),t.id="about",t.innerText="About",n.appendChild(t)}(),function(){const e=document.createElement("div");e.classList.add("container"),i.appendChild(e);const t=document.createElement("img");t.setAttribute("src",n),t.setAttribute("alt","brick wall"),t.id="brickWall",e.appendChild(t);let a=document.createElement("p");a.innerText="Established in Fergus Falls, MN in 2021, Hudson & Co. is a family owned restaurant that focuses on serving completely wheat free and gluten free dishes. It's our mission to provide excellent wheat free dishes without sacrificing on taste. We only use locally sourced, organic ingredients to ensure that our dishes are not only healthy, but fresh and delicious. Hudson and his family started this restaurant because they had noticed a lack of wheat free options at restaurants in the local area. Since Hudson has a wheat allergy, it was important for them to provide a safe dining experience not only for their son, but for the entire community.",e.appendChild(a);const o=document.createElement("div");o.id="hours",e.appendChild(o);const d=document.createElement("h2");d.innerText="Hours",o.appendChild(d);const c=document.createElement("ul");o.appendChild(c);let s=document.createElement("li");s.innerText="Monday: 10am - 8pm",c.appendChild(s),s=document.createElement("li"),s.innerText="Tuesday: 10am - 8pm",c.appendChild(s),s=document.createElement("li"),s.innerText="Wednesday: 10am - 8pm",c.appendChild(s),s=document.createElement("li"),s.innerText="Thursday: 10am - 8pm",c.appendChild(s),s=document.createElement("li"),s.innerText="Friday: 10am - 10pm",c.appendChild(s),s=document.createElement("li"),s.innerText="Saturday: 10am - 10pm",c.appendChild(s),s=document.createElement("li"),s.innerText="Sunday: 8am - 2pm",c.appendChild(s);const l=document.createElement("img");l.setAttribute("src",r),l.setAttribute("alt","bar"),l.id="bar",e.appendChild(l);const p=document.createElement("div");p.id="info",e.appendChild(p);const u=document.createElement("h2");u.innerText="Contact",p.appendChild(u),a=document.createElement("p"),a.innerText="88 Lincoln Ave, Fergus Falls, MN 56537",p.appendChild(a),a=document.createElement("p"),a.innerText="P: 888-888-8888",p.appendChild(a),a=document.createElement("p"),a.innerText="E: Owner@Hudsonco.com",p.appendChild(a)}(),function(){const e=document.createElement("div");e.classList.add("footer"),i.appendChild(e);const n=document.createElement("p");n.innerText="Copyright © Tyson Pederson 2022",e.appendChild(n)}(),H()}function L(){k(),function(){const n=document.createElement("div");n.classList.add("header"),s.appendChild(n);const t=document.createElement("img");t.setAttribute("src",e),t.setAttribute("alt","burger"),t.id="burger-icon",n.appendChild(t);const r=document.createElement("h1");r.innerText="Hudson & Co.",n.appendChild(r)}(),function(){const e=document.createElement("div");e.classList.add("navbar"),s.appendChild(e);const n=document.createElement("ul");e.appendChild(n);let t=document.createElement("li");t.id="home",t.innerText="Home",n.appendChild(t),t=document.createElement("li"),t.id="menu",t.innerText="Menu",n.appendChild(t),t=document.createElement("li"),t.id="about",t.innerText="About",n.appendChild(t)}(),function(){const e=document.createElement("div");e.classList.add("container"),s.appendChild(e);const n=document.createElement("img");n.setAttribute("src",a),n.setAttribute("alt","wings"),n.id="wings",e.appendChild(n);const t=document.createElement("div");t.id="wingsInfo",e.appendChild(t);let r=document.createElement("h2");r.innerText="Chicken Wings",t.appendChild(r);let i=document.createElement("p");i.innerText="Fried in an almond flour batter, your choice of bone-in or boneless. Comes with carrots, celery and a side of ranch or blue cheese.",t.appendChild(i),i=document.createElement("p"),i.innerText="Sauces: Buffalo, Honey BBQ, Parmesan Garlic, Sweet Chili",t.appendChild(i);const l=document.createElement("div");l.id="platterInfo",e.appendChild(l),r=document.createElement("h2"),r.innerText="Country Platter",l.appendChild(r),i=document.createElement("p"),i.innerText="For the hungry few, this enormous platter comes with a 6oz sirloin steak, grilled chicken thigh, oven roasted carrots, mushrooms and potatoes, dinner rolls, french fries, and an assortment of house made dipping sauces.",l.appendChild(i);const p=document.createElement("img");p.setAttribute("src",o),p.setAttribute("alt","platter"),p.id="platter",e.appendChild(p);const u=document.createElement("img");u.setAttribute("src",d),u.setAttribute("alt","cheeseburger"),u.id="cheeseburger",e.appendChild(u);const m=document.createElement("div");m.id="cheeseburgerInfo",e.appendChild(m),r=document.createElement("h2"),r.innerText="Cheeseburger",m.appendChild(r),i=document.createElement("p"),i.innerText="Our chef's specialty, this burger is made with 100% American Wagyu beef grilled to perfection and topped with a fried egg, bacon, smoked cheddar cheese, red onion, pickles, and our house made BBQ sauce. Comes with a side of homemade southwest coleslaw and garlic potato wedges.",m.appendChild(i);const h=document.createElement("div");h.id="fishInfo",e.appendChild(h),r=document.createElement("h2"),r.innerText="Fish and Chips",h.appendChild(r),i=document.createElement("p"),i.innerText="Fried in an almond flour batter, this fresh caught walleye comes straight from the surrounding lakes. Comes with a side of fries and a cilantro-lime slaw.",h.appendChild(i);const f=document.createElement("img");f.setAttribute("src",c),f.setAttribute("alt","fish and chips"),f.id="fish",e.appendChild(f)}(),function(){const e=document.createElement("div");e.classList.add("footer"),s.appendChild(e);const n=document.createElement("p");n.innerText="Copyright © Tyson Pederson 2022",e.appendChild(n)}(),H()}function j(){k(),function(){const n=document.createElement("div");n.classList.add("header"),p.appendChild(n);const t=document.createElement("img");t.setAttribute("src",e),t.setAttribute("alt","burger"),t.id="burger-icon",n.appendChild(t);const r=document.createElement("h1");r.innerText="Hudson & Co.",n.appendChild(r)}(),function(){const e=document.createElement("div");e.classList.add("navbar"),p.appendChild(e);const n=document.createElement("ul");e.appendChild(n);let t=document.createElement("li");t.id="home",t.innerText="Home",n.appendChild(t),t=document.createElement("li"),t.id="menu",t.innerText="Menu",n.appendChild(t),t=document.createElement("li"),t.id="about",t.innerText="About",n.appendChild(t)}(),function(){const e=document.createElement("div");e.classList.add("container"),p.appendChild(e);const n=document.createElement("img");n.setAttribute("src",l),n.setAttribute("alt","family"),n.id="family",e.appendChild(n);const t=document.createElement("div");t.id="aboutText",e.appendChild(t);let r=document.createElement("p");r.innerText="Ever since the age of 1, Hudson has been interested in cooking. When he was younger, one of his favorite toys was a play kitchen where he would experiment with many different play food recipes. He has been regarded as a child prodigy by many Michelin star chefs and has been offered a full ride scholarship to Le Cordon Bleu in Paris once he becomes of age.",t.appendChild(r),r=document.createElement("p"),r.innerText="With the help of his mother and father, Hudson opened Hudson & Co. with the dream of one day attaining 3 Michelin stars. Since their grand opening, Hudson & Co. has been voted best restaurant in Minnesota in 2022.",t.appendChild(r),r=document.createElement("p"),r.innerText="Hudson & Co. is currently working with the Fergus Falls School District to mentor students in the culinary arts. Hudson founded the Hudson & Co. Scholarship Fund, which awards the top 5 students each year with a full ride scholarship to the culinary school of their choice.",t.appendChild(r),r=document.createElement("p"),r.innerText="If your child is interested in this mentorship program please contact us at 888-888-8888 or email us at Owner@hudsonco.com.",t.appendChild(r)}(),function(){const e=document.createElement("div");e.classList.add("footer"),p.appendChild(e);const n=document.createElement("p");n.innerText="Copyright © Tyson Pederson 2022",e.appendChild(n)}(),H()}A.styleTagTransform=w(),A.setAttributes=y(),A.insert=b().bind(null,"head"),A.domAPI=f(),A.insertStyleElement=x(),m()(T.Z,A),T.Z&&T.Z.locals&&T.Z.locals,I()})()})();