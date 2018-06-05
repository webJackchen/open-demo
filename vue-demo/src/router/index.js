import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import serviceReg from '@/view/services/service-reg'
import serviceList from '@/view/services/service-list'
import apidoc from '@/view/apidoc/upload-apidoc'
import readme from '@/view/readme'
import login from '@/view/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/service-reg',
      name: 'service-reg',
      component: serviceReg
    },
    {
      path: '/service-list',
      name: 'service-list',
      component: serviceList
    },
    {
      path: '/service-edit',
      name: 'service-edit',
      component: serviceReg
    },
    {
      path: '/upload-apidoc',
      name: 'upload-apidoc',
      component: apidoc
    },
    {
      path: '/readme',
      name: 'readme',
      component: readme
    }
  ]
})
