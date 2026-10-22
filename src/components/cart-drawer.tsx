"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { BRAND } from "@/lib/brand";
import { formatPrice } from "@/lib/format";

export function CartDrawer() {
  const { lines, isOpen, setOpen, remove, subtotal, count } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col p-0">
        <SheetHeader className="px-6 py-5 border-b border-border">
          <SheetTitle>
            Your Bag
            {count > 0 && (
              <span className="ml-2 text-xs text-muted-foreground">
                · {count} item{count > 1 ? "s" : ""}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {lines.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <div className="text-3xl text-accent mb-3">✦</div>
              <p>Your bag is empty.<br />The Edit is waiting.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-0">
              {lines.map((line, i) => (
                <div key={i} className="flex gap-4 py-4 border-b border-border">
                  <div className={`w-20 shrink-0 aspect-[3/4] rounded-lg ph-${line.product.id.replace(/-/g, "")}`} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-medium text-[15px]">{line.product.title}</h4>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {line.size}
                      {line.engrave ? ` · engraved "${line.engrave}"` : ""}
                    </div>
                    <div className="flex justify-between items-center mt-2 text-[13.5px]">
                      <span>
                        Qty {line.qty} ·{" "}
                        <span
                          className="text-muted-foreground underline cursor-pointer"
                          onClick={() => remove(i)}
                        >
                          remove
                        </span>
                      </span>
                      <b>{formatPrice(line.product.price * line.qty)}</b>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-6 py-5 border-t border-border bg-white">
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <b>{formatPrice(subtotal)}</b>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mb-3">
            <span>Insured shipping · duties included</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg font-medium mb-4">
            <span>Total</span>
            <b>{formatPrice(subtotal)}</b>
          </div>
          <Link href="/checkout">
            <Button
              variant="default"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Checkout · Apple / Google Pay
            </Button>
          </Link>
          <div className="text-xs text-emerald text-center mt-3">
            ✦ Complimentary engraving included
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}