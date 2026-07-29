const cover = document.querySelector("#cover");
const portfolio = document.querySelector("#portfolio");
const enterButton = document.querySelector("#enter-button");
const wordmark = document.querySelector("#wordmark");
const aboutPage = document.querySelector("#about-page");
const placeholderPage = document.querySelector("#placeholder-page");
const placeholderTitle = document.querySelector("#placeholder-title");
const menuLinks = document.querySelectorAll(".stitched-link");

let currentPage = "home";

function enterPortfolio() {
  cover.classList.add("leaving");
  portfolio.classList.add("visible");
  document.body.classList.remove("locked");
}

function showAbout() {
  currentPage = "home";
  aboutPage.hidden = false;
  placeholderPage.hidden = true;
  wordmark.setAttribute("aria-label", "Return to the cover");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showPlaceholder(pageName, label) {
  currentPage = pageName;
  aboutPage.hidden = true;
  placeholderPage.hidden = false;
  placeholderTitle.textContent = label;
  wordmark.setAttribute("aria-label", "Return to the about page");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleWordmark() {
  if (currentPage !== "home") {
    showAbout();
    return;
  }

  cover.classList.remove("leaving");
  portfolio.classList.remove("visible");
  document.body.classList.add("locked");
}

enterButton.addEventListener("click", enterPortfolio);
wordmark.addEventListener("click", handleWordmark);
menuLinks.forEach((link) => {
  link.addEventListener("click", () => showPlaceholder(link.dataset.page, link.textContent));
});
