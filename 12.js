function init() {
    var li = ["a", "b", "c", "d", "e","Rachappa", "f","g"];
    var ol = document.querySelector("ol"); // Moved out of the loop

    li.forEach(element => {
        var listItem = document.createElement("li"); // Use `listItem` for clarity
        listItem.innerText = element;
        listItem.style.color="red"
        ol.appendChild(listItem); // Corrected the typo in `appendChild`
    });
}
