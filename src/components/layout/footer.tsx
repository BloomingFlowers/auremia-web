import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { toast } from "sonner";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <span className="font-serif text-xl">
            {BRAND.name}
            <span className="text-accent ml-0.5">★</span>
          </span>

          <div className="flex gap-12 flex-wrap text-sm">
            <div className="flex flex-col gap-2">
              <h4 className="text-xs uppercase tracking-widest text-foreground mb-1">Shop</h4>
              <Link href="/collection" className="text-muted-foreground hover:text-accent">All Jewelry</Link>
              <Link href="/collection" className="text-muted-foreground hover:text-accent">Necklaces</Link>
              <Link href="/collection" className="text-muted-foreground hover:text-accent">Rings</Link>
              <Link href="/collection" className="text-muted-foreground hover:text-accent">Earrings</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xs uppercase tracking-widest text-foreground mb-1">Help</h4>
              <a className="text-muted-foreground hover:text-accent cursor-pointer">Shipping & Duties</a>
              <a className="text-muted-foreground hover:text-accent cursor-pointer">Returns</a>
              <a className="text-muted-foreground hover:text-accent cursor-pointer">Certificates</a>
              <a className="text-muted-foreground hover:text-accent cursor-pointer">Size Guide</a>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xs uppercase tracking-widest text-foreground mb-1">Company</h4>
              <a className="text-muted-foreground hover:text-accent cursor-pointer">Meet {BRAND.designer}</a>
              <a className="text-muted-foreground hover:text-accent cursor-pointer">Journal</a>
              <a className="text-muted-foreground hover:text-accent cursor-pointer">Privacy</a>
              <a className="text-muted-foreground hover:text-accent cursor-pointer">Terms</a>
            </div>
          </div>

          <div className="flex gap-4 text-lg text-muted-foreground">
            <a className="hover:text-accent cursor-pointer" title="Instagram">◎</a>
            <a className="hover:text-accent cursor-pointer" title="TikTok">♪</a>
            <a className="hover:text-accent cursor-pointer" title="Pinterest">P</a>
          </div>
        </div>

        <div className="flex justify-between mt-8 text-xs text-muted-foreground">
          <span>© 2026 {BRAND.name} · All prices include duties (DDP)</span>
          <span>USD $ · English · Ships worldwide</span>
        </div>
      </div>
    </footer>
  );
}