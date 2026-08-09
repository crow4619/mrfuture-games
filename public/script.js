const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const introLogo = document.querySelector(".studio-logo");

if (introLogo) {
  const finishIntro = () => document.body.classList.remove("is-intro");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    finishIntro();
  } else {
    introLogo.addEventListener("animationend", finishIntro, { once: true });
  }
}
