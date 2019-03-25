<template>
  <div class="">
    <personal-header></personal-header>
    <personal-info></personal-info>
  </div>
</template>

<script>
  import PersonalHeader from './../components/personal/Header'
  import PersonalInfo from './../components/personal/Info'
  import axios from 'axios'

  export default {
    name: "Personal",
    data(){
      return {

      }
    },
    components: {
      PersonalHeader,
      PersonalInfo
    },
    methods: {
      //个人主页信息获取,根据用户登录的userName获取用户信息
      // getPersonalInfo() {
      //   let userName = this.$store.state.loginName;
      //   axios.get('http://localhost:3000/users/getPersonalInfo',
      //     {
      //       params:{
      //         userName:userName
      //       }
      //     }).then((response)=>{
      //     let res1 = response.data;
      //     if(res1.status === "0"){
      //       //成功
      //       this.sendList = res1.result.sendList.sort((a,b)=>{
      //         return a>b ? 1 : -1
      //       });
      //       this.uploadPicList = res1.result.uploadPicList;
      //       this.userFriendList = res1.result.userFriendList;
      //       this.userCareList = res1.result.userCareList;
      //     }else{
      //       //失败
      //       console.log(222);
      //     }
      //   })
      // }
    }
  }
</script>

<style scoped>

</style>
