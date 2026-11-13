"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#projects", label: "Work", en: "01" },
  { href: "#about", label: "About", en: "02" },
  { href: "#timeline", label: "Journey", en: "03" },
  { href: "#experience", label: "Experience", en: "04" },
  { href: "#skills", label: "Skills", en: "05" },
  { href: "#contact", label: "Contact", en: "06" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      const sections = LINKS.map((link) => document.querySelector(link.href)).filter((node): node is Element => !!node);
      const current = sections.filter((section) => section.getBoundingClientRect().top <= 180).at(-1);
      setActive(current ? "#" + current.id : "");
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const closeOnDesktop = () => { if (window.innerWidth >= 768) setOpen(false); onScroll(); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", closeOnDesktop);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", closeOnDesktop); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={"site-header " + (scrolled || open ? "is-scrolled" : "")}>
      <nav className="site-container nav-inner" aria-label="Main navigation">
        <a href="#top" className="site-logo" onClick={() => setOpen(false)}>K<span className="text-accent">.</span><span className="mono">KENNY LIN</span></a>
        <ul className="desktop-nav">{LINKS.map((link) => <li key={link.href}><a href={link.href} aria-current={active === link.href ? "location" : undefined}><span>{link.label}</span><span className="mono">{link.en}</span></a></li>)}</ul>
        <div className="nav-actions"><a href={process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://nothingbutzzz.github.io/"} lang="zh-Hant" className="language-link" aria-label="Chinese portfolio">中文 <span aria-hidden="true">↗</span></a><button ref={menuButton} type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? "Close ×" : "Menu ☰"}</button></div>
      </nav>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {LINKS.map((link) => <a key={link.href} href={link.href} aria-current={active === link.href ? "location" : undefined} onClick={() => setOpen(false)}><span>{link.label}</span><span className="mono">{link.en} ↗</span></a>)}
      </nav>
    </header>
  );
}
