let myLeads = []
const inputEl = document.getElementById("input-el")
const button = document.getElementById("input-btn")

//Approach one
// function save(){
//     button.textContent = "Button Clicked!"
//     console.log(button)
// }

//Approach two
button.addEventListener("click", function(){
    button.textContent = "Button Clicked!"
    console.log(button)
})
