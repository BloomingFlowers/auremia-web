"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { BRAND } from "@/lib/brand";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Header() {
  const { count, open } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center text-xs tracking-wide py-2.5 px-4">
        Complimentary engraving on every order ✦ Insured worldwide shipping, duties included
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <nav className="mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Nav links (desktop) */}
          <nav className="hidden lg:flex gap-8 text-sm">
            <Link href="/collection" className="hover:text-accent transition-colors">
              The Edit
            </Link>
            <Link href="/collection" className="hover:text-accent transition-colors">
              New Arrivals
            </Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="font-serif text-xl tracking-wider absolute left-1/2 -translate-x-1/2">
            {BRAND.name}
            <span className="text-accent ml-0.5">★</span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-5 text-sm">
            <button
              className="hidden sm:block hover:text-accent transition-colors"
              onClick={() => toast("Search — coming soon")}
            >
              Search
            </button>
            <button onClick={() => toast("EN / USD")}>EN / USD</button>
            <button onClick={open} className="relative flex items-center gap-1 hover:text-accent transition-colors">
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Bag</span>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden flex flex-col gap-4 px-6 py-4 border-t border-border text-sm">
            <Link href="/collection" onClick={() => setMenuOpen(false)}>
              The Edit
            </Link>
            <Link href="/collection" onClick={() => setMenuOpen(false)}>
              New Arrivals
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}