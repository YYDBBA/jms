<template>
  <div>
    <h3 class="title">为您推荐</h3>
    <div class="recommend">
      <ul class="recommend-content">
        <li class="item" v-for="(item,index) of forYouList" :key="index">
          <img class="pic" :src="'./../../../static/image/'+item.forYouImg" alt="">
          <div class="panel">
            <i class="love">❥</i>
            <span class="des">{{item.forYouCount}}人想去这里</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props:{
      forYouList: Array
    }
  }
</script>

<style scoped>
  .recommend {
    width: 100%;
    min-height: 684px;
    position: relative;
  }

  .recommend-content {
    width: 86%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }

  .item {
    width: 283px;
    height: 160px;
    background-color: green;
    float: left;
    margin-left: 11px;
    position: relative;
    margin-bottom: 11px;
  }

  .pic {
    width: 283px;
    height: 160px;
  }

  .panel {
    width: 283px;
    height: 160px;
    background-color: rgba(255, 255, 255, .3);
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  .love {
    position: absolute;
    left: 2px;
    bottom: 2px;
    z-index: 2;
    color: #fff;
  }

  .des {
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 2;
    color: #fff;
  }

  .item:hover .panel {
    display: block;
  }
</style>
