import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    // {
    //   path: '/lectures/:id',
    //   name: 'lectures',
    //   component: Lecture
    // },
    // {
    //   path: '/speakers/:id',
    //   name: 'speakers',
    //   component: Speaker
    // },
    // {
    //   path: '*',
    //   component: NotFound
    // }
  ]
})
