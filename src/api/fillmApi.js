import axiosClient from "./axiosClient";

const filmApi = {
  getHome: (params) => {
    const url = "/homePage/getHome";
    return axiosClient.get(url, { params });
  },
  getDramaFilms: (params) => {
    const url = "/movieDrama/get";
    return axiosClient.get(url, { params });
  },
  getFilmMedia: (params) => {
    const url = "/media/previewInfo";
    return axiosClient.get(url, { params });
  },
  postSearchFilm: (name) => {
    const url = "/search/searchLenovo";
    return axiosClient.post(
      url,
      `{\n    \"searchKeyWord\": \"${name}\",\n    \"size\": ${
        name.trim().length
      }\n}`
    );
  },
  postSearchFIlmKeyWord: (keyWord) => {
    const url = "/search/v1/searchWithKeyWord";
    return axiosClient.post(
      url,
      `{\n    "searchKeyWord": "${keyWord}",\n    "size": 50,\n    "sort": "",\n    "searchType": ""\n}`
    );
  },
  getSearchLeaderBoard: () => {
    const url = "/search/v1/searchLeaderboard";
    return axiosClient.get(url);
  },
  getSearchConfig: () => {
    const url = "/search/list";
    return axiosClient.get(url);
  },
  postAdvancedSearch: (params) => {
    const url = "/search/v1/search";
    return axiosClient.post(
      url,
      `{\n    "size": 9,\n    "params": "MOVIE,TVSPECIAL",\n    "area": "",\n    "category": "",\n    "year": "",\n    "subtitles": "",\n    "order": "up"\n}`
    );
  },
  getPreViewVideos: (params) => {
    const url = "/recommendPool/getVideoFromRecommondPool";
    return axiosClient.get(url, { params });
  },
  postGetPreViewVideoMedia: (query) => {
    const url = "/media/bathGetplayInfo";
    const raw =
      '[\n  {\n    "category": 2,\n    "contentId": "7662",\n    "episodeId": 35813,\n    "definition": "GROOT_LD"\n  },\n  {\n    "category": 2,\n    "contentId": "7664",\n    "episodeId": 35814,\n    "definition": "GROOT_LD"\n  },\n  {\n    "category": 2,\n    "contentId": "7667",\n    "episodeId": 35815,\n    "definition": "GROOT_LD"\n  }\n]';
    return axiosClient.post(url, raw);
  },
};

export default filmApi;
