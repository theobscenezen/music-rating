import { createApp } from 'vue';
import Toast, { POSITION } from 'vue-toastification';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import loadFonts from './plugins/webfontloader';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

loadFonts();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(Toast, {
    // Setting the global default position
    position: POSITION.BOTTOM_LEFT
  })
  .mount('#app');
