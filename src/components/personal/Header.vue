<template>
  <div>
    <!--头部样式-->
    <el-row class="nav-menu">
      <el-col :span="6">
        <div class="grid-content text-mute logo">我是logo</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content text-mute menu-father">
          <el-menu default-active="1" class="el-menu-demo delBorder" mode="horizontal">
            <el-menu-item index="1" class="menu">个人主页</el-menu-item>
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
    <div class="bgi">
      <img class="user-head" src="" alt="">
      <span class="hello">晚上好，{{userName}}</span>
    </div>
    <div class="communiTitle">
      <h3 class="content">{{userName}}的个人主页</h3>
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
    created(){
      this.userName = this.$store.state.loginName;
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
    background-color: #e6e9ec;
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

  .bgi{
    width: 100%;
    height: 600px;
    background-image: url(./../../../static/image/bg3.jpg);
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
    top: 45%;
    left: 50%;
    width: 200px;
    height: 50px;
    line-height: 50px;
    margin-left: -100px;
    font-size: 20px;
    text-align: center;
  }

  .communiTitle {
    background-color: #e6e9ec;
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
