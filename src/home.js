import brickWallImg from './images/brick-wall.jpg';
import barImg from './images/bar.jpg';

export function populateHome() {
  const container = document.querySelector('.container');
  
  const brickWall = document.createElement('img');
  brickWall.setAttribute('src', brickWallImg);
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
  bar.setAttribute('src', barImg);
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