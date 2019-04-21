<template>
    <div class="some">
      <router-link to="/">
        <span class="el-icon-back back">返回</span>
      </router-link>
      <span class="nav-title">
        <img class="logo" src="./../../../static/image/logotwo.png" alt="">
        走咯旅行服务网站</span>
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
    background: linear-gradient(
    to right,
    rgb(0, 247, 255, 0.2),
    rgb(251, 255, 0, 0.4)
  );
  }
  .logo {
    width: 120px;
    height: 60px;
  }
  .back{
    font-size: 20px;
    color: #fff;
    line-height: 60px;
    margin-left: 10px;
  }

  .nav-title {
    margin-left: 32%;
    font-size: 25px;
    line-height: 60px;
    color: #fff;
  }
</style>
