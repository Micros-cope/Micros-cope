<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" 
      :collapse="$store.state.isCollapse" 
      background-color="#303133" text-color="#fff" active-text-color="#df5544"
      >
      <h4>{{ $store.state.isCollapse ? "清风" : "清风与猫" }}</h4>
      <el-menu-item class="guangquan"
        v-for="item in nochildren" :index="item.name" :key="item.name" 
        @click="$router.push(item.name)"
        >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <!-- 有孩子 -->
      <el-submenu class="guangquan"
        v-for="item in haschildren" :index="item.name" :key="item.name"
        >
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item 
            v-for="(subItem) in item.children" :key="subItem.name" :index="subItem.name"  
            @click="$router.push(subItem.name)"
            >
            <i :class="'el-icon-' + subItem.icon"></i>
          {{ subItem.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import routes from '../common/js/routes'
export default {
  name: "MyAside",
  data() {
    return {
      isCollapse: true,
      routes: routes
    }
  },
  computed: {
    nochildren() {
      return this.routes.filter((item) => !item.children);
    },
    haschildren() {
      return this.routes.filter((item) => item.children);
    },
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  h4 {
    // display: block;
    text-align: center;
    color: #ffff;
    font-size: 18px;
    margin: 10px;
  }
}
.guangquan {
  //  outline: 2px solid white;
  z-index: 1;
  border-radius: 10px;
  margin:  4px;
  position: relative;
  overflow: hidden;
}
.guangquan::before {
  content: "";
  position: absolute;
  background: rgb(241, 152, 152);
  width: 200%;
  height: 200%;
  z-index: -2;
  left: 50%;
  top: 50%;
  animation: rotate 3s infinite linear;
  transform-origin: 0 0;
}
.guangquan::after {
  content: "";
  position: absolute;
  background: #303133;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  left: 2px;
  top: 2px;
  z-index: -1;
  border-radius: 10px;
}

@keyframes rotate {
  to{
    transform: rotate(1turn);
  }
}
</style>  
