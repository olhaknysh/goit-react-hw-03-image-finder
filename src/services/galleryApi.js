import axios from 'axios';

const apiKey = '20378001-e5e40f3ffb0fb0828fca51f1b';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const getImages = query => {
  return axios
    .get(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`)
    .then(({ data: { hits } }) => hits);
};

export default getImages;
