<template>
  <div>
    <!--头部样式-->
    <nav-header></nav-header>
    <div class="bgi" :style="'background-image:url('+bgUrl+');'">
      <img
        class="user-head"
        :src="'http://localhost:3000/userHeader/'+userHead"
        alt
        @click="centerDialogVisible = true"
      >
      <el-dialog title="头像" :visible.sync="centerDialogVisible" width="30%" center>
        <span slot="footer" class="dialog-footer">
          <el-button icon="el-icon-search" @click="bigLook">查看大图</el-button>
          <el-button icon="el-icon-upload el-icon--right" @click="goHeadWall">上传头像</el-button>
        </span>
      </el-dialog>
      <span class="hello">{{time}}好，{{userName}}</span>
      <ul class="choose">
        <li class="bg-item" v-for="(item,index) of bgList" :key="index" @click="changeBg(item)">
          <img  class="bg-img" :src="item.url" alt="">
        </li>
      </ul>
    </div>
    <div class="communiTitle">
      <h3 class="content">{{userName}}的个人主页</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavHeader from './Headers'

export default {
  name: "Header",
  components:{
    NavHeader
  },
  data() {
    return {
      centerDialogVisible: false,
      bigUrl:false,
      userName: "",
      userHead: "",
      time: "",
      bgUrl:'./../../../static/image/bg4.jpg',
      bgList:[{url:'./../../../static/image/bg1.jpg'},
      {url:'./../../../static/image/bg2.jpg'},
      {url:'./../../../static/image/bg3.jpg'},
      {url:'./../../../static/image/bg4.jpg'}]
    };
  },
  mounted() {
    this.bgUrl = localStorage.getItem("bgUrl");
    this.getTime();
    this.userName = this.$store.state.loginName;
    axios
      .get("http://localhost:3000/users/getHeadWall", {
        params: {
          userName: this.userName
        }
      })
      .then(response => {
        let res = response.data;
        if (res.status === "0") {
          this.headList = res.result.uploadHeadList.sort((a, b) => {
            return a > b ? 1 : -1;
          });
          this.userHead = this.headList[0].name || "";
        } else {
          console.log(222);
        }
      });
  },
  methods: {
    handleClose(done) {
      done();
    },
    goHeadWall() {
      this.$router.push("/headpic");
    },
    bigLook() {
        this.$router.push({
          path:'/bighead',
          query:{head:this.userHead}
        });
    },
    getTime() {
      let a = new Date();
      let time = a.getHours();
      if (time <= 4) {
        this.time = "深夜";
      } else if (time <= 8) {
        this.time = "早上";
      } else if (time <= 11) {
        this.time = "上午";
      } else if (time < 13) {
        this.time = "中午";
      } else if (time <= 18) {
        this.time = "下午";
      } else {
        this.time = "晚上";
      }
    },
    changeBg(item) {
      this.bgUrl = item.url;
      localStorage.setItem("bgUrl",this.bgUrl);
    }
  }
};
</script>

<style scoped>

/*标题*/

.bgi {
  width: 100%;
  height: 400px;
  background-size: 100% 100%;
  position: relative;
}

.user-head {
  position: absolute;
  left: 50%;
  top: 25%;
  width: 100px;
  height: 100px;
  margin-left: -50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: black;
}

.hello {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 50px;
  line-height: 50px;
  margin-left: -100px;
  font-size: 20px;
  color: #fff;
  text-align: center;
}

.choose {
  position: absolute;
  left: 50px;
  bottom: 30px;
  width: 300px;
  height: 60px;
}

.bg-item {
  width: 60px;
  height: 60px;
  float: left;
  margin-left: 15px;
  background-color: pink;
  cursor: pointer;
}

.bg-img {
  width: 60px;
  height: 60px;
}

.communiTitle {
  background: linear-gradient(
    to right,
    rgb(0, 247, 255, 0.2),
    rgb(251, 255, 0, 0.4)
  );
  width: 70%;
  height: 80px;
  margin: 0 auto;
  margin-top: 10px;
}

.content {
  padding-left: 10px;
  line-height: 70px;
  font-size: 25px;
  box-sizing: border-box;
}
</style>
