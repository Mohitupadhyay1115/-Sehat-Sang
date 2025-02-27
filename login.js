const form = document.getElementById("login-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const password = document.getElementById("password").value;

  if (fullname === "kartikey sharma" && password === "21june2001") {
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password!");
  }
});
