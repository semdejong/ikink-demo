import type { ReactNode } from "react";

export default function PageMain({ children }: { children: ReactNode }) {
  return (
    <main id="inhoud" className="mx-auto w-full max-w-[1180px] px-4 py-6 md:px-6 md:py-10">
      {children}
    </main>
  );
}
