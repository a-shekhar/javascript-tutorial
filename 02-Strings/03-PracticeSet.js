let str = "Aditya\"" // escape sequence 
console.log(str.length)

str = "ilovemyindia"
console.log(str[0])
console.log(str[2])

if(str.startsWith("ilove")){
    console.log("Hi");
}

if(str.endsWith("india")){
    console.log("Hello")
}

if(str.includes("india")){
    console.log("India");
}
0

str = "Aditya"
console.log(str.toLocaleLowerCase())
console.log(str.toUpperCase())

str = "send me 1000"
let amount = str.slice("send me ".length)
console.log(amount)
console.log(typeof amount)

amount = Number.parseInt(str.slice("send me ".length))
console.log(amount)
console.log(typeof amount)

str = "hhjd"
str[3] = "x"
console.log(str)

