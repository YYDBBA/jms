<template>
  <div class="animated bounceInRight">
    <pic-header></pic-header>
    <pic-content></pic-content>
    <pic-footer></pic-footer>
  </div>
</template>

<script>
  import PicHeader from './../components/headpic/Header'
  import PicContent from './../components/headpic/Content'
  import PicFooter from './../components/headpic/Footer'

  export default {
    name: "Headpic",
    components: {
      PicHeader,
      PicContent,
      PicFooter
    }
  }
</script>

<style scoped>

</style>
