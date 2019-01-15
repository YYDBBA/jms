<template>
  <div class="hello">
    <table class="tb">
      <tr>
        <th>id</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>评论id</th>
        <th>评论名字</th>
        <th>点赞</th>
        <th>low</th>
        <th class="con">管理</th>
      </tr>
      <tr v-for="(item,index) in userList" :key="index">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.sendId}}</td>
        <td>{{item.sendName}}</td>
        <td>{{item.sendTop}}</td>
        <td>{{item.sendBottom}}</td>
        <td class="con">
          <button class="btn">详情</button>
          <button class="btn" @click="isTipChange(item)">编辑</button>
          <button class="btn" @click="delUser(item)">删除</button>
        </td>
      </tr>
    </table>
    <button class="btn btn-add" @click="isTipAdd">增加</button>
    <!--提示信息模态框-->
    <div class="motal" v-show="isAdd" ref="motal1">
        id:<input type="text" name="id" ref="addId">
        <br>
        姓名:<input type="text" name="name" ref="addName">
        <br>
        年龄:<input type="text" name="age" ref="addAge">
        <br>
        评论id:<input type="text" name="sendId" ref="addSendId">
        <br>
        评论名字:<input type="text" name="sendName" ref="addSendName">
        <br>
        点赞:<input type="text" name="sendTop" ref="addSendTop">
        <br>
        low:<input type="text" name="sendBottom" ref="addSendBottom">
        <br>
        <input type="button" value="提交" @click="addUser">
    </div>
    <div class="motal" v-show="isChange" ref="motal2">
      id:<input type="text" name="id" ref="id" disabled>
      <br>
      姓名:<input type="text" name="name" ref="name">
      <br>
      年龄:<input type="text" name="age" ref="age">
      <br>
      评论id:<input type="text" name="sendId" ref="sendId">
      <br>
      评论名字:<input type="text" name="sendName" ref="sendName">
      <br>
      点赞:<input type="text" name="sendTop" ref="sendTop">
      <br>
      low:<input type="text" name="sendBottom" ref="sendBottom">
      <br>
      <input type="button" value="确认修改" @click="changeUser">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      userList:[],
      isChange:false,
      isAdd:false
    }
  },
  mounted(){
    this.getUserInfo()
  },
  methods:{
    //实时更新列表的数据
    getUserInfo(){
      axios.get('/users').then((response)=>{
        let res = response.data;
        this.userList = res.result.list;
        if(res.status == 0){
          // console.log("成功");
        }else{
          // console.log("失败");
        }
      })
    },
    //添加一个用户信息
    addUser(){
      let params = {
        id:this.$refs.addId.value,
        name:this.$refs.addName.value,
        age:this.$refs.addAge.value,
        sendId:this.$refs.addSendId.value,
        sendName:this.$refs.addSendName.value,
        sendTop:this.$refs.addSendTop.value,
        sendBottom:this.$refs.addSendBottom.value
      };
      axios.post('/users/addUser',params).then((response)=>{
        let res1 = response.data;
        if(res1.status == 0){
          //返回0，添加成功，重新渲染数据
          this.getUserInfo();
          this.isAdd = false;
        }else{
          // console.log(222);
        }
      })
    },
    //删除一个用户信息
    delUser(item){
      axios.post('/users/delUser',{
        id:item.id
      }).then((response)=>{
        let res2 = response.data;
        if(res2.status == 0){
          //返回0，删除成功，重新渲染数据
          this.getUserInfo();
          console.log("成功");
        }else{
          // console.log(222);
        }
      })
    },
    //修改一个用户信息
    changeUser(){
      let params = {
        changeId:this.$refs.id.value,
        changeName:this.$refs.name.value,
        changeAge:this.$refs.age.value,
        changeSendId:this.$refs.sendId.value,
        changeSendName:this.$refs.sendName.value,
        changeSendTop:this.$refs.sendTop.value,
        changeSendBottom:this.$refs.sendBottom.value
      };
      //判断信息是否修改
        axios.post('/users/changeUser',params).then((response)=>{
          let res3 = response.data;
          if(res3.status == '0'){
            //返回0，修改成功，重新渲染数据
            console.log("修改成功");
            this.getUserInfo();
            this.isChange = false;
          }else{
            console.log("没有修改信息");
          }
        });
    },
    isTipAdd(){
      this.isAdd = true;
      if(this.isChange === true){
        this.isChange = false;
      }
      this.isChange = false;
    },
    isTipChange(item){
      this.isChange = true;
      if(this.isAdd === true){
        this.isAdd = false;
      }
      this.isAdd = false;
      this.$refs.id.value=item.id;
      this.$refs.name.value=item.name;
      this.$refs.age.value=item.age;
      this.$refs.sendId.value=item.sendId;
      this.$refs.sendName.value=item.sendName;
      this.$refs.sendTop.value=item.sendTop;
      this.$refs.sendBottom.value=item.sendBottom;
    }
  }
}
</script>

<style scoped>
  html,body{
    text-align: center;
  }
  .hello{
    width: auto;
    text-align: center;
  }
  .tb{
    border: 1px solid black;
    margin: 50px auto;
    overflow: hidden;
    box-sizing: border-box;
    background-color: black;
  }
  th,td{
    width: 100px;
    height: 20px;
    text-align: center;
    border: 1px solid darkgray;
    background-color: white;
  }
  .btn{
    width: 40px;
    height: 20px;
    border-radius: 4px;
    border: 0;
    background-color: dodgerblue;
    color: white;
  }
  .con{
    width: 200px;
  }
</style>
