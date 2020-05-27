const apiFactory = require("../factories/apiFactory");

const API_ROOT = "https://api.github.com";
const API = apiFactory(API_ROOT);

API.interceptors.request.use(config => {
  config.headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  return config;
});

module.exports = API;
