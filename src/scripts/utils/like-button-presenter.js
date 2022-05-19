import FavRestoIdb from '../data/favresto-idb';
import { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
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
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector('#favBtn');
    likeButton.addEventListener('click', async () => {
      await FavRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const likeButton = document.querySelector('#favBtn');
    likeButton.addEventListener('click', async () => {
      await FavRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
