<template>
    <div class="some">
      <router-link to="/">
        <span class="el-icon-back back">返回</span>
      </router-link>
      <span class="nav-title">走咯旅行服务网站</span>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .some {
    width: 100%;
    height: 60px;
    background-color: lightskyblue;
  }
  .back{
    font-size: 20px;
    color: #fff;
    line-height: 60px;
    margin-left: 10px;
  }

  .nav-title {
    margin-left: 38%;
    font-size: 25px;
    line-height: 60px;
    color: #fff;
  }
</style>
