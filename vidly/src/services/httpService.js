import axios from "axios";
import logger from "./logService";
import auth from "../services/authService";
import { toast } from "react-toastify";
// if in the future we want to change the library for sending http requests,
// then we just have to make the changes in this module

// with this we can set headers on all kinds of http requests (get, post, etc.)
axios.defaults.headers.common["x-auth-token"] = auth.getJwt(); // using bracket notation here to set a common header
// now whenever we have an http request, this token will be included

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

// this module is exporting object with 4 methods
//
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
