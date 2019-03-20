<template>
  <div>
    <el-upload
      list-type="picture-card"
      class="avatar-uploader"
      action="http://localhost:3000/users/uploadPic"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      >
      <i class="el-icon-plus"></i>
    </el-upload>
    <ul v-for="(item,index) of picUrlList" :key="index">
      <li class="pics"><img v-lazy="'http://localhost:3000/avatar/'+ item.name" class="pic"></li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Upload",
    data() {
      return {
        imageUrl:''
      };
    },
    props:{
      picUrlList:Array
    },
    methods: {
      handleAvatarSuccess (res, file) {
        if (res.status === '0') {
          this.imageUrl = 'http://localhost:3000/avatar/' + res.result.data;
          axios.post('http://localhost:3000/users/addPicInfo',{
            picInfo:res.result.data,
            userName:this.$store.state.loginName
          }).then((response)=>{
            let res = response.data;
            if(res.status === '0'){
              this.$message.success("图片上传成功！");
              this.getUserInfo();
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
.pic {
  width: 100px;
  height: 100px;
}
  .pics {
    float: left;
  }
</style>
