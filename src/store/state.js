let selectCity = '北京';
try {
  if (localStorage.city) {
    selectCity = localStorage.city;
  }
} catch (e) {
}

export default {
  city: selectCity
}
