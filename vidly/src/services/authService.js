import http from "../services/httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";

export function login(email, password) {
  // return promise from this function
  return http.post(apiEndpoint, { email, password }); // in body we pass an object with 2 properties
}
