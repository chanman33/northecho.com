export function Headline({
  pre,
  emphasis,
  post,
}: {
  pre?: string;
  emphasis: string;
  post?: string;
}) {
  return (
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
      {pre && <span>{pre} </span>}
      <span className="italic font-serif text-accent-bright">{emphasis}</span>
      {post && <span> {post}</span>}
    </h1>
  );
}
