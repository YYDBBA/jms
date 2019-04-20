<template>
  <div class="content animated rotateInUpRight">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="超话社区" name="first">
        <div class="info-list border-bottom">
          <div class="info">
            <img class="user-head" src>
            <span class="username">XIXI</span>
            <p class="infoText">人需要沉淀，有时间去反思，才能一步一步往前走。</p>
            <ul class="info-operation">
              <li class="item infoTime">2018-8-29 20:45:14</li>
              <li class="item infoTop">3345</li>
              <li class="item infoDown">2345</li>
            </ul>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的关注" name="second">
        <ul class="info-list" v-show="isLogin">
          <li class="info" v-for="(item,index) of sendList" :key="index">
            <img class="user-head" src alt>
            <span class="username">{{item.userName}}</span>
            <p class="infoText">{{item.content}}</p>
            <ul class="info-operation">
              <li class="item infoTime">{{item.time}}</li>
              <li class="item infoTop">{{item.up}}</li>
              <li class="item infoDown">{{item.down}}</li>
            </ul>
            <div class="send-com">
              <el-input placeholder="我也来评论..." v-model="input" clearable class="f-left"></el-input>
              <el-button class="f-left" @click="addCom(item)">评论</el-button>
            </div>
            <ul class="comment">
              <li class="comment-content" v-for="(item1,index1) of item.commentList" :key="index1">
                <span class="comment-name">{{item1.commentUserName}}:</span>
                <span class="comment-des">{{item1.commentContent}}</span>
                <span class="comment-time">{{item1.commentTime}}</span>
              </li>
            </ul>
          </li>
        </ul>
        <div class="info-list check-login" v-show="!isLogin">当前未登录！没有关注信息</div>
      </el-tab-pane>
      <el-tab-pane label="热点评论" name="third">
        <div class="info-list border-bottom">
          <div class="info">
            <img class="user-head" src>
            <span class="username">XIXI</span>
            <p class="infoText">人需要沉淀，有时间去反思，才能一步一步往前走。</p>
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
            <img class="user-head" src>
            <span class="username">XIXI</span>
            <p class="infoText">人需要沉淀，有时间去反思，才能一步一步往前走。</p>
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
import axios from "axios";
export default {
  name: "Contents",
  data() {
    return {
      activeName2: "first",
      isLogin: false,
      sendList: [],
      input: ""
    };
  },
  mounted() {
    this.checkLogin();
  },
  computed: {
    value() {
      return this.input;
    }
  },
  methods: {
    handleClick(tab, event) {
      if (tab.label === "我的关注") {
        this.getSendInfo();
      } else {
        return;
      }
    },
    checkLogin() {
      //是否登录
      let flag = this.$store.state.checkLogin;
      this.isLogin = !!flag;
    },
    getSendInfo() {
      //获取当前用户关注的发表
      axios
        .get("http://localhost:3000/users/getPersonalInfo", {
          //获取当前用户关注列表
          params: {
            userName: this.$store.state.loginName
          }
        })
        .then(response => {
          let res = response.data;
          if (res.status === "0") {
            let a = res.result.userCareList;
            let tem = [];
            let obj ={};
            for (let i in a) {
              obj = {userName:a[i].userName};
              tem.push(obj);
            }
            axios.get("http://localhost:3000/send/allSend",{
              params:{
                list:JSON.stringify(tem)
              }
            }).then(response => {
              let res1 = response.data;
              if (res1.status === "0") {
                //成功
                this.sendList = res1.result.sort((a, b) => {
                  return a > b ? 1 : -1;
                });
              }
            });
          } else {
            //失败
            console.log(222);
          }
        });
    },
    addCom(item) {
      //发表评论
      if (this.value !== "") {
        axios
          .post("http://localhost:3000/send/sendComment", {
            userName: item.userName,
            time: item.time,
            commentUserName: this.$store.state.loginName,
            commentContent: this.value,
            commentTime: this.getTime()
          })
          .then(response => {
            let res = response.data;
            if (res.status === "0") {
              this.getSendInfo();
              this.input = "";
              this.$message.success("评论成功");
            } else {
              return;
            }
          });
      }
    },
    getTime() {
      //获取格式化的时间
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
    }
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 160px;
  left: 37.7%;
  width: 650px;
  min-height: 400px;
}

.info-list {
  width: 100%;
  min-height: 200px;
}

.check-login {
  font-size: 20px;
  color: #fff;
  text-align: center;
  padding-top: 80px;
  box-sizing: border-box;
}

.info {
  width: 100%;
  min-height: 330px;
  position: relative;
  background: linear-gradient(
    to bottom,
    rgb(0, 247, 255, 0.2),
    rgb(251, 255, 0, 0.4)
  );
  overflow-y: auto;
  overflow-x: hidden;
}

.user-head {
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
  margin-left: 370px;
}

.infoDown {
  margin-left: 50px;
}

.send-com {
  position: absolute;
  top: 210px;
  left: 0;
  width: 100%;
}
.comment {
  position: absolute;
  top: 295px;
  left: 0;
  width: 100%;
  min-height: 30px;
  font-size: 15px;
}
.comment-content {
  width: 100%;
  min-height: 30px;
  line-height: 30px;
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
.f-left {
  float: right;
}
</style>
