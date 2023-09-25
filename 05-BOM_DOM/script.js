console.log(window)
console.log(document)
console.log(document.body)
document.body.style.background = 'Yellow'

console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
console.log(document.body.hasChildNodes())

let arr = Array.from(document.body.childNodes)
console.log(arr)