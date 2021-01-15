import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import LazyLoadDirective from './directives/LazyLoadDirective';
import { registerComponents } from '@/components/_globals';
import './assets/styles/main.scss';

const app = createApp(App);


app.directive('lazyload', LazyLoadDirective);

app
  .use(store)
  .use(router)

registerComponents(app)
app
  .mount('#app');
