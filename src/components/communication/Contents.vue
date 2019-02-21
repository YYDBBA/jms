<template>
  <div class="content">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="超话社区" name="first">
        <div class="info-list border-bottom">
          <div class="info">
            <img class="user-head" src="">
            <span class="username">XIXI</span>
            <p class="infoText">
              妳說的愛情，是我觸及不到的永遠。
            </p>
            <ul class="info-operation">
              <li class="item infoTime">2018-8-29 20:45:14</li>
              <li class="item infoTop">3345</li>
              <li class="item infoDown">2345</li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的关注" name="second">
        <div class="info-list border-bottom">
          <div class="info">
            <img class="user-head" src="">
            <span class="username">XIXI</span>
            <p class="infoText">
              妳說的愛情，是我觸及不到的永遠。
            </p>
            <ul class="info-operation">
              <li class="item infoTime">2018-8-29 20:45:14</li>
              <li class="item infoTop">3345</li>
              <li class="item infoDown">2345</li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="热点评论" name="third">
        <div class="info-list border-bottom">
        <div class="info">
          <img class="user-head" src="">
          <span class="username">XIXI</span>
          <p class="infoText">
            妳說的愛情，是我觸及不到的永遠。
          </p>
          <ul class="info-operation">
            <li class="item infoTime">2018-8-29 20:45:14</li>
            <li class="item infoTop">3345</li>
            <li class="item infoDown">2345</li>
          </ul>
        </div>
      </div>
      </el-tab-pane>
      <el-tab-pane label="更多资讯" name="fourth">
        <div class="info-list border-bottom">
        <div class="info">
          <img class="user-head" src="">
          <span class="username">XIXI</span>
          <p class="infoText">
            妳說的愛情，是我觸及不到的永遠。
          </p>
          <ul class="info-operation">
            <li class="item infoTime">2018-8-29 20:45:14</li>
            <li class="item infoTop">3345</li>
            <li class="item infoDown">2345</li>
          </ul>
        </div>
      </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "Contents",
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {

      }
    }
  }
</script>

<style scoped>

  .content {
    position: absolute;
    top: 150px;
    left: 35.5%;
    width: 752px;
    height: 400px;
  }

  .info-list {
    width: 100%;
    min-height: 200px;
    background-color: pink;
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
    margin-left: 450px;
  }

  .infoDown {
    margin-left: 50px;
  }
</style>
