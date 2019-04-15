<template>
  <div>
    <!--头部样式-->
    <nav-header></nav-header>
    <div class="communiTitle animated fadeInDown faster">
      <h3 class="content">社区论坛</h3>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import NavHeader from './Headers'

  export default {
    name: "Header",
    components:{
          NavHeader
        },
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
    background-color: lightblue;
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
    background-color: lightblue;
  }

  .content {
    padding-left: 10px;
    line-height: 70px;
    font-size: 25px;
    box-sizing: border-box;
  }
</style>
