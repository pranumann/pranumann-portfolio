"use client";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="grid gap-16 lg:grid-cols-2">

        <ContactInfo />

        <ContactForm />

      </div>
    </section>
  );
}