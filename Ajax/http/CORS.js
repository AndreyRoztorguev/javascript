"use strict";

const request = new XMLHttpRequest();
request.onload = function (event) {
  if (request.status === 200) {
    const html = event.target.responseText;
    document.body.innerHTML = html;
  }
};
request.open("GET", "http://localhost:3000/");
request.setRequestHeader("Accept", "text/html");
request.send();
