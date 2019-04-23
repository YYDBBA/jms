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
  import axios from 'axios'

  let HomeHeader = (resolve) => {
    return require.ensure([], () => {
      resolve(require('./../components/home/Header'))
    })
  };
  let HomeSearch = (resolve) => {
    return require.ensure([], () => {
      resolve(require('./../components/home/Saerch'))
    })
  };
  let HomeHot = (resolve) => {
    return require.ensure([], () => {
      resolve(require('./../components/home/Hot'))
    })
  };
  let HomeRecommend = (resolve) => {
    return require.ensure([], () => {
      resolve(require('./../components/home/Recommend'))
    })
  };
  let HomeSkip = (resolve) => {
    return require.ensure([], () => {
      resolve(require('./../components/home/Skip'))
    })
  };
  let HomeSend = (resolve) => {
    return require.ensure([], () => {
      resolve(require('./../components/home/Send'))
    })
  };
  export default {
    name: "Home",
    data() {
      return {
        hotList: [],
        forYouList: [],
        tipList: []
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
    mounted() {
      this.getHomeInfo();
    },
    methods: {
      getHomeInfo() {
        axios.get('http://localhost:3000/homeData').then((response) => {
          let res = response.data;
          let homeData = res.result.list[0];
          if (res.status === "0") {
            this.hotList = homeData.hotList;
            this.forYouList = homeData.forYouList;
            this.tipList = homeData.tipList;
            // console.log(this.hotList);测试
          } else {
            console.log(222);
          }
        })
      }
    }
  }
</script>

<style scoped>
.ddd{
  background-color: #0fcbb8;
}
</style>
