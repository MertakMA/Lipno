const UNITS: { key: keyof Remaining; label: string }[] = [
  { key: "days", label: "dní" },
  { key: "hours", label: "hodin" },
  { key: "minutes", label: "minut" },
  { key: "seconds", label: "sekund" },
];

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getRemaining(target: Date): Remaining {
  const diff = Math.max(0, target.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function mountCountdown(target: Date): void {
  const root = document.querySelector<HTMLDivElement>("#countdown-root");
  if (!root) return;

  root.innerHTML = `
    <p class="countdown__label">Startuje za</p>
    <div class="countdown__grid">
      ${UNITS.map(
        (unit) => `
        <div class="countdown__box">
          <span class="countdown__value" data-unit="${unit.key}">00</span>
          <span class="countdown__unit">${unit.label}</span>
        </div>`
      ).join("")}
    </div>`;

  const update = () => {
    const remaining = getRemaining(target);
    for (const unit of UNITS) {
      const el = root.querySelector<HTMLSpanElement>(`[data-unit="${unit.key}"]`);
      if (el) el.textContent = String(remaining[unit.key]);
    }
  };

  update();
  window.setInterval(update, 1000);
}
