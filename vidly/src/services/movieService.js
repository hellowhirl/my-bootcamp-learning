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

// export function saveMovie() {}

export async function saveMovie(movie) {
  let { data: movies } = await http.get(apiEndpoint);
  const { data: genres } = await http.get(apiUrl + "/genres");
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  delete movieInDb._id;
  movieInDb.title = movie.title;
  movieInDb.genre = genres.find(g => g._id === movie.genreId);
  movieInDb.genreId = movieInDb.genre._id;
  delete movieInDb.genre;
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  console.log(movieInDb);
  // debugger;

  // return movieInDb;
  return http.put(apiEndpoint + "/" + movie._id, movieInDb);
}

export function deleteMovie(movieId) {
  http.delete(apiEndpoint + "/" + movieId);
  //   let movieInDb = movies.find(m => m._id === id);
  //   movies.splice(movies.indexOf(movieInDb), 1);
  //   return movieInDb;
}
