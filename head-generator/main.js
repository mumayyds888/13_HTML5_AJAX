$(function(){
    $("button").on("click", go);
});

const maleKeywords = ["雄","強","賢","志"];
const femaleKeywords = ["芸","芬","佩"];

// 下輸入要求的判斷
let go = () => { //使用者按了GO以後，輸入的自幼沒有重複
    // alert("hi");
    var inputText = $("#userInput").val(); // 宣告會變的變數 ; val():JQ的方法 / https://api.jquery.com/val/，如果輸入值在括號裡面，按了GO會在括號李出現，但這樣會跟下方的function有衝突
    // debugger;
    // 開始男女生名字判斷：
    // some：尋訪陣列[]裡面的值，有或沒有存在；
    // includes()：透過這個方法而得到值，有沒有落在陣列值裡面；
    // thisElement：前端輸入的參數(值)；
    // https://www.w3schools.com/JSREF/jsref_includes.asp；
    // =>：????????????????? {}????????????? 等同於function(){}
    // thisElement是指參數 => 目前只有一個參數，所以可以省略小括號；inputText.includes(thisElement) ： 這是個function，省略了小括號()
    const isMale = maleKeywords.some(thisElement => inputText.includes(thisElement));
    const isFemale = femaleKeywords.some(thisElement => inputText.includes(thisElement));
    // debugger;
    // 開始前端輸入的名字值得異同判斷：
    if(isMale && isFemale){
        $("h1").text("😁"); //輸入的名字同時存在男女值的情況
    }else if(isMale){
        $("h1").text("🧑"); //輸入的名字存在男生值得情況
    }else if(isFemale){
        $("h1").text("👩"); //輸入的名字存在女生值得情況
    }else{
        $("h1").text("😎"); //輸入的名字全都不存在男女值的情況
    }
};

