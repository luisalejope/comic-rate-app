import axios from 'axios';

// URLS
const proxy = 'https://corsproxy.io';
const externalApiBase = 'https://xkcd.com';

const apiClient = axios.create({
  baseURL: `${proxy}/?${externalApiBase}`,
});

export default apiClient;