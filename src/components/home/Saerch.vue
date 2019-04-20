<template>
  <div class="bg-search animated bounceInRight">
    <img class="back" src="./../../../static/image/bg1.jpg" alt>
    <div class="search">
      <el-input
        id="input"
        placeholder="请输入内容"
        v-model="input"
        class="input-with-select"
        @focus="sss"
        @blur="cancel"
      >
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="城市" value="1"></el-option>
          <el-option label="用户" value="2"></el-option>
        </el-select>
      </el-input>
    </div>
    <transition name="el-zoom-in-top">
      <ul class="search-file" id="search" v-show="search">
        <li class="item border-bottom no-data" v-if="isCity">
          <i class="el-icon-warning"></i>
          暂无数据
        </li>
        <li class="item border-bottom" @click="go" v-for="item of list" :key="item.id">{{item.name ||item.userName}}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Saerch",
  data() {
    return {
      input: "",
      search: false,
      city: [],
      user: [],
      isCity: true,
      select: ""
    };
  },
  watch: {
    input() {
      if (this.input === "") {
        this.isCity = true;
      }
    }
  },
  computed: {
    list() {
      if (this.select === "1") {
        if (this.input === "") {
          return;
        }
        let arr = [];
        for (let i = 0; i < this.city.length; i++) {
          if (
            this.city[i].name.indexOf(this.input) != -1 ||
            this.city[i].spell.indexOf(this.input) != -1
          ) {
            arr.push(this.city[i]);
          }
        }
        if (arr !== []) {
          this.isCity = false;
        } else {
          this.isCity = true;
        }
        return arr;
      } else if(this.select === '2') {
        if (this.input === "") {
          return;
        }
        let add = [];
        for (let i = 0; i < this.user.length; i++) {
          if (this.user[i].userName.indexOf(this.input) != -1) {
            add.push(this.user[i]);
          }
        }
        if (add !== []) {
          this.isCity = false;
        } else {
          this.isCity = true;
        }
        return add;
      }else{
        return
      }
    }
  },
  methods: {
    sss() {
      this.search = true;
      if (this.select === "1") {
        axios.get("http://localhost:3000/city").then(response => {
          let res = response.data;
          if (res.status === "0") {
            this.city = res.result.cities;
          } else {
            console.log("222");
          }
        });
      } else if (this.select === "2") {
        axios.get("http://localhost:3000/users").then(response => {
          let res = response.data;
          if (res.status === "0") {
            this.user = res.result.list;
            console.log(res.result.list);
          } else {
            console.log("222");
          }
        });
      } else {
        return;
      }
    },
    cancel() {
      let a = document.getElementById("search");
      let b = document.getElementById("input");
      window.addEventListener("click", e => {
        e.preventDefault;
        if (e.target === a || e.target === b) {
        } else {
          this.search = false;
          this.isCity = true;
        }
      });
    },
    go() {
      this.$router.push("/detail");
    }
  }
};
</script>

<style scoped>
.back {
  width: 100%;
  height: 450px;
}
.bg-search {
  position: relative;
}
.search {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -130px;
  z-index: 20;
}
.search-file {
  position: absolute;
  top: 55%;
  left: 46%;
  width: 171px;
  min-height: 100px;
  background-color: #fff;
  z-index: 9999;
}
.item {
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  z-index: 9999;
  cursor: pointer;
}
.no-data {
  text-align: center;
}
.send {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15px;
  margin-left: 120px;
}
</style>
