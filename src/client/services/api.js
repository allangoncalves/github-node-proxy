import axios from "axios";

const API_ROOT = "https://github-nodejs-proxy.herokuapp.com";

const api = axios.create({
  baseURL: `${API_ROOT}/api`
});

export default api;
