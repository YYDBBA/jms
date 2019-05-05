<template>
  <div class="footer-content">
   <span class="jj">版权所有，本网站不参与任何非法营运，仅供学习使用</span> 
  </div>
</template>

<script>
  export default {
    name: "Send"
  }
</script>

<style scoped>
  .footer-content{
    position: relative;
    width: 100%;
    height: 100px;
    background: linear-gradient(
    to right,
    rgb(0, 247, 255, 0.2),
    rgb(251, 255, 0, 0.4)
  );
  }
  .jj{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    color:brown;
    font-size: 20px;
  }
  
</style>
