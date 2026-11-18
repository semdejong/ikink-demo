"use client";

import { useState } from "react";

export default function ContactForm({ email }: { email: string }) {
  const [notice, setNotice] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = [
      "Goedendag,",
      "",
      `Naam: ${text(data, "naam")}`,
      `Telefoon: ${text(data, "telefoon")}`,
      `E-mail: ${text(data, "email")}`,
      "",
      text(data, "bericht"),
      "",
      "Met vriendelijke groet,",
    ];
    const href = `mailto:${email}?subject=${encodeURIComponent("Bericht via de site")}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setNotice("Uw mailprogramma zou nu openen. Er is niets via deze site verstuurd.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <p>Uw mailprogramma opent met alles ingevuld; er wordt niets via deze site verstuurd.</p>
      <label className="field">
        <span>Naam (verplicht)</span>
        <input name="naam" autoComplete="name" required />
      </label>
      <label className="field">
        <span>Telefoon (verplicht)</span>
        <input name="telefoon" type="tel" autoComplete="tel" required />
      </label>
      <label className="field">
        <span>E-mail (verplicht)</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className="field">
        <span>Bericht (verplicht)</span>
        <textarea name="bericht" required />
      </label>
      <button type="submit" data-cta="mailen" className="btn btn-buxus w-full sm:w-auto">
        Open in uw mailprogramma
      </button>
      {notice ? (
        <p role="status" className="border-2 border-buxus p-3">
          {notice}
        </p>
      ) : null}
    </form>
  );
}

function text(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}
