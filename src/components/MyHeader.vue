<template>
  <header>
    <div class="l-header">
      <el-button icon="el-icon-s-grid" size="mini" @click="ChangeCollapse"></el-button>
    </div>
    <div class="r-header">
      <el-dropdown @command="handleCommand" class="head-portrait">
        <span class="el-dropdown-link">
          <img :src="HeadPortrait" >
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="首页">首页</el-dropdown-item>
          <el-dropdown-item command="登出">推出登入</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
        HeadPortrait:require('../assets/images/toonmecom_b987ac.jpg'),
        value:'qqq',
        direction: 'rtl',
    }
  },
  methods:{
    handleCommand(command) {
      switch (command) {
        case '首页':
          this.$message('到达' + command + '!!!');
          break;
        case '登出':
          this.$router.push('/login')
          this.$message('退出登入');
          break
        default:
          break;
      }
    },
    ChangeCollapse(){
      this.$store.commit('ChangeCollapse')
    }
  }
};
</script>

<style lang="less" scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.l-header{
    span{
        margin-left: 10px;
        color: #Fff;
    }
}
.r-header{
    .head-portrait{
        margin-top: 10px;
    }
    .el-dropdown-link{
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>
