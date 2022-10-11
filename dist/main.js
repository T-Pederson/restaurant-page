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
  burger.setAttribute('src', '../src/images/burger.png');
  burger.setAttribute('alt', 'burger');
  burger.id = 'burger';
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

  const hoursHeading = document.createElement('h3');
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

  const infoHeading = document.createElement('h3');
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
  burger.setAttribute('src', '../src/images/burger.png');
  burger.setAttribute('alt', 'burger');
  burger.id = 'burger';
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
  burger.setAttribute('src', '../src/images/burger.png');
  burger.setAttribute('alt', 'burger');
  burger.id = 'burger';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaElBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDQTtBQUNBOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxtREFBWTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsbURBQVk7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG1EQUFZO0FBQ2Q7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RlYW0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBidXJnZXIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9idXJnZXIucG5nJyk7XG4gIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdidXJnZXInKTtcbiAgYnVyZ2VyLmlkID0gJ2J1cmdlcic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChidXJnZXIpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEuaW5uZXJUZXh0ID0gJ0h1ZHNvbiAmIENvLic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTmF2YmFyKCkge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcblxuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICdob21lJztcbiAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICdtZW51J1xuICBsaXN0SXRlbS5pbm5lclRleHQgPSAnTWVudSc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpc3RJdGVtLmlkID0gJ3RlYW0nO1xuICBsaXN0SXRlbS5pbm5lclRleHQgPSAnVGVhbSc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUNvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGJyaWNrV2FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBicmlja1dhbGwuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9icmljay13YWxsLmpwZycpO1xuICBicmlja1dhbGwuc2V0QXR0cmlidXRlKCdhbHQnLCAnYnJpY2sgd2FsbCcpO1xuICBicmlja1dhbGwuaWQgPSAnYnJpY2tXYWxsJ1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnJpY2tXYWxsKTtcblxuICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSBcIkVzdGFibGlzaGVkIGluIEZlcmd1cyBGYWxscywgTU4gaW4gMjAyMSwgSHVkc29uICYgQ28uIGlzIGEgZmFtaWx5IG93bmVkIHJlc3RhdXJhbnQgdGhhdCBmb2N1c2VzIG9uIHNlcnZpbmcgY29tcGxldGVseSB3aGVhdCBmcmVlIGFuZCBnbHV0ZW4gZnJlZSBkaXNoZXMuIEl0J3Mgb3VyIG1pc3Npb24gdG8gcHJvdmlkZSBleGNlbGxlbnQgd2hlYXQgZnJlZSBkaXNoZXMgd2l0aG91dCBzYWNyaWZpY2luZyBvbiB0YXN0ZS4gV2Ugb25seSB1c2UgbG9jYWxseSBzb3VyY2VkLCBvcmdhbmljIGluZ3JlZGllbnRzIHRvIGVuc3VyZSB0aGF0IG91ciBkaXNoZXMgYXJlIG5vdCBvbmx5IGhlYWx0aHksIGJ1dCBmcmVzaCBhbmQgZGVsaWNpb3VzLiBIdWRzb24gYW5kIGhpcyBmYW1pbHkgc3RhcnRlZCB0aGlzIHJlc3RhdXJhbnQgYmVjYXVzZSB0aGV5IGhhZCBub3RpY2VkIGEgbGFjayBvZiB3aGVhdCBmcmVlIG9wdGlvbnMgYXQgcmVzdGF1cmFudHMgaW4gdGhlIGxvY2FsIGFyZWEuIFNpbmNlIEh1ZHNvbiBoYXMgYSB3aGVhdCBhbGxlcmd5LCBpdCB3YXMgaW1wb3J0YW50IGZvciB0aGVtIHRvIHByb3ZpZGUgYSBzYWZlIGRpbmluZyBleHBlcmllbmNlIG5vdCBvbmx5IGZvciB0aGVpciBzb24sIGJ1dCBmb3IgdGhlIGVudGlyZSBjb21tdW5pdHkuXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcblxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3Vycy5pZCA9ICdob3Vycyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgY29uc3QgaG91cnNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaG91cnNIZWFkaW5nLmlubmVyVGV4dCA9ICdIb3Vycyc7XG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XG5cbiAgY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcblxuICBsZXQgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdNb25kYXk6IDEwYW0gLSA4cG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcbiAgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdUdWVzZGF5OiAxMGFtIC0gOHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnV2VkbmVzZGF5OiAxMGFtIC0gOHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnVGh1cnNkYXk6IDEwYW0gLSA4cG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcbiAgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdGcmlkYXk6IDEwYW0gLSAxMHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnU2F0dXJkYXk6IDEwYW0gLSAxMHBtJztcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gIGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzSXRlbS5pbm5lclRleHQgPSAnU3VuZGF5OiA4YW0gLSAycG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcblxuICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYmFyLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvYmFyLmpwZycpO1xuICBiYXIuc2V0QXR0cmlidXRlKCdhbHQnLCAnYmFyJyk7XG4gIGJhci5pZCA9ICdiYXInO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFyKTtcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGluZm8uaWQgPSAnaW5mbyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvKTtcblxuICBjb25zdCBpbmZvSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGluZm9IZWFkaW5nLmlubmVyVGV4dCA9ICdDb250YWN0JztcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvSGVhZGluZyk7XG5cbiAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSAnODggTGluY29sbiBBdmUsIEZlcmd1cyBGYWxscywgTU4gNTY1MzcnO1xuICBpbmZvLmFwcGVuZENoaWxkKHApO1xuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdQOiA4ODgtODg4LTg4ODgnO1xuICBpbmZvLmFwcGVuZENoaWxkKHApO1xuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICdFOiBPd25lckBIdWRzb25jby5jb20nO1xuICBpbmZvLmFwcGVuZENoaWxkKHApO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuaW5uZXJUZXh0ID0gJ0NvcHlyaWdodCDCqSBUeXNvbiBQZWRlcnNvbiAyMDIyJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVIb21lKCkge1xuICBwb3B1bGF0ZUhlYWRlcigpO1xuICBwb3B1bGF0ZU5hdmJhcigpO1xuICBwb3B1bGF0ZUNvbnRhaW5lcigpO1xuICBwb3B1bGF0ZUZvb3RlcigpO1xufSIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBidXJnZXIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9idXJnZXIucG5nJyk7XG4gIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdidXJnZXInKTtcbiAgYnVyZ2VyLmlkID0gJ2J1cmdlcic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChidXJnZXIpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEuaW5uZXJUZXh0ID0gJ0h1ZHNvbiAmIENvLic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTmF2YmFyKCkge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcblxuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICdob21lJztcbiAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICdtZW51J1xuICBsaXN0SXRlbS5pbm5lclRleHQgPSAnTWVudSc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpc3RJdGVtLmlkID0gJ3RlYW0nO1xuICBsaXN0SXRlbS5pbm5lclRleHQgPSAnVGVhbSc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUNvbnRhaW5lcigpIHtcblxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuaW5uZXJUZXh0ID0gJ0NvcHlyaWdodCDCqSBUeXNvbiBQZWRlcnNvbiAyMDIyJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVNZW51KCkge1xuICBwb3B1bGF0ZUhlYWRlcigpO1xuICBwb3B1bGF0ZU5hdmJhcigpO1xuICBwb3B1bGF0ZUNvbnRhaW5lcigpO1xuICBwb3B1bGF0ZUZvb3RlcigpO1xufSIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBidXJnZXIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9idXJnZXIucG5nJyk7XG4gIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdidXJnZXInKTtcbiAgYnVyZ2VyLmlkID0gJ2J1cmdlcic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChidXJnZXIpO1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEuaW5uZXJUZXh0ID0gJ0h1ZHNvbiAmIENvLic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTmF2YmFyKCkge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcblxuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICdob21lJztcbiAgbGlzdEl0ZW0uaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaXN0SXRlbS5pZCA9ICdtZW51J1xuICBsaXN0SXRlbS5pbm5lclRleHQgPSAnTWVudSc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpc3RJdGVtLmlkID0gJ3RlYW0nO1xuICBsaXN0SXRlbS5pbm5lclRleHQgPSAnVGVhbSc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUNvbnRhaW5lcigpIHtcblxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuaW5uZXJUZXh0ID0gJ0NvcHlyaWdodCDCqSBUeXNvbiBQZWRlcnNvbiAyMDIyJztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVUZWFtKCkge1xuICBwb3B1bGF0ZUhlYWRlcigpO1xuICBwb3B1bGF0ZU5hdmJhcigpO1xuICBwb3B1bGF0ZUNvbnRhaW5lcigpO1xuICBwb3B1bGF0ZUZvb3RlcigpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcG9wdWxhdGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgcG9wdWxhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgcG9wdWxhdGVUZWFtIH0gZnJvbSBcIi4vdGVhbVwiO1xuXG4vLyBEaXNwbGF5IGhvbWUgcGFnZSBvbiBmaXJzdCB0aW1lIGxvYWRpbmcgcGFnZVxuaG9tZSgpO1xuXG5mdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG4gIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRhYkV2ZW50cygpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWUpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0ZWFtKTtcbn1cblxuZnVuY3Rpb24gaG9tZSgpIHtcbiAgY2xlYXJQYWdlKCk7XG4gIHBvcHVsYXRlSG9tZSgpO1xuICB0YWJFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gbWVudSgpIHtcbiAgY2xlYXJQYWdlKCk7XG4gIHBvcHVsYXRlTWVudSgpO1xuICB0YWJFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gdGVhbSgpIHtcbiAgY2xlYXJQYWdlKCk7XG4gIHBvcHVsYXRlVGVhbSgpO1xuICB0YWJFdmVudHMoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=