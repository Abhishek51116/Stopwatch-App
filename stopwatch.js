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
     lapCounter++;
     updateTime();
    },10);    
    }
    //Update timer
    function updateTime(){
     //1 min = 60 *100 centtiseconds
        timeMinutes = Math.floor(timeCounter/6000);
    }
});