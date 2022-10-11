/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateAbout": () => (/* binding */ populateAbout)
/* harmony export */ });
const content = document.getElementById('content');

function populateHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  content.appendChild(header);

  const burger = document.createElement('img');
  burger.setAttribute('src', '../src/images/burger-icon.png');
  burger.setAttribute('alt', 'burger');
  burger.id = 'burger-icon';
  header.appendChild(burger);

  const h1 = document.createElement('h1');
  h1.innerText = 'Hudson & Co.';
  header.appendChild(h1);
}

function populateNavbar() {
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  content.appendChild(navbar);

  const navList = document.createElement('ul');
  navbar.appendChild(navList);

  let listItem = document.createElement('li');
  listItem.id = 'home';
  listItem.innerText = 'Home';
  navList.appendChild(listItem);
  listItem = document.createElement('li');
  listItem.id = 'menu'
  listItem.innerText = 'Menu';
  navList.appendChild(listItem);
  listItem = document.createElement('li');
  listItem.id = 'about';
  listItem.innerText = 'About';
  navList.appendChild(listItem);
}

function populateContainer() {
  const container = document.createElement('div');
  container.classList.add('container');
  content.appendChild(container);

  const family = document.createElement('img');
  family.setAttribute('src', '../src/images/family.jpg');
  family.setAttribute('alt', 'family');
  family.id = 'family';
  container.appendChild(family);

  const aboutText = document.createElement('div');
  aboutText.id = 'aboutText';
  container.appendChild(aboutText);

  let p = document.createElement('p');
  p.innerText = 'Ever since the age of 1, Hudson has been interested in cooking. When he was younger, one of his favorite toys was a play kitchen where he would experiment with many different play food recipes. He has been regarded as a child prodigy by many Michelin star chefs and has been offered a full ride scholarship to Le Cordon Bleu in Paris once he becomes of age.';
  aboutText.appendChild(p);
  p = document.createElement('p');
  p.innerText = 'With the help of his mother and father, Hudson opened Hudson & Co. with the dream of one day attaining 3 Michelin stars. Since their grand opening, Hudson & Co. has been voted best restaurant in Minnesota in 2022.';
  aboutText.appendChild(p);
  p = document.createElement('p');
  p.innerText = 'Hudson & Co. is currently working with the Fergus Falls School District to mentor students in the culinary arts. Hudson founded the Hudson & Co. Scholarship Fund, which awards the top 5 students each year with a full ride scholarship to the culinary school of their choice.';
  aboutText.appendChild(p);
  p = document.createElement('p');
  p.innerText = 'If your child is interested in this mentorship program please contact us at 888-888-8888 or email us at Owner@hudsonco.com.';
  aboutText.appendChild(p);
}

function populateFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  content.appendChild(footer);

  const p = document.createElement('p');
  p.innerText = 'Copyright © Tyson Pederson 2022';
  footer.appendChild(p);
}

function populateAbout() {
  populateHeader();
  populateNavbar();
  populateContainer();
  populateFooter();
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateHome": () => (/* binding */ populateHome)
/* harmony export */ });
const content = document.getElementById('content');

function populateHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  content.appendChild(header);

  const burger = document.createElement('img');
  burger.setAttribute('src', '../src/images/burger-icon.png');
  burger.setAttribute('alt', 'burger');
  burger.id = 'burger-icon';
  header.appendChild(burger);

  const h1 = document.createElement('h1');
  h1.innerText = 'Hudson & Co.';
  header.appendChild(h1);
}

function populateNavbar() {
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  content.appendChild(navbar);

  const navList = document.createElement('ul');
  navbar.appendChild(navList);

  let listItem = document.createElement('li');
  listItem.id = 'home';
  listItem.innerText = 'Home';
  navList.appendChild(listItem);
  listItem = document.createElement('li');
  listItem.id = 'menu'
  listItem.innerText = 'Menu';
  navList.appendChild(listItem);
  listItem = document.createElement('li');
  listItem.id = 'about';
  listItem.innerText = 'About';
  navList.appendChild(listItem);
}

