<template>
  <div class="ttt animated rotateInDownRight">
    <div class="page">
      <waterfall :line-gap="230" :watch="items">
        <waterfall-slot
          v-for="(item, index) in items"
          :width="item.width"
          :height="item.height"
          :order="index"
          :key="item.id"
        >
          <div class="box">
            <div class="pic">
              <img :src="'./../../static/image/'+item.img" alt class="img">
            </div>
            <div class="pro animated fadeInUp faster">
              <p class="des">{{item.des}}</p>
            </div>
          </div>
        </waterfall-slot>
      </waterfall>
    </div>
  </div>
</template>

<script>
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
import axios from 'axios'
export default {
  name: "Content",
  components: {
    Waterfall,
    WaterfallSlot
  },
  data() {
    return {
      items: []
    };
  },
  mounted(){
    this.getPicData();
  },
  methods:{
    getPicData() {
      axios.get("http://localhost:3000/pic").then(res => {
        let data = res.data;
        if (data.status === "0") {
          this.items = data.result.picList;
        }else{
          return
        }
      });
    }
  }
};
</script>

<style scoped>
.ttt {
  width: 100%;
  height: 100%;
}

.page {
  width: 86%;
  height: auto;
  margin: 20px 7% 0 7%;
}

.box {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.pic {
  width: 100%;
  height: 100%;
}
.box:hover .pro {
  display: block;
}
.pro {
  position: absolute;
  bottom: 1%;
  left: 2%;
  width: 96%;
  height: 40px;
  display: none;
  background-color: rgba(10, 255, 255, 0.5);
  z-index: 999;
}

.img {
  width: 100%;
  padding: 5px;
  height: 100%;
  box-sizing: border-box;
}

.des {
  position: absolute;
  left: 10px;
  bottom: 10px;
  color: #fff;
}
</style>
