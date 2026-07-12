import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Place Gelasio .woff2 files at /public/fonts/ if not using Google Fonts CDN.
// If these files don't exist yet, comment this block out and fall back to
// fontFamily: serif: ["Georgia", "serif"] in tailwind.config.ts.
export const gelasio = localFont({
  src: [
    { path: "../public/fonts/Gelasio-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Gelasio-Italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/Gelasio-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-gelasio",
  display: "swap",
});
