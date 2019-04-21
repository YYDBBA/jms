<template>
    <div class="foot">
      版权所有，本网站不参与任何非法营运，仅供学习使用
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

  .foot {
    width: 100%;
    height: 82px;
    margin-top: 15px;
   background: linear-gradient(
    to right,
    rgb(0, 247, 255, 0.2),
    rgb(251, 255, 0, 0.4)
  );
    text-align: center;
    padding-top: 30px;
    box-sizing: border-box;
    font-size: 20px;
    color: #fff;
  }
</style>
