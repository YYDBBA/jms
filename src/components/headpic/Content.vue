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
        <li class="item"  v-for="(item,index) of headList" :key="index">
          <img class="head-pic" :src="'http://localhost:3000/userHeader/'+item.name" alt="">
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
        nowHead:''
      }
    },
    mounted() {
      this.getHeadPic();
    },
    methods: {
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
            this.nowHead = this.headList[0].name;
          } else {
            console.log(222);
          }
        })
      },
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
    height: 593px;
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
    width: 12.5%;
    height: 100px;
    float: left;
    padding: 5px;
    box-sizing: border-box;
  }

  .head-pic {
    width: 90px;
    height: 90px;
    background-color: yellow;
  }
  
  .head,.head-wall,.now-head {
    float: left;
  }
</style>
