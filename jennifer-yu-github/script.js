const cover = document.querySelector("#cover");
const portfolio = document.querySelector("#portfolio");
const enterButton = document.querySelector("#enter-button");
const homeButton = document.querySelector("#home-button");

function enterPortfolio() {
  cover.classList.add("leaving");
  portfolio.classList.add("visible");
  document.body.classList.remove("locked");
}

function returnToCover() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  cover.classList.remove("leaving");
  portfolio.classList.remove("visible");
  document.body.classList.add("locked");
}

enterButton.addEventListener("click", enterPortfolio);
homeButton.addEventListener("click", returnToCover);
