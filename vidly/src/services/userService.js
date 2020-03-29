import http from "../services/httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username, // the namings won't always match, as backend and frontend could be built by different people
    password: user.password,
    name: user.name
  });
}
