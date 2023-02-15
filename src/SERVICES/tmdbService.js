import axios from "axios";
//
const API_KEY = "22d11a2dc2e969e44e86767ccc60fac8";
const tmdbUrl = "https://api.themoviedb.org";

//SEARCH

export function getSearchMovieQuery(query) {
  return axios.get(`${tmdbUrl}/3/search/movie?api_key=${API_KEY}&query=${query}`);
}
export function getSearchTvQuery(query) {
  return axios.get(`${tmdbUrl}/3/search/tv?api_key=${API_KEY}&language=en-US&query=${query}`);
}

//MOVIES
export function getMovie(id) {
  return axios.get(`${tmdbUrl}/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
}

export function getUpcomingMoviesPage1(){
  
  return axios.get(`${tmdbUrl}/3/movie/upcoming?api_key=${API_KEY}&language=en-US`)
              
}
export function getUpcomingMovies(page){
  
  return axios.get(`${tmdbUrl}/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
              
}
export function getNowPlayingMoviesPage1(){
  
  return axios.get(`${tmdbUrl}/3/movie/now_playing?api_key=${API_KEY}&language=en-US`)
              
}
export function getNowPlayingMovies(page){
  
  return axios.get(`${tmdbUrl}/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`)
              
}
export function getTopRatedMoviesPage1(){
  
  return axios.get(`${tmdbUrl}/3/movie/top_rated?api_key=${API_KEY}&language=en-US`)
              
}
export function getTopRatedMovies(page){
  
  return axios.get(`${tmdbUrl}/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
              
}
export function getPopularMoviesPage1(){
  
  return axios.get(`${tmdbUrl}/3/movie/popular?api_key=${API_KEY}&language=en-US`)
              
}
export function getPopularMovies(page){
  
  return axios.get(`${tmdbUrl}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
              
}
//TV SHOWS
export function getTvShow(id) {
  return axios.get(`${tmdbUrl}/3/tv/${id}?api_key=${API_KEY}&language=en-US`);
}
//upcomin
export function getAirinTodayTVsPage1(){
  return axios.get(`${tmdbUrl}/3/tv/airing_today?api_key=${API_KEY}&language=en-US`)
              
}
export function getAirinTodayTVs(page){
 
  return axios.get(`${tmdbUrl}/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=${page}`)
              
}
export function getPopularTVsPage1(){
  return axios.get(`${tmdbUrl}/3/tv/popular?api_key=${API_KEY}&language=en-US`)
              
}
export function getPopularTVs(page){
  return axios.get(`${tmdbUrl}/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`)         
}
//top-rate
export function getTopRatedTVsPage1(){
  return axios.get(`${tmdbUrl}/3/tv/top_rated?api_key=${API_KEY}&language=en-US`)
              
}
export function getTopRatedTVs(page){
  return axios.get(`${tmdbUrl}/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)         
}
