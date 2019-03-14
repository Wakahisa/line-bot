import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import Router from 'vue-router'
import Fortune from '@/components/Fortune'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fortune',
      component: Fortune
    }
  ]
})
