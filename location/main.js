// initial
$(function () {
  getLocation();
});

function getLocation() {
  // 檢查 getLocation 是否存在
  if(navigator.geolocation == undefined){
    alert("Fail to get location");
    return;
  }

  let settings = {
    enableHighAccuracy: true
  };
  navigator.geolocation.getCurrentPosition(result, error, settings);
}

function result(position) {
  // debugger;
  let thisCoords = position.coords;
  console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`);
  window.location.href = `https://maps.google.com.tw?q=${thisCoords.latitude},${thisCoords.longitude}`;
}

function error(err) {
  alert(err);
}












// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
// https://developers.google.com/maps/documentation/javascript/overview --會收費
// https://developers.google.com/maps/documentation/places/web-service/overview  --一定會收費