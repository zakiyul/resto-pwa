import CONFIG from '../../global/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoListTemplate = (resto) => `
    <a href="${`/#/detail/${resto.id}`}" class="card">
        <img class="lazyload" loading="lazy" width="400" height="auto" data-src="${CONFIG.BASE_IMAGE_URL(resto.pictureId)}" alt="${resto.name}" src="https://i.ibb.co/Ksm6zCB/image-loader.gif" />
        <div>
            <strong>${resto.name}</strong>
            <div>
                <small>Rating: ${resto.rating}</small>
                <br/>
                <small>City: ${resto.city}</small>
            </div>
        </div>
    </a>
`;

const createRestoDetailTemplate = (resto) => `
        <picture>
            <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SM(resto.pictureId)}" >
            <img src="${CONFIG.BASE_IMAGE_URL(resto.pictureId)}" alt="${resto.name}">
        </picture>
        <h2>${resto.name}</h2>
        <span>
            ${resto.address}, ${resto.city}
        </span>
        <p>${resto.description}</p>
        <div class="menu">
            <div>
                <h4>menu makanan</h4>
                <ul>
                    ${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join(' ')}
                </ul>
            </div>
            <div>
                <h4>menu minuman</h4>
                <ul>
                    ${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join(' ')}
                </ul>
            </div>
        </div>
        <section class="review">
            <h4 style="text-align: center">Customer Review</h4>
            ${resto.customerReviews.map((review) => (
    `
                <div>
                    <strong>${review.name}</strong> <br>
                    <q>${review.review}</q><br>
                    <small>${review.date}</small>
                </div>
                `
  )).join(' ')}
        </section>
`;

const createLikeRestoButtonTemplate = () => `
        <button id='favBtn' class="unfav" aria-label="like this resto">add to favorite</button>
`;

const createUnlikeRestoButtonTemplate = () => `
        <button style="padding: 24px 0" id='favBtn' class="fav" aria-label="unlike this resto">remove from favorite</button>
`;

export {
  createRestoListTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
