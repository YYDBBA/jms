<template>
  <div class="info-more">
    <div class="info-left">
      <el-tabs :tab-position="tabPosition" class="tab">
        <el-tab-pane label="个人资料">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item,index) in bgc" :key="index">
              <h3><img class="ddd" :src="item.url" alt=""></h3>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
        <el-tab-pane label="修改资料">修改资料</el-tab-pane>
        <el-tab-pane label="我的发表">
          <div class="mySend border-bottom">
            <el-input v-model="sendTip"></el-input>
            <el-button @click="sendNew">发表</el-button>
          </div>
          <div class="info-list border-bottom" v-for="(item,index) of sendList" :key="index">
            <div class="info">
              <img class="user-head" :src="'http://localhost:3000/userHeader/'+item.userHead" alt="">
              <span class="username">{{item.userName}}</span>
              <i class="el-icon-delete delete" title="删除" @click="delSend(item)"></i>
              <p class="infoText">
                {{item.content}}
              </p>
              <ul class="info-operation">
                <li class="item infoTime">{{item.time}}</li>
                <li class="item infoTop">{{item.up}}</li>
                <li class="item infoDown">{{item.down}}</li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的好友">
          <div class="star-friend border-bottom" @click="toChat" v-for="(item,index) of userFriendList" :key="index">
            <img class="friend-head" src="" alt="">
            <span class="friend-name">{{item.userName}}</span>
            <span class="geqian">个性签名:{{item.userPersonal}}</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的关注">
          <div class="star-friend border-bottom" v-for="(item,index) of userCareList" :key="index">
            <img class="friend-head" src="" alt="">
            <span class="friend-name">{{item.userName}}</span>
            <span class="geqian">个性签名:{{item.userPersonal}}</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的上传">
          <upload-pic :picUrlList="uploadPicList"></upload-pic>
        </el-tab-pane>
      </el-tabs>
    </div>
    <transition name="el-fade-in-linear">
      <div class="chat" v-show="isChat">
        <span class="close" @click="closeChat">×</span>
        <ul class="msg">
          <li class="friend">
            <img  class="youHead" src="" alt="">
            <span class="youMsg">吃了吗？吃了吗？吃了吗？吃了吗？吃了吗？？吃了吗？？吃了吗？？吃了吗？？吃了吗？？吃了吗？</span>
          </li>
          <li class="me">
            <img class="myHead" src="" alt="">
            <span class="myMsg">没吃吃了吗？吃了吗？吃了吗？吃了吗？吃了吗？吃了吗？吃了吗？吃了吗？吃了吗？吃了吗？</span>
          </li>
        </ul>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" clearable>
            <el-button slot="append" @click="sendMsg">发送</el-button>
          </el-input>
        </div>
      </div>
    </transition>
    <div class="info-right">
    </div>
  </div>
</template>

<script>
  import UploadPic from './Upload'
  import axios from 'axios'
  export default {
    name: "Info",
    components:{
      UploadPic
    },
    data() {
      return {
        tabPosition: 'left',
        sendTip: '',
        isChat: false,
        bgc: [
          {
            "id":"1",
            "url":"./../../static/image/bg1.jpg"
          },
          {
            "id":"2",
            "url":"./../../static/image/bg2.jpg"
          },
          {
            "id":"3",
            "url":"./../../static/image/bg3.jpg"
          },
          {
            "id":"4",
            "url":"./../../static/image/bg4.jpg"
          }
        ],
        uploadPicList:[],
        sendList:[],
        userFriendList:[],
        userCareList:[]
      };
    },
    mounted() {
      this.getPersonalInfo();
    },
    methods: {
      //个人主页信息获取,根据用户登录的userName获取用户信息
      getPersonalInfo() {
        let userName = this.$store.state.loginName;
        axios.get('http://localhost:3000/users/getPersonalInfo',
          {
            params:{
              userName:userName
            }
          }).then((response)=>{
          let res1 = response.data;
          if(res1.status === "0"){
            //成功
            this.sendList = res1.result.sendList.sort((a,b)=>{
              return a>b ? 1 : -1
            });
            this.uploadPicList = res1.result.uploadPicList;
            this.userFriendList = res1.result.userFriendList;
            this.userCareList = res1.result.userCareList;
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
        let userName = this.$store.state.loginName;

        //获取发表时间
        let date = this.getTime();

        axios.post('http://localhost:3000/users/addNewSend',{
          userName:userName,
          content:sendParams,
          date:date
        }).then((response)=>{
          let res = response.data;
          if(res.status === "0"){
            //成功
            this.$message.success('发表成功！');
            this.sendTip = '';
            this.getPersonalInfo();
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
      },
      sendMsg () {
        // console.log(111);
      },
      //用户删除一条动态
      delSend (item) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let time = item.time;
          let name = item.userName;
          axios.post('http://localhost:3000/users/delSend',{
            time:time,
            userName:name
          }).then((response)=>{
            let res = response.data;
            if(res.status === '0'){
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getPersonalInfo();
            }else{
              console.log(222);
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      //格式化时间
      getTime(){
        let d = new Date();
        let year = d.getFullYear();
        let month = (d.getMonth() + 1)<10 ? "0"+(d.getMonth() + 1) : (d.getMonth() + 1);
        let day = d.getDate()<10 ? "0"+d.getDate() : d.getDate();
        let hour = d.getHours()<10 ? "0"+d.getHours() : d.getHours();
        let minute = d.getMinutes()<10 ? "0"+d.getMinutes() : d.getMinutes();
        let second = d.getSeconds()<10 ? "0"+d.getSeconds() : d.getSeconds();
        return year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
      }
    }
  }
</script>

<style scoped>

  .ddd {
    width: 100%;
    height: 100%;
  }

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

  .delete {
    position: absolute;
    bottom: 17px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
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
    padding: 10px;
    transform: translate(-50%,-50%);
    z-index: 999;
    box-sizing: border-box;
    background-color: lightpink;
  }

  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 20px;
    background-color: #fff;
    cursor: pointer;
  }

  .msg {
    margin-top: 30px;
    width: 380px;
    height: 300px;
    background-color: #fff;
  }

  .friend,.me{
    float: left;
    width: 100%;
    min-height: 50px;
    padding: 5px 10px;
    box-sizing: border-box;
  }

  .youHead,.myHead {
    float: left;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: yellow;
  }

  .youMsg,.myMsg {
    float: left;
    padding: 0 10px 0 10px;
    min-width: 20px;
    min-height: 40px;
    max-width: 200px;
    line-height: 20px;
    margin-left: 5px;
    box-sizing: border-box;
    background-color: deepskyblue;
  }

  .myHead,.myMsg {
    float: right;
    text-align: right;
  }

  .myMsg {
    margin-right: 5px;
  }

</style>
