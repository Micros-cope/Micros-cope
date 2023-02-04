<template>
  <div class="home_data">
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template
        slot="dateCell"
        slot-scope="{data}">
        <p :class="data.isSelected ? 'is-selected' : ''" @click="fsfsf(data)">
          {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name:'HomePage',
  data() {
    return {
      
    }
  },
  methods: {
    fsfsf(data) {
      console.log(data);
    }
  }
}
</script>

<style lang="less" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .is-selected {
    color: #1989FA;
  }
  .el-calendar {
    border-radius: 15px;
    background-color: #abcaf7;
  }
</style>
<style lang="less" scoped>
</style>