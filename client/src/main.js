import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import LazyLoadDirective from './directives/LazyLoadDirective';
import BaseButton from './components/Base/BaseButton';
import BaseDivider from './components/Base/BaseDivider';
import BaseLoadingSpinner from './components/Base/BaseLoadingSpinner';
import BaseModal from './components/Base/BaseModal';
import BaseActionStrip from './components/Base/BaseActionStrip';
import './assets/styles/main.scss';

const app = createApp(App);

app.component('BaseButton', BaseButton);
app.component('BaseDivider', BaseDivider);
app.component('BaseLoadingSpinner', BaseLoadingSpinner);
app.component('BaseModal', BaseModal);
app.component('BaseActionStrip', BaseActionStrip);

app.directive('lazyload', LazyLoadDirective);

app
  .use(store)
  .use(router)
  .mount('#app');
