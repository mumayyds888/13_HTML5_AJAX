let mapArray, ctx, currentImagMain;
let imgMountain, imgMain, imgEnemy;
// mapArray : map element data// 決定地圖中每個格子的元素
// ctx ： HTML5 Canvas // HTML5 Canvas用
// currentImagMain ： x, y location // 決定主角所在座標
// imgMountain, imgMain, imgEnemy ： 障礙物, 主角, 敵人的圖片物件
const gridLength = 200;

// Game initial：網頁載入完成後初始化動作
$(function () {
    mapArray = [ //0-可走,1-障礙,2-終點,3-敵人
        [0, 1, 1],
        [0, 0, 0],
        [3, 1, 2]
    ];

    ctx = $("#myCanvas")[0].getContext("2d");

    // 把主角擺上畫面
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImagMain = {
        "x": 0,
        "y": 0
    };

    imgMain.onload = function () {
        ctx.drawImage(imgMain, 0, 0, 80, 130, currentImagMain.x, currentImagMain.y, gridLength, gridLength);
    };

    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";

    function loadedImages(source, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for (var src in sources) {
            numImages++;
        }
        for (var src in sources) {
            images[src] = new Image();
            images[src].onload = function () {
                if (++loadedImages >= numImages) {
                    callback(images);
                }
            };
            images[src].src = sources[src];
        }
    }

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var sources = {
        darthVader: 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg',
        yoda: 'http://www.html5canvastutorials.com/demos/assets/yoda.jpg'
    };

    loadImages(sources, function (images) {
        context.drawImage(images.darthVader, 100, 30, 200, 137);
        context.drawImage(images.yoda, 350, 55, 93, 104);
    });
    

});

// 使用者事件
$(document).on("keydown", function (event) {

});


// https://www.w3schools.com/tags/ref_canvas.asp

// 作業(看懂程式，把code改成這格版本，及多張圖版本)：https://www.html5canvastutorials.com/tutorials/html5-canvas-image-loader/
// 老師課程資料官網：https://hospitable-top-f1b.notion.site/MFEE32-HTML5-AJAX-9db22a1415ce44c3b11ea76c43a1b690