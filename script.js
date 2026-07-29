const cover = document.querySelector("#cover");
const enterButton = document.querySelector("#enter-button");

enterButton.addEventListener("click", () => {
  cover.classList.add("leaving");
  window.setTimeout(() => {
    window.location.href = "about.html";
  }, 520);
});
