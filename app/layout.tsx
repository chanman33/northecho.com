import { sourceSans } from "@/app/fonts";
import "./globals.css";

export const metadata = {
  title: "North Echo Compute",
  description:
    "North Echo manages AI compute infrastructure for institutional investors. Limited partners directly own GPU fleets; we source, underwrite, and operate the hardware.",
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
