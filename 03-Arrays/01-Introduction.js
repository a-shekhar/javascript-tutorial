let marks = [76, 43, 13,50, 98]
console.log(marks)

marks = [76, 87, null]
console.log(marks)

marks = [76, "Not Presnt", true]
console.log(marks)

console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3]) // this will be undefined, index out of range

console.log("The Length of marks is ", marks.length)

console.log("=====Adding the new Element=====")
marks[3] = 97
console.log(marks)
console.log("The Length of marks is ", marks.length)



console.log("=====Changing the index 1=====")
marks[1] = 16
console.log(marks)


console.log(typeof marks)