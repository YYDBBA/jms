<template>
  <div>
    <el-upload
      list-type="text"
      action="http://localhost:3000/users/uploadPic"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
    >
       <el-button class="upload-head">上传图片</el-button>
    </el-upload>
    <ul v-for="(item,index) of picUrlList" :key="index" class="dd">
      <li class="pics">
        <img v-lazy="'http://localhost:3000/avatar/'+ item.name" class="pic">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Upload",
  data() {
    return {
      imageUrl: "",
      picUrlList: []
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    handleAvatarSuccess(res, file) {
      if (res.status === "0") {
        this.imageUrl = "http://localhost:3000/avatar/" + res.result.data;
        axios
          .post("http://localhost:3000/users/addPicInfo", {
            picInfo: res.result.data,
            userName: this.$store.state.loginName
          })
          .then(response => {
            let res = response.data;
            if (res.status === "0") {
              this.$message.success("图片上传成功！");
              this.getUserInfo();
            } else {
              console.log(res.msg);
            }
          });
      } else {
        this.$message.error("图片上传失败！" + res.msg);
      }
    },
    getUserInfo() {
      let userName = this.$store.state.loginName;
      axios
        .get("http://localhost:3000/users/getPersonalInfo", {
          params: {
            userName: userName
          }
        })
        .then(response => {
          let res1 = response.data;
          if (res1.status === "0") {
            //成功
            this.picUrlList = res1.result.uploadPicList;
          } else {
            //失败
            console.log(222);
          }
        });
    }
  }
};
</script>

<style scoped>
.dd {
  margin-top: 20px;
}
.pic {
  width: 100px;
  height: 100px;
}
.pics {
  float: left;
}
</style>
