import jwtDecode from "jwt-decode"; // this module exports a deafult function, which we can name as anything
import http from "../services/httpService";
import { apiUrl } from "../config.json";
// import { getCurrentUser } from "./authService";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

export async function login(email, password) {
  // instead of returning promise from this function, we need to await to get the response
  const { data: jwt } = await http.post(apiEndpoint, { email, password }); // in body we pass an object with 2 properties
  // so we send an http request to the server, we get the token and we store it in the local storage
  localStorage.setItem(tokenKey, jwt); // token is set for local storage here instead
}

export function logout() {
  localStorage.removeItem(tokenKey); // remove line for removing token
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey); // return a JSON web token
    return jwtDecode(jwt); // if we can successfully decode this token to get the user object, we return it here
  } catch (ex) {
    return null; // means that we don't have the current user
  }
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

// this approach is for implementing object-oriented syntax
export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt
};
// technicallly we don't need to above indiviual functions - because we are exporting a default object we can access any of the functions using the exported default object. But we can keep them there in case we want import only a single function in another module
