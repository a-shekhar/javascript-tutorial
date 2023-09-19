let arr = [45, 23, 21]


let a = arr.map((value) => {  // map creates new array by performing some operation 
   console.log(value)
   return value + 1;
   }
)  

console.log(a)

a = arr.map((value, index) => {  // map creates new array by performing some operation 
    console.log(value, index)
    return value + 1;
    }
 )  
 
 console.log(a)


 a = arr.map((value, index) => {  // map creates new array by performing some operation 
    console.log(value, index)
    return value + 1;
    }
 )  
 
 console.log(a)




 // filter method
 arr = [45, 4,2,24,645,758,623]
 let filterd = arr.filter((value) =>{
    return value < 5
 })

 console.log(filterd)


 // Reduce  method
console.log("==========Reduce Method=============")
 arr = [324,34,536,758,967,78]
 let newArr = arr.reduce((h1, h2) =>{
    return h1+h2;
 })

 console.log(arr)
 console.log(newArr)