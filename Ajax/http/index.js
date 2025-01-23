"use strict";

const request = new XMLHttpRequest();
request.onload = function (event) {
  if (request.status === 200) {
    const html = event.target.responseText;
    document.body.innerHTML = html;
  }
};
request.open("GET", "https://jsonplaceholder.typicode.com/posts?_limit=2");
request.setRequestHeader("Accept", "text/html"); // not nessesary its default value
request.send();
