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

export function populateMenu() {
  populateHeader();
  populateNavbar();
  populateContainer();
  populateFooter();
}