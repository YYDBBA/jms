<template>
  <div class="info-more">
    <div class="info-left">
      <el-tabs :tab-position="tabPosition" class="tab">
        <el-tab-pane label="个人资料">
          <el-row class="only-info">
            <el-col :span="12">
              <div class="asd">昵称：{{thisName}}</div>
            </el-col>
            <el-col :span="12">
              <div class="asd">
                性别：{{sex}}
                <i class="el-icon-edit" title="修改" @click="changeSex"></i>
              </div>
            </el-col>
          </el-row>
          <el-row class="only-info">
            <el-col :span="12">
              <div class="asd">
                生日：{{bath}}
                <i class="el-icon-edit" title="修改" @click="changeBath"></i>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="asd">
                职业：{{major}}
                <i class="el-icon-edit" title="修改" @click="changeMajor"></i>
              </div>
            </el-col>
          </el-row>
          <el-row class="only-info">
            <el-col :span="12">
              <div class="asd">
                所在地：{{address}}
                <i class="el-icon-edit" title="修改" @click="changeAddress"></i>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="asd">
                家乡：{{homeTown}}
                <i class="el-icon-edit" title="修改" @click="changeHomeTown"></i>
              </div>
            </el-col>
          </el-row>
          <el-row class="only-info">
            <el-col :span="12">
              <div class="asd">
                邮箱：{{email}}
                <i class="el-icon-edit" title="修改" @click="changeEmail"></i>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="asd">
                爱好：{{hoppy}}
                <i class="el-icon-edit" title="修改" @click="changeHoppy"></i>
              </div>
            </el-col>
          </el-row>
          <el-row class="only-info">
            <el-col :span="24">
              <div class="asd">
                个签：{{personal}}
                <i class="el-icon-edit" title="修改" @click="changePersonal"></i>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="我的发表">
          <div class="mySend border-bottom">
            <h3 style="height:26px;font-size:16px;">发表动态:</h3>
            <el-input v-model="sendTip" type="textarea" class="send-des"></el-input>
            <el-button @click="sendNew" class="biu">发表</el-button>
          </div>
          <div class="info-list border-bottom" v-for="(item,index) of sendList" :key="index">
            <div class="info animated bounceIn">
              <img class="user-head" :src="'http://localhost:3000/userHeader/'+item.userHead" alt>
              <span class="username">{{item.userName}}</span>
              <i class="el-icon-delete delete" title="删除" @click="delSend(item)"></i>
              <p class="infoText">{{item.content}}</p>
              <ul class="info-operation">
                <li class="item infoTime">{{item.time}}</li>
                <li class="item infoTop" @click="up(item)">{{item.up}}</li>
                <li class="item infoDown" @click="down(item)">{{item.down}}</li>
              </ul>
              <ul class="comment">
                <li class="comment-content" v-for="(item1,index1) of item.commentList" :key="index1">
                  <span class="comment-name">{{item1.commentUserName}}:</span>
                  <span class="comment-des">{{item1.commentContent}}</span>
                  <span class="comment-time">{{item1.commentTime}}</span>
                </li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的好友">
          <div
            class="star-friend border-bottom animated bounceInRight"
            @click="toChat(item1)"
            v-for="(item1,index) of userFriendList"
            :key="index"
          >
            <img class="friend-head" :src="'http://localhost:3000/userHeader/'+item1.userHead" alt>
            <span class="friend-name">{{item1.userName}}</span>
            <span class="geqian">个性签名:{{item1.userPersonal}}</span>
            <el-badge class="infoCount" :value="infoCount"></el-badge>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的关注">
          <div class="star-friend border-bottom animated rotateIn faster" v-for="(item,index) of userCareList" :key="index">
            <img class="friend-head" :src="'http://localhost:3000/userHeader/'+item.userHead" alt>
            <span class="friend-name">{{item.userName}}</span>
            <span class="geqian">个性签名:{{item.userPersonal}}</span>
            <el-badge class="infoCount" :value="infoCount"></el-badge>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的上传">
          <upload-pic :picUrlList="uploadPicList"></upload-pic>
        </el-tab-pane>
      </el-tabs>
    </div>
    <transition name="el-fade-in-linear">
      <div class="chat" v-show="isChat">
        <span class="friendName">{{friendName}}{{online}}</span>
        <span class="close" @click="closeChat">×</span>
        <ul class="msg" ref="message">
          <li v-for="(item,index) of chatList" :key="index" :class="item.liClass">
            <img
              :class="item.imgClass"
              :src="'http://localhost:3000/userHeader/'+item.userHead"
              alt
            >
            <span :class="item.spanClass">{{item.message}}</span>
          </li>
        </ul>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" clearable v-model="msg">
            <el-button slot="append" @click="sendMsg()">发送</el-button>
          </el-input>
        </div>
      </div>
    </transition>
    <div class="info-right"></div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-input v-model="changeValue"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeGGG">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import UploadPic from "./Upload";
