<template>
  <div class="all animated rollIn faster">
    <communi-header></communi-header>
    <communi-tips></communi-tips>
    <communi-contents></communi-contents>
  </div>
</template>

<script>
  import CommuniHeader from './../components/communication/Header'
  import CommuniTips from './../components/communication/Tips'
  import CommuniContents from './../components/communication/Contents'
  export default {
    name: "Communication",
    components: {
      CommuniHeader,
      CommuniTips,
      CommuniContents
    }
  }
</script>

<style scoped>

  .all {
    position: relative;
    transition: all 5s !important;
  }
</style>
