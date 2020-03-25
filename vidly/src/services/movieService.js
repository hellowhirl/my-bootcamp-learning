import config from "../config.json";
import http from "../services/httpService";

export function getMovies() {
  return http.get(config.apiEndpointMovies);
}

export function deleteMovie(movieId) {
  http.delete(config.apiEndpointMovies + "/" + movieId);
  //   let movieInDb = movies.find(m => m._id === id);
  //   movies.splice(movies.indexOf(movieInDb), 1);
  //   return movieInDb;
}
