import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/den.css";
import "../styles/blocks.css";

import { mountNavbar } from "../components/navbar";
import { mountFooter } from "../components/footer";
import { practicalInfo } from "../data/practical-info";
import { renderDayItem } from "../data/days";

mountNavbar("dobre-vedet");
mountFooter();

const root = document.querySelector<HTMLElement>("#info-root");
if (root) {
  root.innerHTML = practicalInfo
    .map(
      (section) => `
      <section class="info-block">
        <h2 class="info-block__heading">${section.heading}</h2>
        <ul class="info-block__list">
          ${section.items.map(renderDayItem).join("")}
        </ul>
      </section>`
    )
    .join("");
}
