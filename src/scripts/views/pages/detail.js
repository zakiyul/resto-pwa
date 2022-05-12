import UrlParser from '../../routes/url-parser';
import RestoSource from "../../data/resto-source";
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
      return `
        <div id="favBtnContainer"></div>
        <div class="detail"></div>
      `;
    },
        
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const resto = await RestoSource.detailResto(url.id);
      const restoContainer = document.querySelector('.detail');
      restoContainer.innerHTML = createRestoDetailTemplate(resto);
      LikeButtonInitiator.init({
        favButtonContainer: document.querySelector('#favBtnContainer'),
        resto: {
          id: resto.id,
          name: resto.name,
          pictureId: resto.pictureId,
          rating: resto.rating,
          city: resto.city,
        }
      })
    },
  };
  
  export default Detail;