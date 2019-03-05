let selectCity = '北京';
let devideCity = 'hotList';
try {
  if (localStorage.city && localStorage.cityHot) {
    selectCity = localStorage.city;
    devideCity = localStorage.cityHot;
  }
} catch (e) {
}

export default {
  city: selectCity,
  cityHot: devideCity
}
