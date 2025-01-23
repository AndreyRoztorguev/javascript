const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=2", {
    method: "GET",
    Accept: "application/json",
    "Content-Type": "application/json",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
};
getData();
