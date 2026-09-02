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
          <img src="/brand/logo.png" alt="Empro Labs" className="logo-img" />
        </Link>
        <nav>
          <ul>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Link href="/contact" className="nav-cta">
          <svg className="icon-draw" viewBox="0 0 24 24" fill="none">
            <path
              d="M6.5 3.5H9.5L11 8L8.5 9.5C9.4 11.5 11 13.1 13 14L14.5 11.5L19 13V16C19 17.1 18.1 18 17 18C10.1 17.6 4.4 11.9 4 5C4 3.9 4.9 3 6 3L6.5 3.5Z"
              pathLength="1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          Book a call
        </Link>
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
          <svg className="icon-draw" viewBox="0 0 24 24" fill="none">
            <path
              d="M6.5 3.5H9.5L11 8L8.5 9.5C9.4 11.5 11 13.1 13 14L14.5 11.5L19 13V16C19 17.1 18.1 18 17 18C10.1 17.6 4.4 11.9 4 5C4 3.9 4.9 3 6 3L6.5 3.5Z"
              pathLength="1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          Book a call
        </Link>
      </div>
    </>
  );
}
