// function with no arg
function printMyName(){
    console.log("My Name is Aditya")
}

printMyName()

// function with arguments
function avg(x, y){
   return (x+y) / 2;
}

let x = 4;
let y = 2;
console.log("Average of", x, y, "is", avg(x, y))



x = 11;
y = 20;
console.log("Average of", x, y, "is", avg(x, y))


x = 3
y = 12
// modern javascript functions

const greeting = () =>{
    console.log("Hi, How are you");
}

greeting();

const sum = (x, y) =>{
    return x + y;
}

console.log("Sum of", x, "and", y, "is", sum(x, y))