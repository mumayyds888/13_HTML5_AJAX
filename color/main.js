// initial
$(function () {
  $("[type='color']").on("change", changeColor); //changeColor：可以自己定義
});

function changeColor() {
  // console.log("[changeColor in]");
  console.log(this.value);
  // 找到畫面上的body
  $('body').css("background-color", this.value);
}

// 選擇顏色元件
// 偵測到使用者改變顏色
// 拿到顏色數值
// 設定背景顏色為該顏色


// //initial
// $(function(){
//   $("[type='color']").on("change",changeColor);  
// });

// function changeColor(){
//   // console.log("[changeColor] in");
//   console.log(this.value);
//   // set body background-color
//   $('body').css("background-color", this.value);
// }