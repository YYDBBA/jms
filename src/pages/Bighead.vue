<template>
  <div class="not-found" @click="goHome">
    <img src="http://localhost:3000/userHeader/default.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: "Bighead",
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .not-found {
    font-size: 30px;
    text-align: center;
    margin-top: 50px;
    cursor: pointer;
    width: 300px;
    height: 300px;
  }
</style>
