"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderNum = searchParams.get("order") || "AUR-000000";
  const total = searchParams.get("total") || "0";

  return (
    <div className="text-center max-w-lg mx-auto px-6 py-32">
      <div className="w-[72px] h-[72px] rounded-full bg-emerald text-white text-4xl flex items-center justify-center mx-auto mb-7">
        ✓
      </div>
      <h1 className="font-serif text-3xl mb-3">Thank you.</h1>
      <p className="text-sm text-muted-foreground leading-relaxed mb-7">
        Your order is confirmed. A confirmation has been sent to your email, and you&apos;ll receive tracking the moment it leaves our Shenzhen studio.
      </p>
      <div className="bg-[color:var(--color-bg2)] rounded-xl p-5 my-6">
        <b className="font-serif text-base">Order {orderNum}</b>
      </div>
      <p className="text-xs text-muted-foreground mb-6">
        Total ${total} · All duties prepaid
      </p>
      <div className="flex gap-3 justify-center">
        <Link href="/">
          <Button variant="default" className="px-7 py-3.5">
            Continue Shopping
          </Button>
        </Link>
        <Button variant="outline" className="px-7 py-3.5">
          Track Order
        </Button>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-center py-32 text-muted-foreground">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}