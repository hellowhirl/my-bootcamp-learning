import config from "../config.json";
import http from "../services/httpService";
import logService from "../services/logService";

export function getGenres() {
  return http.get(config.apiEndpoint);
}
