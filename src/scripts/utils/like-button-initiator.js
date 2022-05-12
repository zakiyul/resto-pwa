import FavRestoIdb from '../data/favresto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ favButtonContainer, resto }) {
    this._likeButtonContainer = favButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isMovieExist(id)) {
      this._renderLike();
    } else {
      this._renderLiked();
    }
  },

  async _isMovieExist(id) {
    const movie = await FavRestoIdb.getResto(id);
    return !movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#favBtn');
    likeButton.addEventListener('click', async () => {
      await FavRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#favBtn');
    likeButton.addEventListener('click', async () => {
      await FavRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