function populateContainer() {
  const container = document.createElement('div');
  container.classList.add('container');
  content.appendChild(container);

  const brickWall = document.createElement('img');
  brickWall.setAttribute('src', '../src/images/brick-wall.jpg');
  brickWall.setAttribute('alt', 'brick wall');
  brickWall.id = 'brickWall'
  container.appendChild(brickWall);

  let p = document.createElement('p');
  p.innerText = "Established in Fergus Falls, MN in 2021, Hudson & Co. is a family owned restaurant that focuses on serving completely wheat free and gluten free dishes. It's our mission to provide excellent wheat free dishes without sacrificing on taste. We only use locally sourced, organic ingredients to ensure that our dishes are not only healthy, but fresh and delicious. Hudson and his family started this restaurant because they had noticed a lack of wheat free options at restaurants in the local area. Since Hudson has a wheat allergy, it was important for them to provide a safe dining experience not only for their son, but for the entire community.";
  container.appendChild(p);

  const hours = document.createElement('div');
  hours.id = 'hours';
  container.appendChild(hours);

  const hoursHeading = document.createElement('h2');
  hoursHeading.innerText = 'Hours';
  hours.appendChild(hoursHeading);

  const hoursList = document.createElement('ul');
  hours.appendChild(hoursList);

  let hoursItem = document.createElement('li');
  hoursItem.innerText = 'Monday: 10am - 8pm';
  hoursList.appendChild(hoursItem);
  hoursItem = document.createElement('li');
  hoursItem.innerText = 'Tuesday: 10am - 8pm';
  hoursList.appendChild(hoursItem);
  hoursItem = document.createElement('li');
  hoursItem.innerText = 'Wednesday: 10am - 8pm';
  hoursList.appendChild(hoursItem);
  hoursItem = document.createElement('li');
  hoursItem.innerText = 'Thursday: 10am - 8pm';
  hoursList.appendChild(hoursItem);
  hoursItem = document.createElement('li');
  hoursItem.innerText = 'Friday: 10am - 10pm';
  hoursList.appendChild(hoursItem);
  hoursItem = document.createElement('li');
  hoursItem.innerText = 'Saturday: 10am - 10pm';
  hoursList.appendChild(hoursItem);
  hoursItem = document.createElement('li');
  hoursItem.innerText = 'Sunday: 8am - 2pm';
  hoursList.appendChild(hoursItem);

  const bar = document.createElement('img');
  bar.setAttribute('src', '../src/images/bar.jpg');
  bar.setAttribute('alt', 'bar');
  bar.id = 'bar';
  container.appendChild(bar);

  const info = document.createElement('div');
  info.id = 'info';
  container.appendChild(info);

  const infoHeading = document.createElement('h2');
  infoHeading.innerText = 'Contact';
  info.appendChild(infoHeading);

  p = document.createElement('p');
  p.innerText = '88 Lincoln Ave, Fergus Falls, MN 56537';
  info.appendChild(p);
  p = document.createElement('p');
  p.innerText = 'P: 888-888-8888';
  info.appendChild(p);
  p = document.createElement('p');
  p.innerText = 'E: Owner@Hudsonco.com';
  info.appendChild(p);
}

function populateFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  content.appendChild(footer);

  const p = document.createElement('p');
  p.innerText = 'Copyright © Tyson Pederson 2022';
  footer.appendChild(p);
}

function populateHome() {
  populateHeader();
  populateNavbar();
  populateContainer();
  populateFooter();
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateMenu": () => (/* binding */ populateMenu)
/* harmony export */ });
const content = document.getElementById('content');

function populateHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  content.appendChild(header);

  const burger = document.createElement('img');
  burger.setAttribute('src', '../src/images/burger-icon.png');
  burger.setAttribute('alt', 'burger');
  burger.id = 'burger-icon';
  header.appendChild(burger);

  const h1 = document.createElement('h1');
  h1.innerText = 'Hudson & Co.';
  header.appendChild(h1);
}

