function addItem() {
    const input = document.getElementById("itemInput");
    const value = input.value.trim();

    if (value === "") {
        alert("Please enter a valid item.");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = value;

    // Mark task as completed
    taskText.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateCount();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    document.getElementById("itemList").appendChild(li);

    input.value = "";
    updateCount();
}

// Update task counter
function updateCount() {
    const totalTasks = document.querySelectorAll("#itemList li").length;
    document.getElementById("count").textContent = totalTasks;
}

// Allow Enter key to add task
document.getElementById("itemInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});
