"use client";

import { useState } from "react";

export default function QuoteForm({
  email,
  works,
}: {
  email: string;
  works: string[];
}) {
  const [notice, setNotice] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const gekozen = data.getAll("werk").map(String);
    const lines = [
      "Goedendag,",
      "",
      `Naam: ${value(data, "naam")}`,
      `Telefoon: ${value(data, "telefoon")}`,
      `E-mail: ${value(data, "email")}`,
      `Adres/plaats: ${value(data, "adres") || "niet ingevuld"}`,
      `Werkzaamheden: ${gekozen.length ? gekozen.join(", ") : "niet aangevinkt"}`,
      `Ongeveer hoe groot is de tuin: ${value(data, "grootte") || "niet ingevuld"}`,
      `Gewenste periode: ${value(data, "periode") || "niet ingevuld"}`,
      "",
      "Korte omschrijving:",
      value(data, "omschrijving") || "niet ingevuld",
      "",
      "Foto’s van de tuin voeg ik toe aan deze mail.",
      "",
      "Met vriendelijke groet,",
    ];
    const subject = "Offerteaanvraag";
    const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setNotice("Uw mailprogramma zou nu openen. Er is niets via deze site verstuurd.");
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-4">
      <p>
        Uw mailprogramma opent met alles ingevuld; er wordt niets via deze site verstuurd.
      </p>
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
        <span>Adres/plaats</span>
        <input name="adres" autoComplete="street-address" />
      </label>
      <fieldset>
        <legend className="font-semibold">Wat wilt u laten doen?</legend>
        <div className="mt-2 grid gap-1 sm:grid-cols-2">
          {works.map((work) => (
            <label key={work} className="check">
              <input type="checkbox" name="werk" value={work} />
              <span>{work.replaceAll("/", "/\u200B")}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="field">
        <span>Ongeveer hoe groot is de tuin?</span>
        <input name="grootte" autoComplete="off" />
      </label>
      <label className="field">
        <span>Gewenste periode</span>
        <input name="periode" autoComplete="off" />
      </label>
      <label className="field">
        <span>Korte omschrijving</span>
        <textarea name="omschrijving" />
      </label>
      <p>Foto’s van uw tuin kunt u in de mail toevoegen.</p>
      <button type="submit" data-cta="offerte" className="btn btn-buxus w-full sm:w-auto">
        Open in uw mailprogramma
      </button>
      {notice ? (
        <p role="status" className="border-2 border-buxus bg-papier p-3">
          {notice}
        </p>
      ) : null}
    </form>
  );
}

function value(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}