function populateNavbar() {
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  content.appendChild(navbar);

  const navList = document.createElement('ul');
  navbar.appendChild(navList);

  let listItem = document.createElement('li');
  listItem.id = 'home';
  listItem.innerText = 'Home';
  navList.appendChild(listItem);
  listItem = document.createElement('li');
  listItem.id = 'menu'
  listItem.innerText = 'Menu';
  navList.appendChild(listItem);
  listItem = document.createElement('li');
  listItem.id = 'about';
  listItem.innerText = 'About';
  navList.appendChild(listItem);
}

function populateContainer() {
  const container = document.createElement('div');
  container.classList.add('container');
  content.appendChild(container);
  
  const wings = document.createElement('img');
  wings.setAttribute('src', '../src/images/wings.jpg');
  wings.setAttribute('alt', 'wings');
  wings.id = 'wings';
  container.appendChild(wings);

  const wingsInfo = document.createElement('div');
  wingsInfo.id = 'wingsInfo';
  container.appendChild(wingsInfo);

  let h2 = document.createElement('h2');
  h2.innerText = 'Chicken Wings';
  wingsInfo.appendChild(h2);

  let p = document.createElement('p');
  p.innerText = 'Fried in an almond flour batter, your choice of bone-in or boneless. Comes with carrots, celery and a side of ranch or blue cheese.';
  wingsInfo.appendChild(p);

  p = document.createElement('p');
  p.innerText = 'Sauces: Buffalo, Honey BBQ, Parmesan Garlic, Sweet Chili';
  wingsInfo.appendChild(p);

  const platterInfo = document.createElement('div');
  platterInfo.id = 'platterInfo';
  container.appendChild(platterInfo);

  h2 = document.createElement('h2');
  h2.innerText = 'Country Platter';
  platterInfo.appendChild(h2);

  p = document.createElement('p');
  p.innerText = 'For the hungry few, this enormous platter comes with a 6oz sirloin steak, grilled chicken thigh, oven roasted carrots, mushrooms and potatoes, dinner rolls, french fries, and an assortment of house made dipping sauces.';
  platterInfo.appendChild(p);

  const platter = document.createElement('img');
  platter.setAttribute('src', '../src/images/platter.jpg');
  platter.setAttribute('alt', 'platter');
  platter.id = 'platter';
  container.appendChild(platter);

  const cheeseburger = document.createElement('img');
  cheeseburger.setAttribute('src', '../src/images/cheeseburger.jpg');
  cheeseburger.setAttribute('alt', 'cheeseburger');
  cheeseburger.id = 'cheeseburger';
  container.appendChild(cheeseburger);

  const cheeseburgerInfo = document.createElement('div');
  cheeseburgerInfo.id = 'cheeseburgerInfo';
  container.appendChild(cheeseburgerInfo);

  h2 = document.createElement('h2');
  h2.innerText = 'Cheeseburger';
  cheeseburgerInfo.appendChild(h2);

  p = document.createElement('p');
  p.innerText = "Our chef's specialty, this burger is made with 100% American Wagyu beef grilled to perfection and topped with a fried egg, bacon, smoked cheddar cheese, red onion, pickles, and our house made BBQ sauce. Comes with a side of homemade southwest coleslaw and garlic potato wedges.";
  cheeseburgerInfo.appendChild(p);

  const fishInfo = document.createElement('div');
  fishInfo.id = 'fishInfo';
  container.appendChild(fishInfo);

  h2 = document.createElement('h2');
  h2.innerText = 'Fish and Chips';
  fishInfo.appendChild(h2);

  p = document.createElement('p');
  p.innerText = 'Fried in an almond flour batter, this fresh caught walleye comes straight from the surrounding lakes. Comes with a side of fries and a cilantro-lime slaw.';
  fishInfo.appendChild(p);

  const fish = document.createElement('img');
  fish.setAttribute('src', '../src/images/fish.jpg');
  fish.setAttribute('alt', 'fish and chips');
  fish.id = 'fish';
  container.appendChild(fish);
}

function populateFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  content.appendChild(footer);

  const p = document.createElement('p');
  p.innerText = 'Copyright © Tyson Pederson 2022';
  footer.appendChild(p);
}

