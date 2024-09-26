let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const button = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const saveTab = document.getElementById("save-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/pratham-goswami-331aa7240/"}
// ]

saveTab.addEventListener("click", function(){
    chrome.tabs.query({active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})

function renderLeads(leads) {
    let listItems = "" //variable to hold the list items
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target='_blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        //Using Template on the next line
        listItems += `
        <li>
        <a target='_blank' href = '${leads[i]}'>${leads[i]}</a>
        </li> `
    }
    ulEl.innerHTML = listItems
}

//Approach one
// function save(){
//     button.textContent = "Button Clicked!"
//     console.log(button)
// }

deleteBtn.addEventListener("click", function(){
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

//Approach two
button.addEventListener("click", function(){
    // button.textContent = "Button Clicked!"
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    //To check if it is working or not
    console.log(localStorage.getItem("myLeads"))

    renderLeads(myLeads)
})