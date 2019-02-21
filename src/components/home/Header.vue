<template>
  <div>
    <!--头部样式-->
    <el-row>
      <el-col :span="6">
        <div class="grid-content text-mute border-rightbottom">
          <i class="iconfont">&#xe609;</i>
          <span class="common-go">
            关注微信号
            <img class="common" src="./../../assets/styles/weixin.jpg" alt="">
          </span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content text-mute border-rightbottom">800-820-8820（服务时间：8:00-20:00）</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content text-mute border-rightbottom">设为首页</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content text-mute border-bottom">
          <span>用户名</span>
          <el-button type="primary" size="mini" plain @click="dialogVisible = true">登录</el-button>
          <el-button type="primary" size="mini" plain @click="dialogVisible = true">注册</el-button>
          <el-dialog
            title="欢迎加入我们"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>
              <el-input size="small" v-model="userName">
                <template slot="prepend">用户名</template>
              </el-input>
              <el-input size="small" type="password" v-model="userPwd">
                <template slot="prepend">密码</template>
              </el-input>
            </span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="loginCheck">登录</el-button>
            <el-button type="primary" @click="registerCheck">注册</el-button>
            </span>
          </el-dialog>
        </div>
      </el-col>
    </el-row>
    <el-row class="nav-menu">
      <el-col :span="6">
        <div class="grid-content text-mute logo">我是logo</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content text-mute menu-father">
          <el-menu default-active="1" class="el-menu-demo delBorder" mode="horizontal">
            <el-menu-item index="1" class="menu">旅行主页</el-menu-item>
            <el-menu-item index="2" class="menu" @click="goCommuni">社区论坛</el-menu-item>
            <el-menu-item index="3" class="menu">海量美图</el-menu-item>
            <el-menu-item index="4" class="menu">关于我们</el-menu-item>
            <el-menu-item index="5" class="menu">更多>></el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content text-mute personal">
          <a href="">个人主页</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Header",
    data() {
      return {
        dialogVisible: false,
        userName: '',
        userPwd: ''
      }
    },
    methods: {
      handleClose(done) {
        done();
      },
      loginCheck() {
      },
      registerCheck() {
        let userName = this.userName;
        let userPwd = this.userPwd;
        //todo something
        let params = {
          userName: userName,
          userPwd: userPwd
        };
        axios.post('/users/checkRegister', params).then((response) => {
          let res1 = response.data;
          if (res1.status === "0") {
            //返回0，校验成功
            if (res1.msg === '该用户不存在') {
              this.addUser(params);
            } else {
              console.log(res1.msg);
            }
          } else {
            console.log('校验失败');
          }
        })
      },
      addUser(params) {
        axios.post('/users/addRegister', params).then((response) => {
          let res2 = response.data;
          if (res2.status === "0") {
            //返回0，添加成功
            //todo something
            console.log("注册成功!");
            this.dialogVisible = false;
          } else {
            console.log("注册失败");
          }
        })
      },
      //路由跳转
      goCommuni() {
        this.$router.push('/communication');
      }
    }
  }
</script>

<style scoped>
  @media only screen and (max-width: 900px) {
    .text-mute {
      font-size: 8px;
      color: #303133;
    }
  }

  .grid-content {
    min-height: 40px;
    text-align: center;
    line-height: 40px;
    box-sizing: border-box;
  }

  .common-go {
    position: relative;
    cursor: pointer;
  }

  .common {
    position: absolute;
    top: 15px;
    left: 0;
    width: 86px;
    height: 86px;
    display: none;
    z-index: 99;
  }

  .common-go:hover .common {
    display: block;
  }

  .logo {
    float: right;
    line-height: 60px;
  }

  .menu-father {
    margin-left: 50px;
  }

  .delBorder {
    border: none;
  }

  .personal {
    line-height: 60px;
  }
  
  /*.menu {*/
    /*position: relative;*/
  /*}*/
  /*.communication {*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*width: 100px;*/
    /*height: 40px;*/
    /*background-color: red;*/
  /*}*/
</style>