import axios from "axios";
import io from "socket.io-client";

export default {
  name: "Info",
  components: {
    UploadPic
  },
  data() {
    return {
      dialogVisible: false,
      tabPosition: "left",
      sendTip: "",
      isChat: false,
      uploadPicList: [],
      sendList: [],
      userFriendList: [],
      userCareList: [],
      friendName: "",
      online:'',
      friendHead: "",
      infoCount: "1",
      chatList: [],
      msg: "",
      thisName: this.$store.state.loginName,
      sex: "-",
      bath: "-",
      major: "-",
      address: "-",
      homeTown: "-",
      email: "-",
      hoppy: "-",
      personal: "-",
      changeValue: "-"
    };
  },
  mounted() {
    this.getPersonalInfo();
    this.getSendInfo();
  },
  computed: {
    value() {
      return this.changeValue;
    }
  },
  methods: {
    //个人主页信息获取,根据用户登录的userName获取用户信息
    getPersonalInfo() {
      let userName = this.$store.state.loginName;
      axios
        .get("http://localhost:3000/users/getPersonalInfo", {
          params: {
            userName: userName
          }
        })
        .then(response => {
          let res1 = response.data;
          if (res1.status === "0") {
            //成功
            this.userFriendList = res1.result.userFriendList;
            this.userCareList = res1.result.userCareList;
            this.sex = res1.result.userSex;
            this.bath = res1.result.userBath;
            this.major = res1.result.userMajor;
            this.address = res1.result.userAddress;
            this.homeTown = res1.result.userHometown;
            this.email = res1.result.userEmail;
            this.hoppy = res1.result.userHoppy;
            this.personal = res1.result.userPersonal;
          } else {
            //失败
            console.log(222);
          }
        });
    },
    getChatInfo(a) {
      let userName = this.$store.state.loginName;
      axios
        .get("http://localhost:3000/users/getPersonalInfo", {
          params: {
            userName: userName
          }
        })
        .then(response => {
          let res2 = response.data;
          if (res2.status === "0") {
            let temp = res2.result.chatList;
            let arr = [];
            for(let i in temp) {
              console.log(i);
              if(temp[i].from === a.userName || temp[i].to === a.userName){
                arr.push(temp[i]);
              }else{
                console.log('我不是');
              }
              this.chatList = arr;
            }
          } else {
            //失败
            console.log(222);
          }
        });
    },
    //拿到动态信息
    getSendInfo() {
      let userName = this.$store.state.loginName;
      axios.get("http://localhost:3000/send",{
        params:{
          userName:userName
        }
      }).then(response => {
          let res1 = response.data;
          if (res1.status === "0") {
            //成功
            this.sendList = res1.result.sort((a, b) => {
              return a > b ? 1 : -1;
            });
          } else {
            //失败
            console.log(222);
          }
        });
    },
    //发表新的动态
    sendNew() {
      if (this.sendTip !== "") {
        let sendParams = this.sendTip;
        let userName = this.$store.state.loginName; //拿到当前用户登录信息
        let date = this.getTime();//获取发表时间

        axios
          .post("http://localhost:3000/send/addNewSend", {
            userName: userName,
            content: sendParams,
            date: date
          })
          .then(response => {
            let res = response.data;
            if (res.status === "0") {
              //成功
              this.$message.success("发表成功！");
              this.sendTip = "";
              this.getSendInfo();
            } else {
              //失败
              console.log(222);
            }
          });
      }
    },
    up(item) {
      let sendTime = item.time;
      let flag = 1;
      axios
        .post("http://localhost:3000/send/upDown", {
          time: sendTime,
          up: item.up,
          flag: flag
        })
        .then(response => {
          let res = response.data;
          if (res.status === "0") {
            console.log(111);
          } else {
            console.log(222);
          }
        });
    },
    down(item) {
      let sendTime = item.time;
      let flag = -1;
      axios
        .post("http://localhost:3000/send/upDown", {
          time: sendTime,
          down: item.down,
          flag: flag
        })
        .then(response => {
          let res = response.data;
          if (res.status === "0") {
            console.log(111);
          } else {
            console.log(222);
          }
        });
    },
    toChat(item1) {
      this.isChat = true;
      this.friendName = item1.userName;
      // console.log(item1);
      this.friendHead = item1.userHead;
      this.qq().emit("setRoom", {
        from: this.$store.state.loginName
      });
      this.getChatInfo(item1);
    },
    closeChat() {
      this.isChat = false;
      this.chatList = [];
    },
    qq() {
      let url = "http://localhost:3000";
      let socket = io.connect(url);

      //监听连接
      socket.on("connect", () => {
        console.log("success");

        //打开通道
        socket.emit("open");

        socket.on("message", data => {
          // let a = Array.from(data);
          this.chatList.push(data);
          console.log(data);
          // console.log(arr);
          // this.chatList.push(data);
        });
        // socket.on("noOnline", data => {
        //   // let a = Array.from(data);
        //   // this.$message.error(data);
        //   this.online = data;
        //   // console.log(arr);
        //   // this.chatList.push(data);
        // });
        // socket.on("online", data => {
        //   // let a = Array.from(data);
        //   // this.$message.error(data);
        //   this.online = data;
        //   // console.log(arr);
        //   // this.chatList.push(data);
        // });
      });
      //接收服务器返回的消息
      return socket;
      //添加用户发送消息
    },
    sendMsg() {
      if (this.msg !== "") {
        this.qq().emit("sendTo", {
          from: this.$store.state.loginName,
          to: this.friendName,
          userHead: this.friendHead,
          message: this.msg,
          liClass: "me",
          imgClass: "myHead",
          spanClass: "myMsg"
        });
        this.chatList.push({
          from: this.$store.state.loginName,
          to: this.friendName,
          userHead: this.friendHead,
          message: this.msg,
          liClass: "me",
          imgClass: "myHead",
          spanClass: "myMsg"
        });
        axios
          .post("http://localhost:3000/users/addMessage", {
            from: this.$store.state.loginName,
            to: this.friendName,
            message: this.msg,
            liClass: "me",
            imgClass: "myHead",
            spanClass: "myMsg"
            //flag: this.$store.state.loginName + this.friendName把用户id之和相加的结果作为唯一标识
          })
          .then(response => {
            let res = response.data;
            if (res.status === "0") {
              this.$message.success("消息发送成功");
            } else {
              this.$message.error("消息发送失败");
            }
          });
        this.msg = "";
        console.log(this.chatList);
      }
    },
    //用户删除一条动态
    delSend(item) {
      this.$confirm("此操作将永久删除该动态, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let time = item.time;
          let name = item.userName;
          axios
            .post("http://localhost:3000/send/delSend", {
              time: time,
              userName: name
            })
            .then(response => {
              let res = response.data;
              if (res.status === "0") {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                this.getSendInfo();
              } else {
                console.log(222);
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //格式化时间
    getTime() {
      let d = new Date();
      let year = d.getFullYear();
      let month =
        d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
      let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
      let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
      let minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
      let second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      );
    },
    //修改性别
    changeSex() {
      this.dialogVisible = true;
      localStorage.setItem("change", "changeSex");
    },
    //修改生日
    changeBath() {
      this.dialogVisible = true;
      localStorage.setItem("change", "changeBath");
    },
    //修改职业
    changeMajor() {
      this.dialogVisible = true;
      localStorage.setItem("change", "changeMajor");
    },
    //修改地址
    changeAddress() {
      this.dialogVisible = true;
      localStorage.setItem("change", "changeAddress");
    },
    //修改家乡
    changeHomeTown() {
      this.dialogVisible = true;
      localStorage.setItem("change", "changeHomeTown");
    },
    //修改邮箱
    changeEmail() {
      this.dialogVisible = true;
      localStorage.setItem("change", "changeEmail");
    },
    //修改爱好
    changeHoppy() {
      this.dialogVisible = true;
      localStorage.setItem("change", "changeHoppy");
    },
    //修改个签
    changePersonal() {
      this.dialogVisible = true;
      localStorage.setItem("change", "changePersonal");
    },
    changeGGG() {
      let a = localStorage.getItem("change");
      axios
        .post("http://localhost:3000/users/" + a, {
          userName: this.$store.state.loginName,
          type: this.changeValue
        })
        .then(res => {
          let dd = res.data;
          this.$message.success("修改成功！");
          this.dialogVisible = false;
          this.changeValue = '';
          this.getPersonalInfo();
        })
        .catch(err => {
          this.$message.error("修改失败！");
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  updated() {
    //聊天窗口始终保持在最底部
    this.$nextTick(function() {
      let div = document.getElementsByClassName("msg")[0];
      div.scrollTop = div.scrollHeight;
    });
  }
};
</script>

<style scoped>

.mySend {
  overflow: hidden;
}
.biu {
float:right;
margin: 5px 0 5px 0;
}
.send-des {
float:right;
}
.asd {
  position: relative;
  font-size: 15px;
}
.el-icon-edit {
  position: absolute;
  right: 20px;
  top: 0;
  line-height: 50px;
  cursor: pointer;
}
.info-more {
  width: 79%;
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
  min-height: 250px;
}

.info {
  width: 100%;
  min-height: 250px;
  position: relative;
  overflow-y: auto;
  overflow-x:hidden;
}

.only-info {
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  box-sizing: border-box;
}

.user-head {
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
  top: 165px;
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

.comment{
  position: absolute;
  top: 220px;
  left: 0;
width: 100%;
min-height: 30px;
}
.comment-content {
  width: 100%;
  min-height:30px;
  position: relative;
}
.comment-name {
  position: absolute;
  top: 0;
  left: 5px;
}

.comment-des {
  position: absolute;
  top: 0;
  left: 40px;
}

.comment-time {
  position: absolute;
  top: 0;
  right: 30px;
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

.infoCount {
  position: absolute;
  right: 5px;
  bottom: 15px;
}

.chat {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  padding: 10px;
  transform: translate(-50%, -50%);
  z-index: 100;
  box-sizing: border-box;
  background-color: rgb(210, 236, 238);
}

.friendName {
  position: absolute;
  top: 10px;
  left: 150px;
  width: 100px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 20px;
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
  overflow-y: auto;
  overflow-x: hidden;
}

.you {
  width: 380px;
  height: 50px;
  padding: 5px 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.me {
  width: 380px;
  height: 50px;
  padding: 5px 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.youHead,
.myHead {
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.youMsg,
.myMsg {
  float: left;
  padding: 0 10px 0 10px;
  min-width: 20px;
  min-height: 40px;
  max-width: 200px;
  line-height: 20px;
  margin-left: 5px;
  box-sizing: border-box;
  background: linear-gradient(
    to right,
    rgb(0, 247, 255, 0.2),
    rgb(251, 255, 0, 0.4)
  );
}

.myHead,
.myMsg {
  float: right;
  text-align: right;
}

.myMsg {
  margin-right: 5px;
}
</style>
