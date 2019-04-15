<template>
  <div class="about-all">
    <about-header></about-header>
    <about-menu></about-menu>
    <about-footer></about-footer>
  </div>
</template>

<script>
  import AboutHeader from './../components/about/Header'
  import AboutMenu from './../components/about/Menu'
  import AboutFooter from './../components/about/Footer'

  export default {
    name: "About",
    components: {
      AboutHeader,
      AboutMenu,
      AboutFooter
    }
  }
</script>

<style scoped>
 .about-all {
   position: relative;
 }
</style>
