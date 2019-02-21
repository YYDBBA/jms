<template>
  <div class="info-more">
    <div class="info-left">
      <el-tabs :tab-position="tabPosition" class="tab">
        <el-tab-pane label="个人资料">个人资料</el-tab-pane>
        <el-tab-pane label="修改资料">修改资料</el-tab-pane>
        <el-tab-pane label="我的发表">
          <div class="mySend">
            <el-input></el-input>
            <el-button>发表</el-button>
          </div>
          <div class="info-list border-bottom">
            <div class="info">
              <img class="user-head" src="" alt="">
              <span class="username">XIXI</span>
              <p class="infoText">
                人需要沉淀，有时间去反思，才能一步一步往前走。
              </p>
              <ul class="info-operation">
                <li class="item infoTime">2018-8-29 20:45:14</li>
                <li class="item infoTop">3345</li>
                <li class="item infoDown">2345</li>
              </ul>
            </div>
          </div>
          <div class="info-list border-bottom">
            <div class="info">
              <img class="user-head" src="" alt="">
              <span class="username">XIXI</span>
              <p class="infoText">
                人需要沉淀，有时间去反思，才能一步一步往前走。
              </p>
              <ul class="info-operation">
                <li class="item infoTime">2018-8-29 20:45:14</li>
                <li class="item infoTop">3345</li>
                <li class="item infoDown">2345</li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的关注">
          <div class="star-friend border-bottom">
            <img class="friend-head" src="" alt="">
            <span class="friend-name">YUYU</span>
            <span class="geqian">个性签名：人需要沉淀，有时间去反思，才能一步一步往前走。</span>
          </div>
          <div class="star-friend border-bottom">
            <img class="friend-head" src="" alt="">
            <span class="friend-name">YUYU</span>
            <span class="geqian">个性签名：人需要沉淀，有时间去反思，才能一步一步往前走。</span>
          </div>
          <div class="star-friend border-bottom">
            <img class="friend-head" src="" alt="">
            <span class="friend-name">YUYU</span>
            <span class="geqian">个性签名：人需要沉淀，有时间去反思，才能一步一步往前走。</span>
          </div>
          <div class="star-friend border-bottom">
            <img class="friend-head" src="" alt="">
            <span class="friend-name">YUYU</span>
            <span class="geqian">个性签名：人需要沉淀，有时间去反思，才能一步一步往前走。</span>
          </div>
          <div class="star-friend border-bottom">
            <img class="friend-head" src="" alt="">
            <span class="friend-name">YUYU</span>
            <span class="geqian">个性签名：人需要沉淀，有时间去反思，才能一步一步往前走。</span>
          </div>
          <div class="star-friend border-bottom">
            <img class="friend-head" src="" alt="">
            <span class="friend-name">YUYU</span>
            <span class="geqian">个性签名：人需要沉淀，有时间去反思，才能一步一步往前走。</span>
          </div>
          <div class="star-friend border-bottom">
            <img class="friend-head" src="" alt="">
            <span class="friend-name">YUYU</span>
            <span class="geqian">个性签名：人需要沉淀，有时间去反思，才能一步一步往前走。</span>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="info-right"></div>
  </div>
</template>

<script>
  export default {
    name: "Info",
    data() {
      return {
        tabPosition: 'left'
      };
    }
  }
</script>

<style scoped>

  .info-more {
    width: 70%;
    height: 500px;
    margin: 0 auto;
    background-color: pink;
  }

  .info-left {
    width: 70%;
    min-height: 500px;
  }

  .tab {
    min-height: 200px;
  }
  .info-list {
    width: 100%;
    min-height: 200px;
    background-color: lightblue;
  }

  .info {
    width: 100%;
    height: 200px;
    position: relative;
  }

  .user-head{
    position: absolute;
    top: 5px;
    left: 10px;
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 50%;
  }

  .username {
    position: absolute;
    top: 22px;
    left: 70px;
    width: 200px;
    height: 60px;
    font-size: 20px;
  }

  .infoText {
    position: absolute;
    top: 70px;
    left: 20px;
    width: 100%;
    height: 80px;
    font-size: 15px;
  }

  .info-operation {
    position: absolute;
    top: 170px;
    left: 10px;
    font-size: 15px;
  }

  .item {
    float: left;
  }

  .infoTop {
    margin-left: 350px;
  }

  .infoDown {
    margin-left: 50px;
  }

  .star-friend {
    position: relative;
    width: 100%;
    min-height: 50px;
    font-size: 13px;
    cursor: pointer;
  }

  .friend-head {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 42px;
    height: 42px;
    background-color: brown;
  }

  .friend-name {
    position: absolute;
    top: 3px;
    left: 50px;
  }

  .geqian {
    position: absolute;
    top: 30px;
    left: 50px;
  }
</style>
