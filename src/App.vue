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
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import MyAside from "./components/Aside.vue";
import MyHeader from "./components/MyHeader.vue";
export default {
  name: "App",
  components: {
    MyAside,
    MyHeader
  },
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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
