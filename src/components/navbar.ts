export type NavKey = "program" | "ucastnici" | "dobre-vedet" | null;

const NAV_ITEMS: { key: Exclude<NavKey, null>; label: string; href: string }[] = [
  { key: "program", label: "PROGRAM", href: "/program.html" },
  { key: "ucastnici", label: "CREW", href: "/ucastnici.html" },
  { key: "dobre-vedet", label: "DOBRÉ VĚDĚT", href: "/dobre-vedet.html" },
];

export function renderNavbar(active: NavKey): string {
  const links = NAV_ITEMS.map(
    (item) => `
      <a href="${item.href}" class="navbar__link${item.key === active ? " is-active" : ""}">
        ${item.label}
      </a>`
  ).join("");

  return `
    <header class="navbar">
      <div class="navbar__inner">
        <a href="/" class="navbar__logo">LIPNO</a>
        <nav class="navbar__nav" aria-label="Hlavní navigace">${links}</nav>
      </div>
    </header>`;
}

export function mountNavbar(active: NavKey): void {
  const el = document.querySelector<HTMLDivElement>("#navbar-root");
  if (!el) return;
  el.innerHTML = renderNavbar(active);

  const header = el.querySelector<HTMLElement>(".navbar");
  if (!header) return;

  // The navbar is fixed, so content below needs matching padding — kept in
  // sync via ResizeObserver since day-tabs (added later, on den.html) or
  // narrow viewports can make the navbar wrap onto a second line.
  const syncPadding = () => {
    document.body.style.paddingTop = `${header.getBoundingClientRect().height}px`;
  };
  syncPadding();
  new ResizeObserver(syncPadding).observe(header);
}
