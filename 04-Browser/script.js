alert("Enter the value of a")
let a = prompt("Enter a here", "578") // 578 is default value
a = Number.parseInt(a)
let write = confirm("Are you sure?")
if(write){

document.write(typeof a)
document.write(a)
}else{
    document.write("let me complete it for you")
}