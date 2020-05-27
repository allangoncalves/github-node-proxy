import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_API
});

export default api;
