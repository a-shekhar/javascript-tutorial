let nums = [1,2,34,55,32,3,4]

for(let i = 0; i <nums.length; i++){
    console.log(nums[i])
}

console.log("=====Get Square======")
nums.forEach((element) => {
    console.log(element * element)
})

// Array.from -- used to create array from any object 
let name = "Aditya"
let arr = Array.from(name)
console.log(arr)

// for of
for(let i of name){
    console.log(i)
}

// for in 
for(let i in name){
    console.log(i)
}