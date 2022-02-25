import axios from "axios";
const state = {
  news: [],
};

const getters = {
  allNews: (state) => state.news,
};

const actions = {
  async fetchNews({ commit }) {
    const res = await axios.get("https://free-news.p.rapidapi.com/v1/search", {
      headers: {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "586db6afc6msh007cc4eedf7796ap163debjsnd1a17be1e269",
      },
      params: { q: "Elon Musk", lang: "en" },
    });
    console.log(res.data.articles);
    commit("setNews", res.data.articles);
  },
};

const mutations = {
  setNews: (state, news) => (state.news = news),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
