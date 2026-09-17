import { useEffect, useState } from "react";

/**
 * Hide floating widgets while the home hero (#home) is in view.
 * Returns true when the hero covers the interesting part of the
 * viewport, so quick-action bubbles don't sit on top of hero text.
 * On pages without #home the widgets always stay visible.
 */
export default function useHideOverHero() {
  const [hidden, setHidden] = useState(() => {
    if (typeof document === "undefined") return false;
    const hero = document.getElementById("home");
    if (!hero) return false;
    const r = hero.getBoundingClientRect();
    return r.top < window.innerHeight * 0.7 && r.bottom > window.innerHeight * 0.3;
  });

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      /* hero is ~100svh — consider it "in view" until ~30% remains */
      { threshold: [0, 0.3] }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return hidden;
}
