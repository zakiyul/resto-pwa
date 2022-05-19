/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavRestoIdb from '../src/scripts/data/favresto-idb';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favBtnContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      favButtonContainer: document.querySelector('#favBtnContainer'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      favButtonContainer: document.querySelector('#favBtnContainer'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await LikeButtonInitiator.init({
      favButtonContainer: document.querySelector('#favBtnContainer'),
      resto: {
        id: 1,
      },
    });

    document.querySelector('#favBtn').dispatchEvent(new Event('click'));
    const resto = await FavRestoIdb.getResto(1);

    expect(resto).toEqual({ id: 1 });

    FavRestoIdb.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await LikeButtonInitiator.init({
      favButtonContainer: document.querySelector('#favBtnContainer'),
      resto: {
        id: 1,
      },
    });

    await FavRestoIdb.putResto({ id: 1 });

    document.querySelector('#favBtn').dispatchEvent(new Event('click'));

    expect(await FavRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    FavRestoIdb.deleteResto(1);
  });

  xit('should not add a resto when it has no id', async () => {
    await LikeButtonInitiator.init({
      favButtonContainer: document.querySelector('#favBtnContainer'),
      resto: {},
    });

    document.querySelector('#favBtn').dispatchEvent(new Event('click'));

    expect(await FavRestoIdb.getAllResto()).toEqual([]);
  });
});
