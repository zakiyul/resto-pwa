/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    favButtonContainer: document.querySelector('#favBtnContainer'),
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
