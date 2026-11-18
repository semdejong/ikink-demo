import type { ReactNode } from "react";

export default function Hedge({
  children,
  grow = false,
  className = "",
}: {
  children: ReactNode;
  grow?: boolean;
  className?: string;
}) {
  return (
    <div className={`hedge ${grow ? "hedge-grow" : ""} ${className}`}>
      <div className="hedge-inner h-full">{children}</div>
    </div>
  );
}
