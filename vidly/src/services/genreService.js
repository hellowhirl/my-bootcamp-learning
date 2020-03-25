import config from "../config.json";
import http from "../services/httpService";

export function getGenres() {
  return http.get(config.apiEndpointGenres);
}
