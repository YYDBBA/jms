<template>
    <div>
      <home-header></home-header>
      <home-search></home-search>
      <home-hot></home-hot>
      <home-recommend></home-recommend>
      <home-skip></home-skip>
    </div>
</template>

<script>
  import HomeHeader from './../components/home/Header'
  import HomeSearch from './../components/home/Saerch'
  import HomeHot from './../components/home/Hot'
  import HomeRecommend from './../components/home/Recommend'
  import HomeSkip from './../components/home/Skip'
    export default {
        name: "Home",
        components: {
          HomeHeader,
          HomeSearch,
          HomeHot,
          HomeRecommend,
          HomeSkip
        }
    }
</script>

<style scoped>

</style>
