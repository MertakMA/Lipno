import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/program.css";

import { mountNavbar } from "../components/navbar";
import { mountFooter } from "../components/footer";
import { days } from "../data/days";

mountNavbar("program");
mountFooter();

const grid = document.querySelector<HTMLElement>("#day-grid");
if (grid) {
  grid.innerHTML = days
    .map(
      (day) => `
      <a class="day-card" href="/den.html?day=${day.id}">
        <img class="day-card__image" src="${day.photo}" alt="${day.title}" />
        <img class="day-card__frame" src="/images/program/day-card-bg.png" alt="" />
        <span class="day-card__label">${day.roman}</span>
      </a>`
    )
    .join("");
}
