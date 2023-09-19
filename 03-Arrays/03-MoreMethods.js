let nums = [1,2,3,4,5]
console.log(nums)
console.log(nums.length)

delete nums[0]
console.log(nums)
console.log(nums.length)

let nums1 = [1,2,3]
let nums2 = [4,5,6]
nums = nums1.concat(nums2)
console.log(nums)

let nums3 = [7,8,9]
nums = nums1.concat(nums2, nums3)
console.log(nums)

nums = [1,46,67,23,545,62,66]
nums.sort() // modifies the original array, sorts alphabetically 
console.log(nums)

let compare = (a, b) =>{
    return a-b
}
nums.sort(compare)
console.log(nums)


nums.reverse()
console.log(nums)


// splice and slice
nums = [1,2,3,4,5,6,7,8]
// splice - Adds new element 
let deletedValues = nums.splice(2, 3, 103, 104, 105, 106)
console.log(nums, deletedValues)

// slice - it cretes new array
let modi = nums.slice(2)
console.log(modi)

modi = nums.slice(3,6)
console.log(modi)