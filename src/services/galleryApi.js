import axios from 'axios';

const apiKey = '20378001-e5e40f3ffb0fb0828fca51f1b';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const getImages = (query, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${apiKey}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data: { hits } }) => hits);
};

export default getImages;
