import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Placeholder async simulation
      await new Promise(r => setTimeout(r, 900));
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7 text-[13px] font-hanken relative z-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-1.5 md:col-span-1">
          <label htmlFor="name" className="block font-medium text-[#fed3b1]/90 tracking-wide uppercase text-[11px]">Name</label>
          <div className="relative group">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="peer mt-1 w-full px-4 py-3 rounded-lg bg-[#151d29]/70 border border-white/5 focus:border-[#fed3b1]/40 text-neutral-100 placeholder-neutral-500/60 focus:outline-none focus:ring-2 focus:ring-[#fed3b1]/30 transition shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
              placeholder="Your full name"
            />
            <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_15%,rgba(254,211,177,0.12),transparent_70%)]" />
          </div>
        </div>
        <div className="space-y-1.5 md:col-span-1">
          <label htmlFor="email" className="block font-medium text-[#fed3b1]/90 tracking-wide uppercase text-[11px]">Email</label>
          <div className="relative group">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="peer mt-1 w-full px-4 py-3 rounded-lg bg-[#151d29]/70 border border-white/5 focus:border-[#fed3b1]/40 text-neutral-100 placeholder-neutral-500/60 focus:outline-none focus:ring-2 focus:ring-[#fed3b1]/30 transition shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
              placeholder="you@example.com"
            />
            <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_15%,rgba(254,211,177,0.12),transparent_70%)]" />
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="block font-medium text-[#fed3b1]/90 tracking-wide uppercase text-[11px]">Message</label>
        <div className="relative group">
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            className="peer mt-1 w-full px-4 py-3 rounded-lg bg-[#151d29]/70 border border-white/5 focus:border-[#fed3b1]/40 text-neutral-100 placeholder-neutral-500/60 focus:outline-none focus:ring-2 focus:ring-[#fed3b1]/30 transition resize-none shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
          />
          <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_25%_20%,rgba(254,211,177,0.12),transparent_70%)]" />
        </div>
      </div>
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full relative overflow-hidden group rounded-lg font-medium tracking-wide px-6 py-3.5 text-[13px] transition focus:outline-none focus:ring-2 focus:ring-[#fed3b1]/40 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#fed3b1] via-[#e4b590] to-[#c48b5b] opacity-90 group-hover:opacity-100 transition" />
          <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
          <span className="absolute -inset-px rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)] opacity-0 group-hover:opacity-20 mix-blend-overlay transition duration-700" />
          <span className="relative flex items-center justify-center gap-2 text-[#2a1a11] font-semibold">
            {submitting ? 'Sending...' : submitted ? 'Sent ✓' : 'Send Message'}
          </span>
        </button>
      </div>
      <p className="text-[11px] text-neutral-500 text-center">
        We respect your privacy. Your information is safe.
      </p>
    </form>
  );
}
