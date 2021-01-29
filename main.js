import { Typewriter } from "./typewriter.js";

document.querySelectorAll(".typewriter").forEach((el) => {
  const strings = ["a software developer.", "a fourth-year student at UofT.", "a Chemist.", "an anime binge watcher.", 
  "a video game lover and a UofT CSGO Varsity Team Captain for 2 years.", "the proud owner of 2 lovely cats (see below)!", "a basketball player and Raptors fan!"];
  new Typewriter(el, strings);
});

// Convert all anchors into smooth scroll actions
document.querySelectorAll("a.js-anchor").forEach(
  /** @param {HTMLAnchorElement} el*/ (el) => {
    const hash = new URL(el.href).hash;
    const targetElement = document.querySelector(hash);
    el.removeAttribute("href");
    el.addEventListener("click", () =>
      targetElement.scrollIntoView({ behavior: "smooth" })
    );
  }
);
