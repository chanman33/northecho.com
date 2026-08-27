import { Source_Sans_3 } from "next/font/google";

// Source Sans 3 is the closest open analog to Calibri, the face used across
// the investor one-pager and the rest of the brand materials: humanist
// proportions, open apertures, and a warmth that Inter's geometric neutrality
// doesn't have. Weights match the three registers the print work uses —
// regular body, semibold micro-labels, bold headlines and values.
export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
