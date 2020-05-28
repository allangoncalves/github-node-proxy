import axios from "axios";

const URL = JSON.stringify(process.env.ROOT_API) + "/api";

const api = axios.create({
  baseURL: URL
});

export default api;
