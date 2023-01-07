// 我寫的有誤

const legalVideoFormats = [
  "mp4", "flv", "avi", "mov", "mkv", "mpeg", "3gp", "wmv", "swf"
];
window.URL = window.URL || window.webkitURL;

// initial
$(function () {
  $("#inputFile").on("change", function (e) {
    $("table").empty();
    $("table").append("<th>檢核項⽬</th><th>需求規格</th><th>檢查結果</th><th>是否通過</th></tr>");
    // debugger;
    processFile(e.target.files);
  });

  $("#dropbox").on("dragenter", dragenter);
  $("#dropbox").on("dragleave", dragleave);
  $("#dropbox").on("dragover", dragover);
  $("#dropbox").on("drop", drop);

});

function processFile(files) {
  let thisVideo = files[0];
  $("table").append($(`<tr><td colspan="4">影片名稱 : ${thisVideo.name}</td></tr>`).css("background-color", "yellow"));
  $("table").append(`<tr><td>影片長度</td><td>需介於60~90秒</td><td id="thisDuration"></td><td 
id="thisDurationResult"></td></tr>`);
  $("table").append(`<tr><td>影片格式</td><td>MP4、FLV、AVI、MOV、MKV、MPEG、3GP、WMV、SWF</td><td 
id="thisFormat">${thisVideo.type}</td><td id="thisFormatResult"></td></tr>`);
  var thisFileType = thisVideo.type.split("/");
  if (thisFileType[0] == 'video') {
    if (legalVideoFormats.indexOf(thisFileType[1]) != -1) {
      $("#thisFormatResult").text("O").css("color", "green");
    } else {
      $("#thisFormatResult").text("X").css("color", "red");
    }
  } else {
    $("#thisFormatResult").text("非影片格式").css("color", "red");
  }
  $("table").append(`<tr><td>解析度</td><td>720p(1280*720)以上</td><td id="thisResolution"></td><td 
  id="thisResolutionResult"></td></tr>`);






  let videoElement = document.createElement('video'); //宣告要產生一個videoElement 

  videoElement.preload = 'metadata';

  videoElement.onloadedmetadata = function () { //是求燈放在onloadedmetadata該事件裡
    // 我們要的三筆資訊
    thisVideo.duration = videoElement.duration;
    thisVideo.videoWidth = videoElement.videoWidth;
    thisVideo.videoHeight = videoElement.videoHeight;

    $("#thisDuration").text(thisVideo.duration); //thisVideo.duration都到網頁上
    $("#thisResolution").text(thisVideo.videoWidth + "*" + thisVideo.videoHeight);


    // 判斷：
    if (thisVideo.duration >= 60 && thisVideo.duration < 91) {  //如果介於60到91秒之間
      $("#thisDurationResult").text("O").css("color", "green"); //如果有的結果
    } else {
      $("#thisDurationResult").text("X").css("color", "red"); //如果沒有的結果
    }

    if (thisVideo.videoWidth >= 1280 && thisVideo.videoHeight >= 720) { //影片的寬和高要求
      $("#thisResolutionResult").text("O").css("color", "green"); //符合寬高要求的結果
    } else {
      $("#thisResolutionResult").text("X").css("color", "red"); //不符合寬高要求的結果
    }

    videoElement.src = URL.createObjectURL(thisVideo);
  }

}







// indexof語法：https://www.w3schools.com/jsref/jsref_indexof.asp



