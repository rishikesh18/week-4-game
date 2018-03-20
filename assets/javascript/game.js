
var userTotal, random, num1, num2, num3, num4;

var losses = 0;
var wins = 0;



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


    
function addScore(num) {
    userTotal = userTotal + num;
    $("#score").text(userTotal);
    if (userTotal === random) {
        $('.won').stop().fadeIn(400).delay(2000).fadeOut(400); 
        wins++;
        $("#win").text("Wins: " + wins);
        initializeValue();
    }
        else if (userTotal > random) {
        $('.lost').stop().fadeIn(400).delay(2000).fadeOut(400); 
        losses++;
        $("#loss").text("Losses: " + losses);
        initializeValue();
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

 $(document).ready(function(){
    initializeValue();
    
});






