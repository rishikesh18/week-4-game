
var userTotal, random, num1, num2, num3, num4;

var losses = 0;
var wins = 0;

$(document).ready(function(){
    initializeValue();
    
});

function initializeValue() {
     userTotal = 0;
     random=Math.floor(Math.random()*((90-60)+1) + 60);
     num1=Math.floor(Math.random()*((15-1)+1) + 1);
     num2=Math.floor(Math.random()*((15-1)+1) + 1);
     num3=Math.floor(Math.random()*((15-1)+1) + 1);
     num4=Math.floor(Math.random()*((15-1)+1) + 1);          
     $("#target").text(random);
     $("#score").text(userTotal);
     
}

function reset() {
    initializeValue();
}

function addScore(num) {
    userTotal = userTotal + num;
    $("#score").text(userTotal);
    if (userTotal === random) {
        $('.won').stop().fadeIn(400).delay(2000).fadeOut(400); 
        wins++;
        $("#win").text("Wins: " + wins);
        reset();
    }
        else if (userTotal > random) {
        $('.lost').stop().fadeIn(400).delay(2000).fadeOut(400); 
        losses++;
        $("#loss").text("Losses: " + losses);
        reset();
    }
            else {

            }
}
         
$("#crys1").click(function(){
        
   addScore(num1);
      
});

$("#crys2").click(function(){
        
    addScore(num2);
       
 });
 $("#crys3").click(function(){
        
    addScore(num3);
       
 });

 $("#crys4").click(function(){
        
    addScore(num4);
       
 });






/*
    $("#crys2").click(num2);
    $("#crys3").click(num3);
    $("#crys4").click(num44);  */
  
   



 /*   var userTotal= 0
    var wins= 0;
    var losses = 0;

 /*   $("#crys1").click(function(){
        userTotal = userTotal + num1
    });
    $("#crys2").click(function(){
        userTotal = userTotal + num2
    });
    $("#crys3").click(function(){
        userTotal = userTotal + num3
    });
    $("#crys4").click(function(){
        userTotal = userTotal + num4 
    });
    

   
   
  /*  $("#win").text("Wins: " + wins);
    $("#loss").text("Losses: " + losses);

  /*  function reset(){
        Random=Math.floor(Math.random()*((90-60)+1) + 60);
        console.log(Random)
        $("#randomNumber").text(Random);
        num1=Math.floor(Math.random()*((15-1)+1) + 1);
        num2=Math.floor(Math.random()*((15-1)+1) + 1);
        num3=Math.floor(Math.random()*((15-1)+1) + 1);
        num4=Math.floor(Math.random()*((15-1)+1) + 1);
        userTotal= 0;
        $("#score").text(userTotal);
        } 

    $("#crys1").on("click") */
