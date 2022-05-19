const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL: (pictureId) => `https://restaurant-api.dicoding.dev/images/medium/${pictureId}`,
  BASE_IMAGE_URL_SM: (pictureId) => `https://restaurant-api.dicoding.dev/images/small/${pictureId}`,
  CACHE_NAME: 'BerbukaApp-V1',
  DATABASE_NAME: 'berbuka-app-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
