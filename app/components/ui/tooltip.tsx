import type { ReactNode } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
  className?: string;
};

export default function Tooltip({ text, children, className }: TooltipProps) {
  return (
    <span
      className={[
        "group relative inline-flex items-center justify-center",
        className ?? "",
      ].join(" ")}
    >
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-2 left-1/2 z-50 w-max -translate-x-1/2 -translate-y-full rounded-md bg-black/90 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {text}
      </span>
    </span>
  );
}


