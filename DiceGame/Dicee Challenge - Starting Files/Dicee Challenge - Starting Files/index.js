
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
let srcIm='';
if(randomNumber1===1)
srcIm="images/dice1.png";
else if(randomNumber1===2)
srcIm="images/dice2.png";
else if(randomNumber1===3)
srcIm="images/dice3.png";
else if(randomNumber1===4)
srcIm="images/dice4.png";
else if(randomNumber1===5)
srcIm="images/dice5.png";
else if(randomNumber1===6)
srcIm="images/dice6.png";

var imgtag=document.getElementsByClassName("img1");
imgtag[0].setAttribute("src",srcIm);


if(randomNumber2===1)
srcIm2="images/dice1.png";
else if(randomNumber2===2)
srcIm2="images/dice2.png";
else if(randomNumber2===3)
srcIm2="images/dice3.png";
else if(randomNumber2===4)
srcIm2="images/dice4.png";
else if(randomNumber2===5)
srcIm2="images/dice5.png";
else if(randomNumber2===6)
srcIm2="images/dice6.png";

var imgtag2=document.getElementsByClassName("img2");
imgtag2[0].setAttribute("src",srcIm2);

if(randomNumber1>randomNumber2){
    
document.querySelector("h1").innerText="🚩 Player 1 wins";}
else if(randomNumber1<randomNumber2){
     
document.querySelector("h1").innerText="Player 2 wins 🚩";}
else if(randomNumber1===randomNumber2)
document.querySelector("h1").innerText="Draw!"