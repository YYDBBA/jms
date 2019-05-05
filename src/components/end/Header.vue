<template>
  <el-row class="sf">
    <el-col :span="4" class="grid-content bg-purple ddd fff">
      <img class="logo" src="./../../../static/image/logotwo.png" alt>
    </el-col>
    <el-col :span="16" class="grid-content bg-purple-light ddd">
      <h3>走咯旅游服务网站系统后台</h3>
    </el-col>
    <el-col :span="4" class="grid-content bg-purple ddd">
      <span class="name">admin</span>
      <img class="head-pic" v-popover:popover2 src="http://localhost:3000/userHeader/default.jpg" alt>
    </el-col>
    <el-popover
      ref="popover2"
      placement="bottom"
      title=""
      width="40"
      trigger="click"
      content="">
      <el-button type="text" @click="goHome">退出登录</el-button>
    </el-popover>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: "Header",
  methods: {
    goHome() {
      axios
        .post("/users/canelToken", {
          userName: this.$store.state.loginName
        })
        .then(res => {
          let ress = res.data;
          if (ress.status === "0") {
            this.$store.commit("canelLogin", [false, ""]);
            this.$message.success("注销成功");
            this.$router.push("/");
          } else {
            this.$message.error("注销登录");
          }
        });
    }
  }
};
</script>

<style scoped>
.sf {
  background: linear-gradient(
    to right,
    rgb(0, 247, 255, 0.2),
    rgb(251, 255, 0, 0.4)
  );
}
.ddd {
  height:60px;
  line-height: 60px;
  color: brown;
  font-size: 15px;
}
.fff {
  text-align: right;
}
.logo {
  width: 140px;
  height: 60px;
}
.bg-purple-light {
  text-align: center;
  font-size: 20px;
}

.name {
  display: inline-block;
  width: 100px;
  height: 60px;
  text-align: right;
}

.head-pic {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
  z-index: 44;
}
</style>
