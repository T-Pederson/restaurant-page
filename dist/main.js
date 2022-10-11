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
  populateMenu();
  tabEvents();
}

function team() {
  clearPage();
  populateTeam();
  tabEvents();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2hJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNDOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxtREFBWTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL2J1cmdlci5wbmcnKTtcbiAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2J1cmdlcicpO1xuICBidXJnZXIuaWQgPSAnYnVyZ2VyJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1cmdlcik7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS5pbm5lclRleHQgPSAnSHVkc29uICYgQ28uJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVOYXZiYXIoKSB7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2YmFyKTtcblxuICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuXG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpc3RJdGVtLmlkID0gJ2hvbWUnO1xuICBsaXN0SXRlbS5pbm5lclRleHQgPSAnSG9tZSc7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpc3RJdGVtLmlkID0gJ21lbnUnXG4gIGxpc3RJdGVtLmlubmVyVGV4dCA9ICdNZW51JztcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlzdEl0ZW0uaWQgPSAndGVhbSc7XG4gIGxpc3RJdGVtLmlubmVyVGV4dCA9ICdUZWFtJztcbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgYnJpY2tXYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJyaWNrV2FsbC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL2JyaWNrLXdhbGwuanBnJyk7XG4gIGJyaWNrV2FsbC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdicmljayB3YWxsJyk7XG4gIGJyaWNrV2FsbC5pZCA9ICdicmlja1dhbGwnXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChicmlja1dhbGwpO1xuXG4gIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9IFwiRXN0YWJsaXNoZWQgaW4gRmVyZ3VzIEZhbGxzLCBNTiBpbiAyMDIxLCBIdWRzb24gJiBDby4gaXMgYSBmYW1pbHkgb3duZWQgcmVzdGF1cmFudCB0aGF0IGZvY3VzZXMgb24gc2VydmluZyBjb21wbGV0ZWx5IHdoZWF0IGZyZWUgYW5kIGdsdXRlbiBmcmVlIGRpc2hlcy4gSXQncyBvdXIgbWlzc2lvbiB0byBwcm92aWRlIGV4Y2VsbGVudCB3aGVhdCBmcmVlIGRpc2hlcyB3aXRob3V0IHNhY3JpZmljaW5nIG9uIHRhc3RlLiBXZSBvbmx5IHVzZSBsb2NhbGx5IHNvdXJjZWQsIG9yZ2FuaWMgaW5ncmVkaWVudHMgdG8gZW5zdXJlIHRoYXQgb3VyIGRpc2hlcyBhcmUgbm90IG9ubHkgaGVhbHRoeSwgYnV0IGZyZXNoIGFuZCBkZWxpY2lvdXMuIEh1ZHNvbiBhbmQgaGlzIGZhbWlseSBzdGFydGVkIHRoaXMgcmVzdGF1cmFudCBiZWNhdXNlIHRoZXkgaGFkIG5vdGljZWQgYSBsYWNrIG9mIHdoZWF0IGZyZWUgb3B0aW9ucyBhdCByZXN0YXVyYW50cyBpbiB0aGUgbG9jYWwgYXJlYS4gU2luY2UgSHVkc29uIGhhcyBhIHdoZWF0IGFsbGVyZ3ksIGl0IHdhcyBpbXBvcnRhbnQgZm9yIHRoZW0gdG8gcHJvdmlkZSBhIHNhZmUgZGluaW5nIGV4cGVyaWVuY2Ugbm90IG9ubHkgZm9yIHRoZWlyIHNvbiwgYnV0IGZvciB0aGUgZW50aXJlIGNvbW11bml0eS5cIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJzLmlkID0gJ2hvdXJzJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICBjb25zdCBob3Vyc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBob3Vyc0hlYWRpbmcuaW5uZXJUZXh0ID0gJ0hvdXJzJztcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNIZWFkaW5nKTtcblxuICBjb25zdCBob3Vyc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0xpc3QpO1xuXG4gIGxldCBob3Vyc0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBob3Vyc0l0ZW0uaW5uZXJUZXh0ID0gJ01vbmRheTogMTBhbSAtIDhwbSc7XG4gIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc0l0ZW0pO1xuICBob3Vyc0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBob3Vyc0l0ZW0uaW5uZXJUZXh0ID0gJ1R1ZXNkYXk6IDEwYW0gLSA4cG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcbiAgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdXZWRuZXNkYXk6IDEwYW0gLSA4cG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcbiAgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdUaHVyc2RheTogMTBhbSAtIDhwbSc7XG4gIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc0l0ZW0pO1xuICBob3Vyc0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBob3Vyc0l0ZW0uaW5uZXJUZXh0ID0gJ0ZyaWRheTogMTBhbSAtIDEwcG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcbiAgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdTYXR1cmRheTogMTBhbSAtIDEwcG0nO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoaG91cnNJdGVtKTtcbiAgaG91cnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaG91cnNJdGVtLmlubmVyVGV4dCA9ICdTdW5kYXk6IDhhbSAtIDJwbSc7XG4gIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc0l0ZW0pO1xuXG4gIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBiYXIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9iYXIuanBnJyk7XG4gIGJhci5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdiYXInKTtcbiAgYmFyLmlkID0gJ2Jhcic7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXIpO1xuXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mby5pZCA9ICdpbmZvJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIGNvbnN0IGluZm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaW5mb0hlYWRpbmcuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm9IZWFkaW5nKTtcblxuICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmlubmVyVGV4dCA9ICc4OCBMaW5jb2xuIEF2ZSwgRmVyZ3VzIEZhbGxzLCBNTiA1NjUzNyc7XG4gIGluZm8uYXBwZW5kQ2hpbGQocCk7XG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuaW5uZXJUZXh0ID0gJ1A6IDg4OC04ODgtODg4OCc7XG4gIGluZm8uYXBwZW5kQ2hpbGQocCk7XG4gIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuaW5uZXJUZXh0ID0gJ0U6IE93bmVyQEh1ZHNvbmNvLmNvbSc7XG4gIGluZm8uYXBwZW5kQ2hpbGQocCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5pbm5lclRleHQgPSAnQ29weXJpZ2h0IMKpIFR5c29uIFBlZGVyc29uIDIwMjInO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUhvbWUoKSB7XG4gIHBvcHVsYXRlSGVhZGVyKCk7XG4gIHBvcHVsYXRlTmF2YmFyKCk7XG4gIHBvcHVsYXRlQ29udGFpbmVyKCk7XG4gIHBvcHVsYXRlRm9vdGVyKCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwb3B1bGF0ZUhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5cbi8vIERpc3BsYXkgaG9tZSBwYWdlIG9uIGZpcnN0IHRpbWUgbG9hZGluZyBwYWdlXG5ob21lKCk7XG5cbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFiRXZlbnRzKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlYW0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRlYW0pO1xufVxuXG5mdW5jdGlvbiBob21lKCkge1xuICBjbGVhclBhZ2UoKTtcbiAgcG9wdWxhdGVIb21lKCk7XG4gIHRhYkV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBtZW51KCkge1xuICBjbGVhclBhZ2UoKTtcbiAgcG9wdWxhdGVNZW51KCk7XG4gIHRhYkV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiB0ZWFtKCkge1xuICBjbGVhclBhZ2UoKTtcbiAgcG9wdWxhdGVUZWFtKCk7XG4gIHRhYkV2ZW50cygpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==