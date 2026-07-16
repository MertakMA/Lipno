import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/den.css";
import "../styles/blocks.css";

import { mountNavbar } from "../components/navbar";
import { mountFooter } from "../components/footer";
import { days, getDay, renderDayItem } from "../data/days";

mountNavbar("program");
mountFooter();

const tabsRoot = document.createElement("div");
tabsRoot.className = "day-tabs";
document.querySelector(".navbar__inner")?.insertBefore(tabsRoot, document.querySelector(".navbar__nav"));

const detailRoot = document.querySelector<HTMLElement>("#day-detail-root");

function readDayIdFromUrl(): number {
  const param = Number(new URLSearchParams(window.location.search).get("day"));
  return days.some((day) => day.id === param) ? param : 1;
}

function renderTabs(activeId: number): void {
  if (!tabsRoot) return;
  tabsRoot.innerHTML = days
    .map(
      (day) => `
      <button type="button" class="day-tabs__tab${day.id === activeId ? " is-active" : ""}" data-day="${day.id}">
        ${day.roman}
      </button>`
    )
    .join("");
}

function renderDetail(activeId: number): void {
  if (!detailRoot) return;
  const day = getDay(activeId);
  if (!day) return;

  detailRoot.innerHTML = `
    <header class="day-detail__header">
      <span class="day-detail__roman">${day.roman}</span>
      <p class="day-detail__title">${day.title}</p>
    </header>
    <img class="day-detail__photo" src="${day.photo}" alt="${day.title}" />
    ${day.sections
      .map(
        (section) => `
        <section class="info-block">
          <h2 class="info-block__heading">${section.heading}</h2>
          <ul class="info-block__list">
            ${section.items.map(renderDayItem).join("")}
          </ul>
        </section>`
      )
      .join("")}`;
}

function showDay(id: number): void {
  renderTabs(id);
  renderDetail(id);
  const url = new URL(window.location.href);
  url.searchParams.set("day", String(id));
  window.history.replaceState({}, "", url);
}

tabsRoot?.addEventListener("click", (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-day]");
  if (!button) return;
  showDay(Number(button.dataset.day));
});

showDay(readDayIdFromUrl());
