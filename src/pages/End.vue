<template>
  <div class="end-all">
    <end-header></end-header>
    <end-menu></end-menu>
  </div>
</template>

<script>
  import EndHeader from './../components/end/Header'
  import EndMenu from './../components/end/Menu'

  export default {
    name: "End",
    components: {
      EndHeader,
      EndMenu
    }
  }
</script>

<style scoped>
 .end-all {
   position: relative;
 }
</style>
