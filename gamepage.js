// random value generated
var y = Math.floor(Math.random()* 10 + 1); 
player_name = localStorage.getItem("player_name");
// counting the number of guesses
var guess = 1;
function submit(){
x = document.getElementById("guessField").value;
if(x == y){
alert("CONGRATS!! " + player_name + " YOU GUESSED IT IN " + guess + " TRY");
guess = 1;      
}
else if(x > y){
guess++;
alert("OOPS SORRY TRY A SMALLER NUMBER");    
}
else{
guess++;
alert("OOPS SORRY TRY A BIGGER NUMBER");    
}
}
function play_again(){
y = Math.floor(Math.random()* 10 + 1);
document.getElementById("guessField").innerHTML = "";    
}