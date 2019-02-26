<template>
  <div class="all">
    <div class="tips">
      <el-container class="tip">
        <el-aside class="aside">
          <img class="pic" src="./../../../static/image/bg2.jpg" alt="">
        </el-aside>
        <el-container>
          <el-header class="header">长沙：看橘子洲头</el-header>
          <el-main class="main">
            <p class="small">多少人去过：1444</p>
            <p class="small">多少人想去：5678</p>
            <p class="small">地理位置：湖南省长沙市</p>
            <p class="big-small">简介：</p>
            <p class="big">长沙是首批国家历史文化名城，历经三千年城的名、城址是不变，享有“屈贾之乡”、“楚汉名城”、“潇湘洙泗”之称。存有马王堆汉墓、四羊说方尊、三国的吴简、岳麓山书院、铜官窑等历史遗迹。凝练出“经世致用、兼收并蓄”的湖湘文化。长沙既是清末维新运动和旧民主主义革命策源地之一，又是新民主主义的发祥地之一。走出了黄兴、蔡锷，孕育了毛泽东、刘少奇等名人。</p>
          </el-main>
          <el-footer class="footer">
            <span>2345</span>
            <el-button>❤</el-button>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Content"
  }
</script>

<style scoped>
  .all {
    width: 100%;
    height: 100%;
  }

  .tips {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 60%;
    transform: translate(-50%, -60%);
  }

  .tip {
    width: 100%;
    height: 100%;
  }

  .aside {
    width: 70% !important;
  }

  .pic {
    width: 100%;
    height: 100%;
  }

  .header, .footer {
    line-height: 60px;
    text-align: center;
    font-size: 15px;
  }

  .main {
    font-size: 12px;
  }

  .small {
    width: 100%;
    height: 50px;
  }

  .big {
    text-indent: 2em;
    width: 100%;
    height: 100px;
    line-height: 15px;
  }
</style>
