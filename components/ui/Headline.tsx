import type { ReactNode } from "react";

/**
 * Headlines in the brand materials are solid, bold, tightly tracked, and set
 * in the same humanist sans as everything else — there is no serif and no
 * italic anywhere in the print work. Where a phrase needs to carry emphasis it
 * takes the accent colour at the same weight, echoing the two-tone
 * `NORTH ECHO / COMPUTE` lockup.
 */
export function Headline({
  pre,
  emphasis,
  post,
}: {
  pre?: ReactNode;
  emphasis?: ReactNode;
  post?: ReactNode;
}) {
  return (
    <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-ink md:text-[3.25rem]">
      {pre && <span>{pre}</span>}
      {emphasis && <span className="text-accent">{emphasis}</span>}
      {post && <span> {post}</span>}
    </h1>
  );
}
