"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const links = [
  { href: "/#subjects", label: "Subjects" },
  { href: "/#matching", label: "Matching" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#platform", label: "Platform" },
  { href: "/#faq", label: "FAQs" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="h-11 min-h-11 w-11 border border-border p-0"
        onClick={() => setOpen((value) => !value)}
        variant="inverse"
      >
        {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
      </Button>
      <nav
        aria-label="Mobile navigation"
        className="absolute inset-x-0 top-full border-b border-border bg-white px-4 pb-5 pt-2 shadow-sm"
        hidden={!open}
        id="mobile-navigation"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
          {links.map((link) => (
            <a
              className="rounded-md px-3 py-3 text-base font-semibold text-ink hover:bg-muted"
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link className="mt-2 inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-5 font-bold text-white" href="/#subjects" onClick={() => setOpen(false)}>
            Explore subjects
          </Link>
        </div>
      </nav>
    </div>
  );
}
