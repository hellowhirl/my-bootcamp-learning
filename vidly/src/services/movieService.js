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

// in this function we should either update (PUT) a movie or create (POST) a new movie
export function saveMovie(movie) {
  // check to see if movie exist in database
  if (movie._id) {
    // the movie object we're passing is part of our state, so we don't want to directly modify it
    const body = { ...movie };
    delete body._id; // our restful API doesn't like the id property to be in the body of the request - so we remove it
    // it's confusing if we have '_id' in the url and '_id' in the body of request
    return http.put(apiEndpoint + "/" + movie._id, body);
  }

  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  http.delete(apiEndpoint + "/" + movieId);
  //   let movieInDb = movies.find(m => m._id === id);
  //   movies.splice(movies.indexOf(movieInDb), 1);
  //   return movieInDb;
}
