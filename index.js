let myLeads = []
const inputEl = document.getElementById("input-el")
const button = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//Approach one
// function save(){
//     button.textContent = "Button Clicked!"
//     console.log(button)
// }

//Approach two
button.addEventListener("click", function(){
    button.textContent = "Button Clicked!"
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = "" //variable to hold the list items
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        //Using Template on the next line
        listItems += `
        <li>
        <a target='_blank' href = '${myLeads[i]}'>${myLeads[i]}</a>
        </li> `
        console.log(myLeads[i])
    }
    ulEl.innerHTML = listItems
}