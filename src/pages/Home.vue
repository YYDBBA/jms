<template>
    <div>
      <home-header></home-header>
      <home-search></home-search>
      <home-hot></home-hot>
      <home-recommend></home-recommend>
      <home-skip></home-skip>
      <home-send></home-send>
    </div>
</template>

<script>
  import HomeHeader from './../components/home/Header'
  import HomeSearch from './../components/home/Saerch'
  import HomeHot from './../components/home/Hot'
  import HomeRecommend from './../components/home/Recommend'
  import HomeSkip from './../components/home/Skip'
  import HomeSend from './../components/home/Send'
    export default {
        name: "Home",
        components: {
          HomeHeader,
          HomeSearch,
          HomeHot,
          HomeRecommend,
          HomeSkip,
          HomeSend
        }
    }
</script>

<style scoped>

</style>
