const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        // Creates element
        let li = document.createElement("li");
        // Adds the text you input
        li.innerHTML = inputBox.value;
        //Adds to list container
        listContainer.appendChild(li);
        // x button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // Sets it back to blank
    inputBox.value = '';
    // Save data to browser
    saveData();
}

listContainer.addEventListener("click",function(e) {
    // If clicked on name, it will check 
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    // If clicked on x
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// To save data to browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
// Function to store variable
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
// Call function
showTask();

// Enter key
inputBox.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});