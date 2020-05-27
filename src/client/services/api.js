import axios from "axios";

const api = axios.create({
  baseURL: "https://github-nodejs-proxy.herokuapp.com/api/"
});

export default api;
