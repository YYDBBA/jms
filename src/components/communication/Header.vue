<template>
  <div>
    <!--头部样式-->
    <nav-header></nav-header>
    <div class="communiTitle animated fadeInDown faster">
      <h3 class="content">社区论坛</h3>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import NavHeader from './Headers'

  export default {
    name: "Header",
    components:{
          NavHeader
        },
    data() {
      return {
        dialogVisible: false,
        userName: '',
        userPwd: ''
      }
    } 
  }
</script>

<style scoped>

  /*标题*/

  .communiTitle {
    width: 70%;
    height: 80px;
    margin: 0 auto;
    margin-top: 10px;
    background: linear-gradient(to right,rgb(0, 247, 255,.2),rgb(251, 255, 0,.4));
  }

  .content {
    padding-left: 10px;
    line-height: 70px;
    font-size: 25px;
    box-sizing: border-box;
  }
</style>
