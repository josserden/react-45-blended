import axios from 'axios';

const API_KEY = '563492ad6f91700001000001000a67ac4c3f4132b63f457794726003';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const {data} = await axios.get(`search?query=${query}&page=${page}`)
  return data;
};

