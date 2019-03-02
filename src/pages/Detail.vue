<template>
  <div class="animated zoomInDown faster">
    <detail-content></detail-content>
    <detail-header></detail-header>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
  import DetailContent from './../components/detail/Content'
  import DetailHeader from './../components/detail/Header'
  import DetailFooter from './../components/detail/Footer'
  export default {
    name: "Detail",
    components: {
      DetailContent,
      DetailHeader,
      DetailFooter
    }
  }
</script>

<style scoped>

</style>
