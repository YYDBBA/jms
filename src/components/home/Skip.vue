<template>
  <div class="content animated bounceInRight">
    <h3 class="title">旅游攻略</h3>
    <div class="all">
      <el-row class="top-detail">
        <el-col :span="20" class="detail-left">
          <div class="text-mute">你的旅行指南针</div>
        </el-col>
        <el-col :span="4">
          <div>
            <span class="text-mute func">发表游记</span>
            <span class="text-mute func">创建行程</span>
          </div>
        </el-col>
      </el-row>
      <div class="trip-bottom">
        <el-tabs type="border-card">
          <el-tab-pane v-for="(item,index) of tipList" :key="index">
            <span slot="label">{{item.title}}</span>
            <div class="pics">
              <ul>
                <router-link to="/detail">
                  <li class="pic-detail"><img class="big-pic"
                                              v-lazy="'./../../../static/image/'+item.tipBigImg"
                                              alt=""></li>
                  <li class="pic-detail" v-for="(item1,index1) of item.tipImgList" :key="index1"><img
                    class="small-pic"
                    v-lazy="'./../../../static/image/'+item1.tipSmallImg"
                    alt=""></li>
                </router-link>
              </ul>
            </div>
            <div class="trip-bottom">
              <div class="item">
                <div class="item-title">国内热门目的地</div>
                <div class="item-text">
                  <ul>
                    <router-link to="/detail">
                      <li class="desc" v-for="(item2,index2) of item.tipContentCnaList" :key="index2"><a href="">{{item2.content}}</a>
                      </li>
                    </router-link>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="item-title">海外热门目的地</div>
                <div class="item-text">
                  <ul>
                    <router-link to="/detail">
                      <li class="desc" v-for="(item3,index3) of item.tipContentCnaList" :key="index3">{{item3.content}}
                      </li>
                    </router-link>
                  </ul>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Skip",
    props: {
      tipList: Array
    }
  }
</script>

<style scoped>
  .all {
    width: 93%;
    height: 650px;
    margin: 0 auto;
  }

  .top-detail {
    padding-bottom: 5px;
    border-bottom: 2px solid #409dfe;
    box-sizing: border-box;
  }


  .func {
    margin-left: 40px;
    cursor: pointer;
  }

  .trip-bottom {
    margin-top: 10px;
  }

  .pics {
    width: 100%;
    height: 360px;
  }

  .pic-detail {
    float: left;
  }

  .big-pic {
    width: 695px;
    height: 350px;
  }

  .small-pic {
    margin-left: 10px;
    width: 332px;
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

  .item:nth-child(2) {
    margin-left: 42px;
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

  .desc {
    float: left;
    width: 290px;
    height: 48px;
    padding-left: 3px;
    box-sizing: border-box;
    line-height: 60px;
    font-size: 14px;
  }
</style>
