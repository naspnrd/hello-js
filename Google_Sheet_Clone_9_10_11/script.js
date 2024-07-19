const rows = 100;
const columns = 27; // A-D
const headRow = document.querySelector(".head-row");
const headCol = document.querySelector(".serialNo");
const body = document.querySelector(".body");

for (let i = 0; i < columns; i++) {
  const headCell = document.createElement("div");
  if (i === 0) {
    // headRow.appendChild(headCell);
    continue;
  }
  headCell.innerText = String.fromCharCode(i + 64); // 1 + 64 = 65 => A
  headCell.classList.add("col-head");
  headRow.appendChild(headCell);
}

for (let i = 0; i < rows; i++) {
  const headColCell = document.createElement("div");
  headColCell.innerText = i + 1;
  headColCell.classList.add("sno-cell");
  headCol.appendChild(headColCell);
}

for (let row = 1; row <= rows; row++) {
  const rowCells = document.createElement("div");
  rowCells.classList.add("row");
  for (let col = 1; col < columns; col++) {
    const colCell = document.createElement("cite");
    colCell.contentEditable = true;
    colCell.classList.add("cell");
    colCell.id = `${String.fromCharCode(64 + col)}${row}`;
    rowCells.appendChild(colCell);
  }
  body.appendChild(rowCells);
}
