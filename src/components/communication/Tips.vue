<template>
  <div class="tips animated rollIn">
    <div class="tips-item">
      <h4 class="smallTip">最新资讯</h4>
      <ul>
        <li class="item" v-for="(item,index) of newOne" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="tips-item">
      <h4 class="smallTip">最新资讯</h4>
      <ul>
        <li class="item" v-for="(item,index) of newTwo" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="tips-item">
      <h4 class="smallTip">最新资讯</h4>
      <ul>
        <li class="item" v-for="(item,index) of newThree" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Tips",
  data() {
    return {
      newOne: [],
      newTwo: [],
      newThree: []
    };
  },
  mounted(){
    this.getComData();
  },
  methods:{
    getComData() {
      axios.get("http://localhost:3000/com").then(res => {
        let data = res.data;
        if (data.status === "0") {
          this.newOne = data.result.newOne;
          this.newTwo = data.result.newTwo;
          this.newThree = data.result.newThree;
        }else{
          return
        }
      });
    }
  }
};
</script>

<style scoped>
.tips {
  position: absolute;
  top: 160px;
  left: 15%;
  width: 300px;
  min-height: 450px;
  background: linear-gradient(
    to bottom,
    rgb(0, 247, 255, 0.2),
    rgb(251, 255, 0, 0.4)
  );
}

.tips-item {
  width: 100%;
  height: 150px;
}

.smallTip {
  padding-left: 5px;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  box-sizing: border-box;
}

.item {
  float: left;
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  padding-left: 5px;
  box-sizing: border-box;
}
</style>
