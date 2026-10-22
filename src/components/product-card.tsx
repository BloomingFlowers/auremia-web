"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/store/cart";
import { toast } from "sonner";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  const badgeClass =
    product.badgeType === "new"
      ? "bg-emerald text-white"
      : "bg-accent text-white";

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3">
        <div className="w-full h-full ph-2 flex items-center justify-center text-white/80 text-sm font-serif transition-transform duration-500 group-hover:scale-105">
          Worn · front
        </div>
        {/* Quick Add */}
        <button
          onClick={(e) => {
            e.preventDefault();
            add(product);
            toast(`Added — ${product.title}`);
          }}
          className="absolute bottom-3 left-3 right-3 bg-primary text-primary-foreground py-2.5 text-xs tracking-wide rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          ＋ Quick Add
        </button>
        {product.badge && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-[11px] tracking-wide rounded-full ${badgeClass}`}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif font-medium text-[15px]">{product.title}</h3>
          <div className="text-xs text-muted-foreground mt-0.5">{product.mat}</div>
          <div className="text-xs mt-1">
            {"★".repeat(product.stars)}
            {"☆".repeat(5 - product.stars)}{" "}
            <span className="text-muted-foreground italic">{product.reviews} reviews</span>
          </div>
        </div>
        <span className="font-medium">{formatPrice(product.price)}</span>
      </div>
    </div>
  );
}