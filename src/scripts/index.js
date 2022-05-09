import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import data from '../DATA.json';
import App from './views/app';

const humbergerBtn = document.getElementById('humberger');
const drawerElement = document.getElementById('drawer');
const mainElement = document.querySelector('.container');
const cardsElement = document.querySelector('.cards');

let cards = '';
const app = new App({
  button: humbergerBtn,
  drawer: drawerElement,
  content: mainElement
})

window.addEventListener('hashchange', () => {
  app.renderPage();
})

window.addEventListener('load', () => {
  app.renderPage();
})


const cardElement = (restaurant) => {
  return `
    <a href="#" class="card">
      <img src="${restaurant.pictureId}" alt="${restaurant.name}" />
      <div>
        <strong>${restaurant.name}</strong>
        <div>
          <small>Rating: ${restaurant.rating}</small>
          <br/>
          <small>City: ${restaurant.city}</small>
        </div>
      </div>
    </a>
  `
}

data.restaurants.map(restaurant => {
  cards += cardElement(restaurant)
});

cardsElement.innerHTML = cards;
