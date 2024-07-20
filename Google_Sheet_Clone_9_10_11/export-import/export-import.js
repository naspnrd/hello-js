const downloadButton = document.getElementById("download");

let jsonObject = {
  name: "Neeraj",
  age: 25,
  profession: "Software Developer",
};
downloadButton.addEventListener("click", () => {
  // TODO: download the JSON file
  // .json extension
  const stringifiedData = JSON.stringify(jsonObject);
  //   const blob = new Blob([], {type: "plain/text"})
  const blob = new Blob([stringifiedData], { type: "application/json" });
  const downloadableUrl = URL.createObjectURL(blob);
  console.log(downloadableUrl);
  let a = document.createElement("a");
  a.download = "sheet.json";
  a.href = downloadableUrl;
  a.innerText = "Download a file";
  //   document.body.appendChild(a);
  a.click(); // implicit click
});

// To donwload a file, first we need a file?
// So we need to create a file

const upload = document.getElementById("upload");
upload.addEventListener("change", (event) => {
  let file = upload.files[0];
  console.log(file);
  if (file.type === "application/json") {
    // do something here
    const fileReader = new FileReader();
    fileReader.onload = function (event) {
      console.log(JSON.parse(event.target.result));
    };
    fileReader.readAsText(file);
  } else {
    alert("Please upload json file");
  }
});
