"use client";

import * as React from "react";
import { ThemeProvider } from "@/providers/theme-provider";

export function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
