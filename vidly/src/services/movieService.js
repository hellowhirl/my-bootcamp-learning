import http from "../services/httpService";
// object destructuring is possible in our import statements
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(id) {
  return http.get(apiEndpoint + "/" + id);
}

export function saveMovie() {}

export function deleteMovie(movieId) {
  http.delete(apiEndpoint + "/" + movieId);
  //   let movieInDb = movies.find(m => m._id === id);
  //   movies.splice(movies.indexOf(movieInDb), 1);
  //   return movieInDb;
}
