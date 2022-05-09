import RestoSource from "../../data/resto-source";
import { createRestoListTemplate } from "../templates/template-creator";

const HomePage = {
    async render() {
        return `
            <img class="hero" src="./images/heros/hero-image_2.jpg" alt="gambar makanan di meja">
            <div id="maincontent" class="content">
                <h3>Find Your Place to Berbuka</h3>
                <div class="cards">

                </div>
            </div>
        `;
    },

    async afterRender() {
        const restos = await RestoSource.listResto();
        const cardsElement = document.querySelector('.cards');
        restos.forEach((resto) => {
            cardsElement.innerHTML += createRestoListTemplate(resto);
        })
    },
};

export default HomePage;