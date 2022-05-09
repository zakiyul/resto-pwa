import UrlParser from '../../routes/url-parser';
import RestoSource from "../../data/resto-source";
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
      return `
        <div class="detail"></div>
      `;
    },
        
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const resto = await RestoSource.detailResto(url.id);
      const restoContainer = document.querySelector('.detail');
      restoContainer.innerHTML = createRestoDetailTemplate(resto);
    },
  };
  
  export default Detail;