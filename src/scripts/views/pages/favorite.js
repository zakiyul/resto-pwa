/* eslint-disable array-callback-return */
import FavoriteRestoIdb from '../../data/favresto-idb';
import { createRestoListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="content">
            <h3>Favorite Resto to Berbuka</h3>
            <div class="cards">
              
            </div>
        </div>
        `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('.cards');
    // eslint-disable-next-line array-callback-return
    restoContainer.innerHTML = restos.length > 0 ? '' : '<div class="resto-item__not__found">Tidak ada resto untuk ditampilkan</div>';
    restos.map((resto) => {
      restoContainer.innerHTML += createRestoListTemplate(resto);
    });
  },
};

export default Favorite;
