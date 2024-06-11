import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from './../../App.vue'
import TrianglesView from '../../views/TrianglesView'
import SquaresView from '../../views/SquaresView.vue'
import NotFound from '../../views/NotFound.vue'

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
  history: createWebHistory(),
  routes: routes
})

test('routing', async () => {
  router.push('/')

  // After this line, router is ready
  await router.isReady()

  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })
  expect(wrapper.html()).toContain('Triangles Page')

  //   console.log(wrapper.findAll('a').at(0).wrapperElement.value)
  //   await flushPromises()
  //   expect(wrapper.html()).toContain('Triangles')
})
