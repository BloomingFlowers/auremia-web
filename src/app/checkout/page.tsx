"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { formatPrice } from "@/lib/format";

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const router = useRouter();
  const [shipMethod, setShipMethod] = useState("express");
  const [payMethod, setPayMethod] = useState("card");

  if (lines.length === 0) {
    return (
      <div className="text-center py-32">
        <div className="text-3xl text-accent mb-3">✦</div>
        <p className="text-muted-foreground">Your bag is empty.</p>
      </div>
    );
  }

  const total = subtotal;

  const handlePlaceOrder = () => {
    const orderNum = "AUR-" + String(Date.now()).slice(-6);
    clear();
    router.push(`/success?order=${orderNum}&total=${total}`);
  };

  return (
    <div className="mx-auto px-6 lg:px-10 py-12 max-w-7xl">
      <h1 className="font-serif text-3xl mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
        {/* Left: forms */}
        <div>
          {/* Express pay */}
          <div className="flex flex-col gap-2.5 mb-7">
            <button
              className="h-[50px] rounded-xl bg-black text-white text-sm font-medium hover:opacity-90 transition-opacity"
              onClick={handlePlaceOrder}
            >
              Apple Pay
            </button>
            <button
              className="h-[50px] rounded-xl bg-white text-[#3c4043] text-sm font-medium border border-[#dadce0] hover:opacity-90 transition-opacity"
              onClick={handlePlaceOrder}
            >
              Shop Pay
            </button>
            <button
              className="h-[50px] rounded-xl bg-white text-[#3c4043] text-sm font-medium border border-[#dadce0] hover:opacity-90 transition-opacity"
              onClick={handlePlaceOrder}
            >
              G Pay
            </button>
          </div>
          <div className="flex items-center gap-4 mb-7 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" />
            OR
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* 1. Contact */}
          <div className="mb-10">
            <h2 className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2.5">
              <span className="w-[22px] h-[22px] rounded-full bg-primary text-primary-foreground text-[11px] flex items-center justify-center">1</span>
              Contact
            </h2>
            <div className="grid grid-cols-2 gap-3.5">
              <div className="col-span-2">
                <Label>Email</Label>
                <Input type="email" placeholder="you@email.com" className="mt-1" />
              </div>
              <div>
                <Label>First name</Label>
                <Input placeholder="Claire" className="mt-1" />
              </div>
              <div>
                <Label>Last name</Label>
                <Input placeholder="Weeks" className="mt-1" />
              </div>
              <div className="col-span-2">
                <Label>Phone (for delivery updates)</Label>
                <Input type="tel" placeholder="+1 (555) 000-0000" className="mt-1" />
              </div>
            </div>
          </div>

          {/* 2. Shipping address */}
          <div className="mb-10">
            <h2 className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2.5">
              <span className="w-[22px] h-[22px] rounded-full bg-primary text-primary-foreground text-[11px] flex items-center justify-center">2</span>
              Shipping address
            </h2>
            <div className="grid grid-cols-2 gap-3.5">
              <div className="col-span-2">
                <Label>Address</Label>
                <Input placeholder="42 Mercer Street, Apt 5B" className="mt-1" />
              </div>
              <div>
                <Label>City</Label>
                <Input placeholder="New York" className="mt-1" />
              </div>
              <div>
                <Label>Postal code</Label>
                <Input placeholder="10012" className="mt-1" />
              </div>
              <div>
                <Label>Country</Label>
                <select className="w-full h-11 rounded-lg border border-input bg-white px-4 text-sm outline-none mt-1">
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>Japan</option>
                  <option>Singapore</option>
                  <option>Other (ships worldwide)</option>
                </select>
              </div>
              <div>
                <Label>Region / State</Label>
                <Input placeholder="NY" className="mt-1" />
              </div>
            </div>
          </div>

          {/* 3. Shipping method */}
          <div className="mb-10">
            <h2 className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2.5">
              <span className="w-[22px] h-[22px] rounded-full bg-primary text-primary-foreground text-[11px] flex items-center justify-center">3</span>
              Shipping method
            </h2>
            <div className="flex flex-col gap-3.5">
              <div
                className={`flex justify-between items-center border rounded-xl p-4 cursor-pointer transition-colors ${shipMethod === "express" ? "border-primary border-[1.5px]" : "border-border hover:border-accent"}`}
                onClick={() => setShipMethod("express")}
              >
                <div className="flex items-center gap-3.5">
                  <input type="radio" checked={shipMethod === "express"} readOnly />
                  <div>
                    <b className="font-medium text-sm">Express insured · DDP</b>
                    <div className="text-xs text-muted-foreground mt-0.5">3–5 business days · duties &amp; taxes prepaid</div>
                  </div>
                </div>
                <span className="font-medium text-sm">Free</span>
              </div>
              <div
                className={`flex justify-between items-center border rounded-xl p-4 cursor-pointer transition-colors ${shipMethod === "priority" ? "border-primary border-[1.5px]" : "border-border hover:border-accent"}`}
                onClick={() => setShipMethod("priority")}
              >
                <div className="flex items-center gap-3.5">
                  <input type="radio" checked={shipMethod === "priority"} readOnly />
                  <div>
                    <b className="font-medium text-sm">Priority insured · DDP</b>
                    <div className="text-xs text-muted-foreground mt-0.5">2–3 business days · duties &amp; taxes prepaid</div>
                  </div>
                </div>
                <span className="font-medium text-sm">+$45</span>
              </div>
            </div>
          </div>

          {/* 4. Payment */}
          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2.5">
              <span className="w-[22px] h-[22px] rounded-full bg-primary text-primary-foreground text-[11px] flex items-center justify-center">4</span>
              Payment
            </h2>
            <Tabs value={payMethod} onValueChange={setPayMethod}>
              <TabsList className="mb-5">
                <TabsTrigger value="card">💳 Card</TabsTrigger>
                <TabsTrigger value="paypal">PayPal</TabsTrigger>
                <TabsTrigger value="klarna">Klarna · 3x</TabsTrigger>
              </TabsList>
              <TabsContent value="card">
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="col-span-2">
                    <Label>Card number</Label>
                    <Input placeholder="1234 5678 9012 3456" maxLength={19} className="mt-1" />
                  </div>
                  <div>
                    <Label>Expiry</Label>
                    <Input placeholder="MM / YY" maxLength={7} className="mt-1" />
                  </div>
                  <div>
                    <Label>CVC</Label>
                    <Input placeholder="123" maxLength={4} className="mt-1" />
                  </div>
                  <div className="col-span-2">
                    <Label>Name on card</Label>
                    <Input placeholder="Claire Weeks" className="mt-1" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="paypal">
                <div className="p-7 text-center text-muted-foreground text-sm">
                  You&apos;ll be redirected to PayPal to complete your purchase securely.
                </div>
              </TabsContent>
              <TabsContent value="klarna">
                <div className="p-7 text-center text-muted-foreground text-sm">
                  Pay in 3 interest-free instalments with Klarna. You&apos;ll be redirected to confirm.
                </div>
              </TabsContent>
            </Tabs>
            <div className="text-xs text-muted-foreground mt-4 flex gap-2 items-start">
              🔒 All transactions are encrypted. We never store your card details.
            </div>
          </div>

          <Button variant="gold" className="w-full h-[54px] text-[15px]" onClick={handlePlaceOrder}>
            Place Order — {formatPrice(total)}
          </Button>
        </div>

        {/* Right: order summary */}
        <div className="sticky top-20">
          <div className="bg-[color:var(--color-bg2)] rounded-2xl p-7">
            <h3 className="font-serif text-lg mb-5">Order summary</h3>
            <div className="mb-4">
              {lines.map((line, i) => (
                <div key={i} className="flex gap-3.5 mb-4 items-start">
                  <div
                    className="w-14 aspect-[3/4] rounded-lg shrink-0 relative"
                    style={{ background: `linear-gradient(135deg, #3a2e26, #6b5544)` }}
                  >
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[11px] flex items-center justify-center">
                      {line.qty}
                    </div>
                  </div>
                  <div className="flex-1 text-[13px]">
                    <b className="font-serif text-[14.5px] font-medium">{line.product.title}</b>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {line.size}
                      {line.engrave ? ` · "${line.engrave}"` : ""}
                    </div>
                  </div>
                  <div className="font-medium text-[13.5px]">
                    {formatPrice(line.product.price * line.qty)}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2.5 mb-4">
              <Input placeholder="Discount code" className="flex-1" />
              <button className="px-5 text-xs tracking-wide uppercase border border-primary rounded-lg cursor-pointer whitespace-nowrap">
                Apply
              </button>
            </div>
            <div className="border-t border-border pt-4">
              <div className="flex justify-between text-sm text-muted-foreground mb-2.5">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mb-2.5">
                <span>Shipping (insured · DDP)</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mb-2.5">
                <span>Duties &amp; taxes</span>
                <span>Included</span>
              </div>
              <div className="flex justify-between text-lg font-medium mt-3.5">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <div className="text-xs text-emerald text-center mt-4">
              ✦ Complimentary engraving included
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}