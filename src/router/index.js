import Vue from 'vue'
import Router from 'vue-router'
import TextCOM from '@/components/Article/Text/TextCOM'
import LayoutCOM from '@/components/Article/Layout/LayoutCOM'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TextCOM',
      component: TextCOM
    },
    {
      path: '/text',
      name: 'TextCOM',
      component: TextCOM
    },
    {
      path: '/layout',
      name: 'LayoutCOM',
      component: LayoutCOM
    }
  ]
})
