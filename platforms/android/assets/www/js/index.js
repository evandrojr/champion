//var round=1;
//var pat=[];
//var hpat=[];
//var note=0;
//var speed = 1500;
//var restoreDelay = 300;
//var nextRoundDelay = 2000;
//var hExtraSelectionTime = 300; // Human can have hpExtraSelectionTime than the time used for the pc 
//var playing = false;
//var cPlayPatternClock;
//var cNextRoundClock;
//
//function gameInit(){
//    
//    var ae1 = document.createElement('audio');
//    ae1.setAttribute('src', 'media/hat.wav');
//    var ae2 = document.createElement('audio');
//    ae2.setAttribute('src', 'media/kick.wav');
//    var ae3 = document.createElement('audio');
//    ae3.setAttribute('src', 'media/crash.wav');
//    var ae4 = document.createElement('audio');
//    ae4.setAttribute('src', 'media/rim.wav');
//    
//    //audioElement.load()
//    $.get();
//
//    function hPlay(i){
//        if(playing){
//            hpat.push(i);
//            if(hpat.length > pat.length){
//                gameOver("too many presses!");
//                return;
//            }    
//            for(i=0; i < hpat.length; ++i){
//                if(hpat[i]!=pat[i]){
//                    gameOver("you made a mistake!");
//                    return;
//                }
//            }           
//        }
//    }
//    
//
//    $("#s1").click(function(){
//       sectorSelect(1);
//       hPlay(1);
//    });
//    
//    $("#s2").click(function(){
//        sectorSelect(2);
//        hPlay(2);        
//    });
//    
//    $("#s3").click(function(){
//        sectorSelect(3);
//        hPlay(3);
//    });
//    
//    $("#s4").click(function(){
//        sectorSelect(4);
//        hPlay(4);
//    });
//
//    function sectorSelect(i){
//       eval("ae" + i + ".play()");
//       $("#s" + i).removeClass("s" + i);
//       var f = $("#s" + i);
//       setTimeout(function(){ f.addClass("s"+ i) }, restoreDelay);
//    }
//       
//    $("#start").click(function(){
//       reset(); 
//       play();
//    });
//    
//    function pattern(){
//       pat.push(Math.floor((Math.random()*4)+1));
//    }
//
//   function playPattern(){
//        if(note < pat.length){
//            sectorSelect(pat[note]);
//            ++note;
//            cPlayPatternClock = setTimeout(playPattern, speed);
//        }
//        else{
//           cNextRoundClock = setTimeout(nextRound, (hExtraSelectionTime + speed) * round );
//        }
//    }
//    
//    function reset(){
//        window.clearTimeout(cPlayPatternClock);
//        window.clearTimeout(cNextRoundClock);
//
//        playing = false;
//        note=0;
//        round=1;
//        pat.length = 0;
//    }
//
//    function nextRound(){
//        if(hpat.length < pat.length){
//            gameOver("too slow...");
//            return;
//        }    
//        note=0;
//        ++round;
//        play();
//    } 
//    
//    function play(){
//        playing = true;
//        hpat.length = 0;
//        $("#round").text("Round: " + round);
//        pattern();
//        playPattern();
//    }
//       
//    function gameOver(msg){
//        r=round;
//        reset();
//        alert("Game over " + msg + " you made to round " + r);
//
//    }
//
//    
//    reset();
//}



var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
         //gameInit();
        alert("Relaxe jr")
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


