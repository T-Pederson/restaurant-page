import familyImg from './images/family.jpg';

export function populateAbout() {
  const container = document.querySelector('.container');

  const family = document.createElement('img');
  family.setAttribute('src', familyImg);
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