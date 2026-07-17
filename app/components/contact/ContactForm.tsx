"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      toast.error(err.message || "Failed to send message");
    }

    setLoading(false);
  };

  return (
    <>
      <Toaster position="top-right" />

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <div className="space-y-5">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none transition focus:border-cyan-400"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none transition focus:border-cyan-400"
          />

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none transition focus:border-cyan-400"
          />

          <textarea
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Write your message..."
            className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none transition focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-cyan-400 py-4 font-bold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </>
  );
}