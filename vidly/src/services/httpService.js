import axios from "axios";
import logger from "./logService";
// import auth from "../services/authService"; // remove this dependency to overcome bi-directional dependencies
import { toast } from "react-toastify";
// if in the future we want to change the library for sending http requests,
// then we just have to make the changes in this module

// reverse below statement into 'setJwt' function
// axios.defaults.headers.common["x-auth-token"] = auth.getJwt(); // using bracket notation here to set a common header

// axios.interceptors.response.use(success, error)
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred, dude!");
    // also able to use as a function - more colorful display
    // toast("An unexpected error occurred, dude!");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  // with this we can set headers on all kinds of http requests (get, post, etc.)
  axios.defaults.headers.common["x-auth-token"] = jwt;
  // now whenever we have an http request, this token will be included
  // if the user is not logged in the token wlll be undefined, so this header will not be set
}

// this module is exporting object with 4 methods
//
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
