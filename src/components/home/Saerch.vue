<template>
    <div class="bg-search">
      <img class="back" src="./../../../static/image/bg1.jpg" alt="">
      <div class="search">
        <el-input size="mini" v-model="input" placeholder="搜索你喜欢的"></el-input>
        <el-button class="send" type="primary" size="mini" plain icon="el-icon-search">搜索</el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Saerch",
      data(){
          return {
            input:''
        }
      }
    }
</script>

<style scoped>
  .back{
    width: 100%;
    height: 450px;
  }
  .bg-search {
    position: relative;
  }
  .search {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -180px;
    z-index: 20;
  }
  .send{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -15px;
    margin-left: 120px;
  }
</style>
