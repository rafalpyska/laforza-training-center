export default {
  state: {
    postsLoading: true,
    postsError: null,
    posts: [],
    singlePostLoading: true,
    singlePostError: null,
    singlePost: []
  },
  getters: {
    postsLoadingStatus(state) {
      return state.postsLoading;
    },
    postsErrorStatus(state) {
      return state.postsError;
    },
    posts(state) {
      return state.posts;
    },
    singlePostLoadingStatus(state) {
      return state.singlePostLoading;
    },
    singlePostErrorStatus(state) {
      return state.singlePostError;
    },
    post(state) {
      return state.singlePost;
    }
  },
  mutations: {
    SET_POSTS_LOADING(state, loadingStatus) {
      return (state.postsLoading = loadingStatus);
    },
    SET_POSTS_ERROR(state, error) {
      return (state.postsError = error);
    },
    SET_BLOG_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_SINGLE_POST_LOADING(state, loadingStatus) {
      return (state.singlePostLoading = loadingStatus);
    },
    SET_SINGLE_POST_ERROR(state, error) {
      return (state.singlePostError = error);
    },
    SET_ONE_BLOG_POST(state, post) {
      state.singlePost = post;
    }
  },
  actions: {
    async fetchBlogPosts({ commit }, { start = 0, limit = 50 }) {
      commit("SET_POSTS_LOADING", true);
      return await fetch(
        `${process.env.VUE_APP_API_URL}/posts?_sort=publishedAt:DESC&_start=${start}&_limit=${limit}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          commit("SET_BLOG_POSTS", data);
          commit("SET_POSTS_LOADING", false);
        })
        .catch(error => {
          commit("SET_POSTS_ERROR", error);
        });
    },
    async fetchSingleBlogPost({ commit }, postSlug) {
      commit("SET_SINGLE_POST_LOADING", true);
      return await fetch(
        `${process.env.VUE_APP_API_URL}/posts?slug=${postSlug}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          commit("SET_ONE_BLOG_POST", data);
          commit("SET_SINGLE_POST_LOADING", false);
        })
        .catch(error => {
          commit("SET_SINGLE_POST_ERROR", error);
        });
    }
  }
};
