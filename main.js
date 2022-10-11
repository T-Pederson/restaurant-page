/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  listItem.id = 'team';
  listItem.innerText = 'Team';
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
  listItem.id = 'team';
  listItem.innerText = 'Team';
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

/***/ }),

/***/ "./src/team.js":
/*!*********************!*\
  !*** ./src/team.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateTeam": () => (/* binding */ populateTeam)
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
  listItem.id = 'team';
  listItem.innerText = 'Team';
  navList.appendChild(listItem);
}

function populateContainer() {
  const container = document.createElement('div');
  container.classList.add('container');
  content.appendChild(container);
}

function populateFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  content.appendChild(footer);

  const p = document.createElement('p');
  p.innerText = 'Copyright © Tyson Pederson 2022';
  footer.appendChild(p);
}

function populateTeam() {
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
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team */ "./src/team.js");




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
  document.getElementById('team').addEventListener('click', team);
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

function team() {
  clearPage();
  (0,_team__WEBPACK_IMPORTED_MODULE_2__.populateTeam)();
  tabEvents();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaElBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeklBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDN0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNBO0FBQ0E7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG1EQUFZO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxtREFBWTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsbURBQVk7QUFDZDtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGVhbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL2J1cmdlci1pY29uLnBuZycpO1xuICBidXJnZXIuc2V0QXR0cmlidXRlKCdhbHQnLCAnYnVyZ2VyJyk7XG4gIGJ1cmdlci5pZCA9ICdidXJnZXItaWNvbic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChidXJnZXIpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEuaW5uZXJUZXh0ID0gJ0h1ZHNvbiAmIENvLic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTmF2YmFyKCkge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcblxuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICdob21lJztcbiAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICdtZW51J1xuICBsaXN0SXRlbS5pbm5lclRleHQgPSAnTWVudSc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpc3RJdGVtLmlkID0gJ3RlYW0nO1xuICBsaXN0SXRlbS5pbm5lclRleHQgPSAnVGVhbSc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUNvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGJyaWNrV2FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBicmlja1dhbGwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9icmljay13YWxsLmpwZycpO1xuICBicmlja1dhbGwuc2V0QXR0cmlidXRlKCdhbHQnLCAnYnJpY2sgd2FsbCcpO1xuICBicmlja1dhbGwuaWQgPSAnYnJpY2tXYWxsJ1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnJpY2tXYWxsKTtcblxuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSBcIkVzdGFibGlzaGVkIGluIEZlcmd1cyBGYWxscywgTU4gaW4gMjAyMSwgSHVkc29uICYgQ28uIGlzIGEgZmFtaWx5IG93bmVkIHJlc3RhdXJhbnQgdGhhdCBmb2N1c2VzIG9uIHNlcnZpbmcgY29tcGxldGVseSB3aGVhdCBmcmVlIGFuZCBnbHV0ZW4gZnJlZSBkaXNoZXMuIEl0J3Mgb3VyIG1pc3Npb24gdG8gcHJvdmlkZSBleGNlbGxlbnQgd2hlYXQgZnJlZSBkaXNoZXMgd2l0aG91dCBzYWNyaWZpY2luZyBvbiB0YXN0ZS4gV2Ugb25seSB1c2UgbG9jYWxseSBzb3VyY2VkLCBvcmdhbmljIGluZ3JlZGllbnRzIHRvIGVuc3VyZSB0aGF0IG91ciBkaXNoZXMgYXJlIG5vdCBvbmx5IGhlYWx0aHksIGJ1dCBmcmVzaCBhbmQgZGVsaWNpb3VzLiBIdWRzb24gYW5kIGhpcyBmYW1pbHkgc3RhcnRlZCB0aGlzIHJlc3RhdXJhbnQgYmVjYXVzZSB0aGV5IGhhZCBub3RpY2VkIGEgbGFjayBvZiB3aGVhdCBmcmVlIG9wdGlvbnMgYXQgcmVzdGF1cmFudHMgaW4gdGhlIGxvY2FsIGFyZWEuIFNpbmNlIEh1ZHNvbiBoYXMgYSB3aGVhdCBhbGxlcmd5LCBpdCB3YXMgaW1wb3J0YW50IGZvciB0aGVtIHRvIHByb3ZpZGUgYSBzYWZlIGRpbmluZyBleHBlcmllbmNlIG5vdCBvbmx5IGZvciB0aGVpciBzb24sIGJ1dCBmb3IgdGhlIGVudGlyZSBjb21tdW5pdHkuXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcblxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3Vycy5pZCA9ICdob3Vycyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgY29uc3QgaG91cnNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaG91cnNIZWFkaW5nLmlubmVyVGV4dCA9ICdIb3Vycyc7XG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XG5cbiAgY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcblxuICBsZXQgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdNb25kYXk6IDEwYW0gLSA4cG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcbiAgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdUdWVzZGF5OiAxMGFtIC0gOHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnV2VkbmVzZGF5OiAxMGFtIC0gOHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnVGh1cnNkYXk6IDEwYW0gLSA4cG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcbiAgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdGcmlkYXk6IDEwYW0gLSAxMHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnU2F0dXJkYXk6IDEwYW0gLSAxMHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnU3VuZGF5OiA4YW0gLSAycG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcblxuICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYmFyLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvYmFyLmpwZycpO1xuICBiYXIuc2V0QXR0cmlidXRlKCdhbHQnLCAnYmFyJyk7XG4gIGJhci5pZCA9ICdiYXInO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFyKTtcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGluZm8uaWQgPSAnaW5mbyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICBjb25zdCBpbmZvSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGluZm9IZWFkaW5nLmlubmVyVGV4dCA9ICdDb250YWN0JztcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvSGVhZGluZyk7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSAnODggTGluY29sbiBBdmUsIEZlcmd1cyBGYWxscywgTU4gNTY1MzcnO1xuICBpbmZvLmFwcGVuZENoaWxkKHApO1xuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdQOiA4ODgtODg4LTg4ODgnO1xuICBpbmZvLmFwcGVuZENoaWxkKHApO1xuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdFOiBPd25lckBIdWRzb25jby5jb20nO1xuICBpbmZvLmFwcGVuZENoaWxkKHApO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuaW5uZXJUZXh0ID0gJ0NvcHlyaWdodCDCqSBUeXNvbiBQZWRlcnNvbiAyMDIyJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVIb21lKCkge1xuICBwb3B1bGF0ZUhlYWRlcigpO1xuICBwb3B1bGF0ZU5hdmJhcigpO1xuICBwb3B1bGF0ZUNvbnRhaW5lcigpO1xuICBwb3B1bGF0ZUZvb3RlcigpO1xufSIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBidXJnZXIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9idXJnZXItaWNvbi5wbmcnKTtcbiAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2J1cmdlcicpO1xuICBidXJnZXIuaWQgPSAnYnVyZ2VyLWljb24nO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLmlubmVyVGV4dCA9ICdIdWRzb24gJiBDby4nO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZU5hdmJhcigpIHtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIpO1xuXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdEl0ZW0uaWQgPSAnaG9tZSc7XG4gIGxpc3RJdGVtLmlubmVyVGV4dCA9ICdIb21lJztcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdEl0ZW0uaWQgPSAnbWVudSdcbiAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gJ01lbnUnO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICd0ZWFtJztcbiAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gJ1RlYW0nO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgXG4gIGNvbnN0IHdpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHdpbmdzLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvd2luZ3MuanBnJyk7XG4gIHdpbmdzLnNldEF0dHJpYnV0ZSgnYWx0JywgJ3dpbmdzJyk7XG4gIHdpbmdzLmlkID0gJ3dpbmdzJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmdzKTtcblxuICBjb25zdCB3aW5nc0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2luZ3NJbmZvLmlkID0gJ3dpbmdzSW5mbyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5nc0luZm8pO1xuXG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLmlubmVyVGV4dCA9ICdDaGlja2VuIFdpbmdzJztcbiAgd2luZ3NJbmZvLmFwcGVuZENoaWxkKGgyKTtcblxuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSAnRnJpZWQgaW4gYW4gYWxtb25kIGZsb3VyIGJhdHRlciwgeW91ciBjaG9pY2Ugb2YgYm9uZS1pbiBvciBib25lbGVzcy4gQ29tZXMgd2l0aCBjYXJyb3RzLCBjZWxlcnkgYW5kIGEgc2lkZSBvZiByYW5jaCBvciBibHVlIGNoZWVzZS4nO1xuICB3aW5nc0luZm8uYXBwZW5kQ2hpbGQocCk7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSAnU2F1Y2VzOiBCdWZmYWxvLCBIb25leSBCQlEsIFBhcm1lc2FuIEdhcmxpYywgU3dlZXQgQ2hpbGknO1xuICB3aW5nc0luZm8uYXBwZW5kQ2hpbGQocCk7XG5cbiAgY29uc3QgcGxhdHRlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxhdHRlckluZm8uaWQgPSAncGxhdHRlckluZm8nO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxhdHRlckluZm8pO1xuXG4gIGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuaW5uZXJUZXh0ID0gJ0NvdW50cnkgUGxhdHRlcic7XG4gIHBsYXR0ZXJJbmZvLmFwcGVuZENoaWxkKGgyKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdGb3IgdGhlIGh1bmdyeSBmZXcsIHRoaXMgZW5vcm1vdXMgcGxhdHRlciBjb21lcyB3aXRoIGEgNm96IHNpcmxvaW4gc3RlYWssIGdyaWxsZWQgY2hpY2tlbiB0aGlnaCwgb3ZlbiByb2FzdGVkIGNhcnJvdHMsIG11c2hyb29tcyBhbmQgcG90YXRvZXMsIGRpbm5lciByb2xscywgZnJlbmNoIGZyaWVzLCBhbmQgYW4gYXNzb3J0bWVudCBvZiBob3VzZSBtYWRlIGRpcHBpbmcgc2F1Y2VzLic7XG4gIHBsYXR0ZXJJbmZvLmFwcGVuZENoaWxkKHApO1xuXG4gIGNvbnN0IHBsYXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgcGxhdHRlci5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL3BsYXR0ZXIuanBnJyk7XG4gIHBsYXR0ZXIuc2V0QXR0cmlidXRlKCdhbHQnLCAncGxhdHRlcicpO1xuICBwbGF0dGVyLmlkID0gJ3BsYXR0ZXInO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGxhdHRlcik7XG5cbiAgY29uc3QgY2hlZXNlYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNoZWVzZWJ1cmdlci5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL2NoZWVzZWJ1cmdlci5qcGcnKTtcbiAgY2hlZXNlYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2NoZWVzZWJ1cmdlcicpO1xuICBjaGVlc2VidXJnZXIuaWQgPSAnY2hlZXNlYnVyZ2VyJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWVzZWJ1cmdlcik7XG5cbiAgY29uc3QgY2hlZXNlYnVyZ2VySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaGVlc2VidXJnZXJJbmZvLmlkID0gJ2NoZWVzZWJ1cmdlckluZm8nO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlZXNlYnVyZ2VySW5mbyk7XG5cbiAgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5pbm5lclRleHQgPSAnQ2hlZXNlYnVyZ2VyJztcbiAgY2hlZXNlYnVyZ2VySW5mby5hcHBlbmRDaGlsZChoMik7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSBcIk91ciBjaGVmJ3Mgc3BlY2lhbHR5LCB0aGlzIGJ1cmdlciBpcyBtYWRlIHdpdGggMTAwJSBBbWVyaWNhbiBXYWd5dSBiZWVmIGdyaWxsZWQgdG8gcGVyZmVjdGlvbiBhbmQgdG9wcGVkIHdpdGggYSBmcmllZCBlZ2csIGJhY29uLCBzbW9rZWQgY2hlZGRhciBjaGVlc2UsIHJlZCBvbmlvbiwgcGlja2xlcywgYW5kIG91ciBob3VzZSBtYWRlIEJCUSBzYXVjZS4gQ29tZXMgd2l0aCBhIHNpZGUgb2YgaG9tZW1hZGUgc291dGh3ZXN0IGNvbGVzbGF3IGFuZCBnYXJsaWMgcG90YXRvIHdlZGdlcy5cIjtcbiAgY2hlZXNlYnVyZ2VySW5mby5hcHBlbmRDaGlsZChwKTtcblxuICBjb25zdCBmaXNoSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmaXNoSW5mby5pZCA9ICdmaXNoSW5mbyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXNoSW5mbyk7XG5cbiAgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5pbm5lclRleHQgPSAnRmlzaCBhbmQgQ2hpcHMnO1xuICBmaXNoSW5mby5hcHBlbmRDaGlsZChoMik7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSAnRnJpZWQgaW4gYW4gYWxtb25kIGZsb3VyIGJhdHRlciwgdGhpcyBmcmVzaCBjYXVnaHQgd2FsbGV5ZSBjb21lcyBzdHJhaWdodCBmcm9tIHRoZSBzdXJyb3VuZGluZyBsYWtlcy4gQ29tZXMgd2l0aCBhIHNpZGUgb2YgZnJpZXMgYW5kIGEgY2lsYW50cm8tbGltZSBzbGF3Lic7XG4gIGZpc2hJbmZvLmFwcGVuZENoaWxkKHApO1xuXG4gIGNvbnN0IGZpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZmlzaC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL2Zpc2guanBnJyk7XG4gIGZpc2guc2V0QXR0cmlidXRlKCdhbHQnLCAnZmlzaCBhbmQgY2hpcHMnKTtcbiAgZmlzaC5pZCA9ICdmaXNoJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpc2gpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuaW5uZXJUZXh0ID0gJ0NvcHlyaWdodCDCqSBUeXNvbiBQZWRlcnNvbiAyMDIyJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVNZW51KCkge1xuICBwb3B1bGF0ZUhlYWRlcigpO1xuICBwb3B1bGF0ZU5hdmJhcigpO1xuICBwb3B1bGF0ZUNvbnRhaW5lcigpO1xuICBwb3B1bGF0ZUZvb3RlcigpO1xufSIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBidXJnZXIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9idXJnZXItaWNvbi5wbmcnKTtcbiAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2J1cmdlcicpO1xuICBidXJnZXIuaWQgPSAnYnVyZ2VyLWljb24nO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnVyZ2VyKTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLmlubmVyVGV4dCA9ICdIdWRzb24gJiBDby4nO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZU5hdmJhcigpIHtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIpO1xuXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdEl0ZW0uaWQgPSAnaG9tZSc7XG4gIGxpc3RJdGVtLmlubmVyVGV4dCA9ICdIb21lJztcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdEl0ZW0uaWQgPSAnbWVudSdcbiAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gJ01lbnUnO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICd0ZWFtJztcbiAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gJ1RlYW0nO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdDb3B5cmlnaHQgwqkgVHlzb24gUGVkZXJzb24gMjAyMic7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlVGVhbSgpIHtcbiAgcG9wdWxhdGVIZWFkZXIoKTtcbiAgcG9wdWxhdGVOYXZiYXIoKTtcbiAgcG9wdWxhdGVDb250YWluZXIoKTtcbiAgcG9wdWxhdGVGb290ZXIoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBvcHVsYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IHBvcHVsYXRlTWVudSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IHBvcHVsYXRlVGVhbSB9IGZyb20gXCIuL3RlYW1cIjtcblxuLy8gRGlzcGxheSBob21lIHBhZ2Ugb24gZmlyc3QgdGltZSBsb2FkaW5nIHBhZ2VcbmhvbWUoKTtcblxuZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICB3aGlsZShjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0YWJFdmVudHMoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob21lKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnUpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVhbScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGVhbSk7XG59XG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG4gIGNsZWFyUGFnZSgpO1xuICBwb3B1bGF0ZUhvbWUoKTtcbiAgdGFiRXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIG1lbnUoKSB7XG4gIGNsZWFyUGFnZSgpO1xuICBwb3B1bGF0ZU1lbnUoKTtcbiAgdGFiRXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIHRlYW0oKSB7XG4gIGNsZWFyUGFnZSgpO1xuICBwb3B1bGF0ZVRlYW0oKTtcbiAgdGFiRXZlbnRzKCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9