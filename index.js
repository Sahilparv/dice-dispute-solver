var randomNum1= Math.floor(Math.random()*6)+1;
var randomImage1= "dice"+randomNum1+".png";
var source1="images/"+randomImage1;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", source1);


var randomNum2= Math.floor(Math.random()*6)+1;
var randomImage2= "dice"+randomNum2+".png";
var source2= "images/"+randomImage2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", source2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="⛳ player1 wins";
}
else if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="player2 wins ⛳";

} else{
    document.querySelector("h1").innerHTML=" Draw !!!"
}