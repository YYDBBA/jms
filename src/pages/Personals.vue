<template>
  <div>
    <div class="some animated flipInX">
      <router-link to="/">
        <span class="el-icon-back back">返回</span>
      </router-link>
      <div class="name">
        <img class="logo" src="./../../static/image/logotwo.png" alt>
        走咯旅游服务网站
      </div>
    </div>
    <div class="content">
        <img class="head" :src="'http://localhost:3000/userHeader/'+head" alt>
        <span class="names">{{name}}</span>
        <span class="action">
          <el-button @click="addFriend">加好友</el-button>
          <el-button @click="addCare">加关注</el-button>
        </span>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Personals",
  data() {
    return {
      name:'',
      head:'',
      careList:[],
      flag:false
    };
  },
  mounted() {
    this.name = this.$route.params.name;
    this.getHead();
    this.getMy();
  },
  methods: {
    getHead() {
    axios
      .get("http://localhost:3000/users/getHeadWall", {
        params: {
          userName: this.name
        }
      })
      .then(response => {
        let res = response.data;
        if (res.status === "0") {
          let headList = res.result.uploadHeadList.sort((a, b) => {
            return a > b ? 1 : -1;
          }) || [];
          this.head = headList[0].name || "";
        } else {
          console.log(222);
        }
      });
    },
    getMy(){
      let a = this.$store.state.loginName;
      axios
      .get("http://localhost:3000/users/getPersonalInfo", {
        params: {
          userName: a
        }
      })
      .then(response => {
        let res = response.data;
        if (res.status === "0") {
          this.careList = res.result.userCareList;
        } else {
          console.log(222);
        }
      });
    },
    addCare() {
      let a = this.$store.state.loginName;
      let b = this.$store.state.checkLogin;
      if(b === 'true'){
        let list = this.careList;
        for(let i in list){
          if(list[i].userName.indexOf(this.name)!=-1){
            console.log(list[i]);
            this.flag = true;
          }else{
            console.log(111);
          }
        }
        if(this.flag){
          this.$message.warning('您已关注该用户！');
        }else{
          axios.post('http://localhost:3000/users/addCare',{
              userName:a,
              careName:this.name
            }).then(response=>{
              let res = response.data;
              if(res.status === '0'){
              this.$message.success('恭喜添加关注成功！');
              }
            })
        }
      }else{
        this.$message.error('请先登录！');
        this.$router.push('/');
      }
    },
    addFriend(){
      let a = this.$store.state.loginName;
      let b = this.$store.state.checkLogin;
      if(b === 'true'){
        //socket.io发送请求，保存请求状态
      //添加对象处理过后返回处理结果，同意则存入数据库
        axios.post('http://localhost:3000/users/addFriend',{
          userName:a,
          name:this.name
        }).then(response=>{
          let res = response.data;
          if(res.status === '0'){
            this.$message.success('请求发送成功！');
          }
        })
      }else{
        this.$message.error('请先登录！');
        this.$router.push('/');
      }
    }
  }
};
</script>

<style scoped>
.some {
  position: relative;
  width: 100%;
  height: 60px;
  background: linear-gradient(
    to right,
    rgb(0, 247, 255, 0.2),
    rgb(251, 255, 0, 0.4)
  );
}

.name {
  position: absolute;
  top: 0;
  left: 34%;
  color: #fff;
  font-size: 25px;
  line-height: 60px;
}
.logo {
  width: 140px;
  height: 60px;
}

.back {
  font-size: 20px;
  color: #fff;
  line-height: 60px;
  margin-left: 10px;
}
.content {
  position:relative;
  width:80%;
  height:480px;
  margin: 20px 10% 0 10%;
  background: rgba(41, 168, 200, 0.5);
}
.head {
  position:absolute;
  top: 20%;
  left: 50%;
  width: 100px;
  height:100px;
  border-radius:50%;
  transform:translate(-50%,-50%);
}
.names{
  position:absolute;
  top: 35%;
  left: 50%;
  width: 100px;
  height:30px;
  line-height:30px;
  text-align:center;
  font-size:20px;
  transform:translate(-50%,-50%);
}
.action{
   position:absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height:40px;
  text-align:center;
  transform:translate(-50%,-50%);
}
</style>
