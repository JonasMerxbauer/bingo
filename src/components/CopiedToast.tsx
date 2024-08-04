"use client";

import { useEffect } from "react";
import { Toaster } from "~/components/ui/sonner";
import { toast } from "sonner";

export default function CopiedToast() {
  useEffect(() => {
    addEventListener("copy", copyToastEvent);

    return () => {
      removeEventListener("copy", copyToastEvent);
    };
  }, []);

  return <Toaster />;
}

const copyToastEvent = () => {
  toast("Copied!");
};
