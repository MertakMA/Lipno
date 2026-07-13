import "../styles/tokens.css";
import "../styles/base.css";
import "../styles/navbar.css";
import "../styles/hero.css";
import "../styles/story.css";

import { mountNavbar } from "../components/navbar";
import { mountCountdown } from "../components/countdown";
import { TRIP_START } from "../data/config";

mountNavbar(null);
mountCountdown(TRIP_START);

document.querySelector(".landing-end__top")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
