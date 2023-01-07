let thisButton = document.getElementsByTagName("button")[0]; //0：抓到第0個
let showData = document.getElementById("showData"); //getElementById()：只對到一個showData店數

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
    // xmlHttpRequest.open("GET", "20221222.txt", true); // 請這個變數設定在open()裡面 ：用傳輸get方法，去DataFromServer.txt拿出來；true：同步
    // xmlHttpRequest.send(); //去到我的server/資料夾(DataFromServer.txt)裡，然後送出去send()
    // xmlHttpRequest.onreadystatechange = function () { // 每次狀態一改變 ，執行一個判斷function
    //     // console.log("")
    //     console.log("sratus：", xmlHttpRequest.readyState);
    //     console.log("readyState：", xmlHttpRequest.status);

    //     if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) { // 如果......
    //         showData.innerHTML = xmlHttpRequest.responseText;   //拿到的資料秀出來
    //         thisButton.style.visibility = "hidden"; //並把按鈕thisButton隱藏起來
    //     }
    // }

let thisMoment = new Date("2022/12/22");
let thisYear = thisMoment.getFullYear();
let thisMonth = thisMoment.getMonth() + 1  < 10 ? "0" + (thisMoment.getMonth() + 1 ) : thisMoment.getMonth() + 1;
let thisDay = thisMoment.getDate() < 10 ? "0" + thisMoment.getDate() : thisMoment.getDate();



let thisDate = thisYear.toString() + thisMonth.toString() + thisDay.toString();




// ---------------------------------------------我的步驟
// if (i = 0, i < thisDate.length , i++ ) {
//     thisDate = new Date(i);
// }
// ---------------------------------------------我的步驟



    // ---------------------------我的步驟
    // const d01 = new Date("");                                        
    // document.getElementById("demo1").innerHTML = d01;                
    // if (d01 = new Date("")) {
    //     xmlHttpRequest = new Date("");
    // }   else {                        
    //     alert("No XMLHttpRequest!");
    //     return;                     
    // }
    //------------------------------------我的步驟


        //設定xmlHttpRequest相關資訊
        xmlHttpRequest.open("GET", thisDate+".txt", true); // 請這個變數設定在open()裡面 ：用傳輸get方法，去DataFromServer.txt拿出來；true：同步
        xmlHttpRequest.send(); //去到我的server/資料夾(DataFromServer.txt)裡，然後送出去send()
        
        xmlHttpRequest.onreadystatechange = function () { // 每次狀態一改變 ，執行一個判斷function
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) { // 如果......
                showData.innerHTML = xmlHttpRequest.responseText;   //拿到的資料秀出來
                thisButton.style.visibility = "hidden"; //並把按鈕thisButton隱藏起來
            }
        }

    }





    //條件運算子： https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Conditional_Operator