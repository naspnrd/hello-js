// fetch("https://jsonplaceholder.typicode.com/posts", {})
//   .then((response) => response.json())
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log(err));

// .json()
// .text()
// .blob()
// .arrayBuffer()

// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const resp = await response.json();
//   console.log({ resp });
// }
// fetchData();

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  });

  const resp = await response.json();
  console.log({ resp });
}
fetchData();

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
// })
//   .then((response) => response.json())
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log(err));
