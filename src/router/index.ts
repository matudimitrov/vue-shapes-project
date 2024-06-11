import { createRouter, createWebHistory } from 'vue-router'
import TrianglesView from '@/views/TrianglesView.vue'
import SquaresView from '@/views/SquaresView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'TrianglesView',
    component: TrianglesView
  },
  {
    path: '/squares',
    name: 'SquaresView',
    component: SquaresView
  },
  {
    path: '/mixed-shapes',
    name: 'MixedShapesView',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MixedShapesView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
