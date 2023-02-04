<template>
  <header>
    <div class="l-header">
      <el-button icon="el-icon-s-grid" size="mini" @click="ChangeCollapse"></el-button>
    </div>
    <el-button @click="drawer = true" type="primary">
        点我打开
      </el-button>
    <div class="r-header">
      <el-dropdown @command="handleCommand" class="head-portrait">
        <span class="el-dropdown-link">
          <img :src="HeadPortrait" >
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">首页</el-dropdown-item>
          <el-dropdown-item command="b">推出登入</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">
        <span>我来啦!</span>
      </el-drawer>
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
        drawer: false,
        direction: 'rtl',
    }
  },
  methods:{
    handleCommand(command) {
        this.$message('click on item ' + command);
      },
    ChangeCollapse(){
      this.$store.commit('ChangeCollapse')
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            console.log(_);
            done();
          })
          .catch(_ => {console.log(_)});
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
