export function renderFooter(): string {
  return `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <a href="/" class="site-footer__logo">LIPNO</a>
        <p class="site-footer__byline">- 2026 -<br />Mertic</p>
        <button type="button" class="site-footer__top" aria-label="Nahoru">
          <img src="/images/shared/arrow-up.svg" alt="" />
        </button>
      </div>
    </footer>`;
}

export function mountFooter(): void {
  const el = document.querySelector<HTMLDivElement>("#footer-root");
  if (!el) return;
  el.innerHTML = renderFooter();
  el.querySelector(".site-footer__top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
