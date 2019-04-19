<template>
  <div class="bg-search animated bounceInRight">
    <img class="back" src="./../../../static/image/bg1.jpg" alt>
    <div class="search">
      <el-input size="medium" v-model="input" placeholder="搜索你喜欢的" @focus="sss" @blur="cancel"></el-input>
      <el-button class="send" type="primary" size="mini" plain icon="el-icon-search">搜索</el-button>
    </div>
    <ul class="search-file" v-show="search">
      <li class="item border-bottom" @click="go" v-for="item of list" :key="item.id">{{item.name}}</li>
    </ul>
    <!-- <ul class="search-file" v-show="!search">
          <li class="item border-bottom">暂无数据</li>
    </ul>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Saerch",
  data() {
    return {
      input: "",
      search: false,
      city: []
    };
  },
  computed:{
    list(){
      if(this.input === ''){
        return
      }
      let arr = [];
      for(let i=0; i<this.city.length;i++){
        if(this.city[i].name.indexOf(this.input) !=-1 || this.city[i].spell.indexOf(this.input) !=-1){
          arr.push(this.city[i]);
        }
      }
      return arr;
    }
  },
  methods: {
    sss() {
      this.search = true;
      axios.get("http://localhost:3000/city").then(response => {
        let res = response.data;
        if (res.status === "0") {
          this.city = res.result.cities;
        } else {
          console.log("222");
        }
      });
    },
    cancel(){
      this.search = false;
    },
    go() {
      this.search = false;
    }
  }
};
</script>

<style scoped>
.back {
  width: 100%;
  height: 450px;
}
.bg-search {
  position: relative;
}
.search {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -130px;
  z-index: 20;
}
.search-file {
  position: absolute;
  top: 54%;
  left: 40.5%;
  width: 197px;
  min-height: 100px;
  background-color: #fff;
  z-index: 9999;
}
.item {
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  z-index: 9999;
  cursor: pointer;
}
.send {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15px;
  margin-left: 120px;
}
</style>
