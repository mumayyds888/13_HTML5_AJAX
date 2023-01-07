var ctx, thisImage;
$(function(){
$("[type='date']").on("change",showDate);
ctx = $("#myCanvas")[0].getContext("2d");
});
function showDate(){
var thisDate = this.value;
thisDate = thisDate.replace(/-/g,"");
thisImage = new Image();
thisImage.src = "flipClockNumbers.png";
thisImage.onload = function () {
for(var x=0;x<thisDate.length;x++){
ctx.drawImage(thisImage, thisDate[x] * 80, 0, 90, 130, 60 * x, 0, 60, 100);
}
};
}



// https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_canvas_drawimage
// ctx.drawImage(img, 90, 130, 60, 70, 70, 130, 80, 90);
// context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
