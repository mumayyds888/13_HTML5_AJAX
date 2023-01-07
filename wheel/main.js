$(function(){
    //一載近來要做的事
    // test css transform
    $("#car").css("transform","rotate(360deg)");
    let degree = 0;
    setInterval(function(){ //window底下的 setInterval()方法
        degree += 20;
        $(".wheel").css("transform",`rotate(${degree}deg)`);
    },200);
})

// 放大縮小
// 事件：畫面上岸到哪個東西時，才有動畫，這情況建議用JS