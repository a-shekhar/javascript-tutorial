// print mark of student in object

let marks = 
{
    "Aditya" : 95,
    "Raj" : 80,
    "Shekhar" : 12
}

for (let key in marks){
    console.log("Marks of", key, "is", marks[key])
}

correct_number = 5;
while(correct_number != 7){
    console.log("Not a valid number")
    correct_number++;
}