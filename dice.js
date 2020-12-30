var num1 =Math.random();
num1  *=10;
num1=Math.round(num1);
num1 %= 6;
num1 ++;

var num2 =Math.random();
num2  *=10;
num2=Math.round(num2);
num2 %= 6;
num2 ++;

//console.log(num1+" "+num2);
var winner =1;
if(num1===num2){
    winner=0;
}
else if(num2>num1){
    winner = 2;
}

if(winner===0){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(winner===1){
document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}

var n1=num1.toString();
var n2=num2.toString();
//console.log(typeof(n1));
var imgOne="dice"+n1+".png";
var imgTwo="dice"+n2+".png";

document.querySelector(".p1").setAttribute("src", imgOne);
document.querySelector(".p2").setAttribute("src", imgTwo);