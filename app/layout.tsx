import { inter, gelasio } from "@/app/fonts";
import "./globals.css";

export const metadata = {
  title: "North Echo Compute",
  description:
    "North Echo is an asset manager that acquires GPU infrastructure and operates it on behalf of long-term capital.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${gelasio.variable}`}>
      <body className="bg-canvas text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
