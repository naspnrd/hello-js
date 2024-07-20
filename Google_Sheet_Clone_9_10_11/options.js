let selectedCell = "";
const activeCellElement = document.querySelector(".selected-cell");
const form = document.querySelector("#options-form");
const expressionInput = document.getElementById("expression");
const state = {};
/*
state = {
  A1: {
    innerText: "Neeraj",
    isBold: true,
    isItalic: true,
    isUnderlined: true,
    align: "right",
    fontSize: "16",
    fontFamily: "normal",
    color: "#000000",
    backgroundColor: "#ffffff"
  },
   D1: {
    innerText: "Chaudhary",
    isBold: true,
    isItalic: false,
    isUnderlined: true,
    align: "center",
    fontSize: "26",
    fontFamily: "normal",
    color: "#000000",
    backgroundColor: "#ffffff"
  }
}
*/

const defaultState = {
  innerText: "",
  isBold: false,
  isItalic: false,
  isUnderlined: false,
  align: "left",
  fontSize: "16",
  fontFamily: "default",
  textColor: "#000000",
  backgroundColor: "#ffffff",
};

body.addEventListener("click", (event) => {
  form.reset();
  if (selectedCell) selectedCell.classList.remove("active-cell");

  selectedCell = event.target;
  // console.log(selectedCell);
  activeCellElement.innerText = selectedCell.id;
  selectedCell.classList.add("active-cell");
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell?.innerText,
    };
    return;
  }
  state[selectedCell.id] = {
    ...state[selectedCell.id],
    innerText: selectedCell?.innerText,
  };
  applyCellInfoToForm();
});

body.addEventListener("input", (event) => {
  selectedCell = event.target;
  if (!state[selectedCell.id]) {
    state[selectedCell.id] = {
      ...defaultState,
      innerText: selectedCell?.innerText,
    };
    return;
  }
  state[selectedCell.id] = {
    ...state[selectedCell.id],
    innerText: selectedCell?.innerText,
  };
  applyCellInfoToForm();
});

form.addEventListener("change", () => {
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

  // HW
  // const formData = {};

  // Array.from(form.elements).forEach((element) => {
  //   if (element.name) {
  //     if (element.type === "checkbox") {
  //       formData[element.name] = element.checked;
  //     } else {
  //       formData[element.name] = element.value;
  //     }
  //   }
  // });

  state[selectedCell.id] = {
    ...formData,
    innerText: selectedCell.innerText,
  };

  console.log({ formData });
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

// HW
// function applyStylesToselectedCell(styles) {
//   const styleMappings = {
//     fontSize: "px",
//     fontFamily: "",
//     fontWeight: (value) => (value ? "bold" : "normal"),
//     fontStyle: (value) => (value ? "italic" : "normal"),
//     textDecoration: (value) => (value ? "underline" : "none"),
//     textAlign: "",
//     color: "",
//     backgroundColor: "",
//   };

//   // debugger;
//   for (const [key, suffixOrFunc] of Object.entries(styleMappings)) {
//     // if (styles[key] !== undefined) { // here is the error
//     if (typeof suffixOrFunc === "function") {
//       selectedCell.style[key] = suffixOrFunc(key); // error here too
//     } else {
//       selectedCell.style[key] = styles[key] + suffixOrFunc;
//     }
//     // }
//   }
// }

expressionInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    // const expressionResult = eval(event && event.target && event.target.value);
    const expressionResult = eval(event?.target?.value);
    selectedCell.innerText = expressionResult;
  }
});

function applyCellInfoToForm() {
  if (!state[selectedCell.id]) {
    // focused for the first time
    return;
  }
  synFormOptions(state[selectedCell.id]);
}

function synFormOptions(selectedCellState) {
  // form["fontFamily"].value = selectedCellState.fontFamily;
  // form["fontSize"].value = selectedCellState.fontSize;
  // form["isBold"].checked = selectedCellState.isBold;
  // form["isItalic"].checked = selectedCellState.isItalic;
  // form["isUnderlined"].checked = selectedCellState.isUnderlined;
  // form["align"].value = selectedCellState.align;
  // form["textColor"].value = selectedCellState.textColor;
  // form["backgroundColor"].value = selectedCellState.backgroundColor;
  for (let key in selectedCellState) {
    if (key === "isBold" || key === "isItalic" || key === "isUnderlined") {
      form[key].checked = selectedCellState[key];
    } else if (key === "innerText") {
      continue;
    } else form[key].value = selectedCellState[key];
  }
}
