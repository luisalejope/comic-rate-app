import ApiClient from './clients/ApiClient';

// ADD ALL THE RESTFUL REQUEST YOU WANT
export default {
  getRandomComic(id) {
    return ApiClient.get(`/${id}/info.0.json`);
  },
};