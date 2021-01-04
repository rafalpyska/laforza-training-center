import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/classes',
    name: 'Classes',
    component: () =>
      import(/* webpackChunkName: "classes" */ '../views/Classes.vue')
  },
  {
    path: '/bundles',
    name: 'Bundles',
    component: () =>
      import(/* webpackChunkName: "prices" */ '../views/Bundles.vue')
  },
  {
    path: '/trainers',
    name: 'Trainers',
    component: () =>
      import(/* webpackChunkName: "trainer" */ '../views/Trainers.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () =>
      import(/* webpackChunkName: "schedule" */ '../views/Schedule.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () =>
      import(/* webpackChunkName: "events" */ '../views/Events.vue')
  },
  {
    path: '/stories',
    name: 'Stories',
    component: () =>
      import(/* webpackChunkName: "stories" */ '../views/Stories.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
    children: [
      {
        path: '',
        name: 'BlogPostList',
        component: () =>
          import(
            /* webpackChunkName: "BlogPostList" */ '@/components/Blog/BlogPostsList.vue'
          ),
        props: true
      },
      {
        path: 'post/:slug',
        name: 'BlogPost',
        component: () =>
          import(
            /* webpackChunkName: "BlogPost" */ '@/components/Blog/BlogPost.vue'
          ),
        props: true
      }
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Cart.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
