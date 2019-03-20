<template>
  <div class="end-all">
    <end-header></end-header>
    <end-menu></end-menu>
    <end-footer></end-footer>
  </div>
</template>

<script>
  import EndHeader from './../components/end/Header'
  import EndMenu from './../components/end/Menu'
  import EndFooter from './../components/end/Footer'

  export default {
    name: "End",
    components: {
      EndHeader,
      EndMenu,
      EndFooter
    }
  }
</script>

<style scoped>
 .end-all {
   position: relative;
 }
</style>
