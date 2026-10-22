"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProduct, PRODUCTS } from "@/lib/products";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { formatPrice } from "@/lib/format";

import { Suspense } from "react";

function PDPContent() {
  const params = useParams<{ handle: string }>();
  const handle = params.handle;
  const product = getProduct(handle);
  if (!product) return null;

  const { add } = useCart();
  const [size, setSize] = useState(product.options.sizes[0]);
  const [engrave, setEngrave] = useState("");
  const [qty, setQty] = useState(1);

  const badgeClass =
    product.badgeType === "new"
      ? "bg-emerald text-white"
      : "bg-accent text-white";

  return (
    <div className="mx-auto px-6 lg:px-10 py-8 max-w-7xl">
      {/* Breadcrumb */}
      <div className="text-xs text-muted-foreground mb-6">
        <Link href="/" className="hover:text-accent">Home</Link> /{" "}
        <Link href="/collection" className="hover:text-accent">The Edit</Link> /{" "}
        <span className="text-foreground">{product.title}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-16">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-[3/4] rounded-lg cursor-pointer border-2 transition-colors ${
                    i === 0 ? "border-accent" : "border-transparent opacity-60"
                  }`}
                  style={{ background: `linear-gradient(135deg, #2b2620, #4a3d30)` }}
                />
              ))}
            </div>
            <div
              className="flex-1 aspect-[3/4] rounded-2xl flex items-center justify-center text-white/80 text-sm font-serif"
              style={{ background: `linear-gradient(135deg, #3a2e26, #6b5544)` }}
            >
              Worn · front
            </div>
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="font-serif text-3xl mb-2">{product.title}</h1>
          <div className="text-2xl mb-2">{formatPrice(product.price)}</div>
          <div className="text-sm text-muted-foreground mb-3">{product.mat}</div>
          <div className="text-sm mb-5">
            {"★".repeat(product.stars)}
            {"☆".repeat(5 - product.stars)}{" "}
            <span className="text-muted-foreground italic">
              {product.reviews} reviews · 94% &quot;wear it daily&quot;
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            {product.desc}
          </p>

          {product.badge && (
            <div className="mb-6">
              <span className={`px-3 py-1 text-[11px] tracking-wide rounded-full ${badgeClass}`}>
                {product.badge}
              </span>
            </div>
          )}

          {/* Size picker */}
          <div className="mb-5">
            <div className="flex justify-between mb-2">
              <Label>{product.options.sizeLabel}</Label>
              <span className="text-xs">{size}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {product.options.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2.5 rounded-full text-xs border transition-all ${
                    s === size
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-accent"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Engraving */}
          {product.engrave && (
            <div className="mb-5">
              <div className="flex justify-between mb-2">
                <Label>Engraving</Label>
                <span className="text-xs">Complimentary</span>
              </div>
              <div className="border border-border rounded-xl p-4">
                <div className="text-center font-serif text-lg mb-3 min-h-[28px]">
                  {engrave || (
                    <span className="text-muted-foreground text-sm">
                      Your engraving appears here — up to 12 characters
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Input
                    maxLength={12}
                    placeholder="e.g. SELF-MADE"
                    value={engrave}
                    onChange={(e) => setEngrave(e.target.value.toUpperCase())}
                  />
                  <Button
                    variant="outline"
                    className="px-5"
                    onClick={() => setEngrave("")}
                  >
                    Clear
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  Set in matching type by our engraver, Shenzhen studio · adds 1–2 days
                </div>
              </div>
            </div>
          )}

          {/* Qty + Add to Bag */}
          <div className="flex gap-3 mb-5">
            <div className="flex items-center border border-primary rounded-full">
              <button
                className="w-11 h-12 text-lg"
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                −
              </button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button
                className="w-11 h-12 text-lg"
                onClick={() => setQty(qty + 1)}
              >
                ＋
              </button>
            </div>
            <Button
              variant="default"
              className="flex-1"
              onClick={() => {
                add(product, { qty, size, engrave });
                toast(`Added — ${product.title}`);
              }}
            >
              Add to Bag — {formatPrice(product.price * qty)}
            </Button>
          </div>

          {/* Meta */}
          <div className="flex gap-5 flex-wrap text-[11px] tracking-wide uppercase text-muted-foreground mb-6">
            <span>✦ Certificate with this stone</span>
            <span>✦ Ships in 24h · DDP</span>
            <span>✦ 30-day returns</span>
          </div>

          {/* Accordions */}
          <Accordion type="multiple">
            <AccordionItem value="details">
              <AccordionTrigger>The details</AccordionTrigger>
              <AccordionContent>
                {product.mat}. Hand-finished in our Shenzhen studio in numbered batches. Hallmarked 18k. Weight and stone specifications listed on the certificate included with your order.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="certificate">
              <AccordionTrigger>Stone certificate</AccordionTrigger>
              <AccordionContent>
                Every natural stone ships with its gemological certificate — origin, cut, carat and clarity, traceable from mine to setting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger>Shipping &amp; returns</AccordionTrigger>
              <AccordionContent>
                Insured worldwide shipping in 3–7 days, duties prepaid (DDP) — the price you see is the price you pay. 30-day returns, no questions, prepaid label included.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-20">
        <h2 className="font-serif text-2xl mb-6">You might also like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((p) => (
              <Link key={p.id} href={`/product/${p.handle}`}>
                <div className="group cursor-pointer">
                  <div
                    className="aspect-[3/4] rounded-2xl mb-3"
                    style={{ background: `linear-gradient(135deg, #2b2620, #4a3d30)` }}
                  />
                  <h3 className="font-serif text-[15px]">{p.title}</h3>
                  <div className="text-sm">{formatPrice(p.price)}</div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default function PDPPage() {
  return (
    <Suspense fallback={<div className="text-center py-32 text-muted-foreground">Loading...</div>}>
      <PDPContent />
    </Suspense>
  );
}