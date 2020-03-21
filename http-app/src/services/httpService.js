import axios from "axios";
import { toast } from "react-toastify";
// if in the future we want to change the library for sending http requests,
// then we just have to make the changes in this module

// axios.interceptors.response.use(success, error)
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response >= 400 && error.response < 500;

  if (!expectedError) {
    console.log("logging the error", error);
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
