<template>
  <div>
    <!--头部样式-->
    <el-row class="nav-menu">
      <el-col :span="6">
        <div class="grid-content text-mute logo">我是logo</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content text-mute menu-father">
          <el-menu default-active="2" class="el-menu-demo delBorder" mode="horizontal">
            <el-menu-item index="1" class="menu" @click="goPersonal">个人主页</el-menu-item>
            <el-menu-item index="2" class="menu">社区论坛</el-menu-item>
            <el-menu-item index="3" class="menu">海量美图</el-menu-item>
            <el-menu-item index="4" class="menu">关于我们</el-menu-item>
            <el-menu-item index="5" class="menu">更多>></el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content text-mute personal">
          <router-link to="/">返回主页</router-link>
        </div>
      </el-col>
    </el-row>
    <div class="communiTitle">
      <h3 class="content">社区论坛</h3>
    </div>
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
      goPersonal() {
        this.$router.push('/personal');
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

  .nav-menu {
    background-color: #0fcbb8;
  }

  .grid-content {
    min-height: 40px;
    text-align: center;
    line-height: 40px;
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

  /*标题*/

  .communiTitle {
    width: 70%;
    height: 80px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: #0fcbb8;
  }

  .content {
    padding-left: 10px;
    line-height: 70px;
    font-size: 25px;
    box-sizing: border-box;
  }
</style>
