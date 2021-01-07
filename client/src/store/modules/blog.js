export default {
  state: {
    post: [],
    posts: []
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    post(state) {
      return state.post;
    }
  },
  mutations: {
    SET_BLOG_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_ONE_BLOG_POST(state, post) {
      state.post = post;
    }
  },
  actions: {
    async fetchBlogPosts({ commit }, {start = 0, limit = 50}) {
      commit('setLoading', true);
      return await fetch(`${process.env.VUE_APP_API_URL}/posts?_sort=publishedAt:DESC&_start=${start}&_limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          commit('SET_BLOG_POSTS', data);
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error);
        });
    },
    async fetchOneBlogPost({ commit }, postSlug) {
      commit('setLoading', true);
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
          commit('setLoading', false);
        })
        .catch(error => {
          commit('setError', error);
        });
    }
  }
};
