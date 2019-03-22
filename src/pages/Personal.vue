<template>
  <div class="">
    <personal-header></personal-header>
    <personal-info></personal-info>
  </div>
</template>

<script>
  import PersonalHeader from './../components/personal/Header'
  import PersonalInfo from './../components/personal/Info'

  export default {
    name: "Personal",
    components: {
      PersonalHeader,
      PersonalInfo
    },
    beforeRouteEnter(to, from, next) {
      // console.log(to);
      // if (to.meta.login) {
      //
      // }else{
      //
      // }
        next((vm)=>{
        })
    },
    methods: {
      created() {
        setTimeout(() => {
          this.$router.push('/');
        }, 5000)
      }
    }
  }
</script>

<style scoped>

</style>
