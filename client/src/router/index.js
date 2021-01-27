import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/classes",
    name: "Classes",
    component: () =>
      import(/* webpackChunkName: "classes" */ "../views/Classes.vue"),
  },
  {
    path: "/bundles",
    name: "Bundles",
    component: () =>
      import(/* webpackChunkName: "prices" */ "../views/Bundles.vue"),
  },
  {
    path: "/trainers/:page",
    name: "Trainers",
    props: true,
    meta: { transitionName: `slide` },
    component: () =>
      import(/* webpackChunkName: "trainer" */ "../views/Trainers.vue"),
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: () =>
      import(/* webpackChunkName: "schedule" */ "../views/Schedule.vue"),
  },
  {
    path: "/events",
    name: "Events",
    component: () =>
      import(/* webpackChunkName: "events" */ "../views/Events.vue"),
  },
  {
    path: "/stories",
    name: "Stories",
    component: () =>
      import(/* webpackChunkName: "stories" */ "../views/Stories.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
    children: [
      {
        path: "",
        name: "BlogPostList",
        component: () =>
          import(
            /* webpackChunkName: "blog" */ "@/components/Blog/BlogPostsList.vue"
          ),
        props: true,
      },
      {
        path: "post/:slug",
        name: "BlogPost",
        meta: { transitionName: `slide` },
        component: () =>
          import(
            /* webpackChunkName: "blog" */ "@/components/Blog/BlogPost.vue"
          ),
        props: true,
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 400 });
      }, 400);
    });
  },
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && store.state.auth.isUserLoggedIn === null && store.state.auth.token === null) next('/login')
  else next();
});

export default router;
