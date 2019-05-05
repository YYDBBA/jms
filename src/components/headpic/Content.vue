<template>
  <div class="all">
    <div class="now-head border-right">
      <div class="now-head-pic">
        <img class="head-pic radio" :src="'http://localhost:3000/userHeader/'+nowHead" alt="">
        <br>
        <el-upload
          list-type="text"
          class=""
          action="http://localhost:3000/users/uploadHead"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <el-button class="upload-head">上传头像</el-button>
        </el-upload>
      </div>
    </div>
    <div class="head">历史头像墙</div>
    <div class="head-wall">
      <ul class="item-list">
        <li class="item animated" v-for="(item,index) of headList" :key="index">
          <img class="head-pic" :src="'http://localhost:3000/userHeader/'+item.name" alt="">
          <div class="panel">
            <span class="el-icon-zoom-in op" @click="setHead(item,index)">设为头像</span>
            <span class="el-icon-delete op" @click="delHead(item)">删除</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Content",
    data() {
      return {
        userName:'',
        headList:[],
        nowHead:'',
        timer:''
      }
    },
    mounted() {
      this.getHeadPic();
       // this.timer = setInterval(()=>{
         // console.log(111);
       // },1000);
    },
    methods: {
      //拿到头像墙
      getHeadPic() {
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
            this.nowHead = this.headList[0].name || '';
          } else {
            console.log(222);
          }
        })
      },
      //头像上传
      handleAvatarSuccess (res, file) {
        if (res.status === '0') {
          axios.post('http://localhost:3000/users/addHeadInfo',{
            picInfo:res.result.data,
            userName:this.$store.state.loginName
          }).then((response)=>{
            let res = response.data;
            if(res.status === '0'){
              this.$message.success("图片上传成功！");
              this.getHeadPic();
            }else{
              console.log(res.msg);
            }
          })
        } else {
          this.$message.error("图片上传失败！"+res.msg)
        }
      },
      //设置头像
      setHead(item,index) {
        let setName = item.name;
        let userName = this.$store.state.loginName;

        if(index <= 0){
          this.$message.warning('此为当前头像！');
        }else{
          axios.post('http://localhost:3000/users/setHead',{
            name:setName,
            userName:userName
          }).then((response)=>{
            let res = response.data;
            if(res.status === '0'){
              this.$message.success('设置成功！');
              this.getHeadPic();
            }else {
              this.$message.error('设置失败！遇到未知错误');
            }
          })
        }
      },
      //删除头像
      delHead(item) {
        let picName = item.name;
        let userName = this.$store.state.loginName;

        if(this.headList.length<= 1){
          this.$message.warning('当前头像数量为1，不可删除！');
        }else {
          axios.post('http://localhost:3000/users/delHead',{
            name:picName,
            userName:userName
          }).then((response)=>{
            let res = response.data;
            if(res.status === '0'){
              this.$message.success('删除成功！');
              this.getHeadPic();
            }else {
              this.$message.error('删除失败！遇到未知错误');
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .all {
    width: 100%;
    height: 100%;
  }

  .head {
    width: 80%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: lightblue;
  }

  .now-head {
    width: 20%;
    height: 495px;
    background: linear-gradient(
    to bottom,
    rgb(0, 247, 255, 0.2),
    rgb(251, 255, 0, 0.4)
  );
  }

  .now-head-pic {
    width: 100%;
    height: 40%;
    margin: 0 auto;
    text-align: center;
    padding-top: 20px;
    box-sizing: border-box;
  }

  .upload-head {
    margin-top: 20px;
  }

  .radio {
    border-radius: 50%;
  }

  .head-wall {
    width: 80%;
    height: 533px;
  }

  .item-list {
    margin: 0 auto;
    margin-top: 30px;
    width: 800px;
    height: 400px;
  }

  .item {
    position: relative;
    width: 12.5%;
    height: 100px;
    float: left;
    padding: 5px;
    box-sizing: border-box;
  }

  .head-pic {
    width: 90px;
    height: 90px;
  }

  .panel {
    display: none;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 90%;
    height: 90%;
    font-size: 15px;
    color: #ffffff;
    text-align: center;
    padding-top: 20px;
    box-sizing: border-box;
    background-color: rgba(10,10,10,.5);
  }

  .op {
    cursor: pointer;
    margin-top: 10px;
  }

  .item:hover .panel {
    display: block;
  }
  .head,.head-wall,.now-head {
    float: left;
  }
</style>
