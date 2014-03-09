var round=1;
var pat=[];
var note=0;
var speed = 1500;
var restoreDelay = 300;
var nextRoundDelay = 2000;

$(document).ready(function(){
    
    var ae1 = document.createElement('audio');
    ae1.setAttribute('src', 'media/hat.wav');
    var ae2 = document.createElement('audio');
    ae2.setAttribute('src', 'media/kick.wav');
    var ae3 = document.createElement('audio');
    ae3.setAttribute('src', 'media/crash.wav');
    var ae4 = document.createElement('audio');
    ae4.setAttribute('src', 'media/rim.wav');
    
    //audioElement.load()
    $.get();

    $("#s1").click(function(){
       sectorSelect(1);
    });
    
    $("#s2").click(function(){
        sectorSelect(2);
    });
    
    $("#s3").click(function(){
        sectorSelect(3);
    });
    
    $("#s4").click(function(){
        sectorSelect(4);
    });

    function sectorSelect(i){
       eval("ae" + i + ".play()");
       $("#s" + i).removeClass("s" + i);
       var f = $("#s" + i);
       setTimeout(function(){ f.addClass("s"+ i) }, restoreDelay);
    }
       
    $("#start").click(function(){
       reset(); 
       play();
    });
    
    function pattern(){
       pat.push(Math.floor((Math.random()*4)+1));
    }

    function playPattern(){
        if(note < pat.length){
            sectorSelect(pat[note]);
            ++note;
            setTimeout(playPattern, speed);
        }
        else{
           setTimeout(nextRound, nextRoundDelay);
        }
    }
    
    function reset(){
        note=0;
        round=1;
        pat.length = 0;
    }

    function nextRound(){
        note=0;
        ++round;
        play();
    } 
    
    function play(){
        $("#round").text("Round: " + round);
        pattern();
        playPattern();
    }
   reset();
});
