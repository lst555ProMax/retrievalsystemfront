import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
