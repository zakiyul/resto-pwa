import CONFIG from '../../global/config';

const createRestoListTemplate = (resto) => `
    <a href="${`/#/detail/${resto.id}`}" class="card">
        <img src="${CONFIG.BASE_IMAGE_URL(resto.pictureId)}" alt="${resto.name}" />
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
        <img src="${CONFIG.BASE_IMAGE_URL(resto.pictureId)}" alt="${resto.name}">
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

const createLikeButtonTemplate = () => `
        <button id='favBtn' class="unfav">add to favorite</button>
`;

const createLikedButtonTemplate = () => `
        <button id='favBtn' class="fav">add to favorite</button>
`;

export {
    createRestoListTemplate,
    createRestoDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate
};