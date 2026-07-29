const cover = document.querySelector("#cover");
const portfolio = document.querySelector("#portfolio");
const enterButton = document.querySelector("#enter-button");
const wordmark = document.querySelector("#wordmark");
const menuPage = document.querySelector("#menu-page");
const innerPage = document.querySelector("#inner-page");
const innerTitle = document.querySelector("#inner-title");
const menuLinks = document.querySelectorAll(".menu-link");

let currentPage = "home";

function enterPortfolio() {
  cover.classList.add("leaving");
  portfolio.classList.add("visible");
  document.body.classList.remove("locked");
}

function showMenu() {
  currentPage = "home";
  menuPage.hidden = false;
  innerPage.hidden = true;
  wordmark.setAttribute("aria-label", "Return to the cover");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showInnerPage(pageName, label) {
  currentPage = pageName;
  menuPage.hidden = true;
  innerPage.hidden = false;
  innerTitle.textContent = label;
  wordmark.setAttribute("aria-label", "Return to the portfolio menu");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleWordmark() {
  if (currentPage !== "home") {
    showMenu();
    return;
  }

  cover.classList.remove("leaving");
  portfolio.classList.remove("visible");
  document.body.classList.add("locked");
}

enterButton.addEventListener("click", enterPortfolio);
wordmark.addEventListener("click", handleWordmark);
menuLinks.forEach((link) => {
  link.addEventListener("click", () => showInnerPage(link.dataset.page, link.textContent));
});
