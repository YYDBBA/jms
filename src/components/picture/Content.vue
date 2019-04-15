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
              <img :src="item.img" alt class="img">
            </div>
            <div class="pro animated fadeInUp faster">
              <p class="des">长沙真美</p>
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
export default {
  name: "Content",
  components: {
    Waterfall,
    WaterfallSlot
  },
  data() {
    return {
      items: [
        {
          id: "1",
          height: "200",
          width: "100",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2Fthumbs%2F1268230%2Fimage%2F1413%2F14137960%2Fapi_thumb_450.jpg&id=14137960&userid=1268230&imgfile=thumbs"
        },
        {
          id: "2",
          height: "200",
          width: "100",
          img:
            "http://api1.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fstatic5.depositphotos.com%2F1007330%2F427%2Fi%2F380%2Fdepositphotos_4272545-stock-photo-take-off-runway.jpg&id=4272545&userid=1007330&imgfile=thumbs"
        },
        {
          id: "3",
          height: "150",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fstatic3.depositphotos.com%2Fthumbs%2F1000602%2Fimage%2F119%2F1199375%2Fapi_thumb_450.jpg&id=1199375&userid=1000602&imgfile=thumbs"
        },
        {
          id: "4",
          height: "230",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fstatic3.depositphotos.com%2Fthumbs%2F1000817%2Fimage%2F113%2F1135638%2Fapi_thumb_450.jpg&id=1135638&userid=1000817&imgfile=thumbs"
        },
        {
          id: "5",
          height: "310",
          width: "200",
          img:
            "http://api1.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2F1007373%2F4271%2Fi%2F380%2Fdepositphotos_42710923-stock-photo-holidays-on-the-tropical-island.jpg&id=42710923&userid=1007373&imgfile=thumbs"
        },
        {
          id: "6",
          height: "270",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst2.depositphotos.com%2Fthumbs%2F1001163%2Fimage%2F8799%2F87995850%2Fapi_thumb_450.jpg&id=87995850&userid=1001163&imgfile=thumbs"
        },
        {
          id: "7",
          height: "350",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2Fthumbs%2F2036925%2Fimage%2F4433%2F44336573%2Fapi_thumb_450.jpg&id=44336573&userid=2036925&imgfile=thumbs"
        },
        {
          id: "8",
          height: "134",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst2.depositphotos.com%2Fthumbs%2F1117454%2Fimage%2F7037%2F70375041%2Fapi_thumb_450.jpg&id=70375041&userid=1117454&imgfile=thumbs"
        },
        {
          id: "9",
          height: "390",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2Fthumbs%2F1029907%2Fimage%2F3577%2F35773243%2Fapi_thumb_450.jpg&id=35773243&userid=1029907&imgfile=thumbs"
        },
        {
          id: "10",
          height: "450",
          width: "200",
          img:
            "http://api5.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2F2294011%2F3570%2Fi%2F380%2Fdepositphotos_35708235-stock-photo-travel-and-trip.jpg&id=35708235&userid=2294011&imgfile=thumbs"
        },
        {
          id: "11",
          height: "410",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst2.depositphotos.com%2Fthumbs%2F4714683%2Fimage%2F7034%2F70343449%2Fapi_thumb_450.jpg&id=70343449&userid=4714683&imgfile=thumbs"
        },
        {
          id: "12",
          height: "100",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2Fthumbs%2F1452714%2Fimage%2F1277%2F12772536%2Fapi_thumb_450.jpg&id=12772536&userid=1452714&imgfile=thumbs"
        },
        {
          id: "13",
          height: "200",
          width: "100",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2Fthumbs%2F1268230%2Fimage%2F1413%2F14137960%2Fapi_thumb_450.jpg&id=14137960&userid=1268230&imgfile=thumbs"
        },
        {
          id: "14",
          height: "200",
          width: "100",
          img:
            "http://api1.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fstatic5.depositphotos.com%2F1007330%2F427%2Fi%2F380%2Fdepositphotos_4272545-stock-photo-take-off-runway.jpg&id=4272545&userid=1007330&imgfile=thumbs"
        },
        {
          id: "15",
          height: "150",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fstatic3.depositphotos.com%2Fthumbs%2F1000602%2Fimage%2F119%2F1199375%2Fapi_thumb_450.jpg&id=1199375&userid=1000602&imgfile=thumbs"
        },
        {
          id: "16",
          height: "230",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fstatic3.depositphotos.com%2Fthumbs%2F1000817%2Fimage%2F113%2F1135638%2Fapi_thumb_450.jpg&id=1135638&userid=1000817&imgfile=thumbs"
        },
        {
          id: "17",
          height: "310",
          width: "200",
          img:
            "http://api1.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2F1007373%2F4271%2Fi%2F380%2Fdepositphotos_42710923-stock-photo-holidays-on-the-tropical-island.jpg&id=42710923&userid=1007373&imgfile=thumbs"
        },
        {
          id: "18",
          height: "270",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst2.depositphotos.com%2Fthumbs%2F1001163%2Fimage%2F8799%2F87995850%2Fapi_thumb_450.jpg&id=87995850&userid=1001163&imgfile=thumbs"
        },
        {
          id: "19",
          height: "350",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2Fthumbs%2F2036925%2Fimage%2F4433%2F44336573%2Fapi_thumb_450.jpg&id=44336573&userid=2036925&imgfile=thumbs"
        },
        {
          id: "20",
          height: "134",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst2.depositphotos.com%2Fthumbs%2F1117454%2Fimage%2F7037%2F70375041%2Fapi_thumb_450.jpg&id=70375041&userid=1117454&imgfile=thumbs"
        },
        {
          id: "21",
          height: "390",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2Fthumbs%2F1029907%2Fimage%2F3577%2F35773243%2Fapi_thumb_450.jpg&id=35773243&userid=1029907&imgfile=thumbs"
        },
        {
          id: "22",
          height: "450",
          width: "200",
          img:
            "http://api5.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2F2294011%2F3570%2Fi%2F380%2Fdepositphotos_35708235-stock-photo-travel-and-trip.jpg&id=35708235&userid=2294011&imgfile=thumbs"
        },
        {
          id: "23",
          height: "410",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst2.depositphotos.com%2Fthumbs%2F4714683%2Fimage%2F7034%2F70343449%2Fapi_thumb_450.jpg&id=70343449&userid=4714683&imgfile=thumbs"
        },
        {
          id: "24",
          height: "100",
          width: "200",
          img:
            "http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fst.depositphotos.com%2Fthumbs%2F1452714%2Fimage%2F1277%2F12772536%2Fapi_thumb_450.jpg&id=12772536&userid=1452714&imgfile=thumbs"
        }
      ]
    };
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
