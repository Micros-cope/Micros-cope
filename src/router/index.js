import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage/HomePage'
import TweakCube from '../pages/GamePage/TweakCube'
import UserManagement from '../pages/usermanagement/UserManagement'
import nodeArt from '../pages/wordPress/nodeArt'
import vueArt from '../pages/wordPress/vueArt'
// 引入组件
Vue.use(VueRouter)
// 创建并暴露一个路由器
export default new VueRouter({
	routes:[
        {
            name:'HomePage',
            path:'/HomePage',
            component:HomePage
        },
        {
            name:'TweakCube',
            path:'/TweakCube',
            component:TweakCube
        },
        {
            name:'UserManagement',
            path:'/UserManagement',
            component:UserManagement
        },
        {
            name:'nodeArt',
            path:'/nodeArt',
            component:nodeArt
        },
        {
            name:'vueArt',
            path:'/vueArt',
            component:vueArt
        }
    ]
})