const message =
  "Thank you for submitting your request. The Royal Family will respond as soon as possible. Please be patient :)";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
