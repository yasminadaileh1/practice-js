var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18 ) {
    greeting = 'good evening!';
} else if (hourNow > 12){
    greeting ='good afternoon!';
} else if (hourNow > 0) {
    greeting ='good morning!';
} else { 
    greeting ='welcome';
}

document.write('<h3>' + greeting + '</h3>');


//alert ("Hello!")

//confirm ("do you like my work?")

var hourNow =prompt("how old are you?");
var greeting
if (hourNow < 20) {
    greeting ='hello young!'
}
if (hourNow>21 && hourNow <50){
    greeting ='hello youth'
}
if (hourNow > 51) {
    greeting ='hello eldery'
}