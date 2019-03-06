<template>
  <div class="not-found" @click="goHome">
    404,抱歉！页面不存在！
  </div>
</template>

<script>
  export default {
    name: "404",
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
  }
</style>
