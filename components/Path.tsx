export default function Path({ label }: { label: string }) {
  return (
    <div className="path my-5">
      <span className="mono text-[0.8125rem] tracking-[0.08em] text-aarde">{label}</span>
    </div>
  );
}
