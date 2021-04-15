import axios from 'axios';

const API_KEY = '20378001-e5e40f3ffb0fb0828fca51f1b';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const getImages = (q, page) => {
  return axios
    .get(``, { params: { q, page } })
    .then(({ data: { hits } }) => hits);
};

export default getImages;
