import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/program.css";
import "../styles/crew.css";

import { mountNavbar } from "../components/navbar";
import { mountFooter } from "../components/footer";
import { crewGroups, type CrewMember } from "../data/crew";

mountNavbar("ucastnici");
mountFooter();

function renderMember(member: CrewMember): string {
  return `
    <div class="crew-card">
      <div class="crew-card__avatar${member.avatar.includes("clovek-2") ? " crew-card__avatar--light" : ""}">
        <img src="${member.avatar}" alt="" />
      </div>
      <p class="crew-card__name">${member.name}</p>
      <span class="crew-card__role">${member.role}</span>
    </div>`;
}

const root = document.querySelector<HTMLElement>("#crew-root");
if (root) {
  root.innerHTML = crewGroups
    .map(
      (group) => `
      <section class="crew-group">
        <h2 class="crew-group__title">${group.title}</h2>
        <div class="crew-grid">
          ${group.members.map(renderMember).join("")}
        </div>
      </section>`
    )
    .join("");
}
