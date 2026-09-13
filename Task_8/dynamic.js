
const list = document.getElementById("list");
const resetBtn = document.getElementById("resetBtn");

let draggedItem = null;

// Store the original order
const originalItems = Array.from(list.children);

const items = list.querySelectorAll("li");

items.forEach(function (item) {

    // When dragging starts
    item.addEventListener("dragstart", function () {
        draggedItem = item;

        item.classList.add("dragging");
    });

    // When dragging ends
    item.addEventListener("dragend", function () {
        item.classList.remove("dragging");

        draggedItem = null;
    });

    // Allow dropping
    item.addEventListener("dragover", function (event) {

        event.preventDefault();

        if (draggedItem === item) {
            return;
        }

        const rect = item.getBoundingClientRect();

        const middle = rect.top + rect.height / 2;

        if (event.clientY < middle) {

            list.insertBefore(draggedItem, item);

        } else {

            list.insertBefore(draggedItem, item.nextSibling);

        }
    });
});


// Reset button
resetBtn.addEventListener("click", function () {

    originalItems.forEach(function (item) {

        list.appendChild(item);

    });

});
