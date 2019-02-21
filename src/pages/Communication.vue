<template>
  <div class="all">
    <communi-header></communi-header>
    <communi-tips></communi-tips>
  </div>
</template>

<script>
  import CommuniHeader from './../components/communication/Header'
  import CommuniTips from './../components/communication/Tips'
  export default {
    name: "Communication",
    components: {
      CommuniHeader,
      CommuniTips
    }
  }
</script>

<style scoped>

  .all {
    position: relative;
  }
</style>
