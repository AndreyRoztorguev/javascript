const form = new FormData();
form.append("username", "johndoe");
form.append("username", "asdasd");
form.append("password", "secret");
console.log(Array.from(form.entries()));
