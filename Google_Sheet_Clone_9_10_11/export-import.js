const download = document.getElementById("download");
const upload = document.getElementById("upload");

download.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state)], { type: "application/json" });
  const downloadableUrl = URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.href = downloadableUrl;
  link.download = "google-spreadsheet.json";
  link.click();
});

upload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  console.log(file);
  if (!file.type === "application/json") {
    alert("Please upload json file only");
    return;
  }
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const fileData = JSON.parse(event?.target?.result);
    console.log(fileData);
    // HW:  fill all the cells of the sheet with the fileData
  };
  fileReader.readAsText(file);
});

// HW: Implement multisheet functionality

/*
    * Every sheet will have their own state object
    AllSheets: {
        sheet1: {
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
        },
        sheet2: {
            D1: {
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
            F9: {
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
        },
        sheet3: state3,

    }
    // define sheets as radio button
*/
