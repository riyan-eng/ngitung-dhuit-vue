import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path:"/purchase/purchase_journal",
    component: ()=>import ("../pages/purchase/purchase_journal.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router