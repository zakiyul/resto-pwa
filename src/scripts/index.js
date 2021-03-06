import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import App from './views/app';
import swRegister from './utils/sw-register';

const humbergerBtn = document.getElementById('humberger');
const drawerElement = document.getElementById('drawer');
const mainElement = document.querySelector('.container');

const app = new App({
  button: humbergerBtn,
  drawer: drawerElement,
  content: mainElement,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
