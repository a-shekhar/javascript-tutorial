let a = null
let b = 345
let c = true
let d = BigInt("123")
let e = "Aditya"
let f = Symbol("This is Symbol")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof d)

// non primitives objects 
const item = 
{
    "Aditya": "Student",
    "age" : 24
}

console.log(item["Aditya"])
console.log(item["Raj"])
console.log(item["age"])