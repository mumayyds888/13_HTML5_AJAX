const legalVideoFormats = [
  "mp4", "flv", "avi", "mov", "mkv", "mpeg", "3gp", "wmv", "swf","png"
];

window.URL = window.URL || window.webkitURL; 


//initial
$(function () {
  $("#inputFile").on("change", function (e) {
    $("#people").empty();
    $("#people").append(url('image1.png'));
    // debugger;
    processFile(e.target.files);
  });
  $("#people").on("dragenter", dragenter);
  $("#people").on("dragleave", dragleave);
  $("#people").on("dragover", dragover);
  $("#people").on("drop", drop);
});

function dragenter() {
  $("#people").css("border", "5px solid blue");
  $("#people").text("Drop it!");
}

function dragleave() {
  $("#people").css("border", "5px dashed black");
  $("#people").text("Choose file by the button below or Drop here.");
}

function dragover(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  let files = e.originalEvent.dataTransfer.files;
  if (files.length == 0) {
    return false;
  }
  $("#people").empty();
    $("#people").append("image1.png");
    // debugger;
    processFile(files); //接38行的files
  // convert(files[0]);
  dragleave(); //把離開的函式呼叫近來，這樣畫面才會回到沒有放檔案時的樣子。

}

// function convert(file) {
//   // debugger;
//   if (!file.type.match(/text.*/)) {
//     alert("請拖放文字檔");
//     dragleave();
//     return false;
//   }

//   let reader = new FileReader();

//   reader.onloadend = function () {
//     let s = reader.result;
//     $("#preview").text(s);
//     dragleave();
//   };

//   reader.readAsText(file);

// }

function processFile(files) {
  let thisVideo = files[0];
  $("table").append($(`<tr><td colspan="4">影片名稱 : ${thisVideo.name}</td></tr>`).css("background-color", "yellow"));
  $("table").append(`<tr><td>影片長度</td><td>須介於60~90秒</td><td id="thisDuration"></td><td id="thisDurationResult"></td></tr>`);
  $("table").append(`<tr><td>影片格式</td><td>mp4,flv,avi,mov,mkv,mpeg,3gp,wmv,swf</td><td id="thisFormat">${thisVideo.type}</td><td id="thisFormatResult"></td></tr>`);
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

  $("table").append(`<tr><td>解析度</td><td>720p(1280*720)以上</td><td id="thisResolution"></td><td id="thisResolutionResult"></td></tr>`);

  let videoElement = document.createElement('video');
  videoElement.preload = 'metadata';

  videoElement.onloadedmetadata = function () {
    thisVideo.duration = videoElement.duration;
    thisVideo.videoWidth = videoElement.videoWidth;
    thisVideo.videoHeight = videoElement.videoHeight;
    $("#thisDuration").text(thisVideo.duration);
    $("#thisResolution").text(thisVideo.videoWidth + "*" + thisVideo.videoHeight);
    if (thisVideo.duration >= 60 && thisVideo.duration < 91) {
      $("#thisDurationResult").text("O").css("color", "green");
    } else {
      $("#thisDurationResult").text("X").css("color", "red");
    }

    if (thisVideo.videlWidth >= 1280 && thisVideo.videoHeight >= 720) {
      $("#thisResolutionResult").text("O").css("color", "green");
    } else {
      $("#thisResolutionResult").text("X").css("color", "red");
    }
  };

  videoElement.src = URL.createObjectURL(thisVideo);

}