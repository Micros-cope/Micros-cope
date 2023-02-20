import Vue from 'vue'
import ElementUI from 'element-ui';   // 引入element插件
import 'element-ui/lib/theme-chalk/index.css';  // 引入element样式
import App from './App.vue'
import VueRouter from 'vue-router'	// 引入VueRouter
import routes from './router/index'	// 引入路由器
import store from './store'			//引入vuex
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)  // 应用element插件
Vue.use(VueRouter)  // 应用VueRouter插件
const router = new VueRouter({
    routes
});
// 每次路由跳转，都会先执行这个方法
router.beforeEach((to, from, next) => {
	console.log(to.path);
	if (to.path == '/login') {
		sessionStorage.removeItem('user');
		store.state.user = {}
	}
	let user = JSON.parse(sessionStorage.getItem('user'));
	store.state.user = user
	if (!user && to.path != '/login') {
		next({ path: '/login' })
	} else {
		next()
	}
    });
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
