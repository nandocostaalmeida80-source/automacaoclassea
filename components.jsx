/* global React */
const { useState, useEffect, useRef } = React;

/* =========================================================
   Instructor portrait — stylized placeholder
   Uses subtle stripes + SVG silhouette so it looks intentional
   instead of an empty box. User can replace with real photo.
   ========================================================= */
function InstructorPortrait({ name, title, badge, large, src }) {
  return (
    <div className={"instructor-stage" + (large ? " square" : "")}>
      <img className="instructor-img" src={(src || "assets/instructor.png") + "?v=5"} alt={name} />
      <div className="instructor-caption">
        <div>
          <div className="name">{name}</div>
          <div className="title">{title}</div>
        </div>
        {badge && <div className="badge">{badge}</div>}
      </div>
    </div>
  );
}

/* =========================================================
   Check icon (gold)
   ========================================================= */
function GoldCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8.5" stroke="currentColor" strokeOpacity="0.35" />
      <path
        d="M5 9.2 L8 12 L13 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   Pillar icons — geometric, brand-neutral
   ========================================================= */
function IconHome() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 12 L14 4 L24 12 V23 a1 1 0 0 1 -1 1 H5 a1 1 0 0 1 -1 -1 z" />
      <path d="M11 24 V16 H17 V24" />
      <circle cx="14" cy="11" r="1.2" fill="currentColor" />
      <path d="M11 8.5 q3 -2.5 6 0" />
      <path d="M9 6.5 q5 -4 10 0" opacity="0.6" />
    </svg>
  );
}
function IconAV() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="4" y="6" width="20" height="12" rx="1.5" />
      <path d="M10 22 H18" />
      <path d="M14 18 V22" />
      <circle cx="14" cy="12" r="3" />
      <path d="M14 12 m-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0" fill="currentColor" />
    </svg>
  );
}
function IconVacuum() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="14" cy="14" r="9" />
      <circle cx="14" cy="14" r="4" />
      <path d="M14 5 V9" />
      <path d="M14 19 V23" />
      <path d="M5 14 H9" />
      <path d="M19 14 H23" />
      <path d="M7.5 7.5 L10 10" />
      <path d="M18 18 L20.5 20.5" />
    </svg>
  );
}

/* =========================================================
   Countdown to a target date (live)
   ========================================================= */
function Countdown({ targetISO }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date(targetISO);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="countdown">
      <div className="unit"><div className="num">{pad(d)}</div><div className="lbl">Dias</div></div>
      <div className="unit"><div className="num">{pad(h)}</div><div className="lbl">Horas</div></div>
      <div className="unit"><div className="num">{pad(m)}</div><div className="lbl">Min</div></div>
      <div className="unit"><div className="num">{pad(s)}</div><div className="lbl">Seg</div></div>
    </div>
  );
}

/* =========================================================
   Marquee strip — tech/value props
   ========================================================= */
function Strip({ items }) {
  // duplicate for seamless loop
  const list = [...items, ...items];
  return (
    <div className="strip">
      <div className="strip-track">
        {list.map((it, i) => (
          <span key={i} className="strip-item">{it}</span>
        ))}
      </div>
    </div>
  );
}

/* expose */
Object.assign(window, {
  InstructorPortrait,
  GoldCheck,
  IconHome,
  IconAV,
  IconVacuum,
  Countdown,
  Strip,
});
