import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Help from '../components/pages/hepl.vue'
import Tike from '../components/pages/tike.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '',
      name: 'home',
      component: Home,
    },
    {
      path: '/help',
      name: 'help',
      component: Help,
    },
    {
      path: '/tike',
      name: 'tike',
      component: Tike
    },
  ]
})
