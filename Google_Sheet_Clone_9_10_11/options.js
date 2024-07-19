let selectedCell = "";
const activeCellElement = document.querySelector(".selected-cell");
const form = document.querySelector("#options-form");
body.addEventListener("click", (event) => {
  if (selectedCell) selectedCell.classList.remove("active-cell");

  selectedCell = event.target;
  console.log(selectedCell);
  activeCellElement.innerText = selectedCell.id;
  selectedCell.classList.add("active-cell");
});

form.addEventListener("change", () => {
  console.log("change event triggerred");
  if (!selectedCell) {
    alert("Please select a cell before making any change on the options");
    form.reset();
    return;
  }
  const formData = {
    fontFamily: form["fontFamily"].value,
    fontSize: form["fontSize"].value,
    isBold: form["isBold"].checked,
    isItalic: form["isItalic"].checked,
    isUnderlined: form["isUnderlined"].checked,
    align: form["align"].value,
    textColor: form["textColor"].value,
    backgroundColor: form["backgroundColor"].value,
  };
  console.log(formData);
  applyStylesToselectedCell(formData);
});

function applyStylesToselectedCell(styles) {
  selectedCell.style.fontSize = styles.fontSize + "px";
  selectedCell.style.fontFamily = styles.fontFamily;
  selectedCell.style.fontWeight = styles.isBold ? "bold" : "normal";
  selectedCell.style.fontStyle = styles.isItalic ? "italic" : "normal";
  selectedCell.style.textDecoration = styles.isUnderlined
    ? "underline"
    : "none";
  selectedCell.style.textAlign = styles.align; // "left" | "right" | "center"
  selectedCell.style.color = styles.textColor;
  selectedCell.style.backgroundColor = styles.backgroundColor;
}
