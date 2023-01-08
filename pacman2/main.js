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