import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b2ba69b56c0074735eacf88276ac1113';
const TRENDING_END_POINT = 'trending/movie/day';
const DETAILS_MOVIE_END_POINT = 'movie/';
const SEARCH_MOVIE_END_POINT = 'search/movie';
const CAST_MOVIE_END_POINT = '/credits';
const REVIEWS_MOVIE_END_POINT = '/reviews';

// trending/get-trending

export const fetchTrending = async () => {
  const response = await axios.get(`${TRENDING_END_POINT}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${DETAILS_MOVIE_END_POINT}${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const fecthMovie = async query => {
  const response = await axios.get(
    `${SEARCH_MOVIE_END_POINT}?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};

export const fetchCast = async movieId => {
  const response = await axios.get(
    `${DETAILS_MOVIE_END_POINT}${movieId}${CAST_MOVIE_END_POINT}?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `${DETAILS_MOVIE_END_POINT}${movieId}${REVIEWS_MOVIE_END_POINT}?api_key=${API_KEY}`
  );
  return response.data;
};
