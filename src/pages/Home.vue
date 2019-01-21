<template>
    <div>
      <home-header></home-header>
      <home-search></home-search>
      <home-hot></home-hot>
    </div>
</template>

<script>
  import HomeHeader from './../components/home/Header'
  import HomeSearch from './../components/home/Saerch'
  import HomeHot from './../components/home/Hot'
    export default {
        name: "Home",
        components: {
          HomeHeader,
          HomeSearch,
          HomeHot
        }
    }
</script>

<style scoped>

</style>
