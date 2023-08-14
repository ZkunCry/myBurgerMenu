const burgerButton = document.getElementById("burger");
const header = document.querySelector(".header");
const burgerBody = document.getElementById("burger-body");

function removeOpen() {
  header.classList.remove("open");
}

burgerButton.addEventListener("click", () => {
  header.classList.toggle("open")
    ? burgerBody.addEventListener("click", removeOpen)
    : burgerBody.removeEventListener("click", removeOpen);
});
