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
    setPostsLoading(state, loadingStatus) {
      return (state.postsLoading = loadingStatus);
    },
    setPostsError(state, error) {
      return (state.postsError = error);
    },
    SET_BLOG_POSTS(state, posts) {
      state.posts = posts;
    },
    setSinglePostLoading(state, loadingStatus) {
      return (state.singlePostLoading = loadingStatus);
    },
    setSinglePostError(state, error) {
      return (state.singlePostError = error);
    },
    SET_ONE_BLOG_POST(state, post) {
      state.singlePost = post;
    }
  },
  actions: {
    async fetchBlogPosts({ commit }, {start = 0, limit = 50}) {
      commit('setPostsLoading', true);
      return await fetch(`${process.env.VUE_APP_API_URL}/posts?_sort=publishedAt:DESC&_start=${start}&_limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_BLOG_POSTS', data);
          commit('setPostsLoading', false);
        })
        .catch(error => {
          commit('setPostsError', error);
        });
    },
    async fetchSingleBlogPost({ commit }, postSlug) {
      commit('setSinglePostLoading', true);
      return await fetch(
        `${process.env.VUE_APP_API_URL}/posts?slug=${postSlug}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          commit('SET_ONE_BLOG_POST', data);
          commit('setSinglePostLoading', false);
        })
        .catch(error => {
          commit('setSinglePostError', error);
        });
    }
  }
};
