<template>
  <div>
    <h3 class="title">为您推荐</h3>
    <div class="recommend">
      <ul class="recommend-content">
        <li class="item">
          <img class="pic" src="./../../../static/hot1.jpg" alt="">
          <div class="panel">
            <i class="love">❥</i>
            <span class="des">5万人想去这里</span>
          </div>
        </li>
        <li class="item">
          <img class="pic" src="./../../../static/hot1.jpg" alt="">
          <div class="panel">
            <i class="love">❥</i>
            <span class="des">5万人想去这里</span>
          </div>
        </li>
        <li class="item">
          <img class="pic" src="./../../../static/hot1.jpg" alt="">
          <div class="panel">
            <i class="love">❥</i>
            <span class="des">5万人想去这里</span>
          </div>
        </li>
        <li class="item">
          <img class="pic" src="./../../../static/hot1.jpg" alt="">
          <div class="panel">
            <i class="love">❥</i>
            <span class="des">5万人想去这里</span>
          </div>
        </li>
        <li class="item">
          <img class="pic" src="./../../../static/hot1.jpg" alt="">
          <div class="panel">
            <i class="love">❥</i>
            <span class="des">5万人想去这里</span>
          </div>
        </li>
        <li class="item">
          <img class="pic" src="./../../../static/hot1.jpg" alt="">
          <div class="panel">
            <i class="love">❥</i>
            <span class="des">5万人想去这里</span>
          </div>
        </li>
        <li class="item">
          <img class="pic" src="./../../../static/hot1.jpg" alt="">
          <div class="panel">
            <i class="love">❥</i>
            <span class="des">5万人想去这里</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend"
  }
</script>

<style scoped>
  .title {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 20px;
    text-align: center;
    position: relative;
  }

  .title::before, .title::after {
    width: 40%;
    border-bottom: 1px solid darkgray;
    content: '';
  }

  .title::before {
    position: absolute;
    top: 49px;
    left: 5%;
  }

  .title::after {
    position: absolute;
    top: 49px;
    right: 5%;
  }

  .recommend {
    width: 100%;
    height: auto;
    position: relative;
  }

  .recommend-content {
    width: 86%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    background-color: yellow;
  }

  .item {
    width: 283px;
    height: 160px;
    background-color: green;
    float: left;
    margin-left: 11px;
    position: relative;
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
