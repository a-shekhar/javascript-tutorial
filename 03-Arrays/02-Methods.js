let nums = [1,2,3,4,5,6]
let str = nums.toString()
console.log(str)

let joined = nums.join("-")
console.log(joined)


joined = nums.join(" and ")
console.log(joined)


let r = nums.pop() // pop retruns and removes last element 
console.log(nums, r)

let p = nums.push(7) // adds to last and return the array length
console.log(nums, p)

let s = nums.shift() // removes the first element and return the popped element 
console.log(nums, s)

let u = nums.unshift(20, 10, 30) // adds the elemnt to start and returns length of array 
console.log(nums, u)