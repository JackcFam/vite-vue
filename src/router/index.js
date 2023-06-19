import { createRouter, createWebHistory } from "vue-router";
import Detail from '@/views/Detail.vue'
import Cart from '@/components/CartProduct.vue'
const routes = [
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "current",
});

export default router;
