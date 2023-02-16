// import Login from '../pages/Login.vue'
const HomePage = () => import(/* webpackChunkName:'HomePage'*/"../pages/HomePage/HomePage.vue"); 
const TweakCube = () => import(/* webpackChunkName:'TweakCube'*/'../pages/GamePage/TweakCube.vue');
const UserManagement = () => import(/* webpackChunkName:'UserManagement'*/'../pages/usermanagement/UserManagement.vue');
const nodeArt = () => import(/* webpackChunkName:'nodeArt'*/'../pages/wordPress/nodeArt.vue');
const vueArt = () => import(/* webpackChunkName:'vueArt'*/'../pages/wordPress/vueArt.vue');
let routes = [
    // {
    //     name:'Login',
    //     path: '/login',
    //     component: Login
    // },
    {
        name:'HomePage',
        path:'/HomePage',
        label: "首页",
        icon: "s-home",
        url: "Home/Home",
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
                url: "GamePage/TweakCube",
                component:TweakCube
            },
        ]
    },
    {
        name:'UserManagement',
        path:'/UserManagement',
        label: "个人作品",
        icon: "user",
        url: "UserManage/UserManage",
        component:UserManagement
    },
    {
        name: "wordPress",
        path:'/',
        label: "技术分享",
        icon: "location",
        children: [
            {
                path: "/nodeArt",
                name: "nodeArt",
                label: "node",
                icon: "setting",
                url: "wordPress/nodeArt",
                component:nodeArt
            },
            {
                path: "/vueArt",
                name: "vueArt",
                label: "vue",
                icon: "setting",
                url: "wordPress/vueArt",
                component:vueArt
            },
        ]
    }
]
export default routes