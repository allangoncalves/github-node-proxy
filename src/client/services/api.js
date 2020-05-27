import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.API_ROOT}/api`
});

export default api;
