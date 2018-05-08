import Vue from 'vue'
import Router from 'vue-router'
import indexModule from '@/components/index'
import channelModule from '@/components/channel'
import clomnModule from '@/components/clomn'
import newsModule from '@/components/news'
import templateModule from '@/components/template'

Vue.use(Router)

export default new Router({
  history: true,
  routes: [
    {
      path: '/',
      name: 'indexModule',
      component: indexModule
    },
    {
      path: '/channel',
      name: 'channelModule',
      component: channelModule
    },
    {
      path: '/clomn',
      name: 'clomnModule',
      component: clomnModule
    },
    {
      path: '/news',
      name: 'newsModule',
      component: newsModule
    },
    {
      path: '/template',
      name: 'templateModule',
      component: templateModule
    }
  ]
})
