/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="inline-flex min-h-11 items-center gap-2 rounded-[6px] border-2 border-buxus bg-papier px-3 text-[0.8125rem] font-medium text-inkt"
    >
      <span className="h-2.5 w-2.5 bg-buxus" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
