"use client";

import { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { Menu } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const sectionIds = portfolio.navItems.map((item) => item.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `relative py-1 text-sm font-medium transition-colors ${
      active === id ? "text-teal" : "text-navy/80 hover:text-teal"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-navy/10 bg-white/90 shadow-[0_1px_12px_rgba(20,43,59,0.06)] backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-serif text-xl font-bold tracking-tight text-navy">
          VAISHNAV M<span className="text-gold">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {portfolio.navItems.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === id ? "true" : undefined}
                className={linkClass(id)}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300 ${
                    active === id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
          <Button type="primary" href="#contact" size="large" shape="round">
            Get in Touch
          </Button>
        </nav>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-navy/15 text-navy transition-colors hover:bg-navy/5 lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <Drawer
        title={
          <span className="font-serif text-lg font-bold text-navy">
            VAISHNAV M<span className="text-gold">.</span>
          </span>
        }
        placement="right"
        size={300}
        open={open}
        onClose={() => setOpen(false)}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {portfolio.navItems.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active === id ? "true" : undefined}
                className={`border-b border-navy/10 py-4 text-base font-medium transition-colors ${
                  active === id ? "text-teal" : "text-navy"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <Button
            type="primary"
            size="large"
            shape="round"
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6"
            block
          >
            Get in Touch
          </Button>
        </nav>
      </Drawer>
    </header>
  );
}
