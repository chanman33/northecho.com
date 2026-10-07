import { sourceSans } from "@/app/fonts";
import "./globals.css";

export const metadata = {
  title: "North Echo Compute",
  description:
    "North Echo builds, finances, and operates bare-metal GPU clusters for production inference.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body className="bg-canvas font-sans text-ink-soft antialiased">
        {children}
      </body>
    </html>
  );
}
