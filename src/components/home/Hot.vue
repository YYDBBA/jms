<template>
  <div>
    <h3 class="title">热门景点</h3>
    <div class="hot">
      <ul class="hot-content">
        <li class="hot-item" v-for="(item,index) of hotList" :key="index">
          <router-link to="/detail">
            <span class="hot-btn">点击了解</span>
          </router-link>
          <span class="hot-count">{{item.hotCount}}人去过</span>
          <img class="hot-pic" :src="'./../../../static/image/'+item.hotImg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Hot",
    props: {
      hotList: Array
    }
  }
</script>

<style scoped>
  .hot {
    width: 100%;
    height: 150px;
    position: relative;
  }

  .hot-content {
    width: 960px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media only screen and (max-width: 960px) {
    .hot-content {
      width: 720px;
    }
  }

  @media only screen and (max-width: 720px) {
    .hot-content {
      width: 480px;
    }
  }

  @media only screen and (max-width: 480px) {
    .hot-content {
      width: 240px;
    }
  }

  .hot-item {
    position: relative;
    float: left;
    width: 240px;
    height: 150px;
    overflow: hidden;
  }

  .hot-btn {
    position: absolute;
    top: 5px;
    left: 5px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    z-index: 2;
  }

  .hot-count {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: yellow;
    font-size: 16px;
    z-index: 2;
  }

  .hot-pic {
    width: 240px;
    height: 150px;
    transition: all 0.3s;
  }

  .hot-item:hover .hot-pic {
    transform: scale(1.3);
  }
</style>
