"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Product } from "@/lib/products";

export interface CartLine {
  id: string;
  product: Product;
  size: string;
  engrave: string;
  qty: number;
}

interface CartContextValue {
  lines: CartLine[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  add: (product: Product, opts?: { qty?: number; size?: string; engrave?: string }) => void;
  remove: (index: number) => void;
  clear: () => void;
  open: () => void;
  setOpen: (v: boolean) => void;
  close: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);

  const add = useCallback(
    (product: Product, opts?: { qty?: number; size?: string; engrave?: string }) => {
      const qty = opts?.qty ?? 1;
      const size = opts?.size ?? product.options.sizes[0];
      const engrave = opts?.engrave ?? "";
      setLines((prev) => {
        const ex = prev.find(
          (l) => l.id === product.id && l.size === size && l.engrave === engrave
        );
        if (ex) {
          return prev.map((l) =>
            l === ex ? { ...l, qty: l.qty + qty } : l
          );
        }
        return [...prev, { id: product.id, product, size, engrave, qty }];
      });
      setOpen(true);
    },
    []
  );

  const remove = useCallback((index: number) => {
    setLines((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);

  return (
    <CartContext.Provider
      value={{
        lines,
        isOpen,
        count,
        subtotal,
        add,
        remove,
        clear,
        open: () => setOpen(true),
        close: () => setOpen(false),
        setOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}