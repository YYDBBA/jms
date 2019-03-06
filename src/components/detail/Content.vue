<template>
  <div class="all">
    <div class="tips">
      <el-container class="tip" v-for="(item,index) of list" :key="index">
        <el-aside class="aside">
          <img class="pic" :src="'./../../../static/image/'+item.hotImg" alt="">
        </el-aside>
        <el-container>
          <el-header class="header">{{cityChangeName}}：{{item.title}}</el-header>
          <el-main class="main">
            <p class="small">多少人去过：{{item.hotCount}}</p>
            <p class="small">多少人想去：{{item.wantCount}}</p>
            <p class="small">地理位置：{{item.adress}}</p>
            <p class="big-small">简介：</p>
            <p class="big">{{item.des}}</p>
          </el-main>
          <el-footer class="footer">
            <span>2345</span>
            <el-button>❤</el-button>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Content",
    data() {
      return {
        cityChangeName: '',
        list: []
      }
    },
    // computed: {
    //   cityChangeName() {
    //     return this.$store.state.city;
    //   }
    // },
    mounted() {
      this.getCityInfo();
    },
    methods: {
      getCityInfo() {
        this.cityChangeName = this.$store.state.city;
        let name = this.cityChangeName;
        let devide = this.$store.state.cityHot;
        axios.get('http://localhost:3000/homeData/detail', {
          params: {
            cityName: name,
            devide:devide
          }
        }).then((response) => {
          let res = response.data;
          if (res.status === '0') {
            let cityHot = this.$store.state.cityHot;
            let listData = res.result;
            // console.log(cityHot);
            // console.log(listData);
            listData.forEach((item, index) => {
                if(item.cityName === name){
                  this.list.push(item);
                }
              }
            );
          } else {
            console.log(222);
          }
        })
      }
    }
  }
</script>

<style scoped>
  .all {
    width: 100%;
    height: 100%;
  }

  .tips {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 60%;
    transform: translate(-50%, -60%);
  }

  .tip {
    width: 100%;
    height: 100%;
  }

  .aside {
    width: 70% !important;
  }

  .pic {
    width: 100%;
    height: 100%;
  }

  .header, .footer {
    line-height: 60px;
    text-align: center;
    font-size: 15px;
  }

  .main {
    font-size: 12px;
  }

  .small {
    width: 100%;
    height: 50px;
  }

  .big {
    text-indent: 2em;
    width: 100%;
    height: 100px;
    line-height: 15px;
  }
</style>
