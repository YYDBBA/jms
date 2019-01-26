<template>
    <div>
      <home-header></home-header>
      <home-search></home-search>
      <home-hot></home-hot>
      <home-recommend></home-recommend>
    </div>
</template>

<script>
  import HomeHeader from './../components/home/Header'
  import HomeSearch from './../components/home/Saerch'
  import HomeHot from './../components/home/Hot'
  import HomeRecommend from './../components/home/Recommend'
    export default {
        name: "Home",
        components: {
          HomeHeader,
          HomeSearch,
          HomeHot,
          HomeRecommend
        }
    }
</script>

<style scoped>

</style>
