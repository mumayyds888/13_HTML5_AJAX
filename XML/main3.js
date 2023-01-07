// RSS網址替換練習2


$(function () {
    $("button").on("click", loadServerData); //綁定click事件
});
function loadServerData() {
    let rss2json = "https://api.rss2json.com/v1/api.json?rss_url=";  //資料的網站連結
    $.getJSON(rss2json + "https://news.ltn.com.tw/rss/society.xml") //可以找別的RSS
        .done(function (data) { //data資料用這個funtion撈近來
            //debugger; // 確認資料有沒有近來
            for (let x = 0; x < data.items.length; x++) { //開始跑回圈
                $("#dataTable").append(
                    `<tr><td><a target='_blank' 
    href='${data.items[x].link}'>${data.items[x].title}</a></td><td>${data
                        .items[x].pubDate.split(" ")[0]}</td></tr>`  // pubDate.split(" ")[0] ：會到這個網址確認 https://www.mohw.gov.tw/rss-16-1.html ??????
                );
            }
            console.log("Success");
        })
        .fail(function () { console.log("Error"); })
        .always(function () { console.log("Always"); });
}

// 















// https://api.jquery.com/category/ajax/