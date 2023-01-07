// 拖放事件觸發
$(function () {
  $("#dropbox").on("dragenter", dragenter);
  $("#dropbox").on("dragleave", dragleave);
  $("#dropbox").on("dragover", dragover);
  $("#dropbox").on("drop", drop);
});

function dragenter() {
  $("#dropbox").css("background-color","red");
  $("#dropbox").text("Drop it!");
}

function dragleave() {
  $("#dropbox").css("background-color","blue");
  $("#dropbox").text("Come here.");
}

function dragover(e) { //e：傳入某東西的事件
  e.preventDefault();
}

function drop(e) { //e：傳入某東西的事件
  e.preventDefault();
  // debugger;
  let files = e.originalEvent.dataTransfer.files;
  if(files.length == 0){
    return false;
  }
  convert(files[0]);
}

function convert(file){
  // debugger;
  if(!file.type.match(/text.*/)){
    alert("請拖放文字檔");
    dragleave();
    return false;
  }

  let reader = new FileReader();

  reader.onloadend = function(){
    let s = reader.result;
    $("#preview").text(s);
    dragleave();
  };

  reader.readAsText(file);

  

}



// match：https://www.w3schools.com/jsref/jsref_match.asp







// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
// https://developers.google.com/maps/documentation/javascript/overview --會收費
// https://developers.google.com/maps/documentation/places/web-service/overview  --一定會收費
// readAsText同類型方法：https://developer.mozilla.org/zh-TW/docs/Web/API/FileReader