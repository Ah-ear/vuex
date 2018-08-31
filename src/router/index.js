import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Todo from '@/components/Todo'
import TodoItem from '@/components/TodoItem'
import qqIndex from '@/components/qqMusic/index'


Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'qqIndex',
      component: qqIndex
    },
  	{
      path: '/index',
      name: 'index',
      component: Todo
    },
  	{
      path: '/Todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/TodoItem',
      name: 'TodoItem',
      component: TodoItem
    }
  ]
})
