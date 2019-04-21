<template>
  <el-row class="sf">
    <el-col :span="4" class="grid-content bg-purple ddd fff">
      <img class="logo" src="./../../../static/image/logotwo.png" alt>
    </el-col>
    <el-col :span="16" class="grid-content bg-purple-light ddd">
      <h3>走咯旅游服务网站系统后台</h3>
    </el-col>
    <el-col :span="4" class="grid-content bg-purple ddd">
      <span class="name">YUYU</span>
      <img class="head-pic" src alt @click="goHome">
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goHome() {
      this.$router.push("/");
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
  color: #fff;
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
  z-index: 44;
}
</style>
