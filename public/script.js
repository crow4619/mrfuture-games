const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const introRoot = document.querySelector(".is-intro");

if (introRoot) {
  const finishIntro = () => introRoot.classList.remove("is-intro");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    finishIntro();
  } else {
    const introAnimations = document
      .getAnimations()
      .filter((animation) => animation.effect?.target?.closest(".is-intro"));

    Promise.allSettled(introAnimations.map((animation) => animation.finished)).then(finishIntro);
  }
}
