let thisButton = document.getElementsByTagName("button")[0]; //0：抓到第0個
let showData = document.getElementById("showData"); //getElementById()：只對到一個showData變數

thisButton.addEventListener("click", loadServerData); //click：事件；loadServerData：自己定義的function



function loadServerData() { //確定有進去的func
    console.log("Load Server Data!"); //  console.log確認有沒有xmlHttpRequest這個function
    let xmlHttpRequest;  //宣告變數

    if (window.XMLHttpRequest) {    //如果這個變數有存在
        xmlHttpRequest = new XMLHttpRequest();
    } else {                        //沒有的話
        alert("No XMLHttpRequest!");
        return;                     //就停止return
    }

    //設定xmlHttpRequest相關資訊
    xmlHttpRequest.open("GET", "DataFromServer.txt", true); // 請這個變數設定在open()裡面 ：用傳輸get方法，去DataFromServer.txt拿出來；true：同步
    xmlHttpRequest.send(); //去到我的server/資料夾(DataFromServer.txt)裡，然後送出去send()
    xmlHttpRequest.onreadystatechange = function () { // 每次狀態一改變 ，執行一個判斷function
        // console.log("")
        console.log("sratus：", xmlHttpRequest.status );
        console.log("readyState：", xmlHttpRequest.status );

        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) { // 如果......
            showData.innerHTML = xmlHttpRequest.responseText;   //拿到的資料秀出來
            thisButton.style.visibility = "hidden"; //並把按鈕thisButton隱藏起來
        }
    }
}



