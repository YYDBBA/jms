<template>
    <div class="some animated flipInX">
      <router-link to="/">
        <span class="el-icon-back back">返回</span>
      </router-link>
      <div class="name">
        <img class="logo" src="./../../../static/image/logotwo.png" alt="">
        走咯旅行服务网站
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .some {
    position: relative;
    width: 100%;
    height: 60px;
    background: linear-gradient(
    to right,
    rgb(0, 247, 255, 0.2),
    rgb(251, 255, 0, 0.4)
  );
  }

  .name {
    position: absolute;
    top: 0;
    left: 35%;
    color: brown;
    font-size: 25px;
    line-height: 60px;
  }
  .logo {
    width: 120px;
    height: 60px;
  }

  .back{
    font-size: 20px;
    color: brown;
    line-height: 60px;
    margin-left: 10px;
  }
</style>
