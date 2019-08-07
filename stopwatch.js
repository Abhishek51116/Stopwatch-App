$(function(){
    var mode = 0;//app mode
    var timeCounter =0;//time counter
    var lapCounter =0;// lap counter
    var action;//var for setInterval
    var lapNumber=0;//Number of Laps
    //var for lap and time counter 
    var timeMinutes,timeSeconds, timeCentiseconds , lapMinutes, lapSeconds, lapCentiseconds;
    
    //On loading of App
    hideshowButtons("#startButton","#lapButton");
    //click on start button
    $("#startButton").click(function(){
        //mode on
        mode = 1;
        //Show stop and lap buttons
        hideshowButtons("#stopButton","#lapButton");
        //Start counter
        startAction();
    })
    // clicking stop button
    $("#stopButton").click(function(){
        //show resume and reset button
        hideshowButtons("#resumeButton","#resetButton");
        
        // stop counter
        clearInterval(action);
    })
    //clicking on resume button
        $("#resumeButton").click(function(){
        //show stop and lap button
        hideshowButtons("#stopButton","#lapButton");
        //start counter  
            startAction();
        })
    //click on reload button
    $("#resetButton").click(function(){
        //reload page
        location.reload();
        })
    //click on lap button
$("#lapButton").click(function(){
       //if mode is on
        if(mode){
            //stop action
            clearInterval(action);
            //resetLap and print lap 
            lapCounter = 0;
            addLap();
            //start action
            startAction();

        }
        
        }
        )
    

 //show two buttons and hide the rest
    function hideshowButtons(x,y){
        $(".control").hide();
        $(x).show();
        $(y).show();
        
    }
    //start counter
    function startAction(){
    action =setInterval(function(){
     timeCounter++;
        // if time reaches above 100 minutes then reset counter
        if(timeCounter == 100*60*100){
            timeCounter = 0;
        }
     lapCounter++;
// if time reaches above 100 minutes then reset counter
        if(lapCounter == 100*60*100){
            lapCounter = 0;
        }
        updateTime();
    },10);    
    }
    //Update timer
    function updateTime(){
     //1 min = 60 *100 centtiseconds
        timeMinutes = Math.floor(timeCounter/6000);
        // 1sec = 100centiseconds
        timeSeconds = Math.floor((timeCounter%6000)/100);
    //Centiseconds         
        timeCentiseconds = (timeCounter%6000)%100;
        //lap variables
        //1 min = 60 *100 centiseconds
        lapMinutes = Math.floor(timeCounter/6000);
        // 1sec = 100centiseconds
        lapSeconds = Math.floor((timeCounter%6000)/100);
    //Centiseconds         
        lapCentiseconds = (timeCounter%6000)%100;
        //change on page
        $("#timeMinute").text(format(timeMinutes));
         $("#timeSecond").text(format(timeSeconds));
         $("#timeCentiSecond").text(format(timeCentiseconds));
    //for lap 
        $("#lapMinute").text(format(lapMinutes));
         $("#lapSecond").text(format(lapSeconds));
         $("#lapCentiSecond").text(format(lapCentiseconds));
        }
    function format(number){
        if(number<10){
            return '0' + number;
        }else
            {
                return number;
            }
        }
    //add lap inside lap box
    function addLap(){
        lapNumber++;
        var myLapDetails =
            '<div class="lap">'+
            '<div class="laptimetitle">'+
            'Lap' + lapNumber +
            '</div>'+
            '<div class="laptime">'+
            '<span>'+ format(lapMinutes) + '</span>'+
            ':<span>'+ format(lapSeconds) + '</span>'+
            ':<span>'+ format(lapCentiseconds) + '</span>'+
            '</div>'+
            '</div>';
        $(myLapDetails).prependTo("#laps");
    }
    
    
});