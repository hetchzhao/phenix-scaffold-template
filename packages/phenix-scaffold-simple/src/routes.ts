import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/pages/Home';

const routes = [{ path: '/', component: Home }];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
