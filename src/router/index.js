import { createRouter, createWebHashHistory } from 'vue-router';
import UserLogin from '../views/UserLogin.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: UserLogin
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
