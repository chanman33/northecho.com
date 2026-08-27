import type { Config } from "tailwindcss";

// Every value below is sampled directly from North_Echo_CIV_0_One_Pager.pdf so
// the site and the print materials share one palette. The document uses a
// single accent — a histogram of its blue pixels returns #6CABE0 and nothing
// else — so resist adding a second one here.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#6CABE0",
          deep: "#4A8FC7",
          tint: "rgba(108, 171, 224, 0.10)",
        },
        canvas: {
          DEFAULT: "#0A0A0A", // page
          raised: "#101013", // alternating section band
          panel: "#141417", // card surface — cooler than the page on purpose
          border: "#1F1F24", // outer hairline
          divider: "#191920", // inner hairline, one step quieter
        },
        ink: {
          DEFAULT: "#FFFFFF", // headlines and values only
          soft: "#C7C7CB", // body copy
          muted: "#8A8A93", // secondary and table labels
          faint: "#6A6A73", // micro-labels, captions, legal
        },
      },
      borderRadius: {
        card: "12px",
        band: "14px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Calibri", "system-ui", "sans-serif"],
      },
      fontSize: {
        // The tracked-caps micro-label is the loudest signature in the print
        // work. Two sizes: standard, and the smaller legal/caption cut.
        label: ["0.6875rem", { lineHeight: "1.1", letterSpacing: "0.22em" }],
        micro: ["0.625rem", { lineHeight: "1.5", letterSpacing: "0.16em" }],
      },
      maxWidth: {
        // Body copy measure. Source Sans 3 sets narrow, so this runs wider than
        // a typical ch-based measure to keep paragraphs from turning into a
        // column beside the headline.
        measure: "44rem",
      },
    },
  },
  plugins: [],
};

export default config;
