<template>
  <div>
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
    }
  }
</script>

<style scoped>

</style>
