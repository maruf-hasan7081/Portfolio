"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, PERSONAL_INFO_PATH } from "@/lib/navLinks";

export default function SiteNavbar({ profile, active = "home" }) {
  const [current, setCurrent] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useRef(null);
  const menu = useRef(null);
  const menuButton = useRef(null);

  useEffect(() => {
    const updateHash = () => setCurrent(window.location.hash || "#home");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    menu.current?.querySelector("a")?.focus({ preventScroll: true });

    function closeOutside(event) {
      if (!nav.current?.contains(event.target)) setMenuOpen(false);
    }

    const desktop = window.matchMedia("(min-width: 72rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  function toggleTheme() {
    const root = document.documentElement;
    const theme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The current page still supports theme changes when storage is disabled.
    }
  }

  if (!profile) return null;

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (menuOpen && event.key === "Escape") {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <nav ref={nav} className="site-nav" aria-label="Main navigation">
        <Link href="/#home" className="brand" onClick={() => { setCurrent("#home"); setMenuOpen(false); }}>
          <span className="brand-mark" aria-hidden>{profile.site_name?.trim().charAt(0) || "M"}</span>
          <span className="brand-name">{profile.site_name}</span>
        </Link>

        <ul ref={menu} id="site-links" className="site-links" data-open={menuOpen}>
          {NAV_LINKS.map(({ href, label, isPersonalPage }) => {
            const selected =
              isPersonalPage || href === PERSONAL_INFO_PATH
                ? active === "personal"
                : href === `/${current}`;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={selected ? (active === "personal" ? "page" : "location") : undefined}
                  onClick={() => {
                    setMenuOpen(false);
                    if (href.startsWith("/#")) setCurrent(href.slice(1));
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          {profile.cv_pdf_url ? (
            <a className="btn cv-button" href={profile.cv_pdf_url} download aria-label="Download CV" title="Download CV">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4" /></svg>
              <span>Download CV</span>
            </a>
          ) : null}
          <button type="button" className="btn icon-button theme-button" onClick={toggleTheme} title="Switch color theme">
            <span className="theme-light">
              <span className="sr-only">Switch to dark mode</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M20.5 14.3A8.8 8.8 0 0 1 9.7 3.5a8.8 8.8 0 1 0 10.8 10.8Z" /></svg>
            </span>
            <span className="theme-dark">
              <span className="sr-only">Switch to light mode</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></svg>
            </span>
          </button>
          <button
            ref={menuButton}
            className="btn icon-button menu-button"
            type="button"
            aria-controls="site-links"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d={menuOpen ? "m6 6 12 12M6 18 18 6" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
