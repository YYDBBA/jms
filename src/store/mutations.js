export default {
  changeCity(state, [city,cityHot]) {
    state.city = city;
    state.cityHot = cityHot;
    try {
      localStorage.city = city;
      localStorage.cityHot = cityHot;
    } catch (e) {
    }
  },
  changeLogin(state, [checkLogin,loginName]) {
    state.checkLogin = checkLogin;
    state.loginName = loginName;
    try {
      localStorage.checkLogin = checkLogin;
      localStorage.loginName = loginName;
    } catch (e) {
    }
  },
  canelLogin(state, [checkLogin,loginName]) {
    state.checkLogin = checkLogin;
    state.loginName = loginName;
    try {
      localStorage.checkLogin = checkLogin;
      localStorage.loginName = loginName;
    } catch (e) {
    }
  }
}
