<template>
  <div>
    <el-container style="height: 100vh">
      <!-- 左侧导航栏 -->
      <el-aside width="auto">
        <MyAside></MyAside>
      </el-aside>
      <!-- 右半部分 -->
      <el-container>
        <el-header>
          <MyHeader></MyHeader>
        </el-header>
        <!-- 主体显示部分 嵌套路由   -->
        <el-main>
          <!-- router-view 当你的路由path 与访问的地址相符时，会将指定的组件替换该 router-view -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import MyAside from "../components/Aside.vue";
import MyHeader from "../components/MyHeader.vue";
export default {
  components: {
    MyAside,
    MyHeader
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
<style lang="less" >
* {
  padding: 0;
  margin: 0;
}

.el-header {
  background-color: rgb(17, 17, 17);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
