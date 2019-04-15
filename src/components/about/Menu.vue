<template>
  <div class="nav-menu">
    <div class="titles">
        <span>如果生活已让你不堪重负，我有一双翅膀，带你飞跃高墙，去到梦想的地方。</span>
        <span class="sss">---走咯团队宣</span>
    </div>
    <div class="box">
        <div class="text fd">
            <h4>企业文化</h4>
            <div class="details">
                我十分喜欢夏天的蓝空和云朵，蓝的和白的，
                交织在一起，有时还有调皮晚霞，把云朵烧红。
                每当仰望流云的时候，感觉自己的心扉也都全部敞开，
                那个瞬间情到深处是不会有任何情绪的，就像水纯净之后不会有味道的一般。
                我不止一次的想，天云应该就是一扇门，是看见自己心底的通道，
            </div>
        </div>
        <div class="pic ggg"><img src="./../../../static/image/us1.jpg" alt=""></div>
    </div>
    <div class="box">
        <div class="pic"><img src="./../../../static/image/us2.jpg" alt=""></div>
        <div class="text">
            <h4>运营模式</h4>
            <div class="details">
                回想小时候的种种童话故事，最后的结尾几乎都是
                “王子和公主快乐的生活在一起。”从小在这种熏陶下，
                的确容易让人觉得快乐至上，认为世界本该是快乐的。
                但随着年龄的增长，才能慢慢感受到悲欢离合的重要。因为悲，
                我们才能心痛，这意味着成长，也因为离，我们才能想念，这代表着深情，
                每一种情绪都会有它的价值，每一种情绪也都有属于它的味道，酸甜苦辣，苦也是一种美味。
            </div>
        </div>
    </div>
    <div class="box">
        <div class="text">
            <h4>加入我们</h4>
            <div class="details bbb">
                <p>如果你也热爱旅游</p>
                <p>并且享受帮助更多的人去放空自己的心灵</p>
                <p>来吧，加入我们，让我们携手创造更多美好</p>
                <p>24小时热线：<span>400-820-8820</span></p>
            </div>
        </div>
        <div class="pic aaa"><img src="./../../../static/image/us3.jpg" alt=""></div>
    </div>
    <div class="box">
        <div class="pic"><img src="./../../../static/image/us4.jpg" alt=""></div>
        <div class="text">
            <h4>了解更多</h4>
            <div class="details">
                秋意渐渐袭来了，恍若濒临初始的某一种感触一样地散漫而来。
                发散于一种感意，趋于身体遍布，渐次全方位被感触到这种秋凉的感受来。
                秋来了，树枯了，叶萎了，人意却持续了这一年里的努力辛苦。
                也只有在秋意纷飞的季段，人总是忙碌不庸的。着眼于像秋收一样的丰功伟绩，
                着实于现实中的可堪的经济效果，着助于生活点滴的美好不耐。</div>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Menu",
    data() {
      return {
        
      }
    },
    mounted() {
      
    },
    methods: {
      
    }
  }
</script>

<style scoped>

.nav-menu {
  width: 100%;
}
.titles{
    width: 80%;
    margin: 10px auto;
    height: 80px;
    font-size:20px;
    padding-top:20px;
    padding-left: 100px;
    background-color: rgba(134,205,249,.1);
    position: relative;
}
.sss{
    position: absolute;
    top: 60px;
    right: 100px;
}
.box{
    width: 80%;
    height: 450px;
    margin: 50px 10% 0 10%;
    background-color: rgba(134,205,249,.1);
}
.box .pic{
    width: 550px;
    padding: 10px;
    height: 100%;
    float: left;
    position: relative;
}
.box .pic>img{
  position: absolute;
  top: 10px;
  left: 10px;
    width: 600px;
    height:425px;
    transform: all 1s;
    z-index: 20;
}
.box .pic:hover img{
animation: identifier .8s linear alternate;
}
.box .text{
    width: 450px;
    height: 100%;
    float: left;
    position: relative;
    color: #8c8c8c;
    margin-top: 10px;
}
h4{
    position: absolute;
    top: 10px;
    left: 50%;
    margin-left: -20px;
    font-size: 25px;
    color: brown;
}
.details{
    position: absolute;
    top: 60px;
    left: 45px;
    font-size:20px;
    padding: 20px;
    width:430px;
}
.details>p>span{
    display: inline-block;
    color: deepskyblue;
}
.aaa {
  margin-left: 10px;
}
.ggg {
  margin-left: 50px;
}
.fd {
  margin-left: -45px;
}
.bbb {
  width: 430px;
  margin-left: -40px;
}

@keyframes identifier {
  0%{
    transform: rotateZ(120deg) scale(1.1,1.1);
  }
  25%{
    transform: rotateZ(240deg) scale(1.2,1.2);
  }
  50%{
    transform: rotateZ(360deg) scale(1.3,1.3);
  }
  75%{
    transform: rotateZ(480deg) scale(1.2,1.2);
  }
  100%{
    transform: rotateZ(600deg) scale(1.1,1.1);
  }
  
}
</style>
