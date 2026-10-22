"use client";

import { Toaster as Sonner } from "sonner";
import { BRAND } from "@/lib/brand";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      position="bottom-center"
      toastOptions={{
        style: {
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          borderRadius: "999px",
          fontSize: "13.5px",
          padding: "13px 26px",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };