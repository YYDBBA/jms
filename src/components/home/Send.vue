<template>
  <div class="footer-content">
    <h3 class="title">给我们留言</h3>
    <div class="footer">
      <el-row>
        <el-col :span="6">
          <div class="grid-content">
            <ul>
              <li class="tip brown">酒店</li>
              <li class="tip white">卓克基土司官寨附近的酒店预订</li>
              <li class="tip white">九寨沟甲蕃古城附近的酒店预订</li>
              <li class="tip white">九寨千古情附近的酒店预订</li>
              <li class="tip white">卡龙沟自然风景区附近的酒店预订</li>
              <li class="tip white">四姑娘山附近的酒店预订</li>
              <li class="tip white">九寨黄龙机场附近的酒店预订</li>
              <li class="tip white">五花海附近的酒</li>
              <li class="tip white">九寨沟口旅游客</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <ul>
              <li class="tip brown">酒店</li>
              <li class="tip white">卓克基土司官寨附近的酒店预订</li>
              <li class="tip white">九寨沟甲蕃古城附近的酒店预订</li>
              <li class="tip white">九寨千古情附近的酒店预订</li>
              <li class="tip white">卡龙沟自然风景区附近的酒店预订</li>
              <li class="tip white">四姑娘山附近的酒店预订</li>
              <li class="tip white">九寨黄龙机场附近的酒店预订</li>
              <li class="tip white">五花海附近的酒</li>
              <li class="tip white">九寨沟口旅游客</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <ul>
              <li class="tip brown">酒店</li>
              <li class="tip white">卓克基土司官寨附近的酒店预订</li>
              <li class="tip white">九寨沟甲蕃古城附近的酒店预订</li>
              <li class="tip white">九寨千古情附近的酒店预订</li>
              <li class="tip white">卡龙沟自然风景区附近的酒店预订</li>
              <li class="tip white">四姑娘山附近的酒店预订</li>
              <li class="tip white">九寨黄龙机场附近的酒店预订</li>
              <li class="tip white">五花海附近的酒</li>
              <li class="tip white">九寨沟口旅游客</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="send">
            <el-input class="text" placeholder="用户名"></el-input>
            <el-input class="text" type="password" placeholder="密码"></el-input>
            <textarea name="" class="send-content"></textarea>
            <el-button class="btn">发送</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Send"
  }
</script>

<style scoped>
  .footer-content{
    width: 100%;
    height: 360px;
  }
  .footer {
    background-color: lightblue;
    padding: 30px 40px 0 40px;
  }
  .tip{
    width: 200px;
    height: 30px;
    font-size: 12px;
    cursor: pointer;
  }
  .brown{
    font-size: 14px;
    color: brown;
  }
  .white{
    color: #fff;
  }
  .send {
    position: relative;
  }
  .send-content{
    width: 220px;
    height: 100px;
    resize: none;
    border-radius: 3px;
  }
  .text {
    margin-bottom: 10px;
  }
  .btn{
    position: absolute;
    bottom: 0;
    right: 5px;
  }
</style>
