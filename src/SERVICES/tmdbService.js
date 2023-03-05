import axios from "axios";
//
const API_KEY = "22d11a2dc2e969e44e86767ccc60fac8";
const tmdbUrl = "https://api.themoviedb.org";

//SEARCH

export function getSearchMovieQuery(query) {
  return axios.get(
    `${tmdbUrl}/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
}
export function getSearchTvQuery(query) {
  return axios.get(
    `${tmdbUrl}/3/search/tv?api_key=${API_KEY}&language=en-US&query=${query}`
  );
}

//SIMILAR MOVIES
export function getRelatedMovies(id) {
  return axios.get(
    `${tmdbUrl}/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US`
  );
}
//MOVIES
export function getMovie(id) {
  return axios.get(
    `${tmdbUrl}/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
}
//GET GENRE MOVIES
export function getGenreMovies(genre_id, page) {
  return axios.get(
    `${tmdbUrl}/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id}${page ? `&page=${page}`:null}`
  );
}


export function getUpcomingMovies(genre_id, page) {
  return axios.get(
    `${tmdbUrl}/3/movie/upcoming?api_key=${API_KEY}${genre_id ? `&with_genres=${genre_id}` : ''}${page ? `&page=${page}`:null}`
  );
}

export function getNowPlayingMovies(page) {
  return axios.get(
    `${tmdbUrl}/3/movie/now_playing?api_key=${API_KEY}&language=en-US${page ? `&page=${page}`:null}`
  );
}

export function getTopRatedMovies(page) {
  return axios.get(
    `${tmdbUrl}/3/movie/top_rated?api_key=${API_KEY}&language=en-US${page ? `&page=${page}`:null}`
  );
}

export function getPopularMovies(page) {
  return axios.get(
    `${tmdbUrl}/3/movie/popular?api_key=${API_KEY}&language=en-US${page ? `&page=${page}`:null}`
  );
}


//TV SHOWS
export function getTvShow(id) {
  return axios.get(`${tmdbUrl}/3/tv/${id}?api_key=${API_KEY}&language=en-US`);
}
//SIMILAR TV
export function getRelatedTVs(id) {
  return axios.get(
    `${tmdbUrl}/3/tv/${id}/similar?api_key=${API_KEY}&language=en-US`
  );
}
//GET GENRE TV
export function getGenreTV(genre_id, page) {
  return axios.get(
    `${tmdbUrl}/3/discover/tv?api_key=${API_KEY}&with_genres=${genre_id}${page ? `&page=${page}`:null}`
  );
}

//TODAY

export function getAirinTodayTVs(page) {
  return axios.get(
    `${tmdbUrl}/3/tv/airing_today?api_key=${API_KEY}&language=en-US${page ? `&page=${page}`:null}`
  );
}

export function getPopularTVs(page) {
  return axios.get(
    `${tmdbUrl}/3/tv/popular?api_key=${API_KEY}&language=en-US${page ? `&page=${page}`:null}`
  );
}
//top-rate

export function getTopRatedTVs(page) {
  return axios.get(
    `${tmdbUrl}/3/tv/top_rated?api_key=${API_KEY}&language=en-US${page ? `&page=${page}`:null}`
  );
}
