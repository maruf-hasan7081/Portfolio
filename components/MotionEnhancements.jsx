"use client";

import { useEffect } from "react";

function bindTilt(element, maxTilt = 9) {
  const onMove = (event) => {
    const rect = element.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    element.style.setProperty("--tilt-x", `${-py * maxTilt}deg`);
    element.style.setProperty("--tilt-y", `${px * maxTilt}deg`);
    element.style.setProperty("--tilt-glare", `${0.28 + Math.hypot(px, py) * 0.35}`);
  };

  const onLeave = () => {
    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
    element.style.setProperty("--tilt-glare", "0");
  };

  element.addEventListener("mousemove", onMove);
  element.addEventListener("mouseleave", onLeave);
  return () => {
    element.removeEventListener("mousemove", onMove);
    element.removeEventListener("mouseleave", onLeave);
  };
}

export default function MotionEnhancements({ children }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -3% 0px" }
    );

    const observeReveals = () => {
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => observer.observe(el));
    };

    const tiltCleanups = new Map();
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const bindAllTilt = () => {
      if (!canHover) return;
      tiltCleanups.forEach((cleanup, element) => {
        if (element.isConnected) return;
        cleanup();
        tiltCleanups.delete(element);
      });
      document.querySelectorAll("[data-tilt]").forEach((el) => {
        if (tiltCleanups.has(el)) return;
        const depth = Number(el.getAttribute("data-tilt")) || 9;
        tiltCleanups.set(el, bindTilt(el, depth));
      });
    };

    observeReveals();
    bindAllTilt();
    const mutation = new MutationObserver(() => {
      observeReveals();
      bindAllTilt();
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    let scrollTicking = false;

    const updateMotionOnScroll = () => {
      const scrollY = window.scrollY;
      document.querySelector(".site-header")?.classList.toggle("is-scrolled", scrollY > 16);
    };

    const onScroll = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        updateMotionOnScroll();
        scrollTicking = false;
      });
    };

    updateMotionOnScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      root.classList.remove("motion-ready");
      observer.disconnect();
      mutation.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      tiltCleanups.forEach((cleanup) => cleanup());
      tiltCleanups.clear();
    };
  }, []);

  return children;
}
