/*
  路由模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件文件夹下的组件
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
// 配置路由表并导出
Vue.use(VueRouter)
export default new VueRouter({//  去掉地址中的哈希#
  mode: 'history',
  routes: [
        {
          path: '/msite',
          component: Msite
          // 此时的Msite等都是返回路由组件的函数，只有请求对应的路由路径时(第一次)才会执行此函数并加载路由组件
          // 标识此路由是否显示FooterGuide
        },
        {
          path: '/search',
          component: Search
        },
        {
          path: '/order',
          component: Order
        },
        {
          path: '/profile',
          component: Profile
        },
        {
          path: '/',
          redirect: '/msite'
        }
      ]
})
