import { createStore } from "vuex";
import axios from "axios";

//to handle state
const state = {
  posts: [],
  post: "",
};

//to handle actions
const actions = {
  getPosts({ commit }) {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      Promise.all([response]).then(async (result) => {
        commit("GET_POSTS", result[0].data);
      });
    });
  },
  getPostById({ commit }, id) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        Promise.all([response]).then(async (result) => {
          commit("GET_POST_ID", result[0].data);
        });
      });
  },
};

//to handle mutations
const mutations = {
  GET_POSTS(state, posts) {
    state.posts = posts;
  },
  GET_POST_ID(state, post) {
    state.post = post;
  },
};

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: {},
});
