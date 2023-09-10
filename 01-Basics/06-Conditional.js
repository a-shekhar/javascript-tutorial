age = 55

if(age > 18){
    console.log("you are eligible for Driving License");
}


age = 17

if(age > 21){
    console.log("you are eligible for Drinking");
}else{
    console.log("Drinking is a bad habbit");
}

course = "Chemistry"
if(course == "Math"){
    console.log("Goto floor 1");
}else if(course == "Biology"){
    console.log("Goto floor 2");
}else{
    console.log("Go out of Building");
}

// Switch case
age = 14

switch(age){
    case 18:
        console.log("Adult");
        break;
    case 14:
        console.log("Kid");
        break;
    default:
        console.log("Give valid age");
        break;
}