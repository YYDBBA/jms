<template>
  <div class="animated rollIn faster">
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
    methods: {
      created (){
        setTimeout(()=>{
          this.$router.push('/');
        },5000)
      }
    }
  }
</script>

<style scoped>

</style>
