import { populateHome } from "./home";
import { populateMenu } from "./menu";
import { populateAbout } from "./about";

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
  populateHome();
  tabEvents();
}

function menu() {
  clearPage();
  populateMenu();
  tabEvents();
}

function about() {
  clearPage();
  populateAbout();
  tabEvents();
}