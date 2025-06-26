let inputI = document.querySelector("#todoI");
let list = document.querySelector("#todolist");

//to create and add a new todo item.
function addTodo() {
    let todoText = inputI.value.trim(); //stores the current value of the input trimming empty/whitespace.

    if (todoText) {
        let todoEl = document.createElement("li");
        todoEl.innerText = todoText;

        //Mark as completed on click (except delete)
        todoEl.addEventListener("click", function (e) {
            if (e.target.tagName !== "BUTTON") {
                todoEl.classList.toggle("completed");
            }
        });

        // Create delete button
        let dltBtn = document.createElement("button");
        dltBtn.textContent = "Delete";
        dltBtn.onclick = function () {
            list.removeChild(todoEl);
        };

        todoEl.appendChild(dltBtn);
        list.appendChild(todoEl);
        inputI.value = ""; // clear input
    } else {
        alert("Please enter a Task!");
    }
}

// Pressing Enter key
//let user add todos by pressing Enter instead of clicking a button
inputI.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
