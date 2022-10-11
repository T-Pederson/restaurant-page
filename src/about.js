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

export function populateAbout() {
  populateHeader();
  populateNavbar();
  populateContainer();
  populateFooter();
}