const burgerButton = document.getElementById("burger");
const header = document.querySelector(".header");
const burgerBody = document.getElementById("burger-body");
function removeOpen() {
  header.classList.remove("open");
  console.log("Clicked");
}

burgerButton.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    burgerBody.removeEventListener("click", removeOpen);
  } else {
    header.classList.add("open");
    burgerBody.addEventListener("click", removeOpen);
  }
});
