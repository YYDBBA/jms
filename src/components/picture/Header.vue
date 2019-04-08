<template>
    <div class="some">
      <router-link to="/personal">
        <span class="el-icon-back back">返回</span>
      </router-link>
      走咯旅游服务网站
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
    background-color: lightblue;
  }

  .back{
    font-size: 20px;
    color: #fff;
    line-height: 60px;
    margin-left: 10px;
  }
</style>
