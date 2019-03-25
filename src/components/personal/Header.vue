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
      <img class="user-head" :src="'http://localhost:3000/userHeader/'+userHead" alt="" @click="centerDialogVisible = true">
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <span slot="footer" class="dialog-footer">
          <el-button icon="el-icon-search">查看大图</el-button>
        <el-button icon="el-icon-upload el-icon--right" @click="goHeadWall">上传头像</el-button>
        </span>
      </el-dialog>
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
        centerDialogVisible: false,
        userName: '',
        userHead:''
      }
    },
    mounted() {
      this.userName = this.$store.state.loginName;
      axios.get('http://localhost:3000/users/getHeadWall', {
        params: {
          userName: this.userName,
        }
      }).then((response) => {
        let res = response.data;
        if (res.status === '0') {
          this.headList = res.result.uploadHeadList.sort((a,b)=>{
            return a>b ? 1 : -1});
          this.userHead = this.headList[0].name || '';
        } else {
          console.log(222);
        }
      })
    },
    methods: {
      handleClose(done) {
        done();
      },
      goHeadWall(){
        this.$router.push('/headpic');
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
    background-color: #fff;
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

  .bgi {
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
    background-color: lightblue;
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