function populateMenu() {
  populateHeader();
  populateNavbar();
  populateContainer();
  populateFooter();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");




// Display home page on first time loading page
home();

function clearPage() {
  while(content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

function tabEvents() {
  document.getElementById('home').addEventListener('click', home);
  document.getElementById('menu').addEventListener('click', menu);
  document.getElementById('about').addEventListener('click', about);
}

function home() {
  clearPage();
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.populateHome)();
  tabEvents();
}

function menu() {
  clearPage();
  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.populateMenu)();
  tabEvents();
}

function about() {
  clearPage();
  (0,_about__WEBPACK_IMPORTED_MODULE_2__.populateAbout)();
  tabEvents();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaElBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3pJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDQTtBQUNFOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxtREFBWTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsbURBQVk7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHFEQUFhO0FBQ2Y7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gcG9wdWxhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvYnVyZ2VyLWljb24ucG5nJyk7XG4gIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdidXJnZXInKTtcbiAgYnVyZ2VyLmlkID0gJ2J1cmdlci1pY29uJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1cmdlcik7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS5pbm5lclRleHQgPSAnSHVkc29uICYgQ28uJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVOYXZiYXIoKSB7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2YmFyKTtcblxuICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuXG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpc3RJdGVtLmlkID0gJ2hvbWUnO1xuICBsaXN0SXRlbS5pbm5lclRleHQgPSAnSG9tZSc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpc3RJdGVtLmlkID0gJ21lbnUnXG4gIGxpc3RJdGVtLmlubmVyVGV4dCA9ICdNZW51JztcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdEl0ZW0uaWQgPSAnYWJvdXQnO1xuICBsaXN0SXRlbS5pbm5lclRleHQgPSAnQWJvdXQnO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBmYW1pbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZmFtaWx5LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvZmFtaWx5LmpwZycpO1xuICBmYW1pbHkuc2V0QXR0cmlidXRlKCdhbHQnLCAnZmFtaWx5Jyk7XG4gIGZhbWlseS5pZCA9ICdmYW1pbHknO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmFtaWx5KTtcblxuICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRUZXh0LmlkID0gJ2Fib3V0VGV4dCc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xuXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdFdmVyIHNpbmNlIHRoZSBhZ2Ugb2YgMSwgSHVkc29uIGhhcyBiZWVuIGludGVyZXN0ZWQgaW4gY29va2luZy4gV2hlbiBoZSB3YXMgeW91bmdlciwgb25lIG9mIGhpcyBmYXZvcml0ZSB0b3lzIHdhcyBhIHBsYXkga2l0Y2hlbiB3aGVyZSBoZSB3b3VsZCBleHBlcmltZW50IHdpdGggbWFueSBkaWZmZXJlbnQgcGxheSBmb29kIHJlY2lwZXMuIEhlIGhhcyBiZWVuIHJlZ2FyZGVkIGFzIGEgY2hpbGQgcHJvZGlneSBieSBtYW55IE1pY2hlbGluIHN0YXIgY2hlZnMgYW5kIGhhcyBiZWVuIG9mZmVyZWQgYSBmdWxsIHJpZGUgc2Nob2xhcnNoaXAgdG8gTGUgQ29yZG9uIEJsZXUgaW4gUGFyaXMgb25jZSBoZSBiZWNvbWVzIG9mIGFnZS4nO1xuICBhYm91dFRleHQuYXBwZW5kQ2hpbGQocCk7XG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuaW5uZXJUZXh0ID0gJ1dpdGggdGhlIGhlbHAgb2YgaGlzIG1vdGhlciBhbmQgZmF0aGVyLCBIdWRzb24gb3BlbmVkIEh1ZHNvbiAmIENvLiB3aXRoIHRoZSBkcmVhbSBvZiBvbmUgZGF5IGF0dGFpbmluZyAzIE1pY2hlbGluIHN0YXJzLiBTaW5jZSB0aGVpciBncmFuZCBvcGVuaW5nLCBIdWRzb24gJiBDby4gaGFzIGJlZW4gdm90ZWQgYmVzdCByZXN0YXVyYW50IGluIE1pbm5lc290YSBpbiAyMDIyLic7XG4gIGFib3V0VGV4dC5hcHBlbmRDaGlsZChwKTtcbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSAnSHVkc29uICYgQ28uIGlzIGN1cnJlbnRseSB3b3JraW5nIHdpdGggdGhlIEZlcmd1cyBGYWxscyBTY2hvb2wgRGlzdHJpY3QgdG8gbWVudG9yIHN0dWRlbnRzIGluIHRoZSBjdWxpbmFyeSBhcnRzLiBIdWRzb24gZm91bmRlZCB0aGUgSHVkc29uICYgQ28uIFNjaG9sYXJzaGlwIEZ1bmQsIHdoaWNoIGF3YXJkcyB0aGUgdG9wIDUgc3R1ZGVudHMgZWFjaCB5ZWFyIHdpdGggYSBmdWxsIHJpZGUgc2Nob2xhcnNoaXAgdG8gdGhlIGN1bGluYXJ5IHNjaG9vbCBvZiB0aGVpciBjaG9pY2UuJztcbiAgYWJvdXRUZXh0LmFwcGVuZENoaWxkKHApO1xuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdJZiB5b3VyIGNoaWxkIGlzIGludGVyZXN0ZWQgaW4gdGhpcyBtZW50b3JzaGlwIHByb2dyYW0gcGxlYXNlIGNvbnRhY3QgdXMgYXQgODg4LTg4OC04ODg4IG9yIGVtYWlsIHVzIGF0IE93bmVyQGh1ZHNvbmNvLmNvbS4nO1xuICBhYm91dFRleHQuYXBwZW5kQ2hpbGQocCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSAnQ29weXJpZ2h0IMKpIFR5c29uIFBlZGVyc29uIDIwMjInO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUFib3V0KCkge1xuICBwb3B1bGF0ZUhlYWRlcigpO1xuICBwb3B1bGF0ZU5hdmJhcigpO1xuICBwb3B1bGF0ZUNvbnRhaW5lcigpO1xuICBwb3B1bGF0ZUZvb3RlcigpO1xufSIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBidXJnZXIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9idXJnZXItaWNvbi5wbmcnKTtcbiAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2J1cmdlcicpO1xuICBidXJnZXIuaWQgPSAnYnVyZ2VyLWljb24nO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLmlubmVyVGV4dCA9ICdIdWRzb24gJiBDby4nO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZU5hdmJhcigpIHtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIpO1xuXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdEl0ZW0uaWQgPSAnaG9tZSc7XG4gIGxpc3RJdGVtLmlubmVyVGV4dCA9ICdIb21lJztcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdEl0ZW0uaWQgPSAnbWVudSdcbiAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gJ01lbnUnO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICdhYm91dCc7XG4gIGxpc3RJdGVtLmlubmVyVGV4dCA9ICdBYm91dCc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUNvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGJyaWNrV2FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBicmlja1dhbGwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9icmljay13YWxsLmpwZycpO1xuICBicmlja1dhbGwuc2V0QXR0cmlidXRlKCdhbHQnLCAnYnJpY2sgd2FsbCcpO1xuICBicmlja1dhbGwuaWQgPSAnYnJpY2tXYWxsJ1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnJpY2tXYWxsKTtcblxuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSBcIkVzdGFibGlzaGVkIGluIEZlcmd1cyBGYWxscywgTU4gaW4gMjAyMSwgSHVkc29uICYgQ28uIGlzIGEgZmFtaWx5IG93bmVkIHJlc3RhdXJhbnQgdGhhdCBmb2N1c2VzIG9uIHNlcnZpbmcgY29tcGxldGVseSB3aGVhdCBmcmVlIGFuZCBnbHV0ZW4gZnJlZSBkaXNoZXMuIEl0J3Mgb3VyIG1pc3Npb24gdG8gcHJvdmlkZSBleGNlbGxlbnQgd2hlYXQgZnJlZSBkaXNoZXMgd2l0aG91dCBzYWNyaWZpY2luZyBvbiB0YXN0ZS4gV2Ugb25seSB1c2UgbG9jYWxseSBzb3VyY2VkLCBvcmdhbmljIGluZ3JlZGllbnRzIHRvIGVuc3VyZSB0aGF0IG91ciBkaXNoZXMgYXJlIG5vdCBvbmx5IGhlYWx0aHksIGJ1dCBmcmVzaCBhbmQgZGVsaWNpb3VzLiBIdWRzb24gYW5kIGhpcyBmYW1pbHkgc3RhcnRlZCB0aGlzIHJlc3RhdXJhbnQgYmVjYXVzZSB0aGV5IGhhZCBub3RpY2VkIGEgbGFjayBvZiB3aGVhdCBmcmVlIG9wdGlvbnMgYXQgcmVzdGF1cmFudHMgaW4gdGhlIGxvY2FsIGFyZWEuIFNpbmNlIEh1ZHNvbiBoYXMgYSB3aGVhdCBhbGxlcmd5LCBpdCB3YXMgaW1wb3J0YW50IGZvciB0aGVtIHRvIHByb3ZpZGUgYSBzYWZlIGRpbmluZyBleHBlcmllbmNlIG5vdCBvbmx5IGZvciB0aGVpciBzb24sIGJ1dCBmb3IgdGhlIGVudGlyZSBjb21tdW5pdHkuXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcblxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3Vycy5pZCA9ICdob3Vycyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgY29uc3QgaG91cnNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaG91cnNIZWFkaW5nLmlubmVyVGV4dCA9ICdIb3Vycyc7XG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XG5cbiAgY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcblxuICBsZXQgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdNb25kYXk6IDEwYW0gLSA4cG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcbiAgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdUdWVzZGF5OiAxMGFtIC0gOHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnV2VkbmVzZGF5OiAxMGFtIC0gOHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnVGh1cnNkYXk6IDEwYW0gLSA4cG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcbiAgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdGcmlkYXk6IDEwYW0gLSAxMHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnU2F0dXJkYXk6IDEwYW0gLSAxMHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnU3VuZGF5OiA4YW0gLSAycG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcblxuICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYmFyLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvYmFyLmpwZycpO1xuICBiYXIuc2V0QXR0cmlidXRlKCdhbHQnLCAnYmFyJyk7XG4gIGJhci5pZCA9ICdiYXInO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFyKTtcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGluZm8uaWQgPSAnaW5mbyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICBjb25zdCBpbmZvSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGluZm9IZWFkaW5nLmlubmVyVGV4dCA9ICdDb250YWN0JztcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvSGVhZGluZyk7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSAnODggTGluY29sbiBBdmUsIEZlcmd1cyBGYWxscywgTU4gNTY1MzcnO1xuICBpbmZvLmFwcGVuZENoaWxkKHApO1xuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdQOiA4ODgtODg4LTg4ODgnO1xuICBpbmZvLmFwcGVuZENoaWxkKHApO1xuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdFOiBPd25lckBIdWRzb25jby5jb20nO1xuICBpbmZvLmFwcGVuZENoaWxkKHApO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuaW5uZXJUZXh0ID0gJ0NvcHlyaWdodCDCqSBUeXNvbiBQZWRlcnNvbiAyMDIyJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVIb21lKCkge1xuICBwb3B1bGF0ZUhlYWRlcigpO1xuICBwb3B1bGF0ZU5hdmJhcigpO1xuICBwb3B1bGF0ZUNvbnRhaW5lcigpO1xuICBwb3B1bGF0ZUZvb3RlcigpO1xufSIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBidXJnZXIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9idXJnZXItaWNvbi5wbmcnKTtcbiAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2J1cmdlcicpO1xuICBidXJnZXIuaWQgPSAnYnVyZ2VyLWljb24nO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLmlubmVyVGV4dCA9ICdIdWRzb24gJiBDby4nO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZU5hdmJhcigpIHtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIpO1xuXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdEl0ZW0uaWQgPSAnaG9tZSc7XG4gIGxpc3RJdGVtLmlubmVyVGV4dCA9ICdIb21lJztcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdEl0ZW0uaWQgPSAnbWVudSdcbiAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gJ01lbnUnO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICdhYm91dCc7XG4gIGxpc3RJdGVtLmlubmVyVGV4dCA9ICdBYm91dCc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUNvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBcbiAgY29uc3Qgd2luZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgd2luZ3Muc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy93aW5ncy5qcGcnKTtcbiAgd2luZ3Muc2V0QXR0cmlidXRlKCdhbHQnLCAnd2luZ3MnKTtcbiAgd2luZ3MuaWQgPSAnd2luZ3MnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2luZ3MpO1xuXG4gIGNvbnN0IHdpbmdzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3aW5nc0luZm8uaWQgPSAnd2luZ3NJbmZvJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmdzSW5mbyk7XG5cbiAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuaW5uZXJUZXh0ID0gJ0NoaWNrZW4gV2luZ3MnO1xuICB3aW5nc0luZm8uYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdGcmllZCBpbiBhbiBhbG1vbmQgZmxvdXIgYmF0dGVyLCB5b3VyIGNob2ljZSBvZiBib25lLWluIG9yIGJvbmVsZXNzLiBDb21lcyB3aXRoIGNhcnJvdHMsIGNlbGVyeSBhbmQgYSBzaWRlIG9mIHJhbmNoIG9yIGJsdWUgY2hlZXNlLic7XG4gIHdpbmdzSW5mby5hcHBlbmRDaGlsZChwKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdTYXVjZXM6IEJ1ZmZhbG8sIEhvbmV5IEJCUSwgUGFybWVzYW4gR2FybGljLCBTd2VldCBDaGlsaSc7XG4gIHdpbmdzSW5mby5hcHBlbmRDaGlsZChwKTtcblxuICBjb25zdCBwbGF0dGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwbGF0dGVySW5mby5pZCA9ICdwbGF0dGVySW5mbyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF0dGVySW5mbyk7XG5cbiAgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5pbm5lclRleHQgPSAnQ291bnRyeSBQbGF0dGVyJztcbiAgcGxhdHRlckluZm8uYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuaW5uZXJUZXh0ID0gJ0ZvciB0aGUgaHVuZ3J5IGZldywgdGhpcyBlbm9ybW91cyBwbGF0dGVyIGNvbWVzIHdpdGggYSA2b3ogc2lybG9pbiBzdGVhaywgZ3JpbGxlZCBjaGlja2VuIHRoaWdoLCBvdmVuIHJvYXN0ZWQgY2Fycm90cywgbXVzaHJvb21zIGFuZCBwb3RhdG9lcywgZGlubmVyIHJvbGxzLCBmcmVuY2ggZnJpZXMsIGFuZCBhbiBhc3NvcnRtZW50IG9mIGhvdXNlIG1hZGUgZGlwcGluZyBzYXVjZXMuJztcbiAgcGxhdHRlckluZm8uYXBwZW5kQ2hpbGQocCk7XG5cbiAgY29uc3QgcGxhdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBwbGF0dGVyLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvcGxhdHRlci5qcGcnKTtcbiAgcGxhdHRlci5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdwbGF0dGVyJyk7XG4gIHBsYXR0ZXIuaWQgPSAncGxhdHRlcic7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF0dGVyKTtcblxuICBjb25zdCBjaGVlc2VidXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY2hlZXNlYnVyZ2VyLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvY2hlZXNlYnVyZ2VyLmpwZycpO1xuICBjaGVlc2VidXJnZXIuc2V0QXR0cmlidXRlKCdhbHQnLCAnY2hlZXNlYnVyZ2VyJyk7XG4gIGNoZWVzZWJ1cmdlci5pZCA9ICdjaGVlc2VidXJnZXInO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlZXNlYnVyZ2VyKTtcblxuICBjb25zdCBjaGVlc2VidXJnZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoZWVzZWJ1cmdlckluZm8uaWQgPSAnY2hlZXNlYnVyZ2VySW5mbyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVlc2VidXJnZXJJbmZvKTtcblxuICBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLmlubmVyVGV4dCA9ICdDaGVlc2VidXJnZXInO1xuICBjaGVlc2VidXJnZXJJbmZvLmFwcGVuZENoaWxkKGgyKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9IFwiT3VyIGNoZWYncyBzcGVjaWFsdHksIHRoaXMgYnVyZ2VyIGlzIG1hZGUgd2l0aCAxMDAlIEFtZXJpY2FuIFdhZ3l1IGJlZWYgZ3JpbGxlZCB0byBwZXJmZWN0aW9uIGFuZCB0b3BwZWQgd2l0aCBhIGZyaWVkIGVnZywgYmFjb24sIHNtb2tlZCBjaGVkZGFyIGNoZWVzZSwgcmVkIG9uaW9uLCBwaWNrbGVzLCBhbmQgb3VyIGhvdXNlIG1hZGUgQkJRIHNhdWNlLiBDb21lcyB3aXRoIGEgc2lkZSBvZiBob21lbWFkZSBzb3V0aHdlc3QgY29sZXNsYXcgYW5kIGdhcmxpYyBwb3RhdG8gd2VkZ2VzLlwiO1xuICBjaGVlc2VidXJnZXJJbmZvLmFwcGVuZENoaWxkKHApO1xuXG4gIGNvbnN0IGZpc2hJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZpc2hJbmZvLmlkID0gJ2Zpc2hJbmZvJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpc2hJbmZvKTtcblxuICBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLmlubmVyVGV4dCA9ICdGaXNoIGFuZCBDaGlwcyc7XG4gIGZpc2hJbmZvLmFwcGVuZENoaWxkKGgyKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdGcmllZCBpbiBhbiBhbG1vbmQgZmxvdXIgYmF0dGVyLCB0aGlzIGZyZXNoIGNhdWdodCB3YWxsZXllIGNvbWVzIHN0cmFpZ2h0IGZyb20gdGhlIHN1cnJvdW5kaW5nIGxha2VzLiBDb21lcyB3aXRoIGEgc2lkZSBvZiBmcmllcyBhbmQgYSBjaWxhbnRyby1saW1lIHNsYXcuJztcbiAgZmlzaEluZm8uYXBwZW5kQ2hpbGQocCk7XG5cbiAgY29uc3QgZmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmaXNoLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvZmlzaC5qcGcnKTtcbiAgZmlzaC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdmaXNoIGFuZCBjaGlwcycpO1xuICBmaXNoLmlkID0gJ2Zpc2gnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmlzaCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSAnQ29weXJpZ2h0IMKpIFR5c29uIFBlZGVyc29uIDIwMjInO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZU1lbnUoKSB7XG4gIHBvcHVsYXRlSGVhZGVyKCk7XG4gIHBvcHVsYXRlTmF2YmFyKCk7XG4gIHBvcHVsYXRlQ29udGFpbmVyKCk7XG4gIHBvcHVsYXRlRm9vdGVyKCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwb3B1bGF0ZUhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZUFib3V0IH0gZnJvbSBcIi4vYWJvdXRcIjtcblxuLy8gRGlzcGxheSBob21lIHBhZ2Ugb24gZmlyc3QgdGltZSBsb2FkaW5nIHBhZ2VcbmhvbWUoKTtcblxuZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICB3aGlsZShjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0YWJFdmVudHMoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob21lKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnUpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFib3V0KTtcbn1cblxuZnVuY3Rpb24gaG9tZSgpIHtcbiAgY2xlYXJQYWdlKCk7XG4gIHBvcHVsYXRlSG9tZSgpO1xuICB0YWJFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gbWVudSgpIHtcbiAgY2xlYXJQYWdlKCk7XG4gIHBvcHVsYXRlTWVudSgpO1xuICB0YWJFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gYWJvdXQoKSB7XG4gIGNsZWFyUGFnZSgpO1xuICBwb3B1bGF0ZUFib3V0KCk7XG4gIHRhYkV2ZW50cygpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==