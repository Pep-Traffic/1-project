"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header>
        <Link href="/" className="logo">
          <span className="glyph"></span>Empro Labs
        </Link>
        <nav>
          <ul>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Link href="/contact" className="nav-cta">Book a call</Link>
        <button
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobileNav"
          onClick={() => setOpen(true)}
        >
          <span></span>
        </button>
      </header>

      <div className={`mobile-nav${open ? " open" : ""}`} id="mobileNav">
        <button className="close-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
          ✕
        </button>
        <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link href="/contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
          Book a call
        </Link>
      </div>
    </>
  );
}
