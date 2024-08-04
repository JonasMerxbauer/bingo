"use client";

import { useEffect } from "react";
import { Toaster } from "~/components/ui/sonner";
import { toast } from "sonner";

export default function CopiedToast() {
  useEffect(() => {
    addEventListener("copy", () => {
      toast("Copied to clipboard");
    });

    return () => {
      removeEventListener("copy", () => {
        toast("Copied to clipboard");
      });
    };
  }, []);

  return <Toaster />;
}
