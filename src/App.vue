<template>
  <div id="app">
    <Transition>
      <router-view v-if="!user"></router-view>
      <home v-else></home>
    </Transition>
  </div>
</template>
<script>
import home from './pages/Home.vue';
export default {
  name: "App",
  components:{
    home
  },
  data() {
    return {
        // user:$store.state.user
    };
  },
  computed:{
    user() {
      return this.$store.state.user
  }
  },
  methods: {
  
  },
  mounted(){
    
  }
};
</script>
<style lang="less" >
body {
	margin: 0px;
	padding: 0px;
	/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
	// background: #1F2D3D;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	font-size: 14px;
	-webkit-font-smoothing: antialiased;
}
.clear{
	clear: both;
	zoom: 1;
	overflow: hidden;
}
.clear::before{
	content: '';
}
.clear::after{
	content: '';
}
#app {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
}
</style>
