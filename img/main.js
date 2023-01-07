function asyncProcess(imageID, imageURL){ // asyncProcess()：自己定義一個function；imageID, imageURL：呼叫這兩個值進來
    return new Promise((resolve, reject)=>{  //執行正常或錯誤時的條件：resolve, reject
        $(imageID).attr('src',imageURL); //
        $(imageID).on('load',function(){ //等載入圖片時，才呼叫funciotn
            resolve($(this)[0].naturalWidth); //丟回去原始寬度
        });
    });
}

$(function(){
    $("button").on("click",go); //綁定click事件
});
// button按下去會呼叫GO，定義GO funciotn

function go(){
    Promise.all([ //圖片載入：賽跑開始
        asyncProcess("#image1","https://punchline.asia/wp-content/uploads/2017/09/it-movie-poster-1.jpg"),
        asyncProcess("#image2","https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg"),
        asyncProcess("#image3","https://www.u-buy.com.tw/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFIQk9PN3RZNUwuX0FDX1NMMTUwMF8uanBn.jpg")
    ])
    .then(
        response => { //賽跑完以後：前面載入三張圖片後，開始運算 <=> 與這個有關：resolve($(this)[0].naturalWidth)
            var totalWidth = 0;
            for(var x=0;x < response.length ; x++){ //執行迴圈 ;response.length：3； x = 1、2、3的時候
                $("span").append(response[x]); //把數字秀在span上
                totalWidth += response[x]; //同時執行加法運算
                if(x < response.length - 1){  // 0、1、2
                    $("span").append(" + "); // 第0次：1620+ ; 第1次：1200+ 
                }else{
                    $("span").append(" = "+ totalWidth); // 第2次：1036 = 3856直到最後一張圖片出現後
                }
            }
        },
        // 萬一有其他狀況，會把error叫出來
        error => {
            console.log(`Error:${error}`);
        }
    );
}