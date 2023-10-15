import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/Home.vue";
import Product from "@/components/Product.vue";
import Favorites from "@/components/Favorites.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: Product },
  { path: '/favorites', component: Favorites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;