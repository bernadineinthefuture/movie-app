import axios from 'axios';

const apiKey = '6a6997077f9bd7016506af30e35ddcae';

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params:{
    api_key: apiKey,
  },
});

movieApi.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_TMDB_BEARER_TOKEN;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default movieApi;