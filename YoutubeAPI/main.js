let player;
let currentPlay = 0;

function onYouTubeIframeAPIReady(){
    // alert("hi");
    // 變數player等於新的YOTUTBE值，{這裡面是參數}
    player = new YT.Player("player", {
        height:"390",
        width:"640",
        videoId:playList[currentPlay], 
        playerVars:{
            autoplay:0,
            controls:0,
            // https://developers.google.com/youtube/player_parameters#Parameters
            // https://developers.google.com/youtube/iframe_api_reference
            start:playTime[currentPlay][0], //哪一秒開始撥
            end:playTime[currentPlay][1], //想結束的秒數
            iv_load_policy:3 //
        },
        events:{
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });
}

function onPlayerReady(event){
    $("#playButton").on("click", function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    console.log(event.data);
    // event.data
    // 5 video cued
    // 3 buffering
    // 1 Playing
    // 2 Paused
    // 0 Ended
    // -1 unstarted
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]) {
        // Go to next song
        if(currentPlay<playList.length-1){ // 如果還不是最後一首的話：
            currentPlay++;
            player.loadVideoById({
                videoId:playList[currentPlay],
                startSeconds:playTime[currentPlay][0],
                endSeconds:playTime[currentPlay][1],
                suggestedQuality:"large"
            });
        }else{currentPlay=0; // 如果是最後一首的話：
            player.cueVideoById({
                videoId:playList[currentPlay],
                startSeconds:playTime[currentPlay][0],
                endSeconds:playTime[currentPlay][1],suggestedQuality:"large"
            });
        }
    }
        if(event.data==1){
            $("h2").text(player.getVideoData().title);
    }
}


