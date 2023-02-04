
let routes = [
    {
        name: "HomePage",
        path: "/HomePage",
        label: "首页",
        icon: "s-home",
        url: "Home/Home",
    },
    {
        name: "GamePage",
        label: "个人游戏",
        icon: "video-play",
        children: [
        {
            path: "/TweakCube",
            name: "TweakCube",
            label: "3D魔方",
            icon: "setting",
            url: "GamePage/TweakCube",
        },
        ],
    },
    {
        name: "UserManagement",
        path: "/UserManagement",
        label: "个人作品",
        icon: "user",
        url: "UserManage/UserManage",
    },
    {
        name: "wordPress",
        label: "技术分享",
        icon: "location",
        children: [
        {
            path: "/nodeArt",
            name: "nodeArt",
            label: "node",
            icon: "setting",
            url: "wordPress/nodeArt",
        },
        {
            path: "/vueArt",
            name: "vueArt",
            label: "vue",
            icon: "setting",
            url: "wordPress/vueArt",
        },
        ],
    },
]
export default routes