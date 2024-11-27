let btn = document.getElementById("Button");
let inp = document.getElementById("input");
let ul = document.getElementById("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value; // Set the input value as the list item text
    ul.appendChild(item); // Append the list item to the ul

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    item.appendChild(delbtn); // Append the delete button to the list item

    delbtn.addEventListener("click", function () {
        ul.removeChild(item); // Remove the list item from the ul
    });

    inp.value = ""; // Clear the input field
});
