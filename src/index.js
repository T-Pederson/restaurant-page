import { populateHome } from "./home";
import { populateMenu } from "./menu";
import { populateAbout } from "./about";
import { populateTemplate } from "./template";
import './styles.css';

// Display home page on first time loading page
template();

const container = document.querySelector('.container');

function clearPage() {
  while(container.firstChild) {
    container.removeChild(container.lastChild);
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

function template() {
  populateTemplate();
  populateHome();
  tabEvents();
}