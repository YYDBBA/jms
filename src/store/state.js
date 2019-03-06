//城市详情所需要的共享数据
let selectCity = '北京';
let devideCity = 'hotList';

//用户登录所需要的数据
let isLogin = false;
let userName = '';
try {
  if (localStorage.city && localStorage.cityHot) {
    selectCity = localStorage.city;
    devideCity = localStorage.cityHot;
  }
} catch (e) {
}

try {
  if (localStorage.checkLogin && localStorage.loginName) {
    isLogin = localStorage.checkLogin;
    userName = localStorage.loginName;
  }
} catch (e) {
}


export default {
  city: selectCity,
  cityHot: devideCity,
  checkLogin: isLogin,
  loginName: userName
}
