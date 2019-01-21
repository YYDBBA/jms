<template>
  <div>
    <p class="title">热门景点</p>
  </div>
</template>

<script>
  export default {
    name: "Hot"
  }
</script>

<style scoped>
  .title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    position: relative;
  }
  .title:before,.title:after {
    width: 35%;
    border-bottom: 1px solid black;
    content: '';
  }
  .title:before{
    position: absolute;
    top: 25px;
    left: 10%;
  }
  .title:after{
    position: absolute;
    top: 25px;
    right: 10%;
  }
</style>
