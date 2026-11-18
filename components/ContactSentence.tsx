import { content } from "@/content";

export default function ContactSentence() {
  const { company } = content;
  return (
    <p>
      U kunt contact opnemen per mail{" "}
      <a href={`mailto:${company.email}`} data-cta="mailen" className="link">
        {company.email}
      </a>{" "}
      of bel ons op{" "}
      <a href={company.phoneTel} data-cta="bellen" className="link">
        {company.phoneDisplay}
      </a>
      .
    </p>
  );
}
