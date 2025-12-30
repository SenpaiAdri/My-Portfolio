import type { ReactNode } from "react";

type RollTextProps = {
  text: string;
  className?: string;
  /** If true, the roll distance uses the parent container height (e.g. a fixed-height button). */
  fill?: boolean;
  /** Optional: override what renders as the visible text (defaults to text). */
  children?: ReactNode;
};

/**
 * Hover "roll" effect: first line slides up, duplicate line slides in from below.
 * Requires a parent with `group` for hover/focus states (e.g. a Link).
 */
export default function RollText({ text, className, fill, children }: RollTextProps) {
  const content = children ?? text;
  return (
    <span
      className={[
        "relative block overflow-hidden",
        fill ? "h-full w-full" : "inline-block",
        className ?? "",
      ].join(" ")}
    >
      {/* Sizer: keeps width/height in normal flow so the absolutely-positioned text can render.
          In `fill` mode, the parent provides sizing (e.g. a fixed-height button). */}
      {!fill && <span className="block opacity-0">{content}</span>}

      <span className="pointer-events-none absolute inset-0">
        <span className="absolute inset-0 flex items-center justify-center translate-y-0 transition-transform duration-300 ease-out will-change-transform group-hover:-translate-y-full group-focus-visible:-translate-y-full">
          {content}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-out will-change-transform group-hover:translate-y-0 group-focus-visible:translate-y-0"
        >
          {content}
        </span>
      </span>
    </span>
  );
}


