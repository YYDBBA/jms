<template>
  <div>
    <pic-header></pic-header>
    <pic-content></pic-content>
  </div>
</template>

<script>
import PicHeader from './../components/picture/Header'
import PicContent from './../components/picture/Content'
  export default {
    name: "Picture",
    components:{
      PicHeader,
      PicContent
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  
</style>
