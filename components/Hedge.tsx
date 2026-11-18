import type { ReactNode } from "react";

export default function Hedge({
  children,
  grow = false,
  beds = false,
  className = "",
}: {
  children: ReactNode;
  grow?: boolean;
  /** Meerdere papier-vakken in één haag; de groene band blijft als pad zichtbaar. */
  beds?: boolean;
  className?: string;
}) {
  return (
    <div className={`hedge ${grow ? "hedge-grow" : ""} ${className}`}>
      {beds ? children : <div className="hedge-inner h-full">{children}</div>}
    </div>
  );
}
