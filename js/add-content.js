alert ("Hello!")

confirm ("do you like my work?")

function greeting(){
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
    
    console.log (greeting);
    
    return greeting;
}
greeting();
document.write('<h3>'+greeting() + '<h3>')
