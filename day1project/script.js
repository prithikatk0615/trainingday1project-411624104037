console.log("hello world!")
const first = 1
const second = 2
console.log(first)
console.log(second)
const str = "Prithika"
console.log(str)
const fruit = ["Apple", "Banana", "Grapes"]
console.log(fruit[0])
fruit[1] = "orange"
console.log(fruit[1])
const arr = [1, "name", false, 2.4]
console.log(arr)
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}
const fourth = document.getElementById("ptag")
fourth.innerHTML = "this is my fourth class"
function student(){
    console.log("I am typing code")
}
const input = document.getElementById("eventListener")
const output = document.getElementById("Ptag")
input.addEventListener("input", ()=>{
    output.textContent = input.value
})
const newVar = document.createElement("h1")
newVar.textContent = "New Paragraph"
document.body.appendChild(newVar)
//newVar.remove()