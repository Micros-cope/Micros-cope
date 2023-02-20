// 引入vue
import Vue from 'vue'
// 引入vue
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)
const actions = {

}

const mutations = {
       ChangeCollapse(state) {
              state.isCollapse = !state.isCollapse
       },
}

const state = {
       isCollapse: true,
       user:{}
}
export default new Vuex.Store({
       actions,
       mutations,
       state,
})