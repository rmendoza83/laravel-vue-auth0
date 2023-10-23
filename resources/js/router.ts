import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

//Import here the components
import HelloComponent from './components/hello.vue';

//Define the routes
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HelloComponent
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
