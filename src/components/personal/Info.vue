<template>
  <div class="info-more">
    <div class="info-left">
      <el-tabs :tab-position="tabPosition" class="tab">
        <el-tab-pane label="个人资料">个人资料</el-tab-pane>
        <el-tab-pane label="修改资料">修改资料</el-tab-pane>
        <el-tab-pane label="我的发表">
          <div class="mySend border-bottom">
            <el-input v-model="sendTip"></el-input>
            <el-button @click="sendNew">发表</el-button>
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
          <div class="star-friend border-bottom" @click="toChat">
            <img class="friend-head" src="" alt="">
            <span class="friend-name">YUYU</span>
            <span class="geqian">个性签名：人需要沉淀，有时间去反思，才能一步一步往前走。</span>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="chat" v-show="isChat">
      <span class="close" @click="closeChat">关闭</span>
      <ul class="msg">
        <li class="friend"></li>
        <li class="me"></li>
      </ul>
    </div>
    <div class="info-right"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Info",
    data() {
      return {
        tabPosition: 'left',
        sendTip: '',
        isChat: false
      };
    },
    mounted() {
      // this.getPersonalInfo();
  },
    methods: {
      //个人主页信息获取,由于信息存在多个表格，获取有点复杂，后续整理
      getPersonalInfo() {
        axios.get('/').then((response)=>{
          let res1 = response.data;
          if(res1.status === "0"){
            //成功
          }else{
            //失败
            console.log(222);
          }
        })
      },
      //发表新的动态
      sendNew() {
        let sendParams = this.sendTip;
        //拿到当前用户登录信息
        // let userId = ...
        console.log(sendParams);

        axios.post('/users/addUser',{
          // id:''数据传给后台，通过userId添加content内容，完成发表动态
          content:sendParams
        }).then((response)=>{
          let res = response.data;
          if(res.status === "0"){
            //成功
          }else{
            //失败
            console.log(222);
          }
        })
      },
      toChat() {
        this.isChat = true;
      },
      closeChat() {
        this.isChat = false;
      }
    }
  }
</script>

<style scoped>

  .info-more {
    width: 70%;
    height: 500px;
    margin: 0 auto;
    margin-top: 10px;
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

  .chat {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    transform: translate(-50%,-50%);
    z-index: 999;
    background-color: lightpink;
  }

  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
</style>
