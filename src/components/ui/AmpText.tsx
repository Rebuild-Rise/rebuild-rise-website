import { Fragment } from "react";

/**
 * Renders a string with its ampersand set in the sans face (ledger D25).
 * Fraunces has no conventional ampersand — its only "&" glyph reads as a
 * reversed character at every stylistic set (verified empirically) — so
 * display titles set the ampersand in Manrope, which has a true one. The
 * copy is untouched: the source string keeps a plain ASCII "&".
 */
export function AmpText({ children }: { children: string }) {
  const parts = children.split("&");
  if (parts.length === 1) return <>{children}</>;
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="font-sans">&amp;</span>}
          {part}
        </Fragment>
      ))}
    </>
  );
}
