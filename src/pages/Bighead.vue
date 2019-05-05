<template>
  <div class="not-found" @click="goHome">
    <img class="big" :src="'http://localhost:3000/userHeader/'+name" alt="">
  </div>
</template>

<script>
  export default {
    name: "Bighead",
    data(){
      return{
        name:this.$route.query.head
      }
    },
    methods: {
      goHome() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  .not-found {
    font-size: 30px;
    text-align: center;
    margin: 0 auto;
    margin-top: 100px;
    cursor: pointer;
    width: 300px;
    height: 300px;
    background-color: #fff;
  }
  .big{
    width: 300px;
    height: 100%;
  }
</style>
