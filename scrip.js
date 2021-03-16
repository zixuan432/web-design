 var name ="sam";
 var fruits = ["apple","banana","peach"];
 var age = 18;
 var isBoy = true;
alert(name); //Yu
alert(age); //18
alert(isBoy); //true
alert(fruits[0]); //apple
alert(fruits[2]); //peach

function addition(num){
return num+1000;
}
var age = 28;
var trueage= addition(age);
alert(trueage);//”38”

var age2=22;
var trueage2= addition(age2);
alert(trueage2);

document.getElementById("byid").innerHTML="i'm from id";
document.getElementById ("byid").style.color = "skyblue";

document.getElementsByClassName ("byclass")[0].innerHTML = "class"; 
document.getElementsByClassName("byclass")[0].style.fontSize = "30px";

document.getElementsByTagName("div")[2].innerHTML = " Tag"; 
document.getElementsByTagName ("div")[2].style.fontFamily = " EA";

document.getElementsByTagName("p")[0].innerHTML = "happy new year"; 
document.getElementsByTagName ("p")[0].style.color = "red";
document.getElementsByTagName ("p")[0].style.fontSize= "200px";

//<script>
//function test(){
//a =123;
//var b = 456;
//if (a==123) var c = 789;
//} 
//</script>

