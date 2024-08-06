import { createWebHistory, createRouter } from "vue-router";
import MainLayout from '@/views/layouts/MainLayout.vue';
import FirstComponent from '@/components/FirstComponent.vue'

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
        {
          name: "home",
          path: "",
          component: FirstComponent,
        },
      ],
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL || "/"),
  routes,
});



export default router;