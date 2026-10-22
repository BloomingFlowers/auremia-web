import Link from "next/link";
import { BRAND } from "@/lib/brand";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export default function HomePage() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a1614] via-[#2B2620] to-[#12100C] text-[#F2EDE2] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <span className="text-[400px] leading-none">★</span>
        </div>
        <div className="relative mx-auto px-6 lg:px-10 py-20 lg:py-28 max-w-5xl text-center">
          <div className="text-xs tracking-[0.2em] uppercase text-[#A8874F] mb-4">
            The Independent Edit · Autumn
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl font-light leading-tight mb-5">
            Self-made,
            <br />
            <em className="text-[#D4B57E]">like you.</em>
          </h1>
          <p className="text-[#9C9486] text-sm lg:text-base max-w-md mx-auto mb-8">
            Designed by a woman in her thirties, for the women she knows — the ones building careers, cities and entire lives on their own terms.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/collection"
              className="bg-[#A8874F] text-white px-7 py-3.5 text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Shop the Edit
            </Link>
            <Link
              href="/collection"
              className="border border-[#5a4d3a] text-[#D4B57E] px-7 py-3.5 text-sm tracking-wide hover:bg-[#5a4d3a]/30 transition-colors"
            >
              Meet {BRAND.designer}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-border">
        <div className="mx-auto px-6 lg:px-10 py-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-muted-foreground tracking-wide">
          <span>Certificate with every natural stone</span>
          <span>·</span>
          <span>Complimentary Engraving</span>
          <span>·</span>
          <span>30-Day Returns</span>
          <span>·</span>
          <span>Insured Worldwide Shipping · Duties Included</span>
        </div>
      </div>

      {/* Shop the Feed */}
      <section className="mx-auto px-6 lg:px-10 py-16 max-w-7xl">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="font-serif text-3xl">
              Shop <em className="text-accent">the Feed</em>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Straight from our Instagram — worn in real life, on real Tuesdays.
            </p>
          </div>
          <span className="text-sm hover:text-accent cursor-pointer">
            Follow us ↗
          </span>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-2.5">
          {["@lena.gold · Berlin", "@sofiarestrepo · Madrid", "The Star Pendant, week two", "@maya.k · Sydney", "Monday rings only", "Engraved with her initials"].map((txt, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl flex items-center justify-center text-white/80 text-[11px] font-serif p-2 cursor-pointer hover:scale-[1.02] transition-transform"
              style={{ background: `linear-gradient(135deg, ${["#2b2620", "#3a2e26", "#1e2826", "#2b2620", "#33291f", "#1a1f1d"][i]}, ${["#5a4d3a", "#6b5544", "#3a5048", "#4a3d30", "#5e4b38", "#2f5d4e"][i]})` }}
            >
              {txt}
            </div>
          ))}
        </div>
      </section>

      {/* The Edit — featured products */}
      <section className="bg-[color:var(--color-bg2)] py-16">
        <div className="mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-serif text-3xl">
                The Edit — <em className="text-accent">her favourites</em>
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                What {BRAND.designer} herself wears on repeat. Small numbered batches; restocked only when she says so.
              </p>
            </div>
            <Link href="/collection" className="text-sm hover:text-accent">
              View all jewelry →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Designer story */}
      <section className="py-20">
        <div className="mx-auto px-6 lg:px-10 max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#2B2620] to-[#12100C] flex items-center justify-center relative overflow-hidden">
              <span className="text-9xl text-[#A8874F]/20">★</span>
              <div className="absolute bottom-4 text-xs text-[#9C9486] text-center w-full">
                {BRAND.designer}, at the bench · Shenzhen studio
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.16em] uppercase text-foreground mb-3">
              Meet {BRAND.designer}
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight mb-4">
              She&apos;s thirty-something.
              <br />
              <em>So are you.</em>
            </h2>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {BRAND.designer} built her career in one city and her studio in another. She signs her own contracts, pays her own rent, and learned long ago that &quot;waiting for the right moment&quot; is just fear in better clothes.
            </p>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              She designs what she wants to wear: pieces that hold their own in a boardroom, at a gallery opening, on a red-eye back home. Cast in 18k gold and set with natural diamonds, emeralds and pearls — because the details matter. They&apos;re just never the point.
            </p>
            <p className="font-serif italic text-[17px] text-[#D8CFBC] mb-4">
              The point was always you.
            </p>
            <div className="font-serif text-sm">— {BRAND.designer}, Founder &amp; Designer</div>
          </div>
        </div>
      </section>

      {/* UGC */}
      <section className="mx-auto px-6 lg:px-10 py-16 max-w-7xl">
        <div className="text-center max-w-xl mx-auto mb-11">
          <div className="text-accent text-xs tracking-[0.2em] uppercase mb-3">
            {BRAND.hash}
          </div>
          <h2 className="font-serif text-3xl">
            On the women <em className="text-accent">we had in mind</em>
          </h2>
          <p className="text-sm text-muted-foreground mt-3">
            Founders, surgeons, creatives, mothers, late-shift dreamers. Tag us for a chance to be featured.
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2.5">
          {["@lena.gold · Berlin", "@sofiarestrepo · Madrid", "@claire.weeks · NYC", "@maya.k · Sydney", "@annelies.v · Amsterdam", "@josie.m · London"].map((txt, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl flex items-center justify-center text-white/80 text-[11px] font-serif p-2 cursor-pointer hover:scale-[1.02] transition-transform"
              style={{ background: `linear-gradient(135deg, ${["#2b2620", "#3a2e26", "#1e2826", "#2b2620", "#33291f", "#1a1f1d"][i]}, ${["#5a4d3a", "#6b5544", "#3a5048", "#4a3d30", "#5e4b38", "#2f5d4e"][i]})` }}
            >
              {txt}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[color:var(--color-bg2)] py-16 text-center">
        <div className="mx-auto px-6 max-w-md">
          <h2 className="font-serif text-3xl mb-2">
            The <em className="text-accent">Inner Circle</em> ✦
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Batch alerts, studio notes from {BRAND.designer}, and first look at one-of-one pieces. No noise.
          </p>
          <form className="flex border border-primary rounded-full overflow-hidden bg-white">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 border-none outline-none px-5 py-3.5 text-sm bg-transparent"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 text-xs tracking-wide uppercase"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
}