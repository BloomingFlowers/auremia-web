"use client";

import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export default function CollectionPage() {
  const [cat, setCat] = useState<string>("all");
  const list = PRODUCTS.filter((p) => cat === "all" || p.cat === cat);

  return (
    <>
      {/* Collection hero */}
      <div className="bg-gradient-to-br from-[#2B2620] to-[#12100C] text-[#F2EDE2] py-16 text-center">
        <div className="mx-auto px-6 max-w-2xl">
          <div className="text-xs tracking-[0.2em] uppercase text-[#A8874F] mb-3">
            The Independent Edit
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-light mb-3">
            Jewelry that keeps up <em>with you</em>
          </h1>
          <p className="text-[#9C9486] text-sm">
            Every piece designed by Mia, made in numbered batches. When a batch sells out, it&apos;s gone until she decides it isn&apos;t.
          </p>
        </div>
      </div>

      {/* Filters + grid */}
      <section className="mx-auto px-6 lg:px-10 py-10 max-w-7xl">
        <div className="flex gap-2 mb-6 flex-wrap">
          {CATEGORIES.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCat(key)}
              className={`px-4 py-2 rounded-full text-xs tracking-wide transition-all ${
                cat === key
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-accent"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="text-xs text-muted-foreground mb-6">
          {list.length} pieces in this edit
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}