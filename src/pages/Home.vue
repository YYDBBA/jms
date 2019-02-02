<template>
  <div>
    <home-header></home-header>
    <home-search></home-search>
    <home-hot :hotList="hotList"></home-hot>
    <home-recommend :forYouList="forYouList"></home-recommend>
    <home-skip :tipList="tipList"></home-skip>
    <home-send></home-send>
  </div>
</template>

<script>
  import HomeHeader from './../components/home/Header'
  import HomeSearch from './../components/home/Saerch'
  import HomeHot from './../components/home/Hot'
  import HomeRecommend from './../components/home/Recommend'
  import HomeSkip from './../components/home/Skip'
  import HomeSend from './../components/home/Send'
  import axios from 'axios'

  export default {
    name: "Home",
    data(){
      return {
        hotList:[],
        forYouList: [],
        tipList:[]
      }
    },
    components: {
      HomeHeader,
      HomeSearch,
      HomeHot,
      HomeRecommend,
      HomeSkip,
      HomeSend
    },
    mounted (){
      this.getHomeInfo();
    },
    methods: {
          getHomeInfo (){
            axios.get('/homeData').then((response)=>{
              let res = response.data;
              let homeData = res.result.list[0];
              if(res.status === "0"){
                this.hotList = homeData.hotList;
                this.forYouList = homeData.forYouList;
                this.tipList = homeData.tipList;
                console.log(this.hotList);
              }else{
                console.log(222);
              }
            })
          }
    }
  }
</script>

<style scoped>

</style>
