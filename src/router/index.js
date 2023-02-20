import login from '../pages/Login.vue'
import VueRouter from 'vue-router'	// 引入VueRouter
     // webpack在打包的时候
     // Webpack通过增加内联注释来告诉运行时，该有怎样的行为。
     // 通过向import中添加注释，我们可以执行诸如命名chunk或选择不同模式之类的操作。
// const Home = () => import(/* webpackChunkName:'Home'*/"../pages/Home.vue"); 
const HomePage = () => import(/* webpackChunkName:'HomePage'*/"../pages/HomePage/HomePage.vue"); 
const TweakCube = () => import(/* webpackChunkName:'TweakCube'*/'../pages/GamePage/TweakCube.vue');
const UserManagement = () => import(/* webpackChunkName:'UserManagement'*/'../pages/usermanagement/UserManagement.vue');
const nodeArt = () => import(/* webpackChunkName:'nodeArt'*/'../pages/wordPress/nodeArt.vue');
const vueArt = () => import(/* webpackChunkName:'vueArt'*/'../pages/wordPress/vueArt.vue');
// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch((err) => err);
};
let routes = [
    {
        name:'login',
        path: '/Login',
        component: login
    },
    {
        name:'HomePage',
        path:'/HomePage',
        label: "首页",
        icon: "s-home",
        component:HomePage
    },
    {
        name: "GamePage",
        path:'/',
        label: "个人游戏",
        icon: "video-play",
        children: [
            {
                name: "TweakCube",
                path: "/TweakCube",
                label: "3D魔方",
                icon: "setting",
                component:TweakCube
            },
        ]
    },
    {
        name:'UserManagement',
        path:'/UserManagement',
        label: "个人作品",
        icon: "user",
        component:UserManagement
    },
    {
        name: "wordPress",
        path:'/',
        label: "技术分享",
        icon: "location",
        children: [
            {
                name: "nodeArt",
                path: "/nodeArt",
                label: "工具一",
                icon: "setting",
                component:nodeArt
            },
            {
                name: "vueArt",
                path: "/vueArt",
                label: "工具二",
                icon: "setting",
                component:vueArt
            },
        ]
    }
]
export default routes