import { populateHome } from "./home";

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
  populateHome();
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