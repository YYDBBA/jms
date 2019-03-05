export default {
  changeCity(state, [city,cityHot]) {
    state.city = city;
    state.cityHot = cityHot;
    try {
      localStorage.city = city;
      localStorage.cityHot = cityHot;
    } catch (e) {
    }
  }
}
