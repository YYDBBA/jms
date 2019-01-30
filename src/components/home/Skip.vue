<template>
  <div class="content">
    <h3 class="title">旅游攻略</h3>
    <div class="all">
      <el-row class="top-detail">
        <el-col :span="20" class="detail-left">
          <div class="grid-content bg-purple text-mute">你的旅行指南针</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <span class="text-mute func">发表游记</span>
            <span class="text-mute func">创建行程</span>
          </div>
        </el-col>
      </el-row>
      <div class="trip-bottom">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label">最新精华游记</span>
            <div class="pics">
              <ul>
                <li class="pic-detail"><a href="" target="_self"><img class="big-pic" src="./../../../static/hot1.jpg" alt=""></a></li>
                <li class="pic-detail"><a href="" target="_self"><img class="small-pic" src="./../../../static/hot1.jpg" alt=""></a></li>
                <li class="pic-detail"><a href="" target="_self"><img class="small-pic" src="./../../../static/hot1.jpg" alt=""></a></li>
                <li class="pic-detail"><a href="" target="_self"><img class="small-pic" src="./../../../static/hot1.jpg" alt=""></a></li>
                <li class="pic-detail"><a href="" target="_self"><img class="small-pic" src="./../../../static/hot1.jpg" alt=""></a></li>
              </ul>
            </div>
            <div class="trip-bottom">
              <div class="item">
                <div class="item-title">国内热门目的地</div>
                <div class="item-text">
                  <ul>
                    <li class="desc"><a href="">丽江：总有一种浪漫在等你</a></li>
                    <li class="desc"><a href="">呼伦贝尔：大草原上放飞自我</a></li>
                    <li class="desc"><a href="">杭州：感受慢生活</a></li>
                    <li class="desc"><a href="">成都：带不走的只有你</a></li>
                    <li class="desc"><a href="">东山岛：听风踏浪的“左耳”之行</a></li>
                    <li class="desc"><a href="">黄山：日游黄山，夜醉黎阳</a></li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="item-title">海外热门目的地</div>
                <div class="item-text">
                  <ul>
                    <li class="desc"><a href="">圣托里尼：童话里的爱情圣地</a></li>
                    <li class="desc"><a href="">罗马：古城为什么不是一天建成的</a></li>
                    <li class="desc"><a href="">格鲁吉亚：被上帝遗忘的后花园</a></li>
                    <li class="desc"><a href="">曼谷：佛教之都，了解佛文化</a></li>
                    <li class="desc"><a href="">迪拜：中东沙漠里的璀璨之城</a></li>
                    <li class="desc"><a href="">轻井泽：别致浪漫，静谧清凉</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="寻味·饕餮">
            <span slot="label">寻味·饕餮</span>
          </el-tab-pane>
          <el-tab-pane label="花开一夏">
            <span slot="label">花开一夏</span>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Skip",
    data() {
      return {}
    },

  }
</script>

<style scoped>
  .all {
    width: 93%;
    margin: 0 auto;
  }

  .top-detail {
    border-bottom: 2px solid #409dfe;
  }


  .func {
    margin-left: 40px;
    cursor: pointer;
  }

  .trip-bottom {
    margin-top: 10px;
  }
  .pics{
    width: 100%;
    height: 360px;
  }
  .pic-detail {
    float: left;
  }
  .big-pic{
    width: 630px;
    height: 350px;
  }
  .small-pic {
    margin-left: 10px;
    width: 300px;
    height: 170px;
    margin-bottom: 10px;
  }

  .trip-bottom {
    width: 100%;
    height: 180px;
  }
  .item {
    float: left;
    width: 48%;
    height: 170px;
  }
  .item:nth-child(2){
    margin-left: 38px;
  }
  .item-title {
    width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 15px;
    padding-left: 3px;
    box-sizing: border-box;
    border-left: 2px solid #409dfe;
  }
  .item-text {
    width: 100%;
    height: 145px;
    border-left: 2px solid #cccccc;
  }
  .desc{
    float: left;
    width: 290px;
    height: 48px;
    padding-left: 3px;
    box-sizing: border-box;
    line-height: 60px;
    font-size: 14px;
  }
</style>
