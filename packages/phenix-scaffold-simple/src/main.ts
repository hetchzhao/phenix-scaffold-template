import { createApp } from 'vue'
import App from '@/app'

import '@/global.scss';

import routes from '@/routes';

createApp(App)
  .use(routes)
  .mount('#app');


