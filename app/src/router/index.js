import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'
import ArticleView from '@/components/ArticleView'
import Search from '@/components/Search'
import Fridge from '@/components/Fridge'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/nyheter/:id?',
      name: 'ArticleView',
      component: ArticleView
    },
    {
      path: '/sok',
      name: 'Search',
      component: Search
    },
    {
      path: '/poesi',
      name: 'Fridge',
      component: Fridge
    },
  ]
})
