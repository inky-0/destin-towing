"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionShell } from "./SectionShell";

type Props = {
  id?: string;
  tag: string;
  title: React.ReactNode;
  sub?: string;
  phone: string;
  email: string;
  address: string;
  mapHref: string;
  hours: { day: string; time: string }[];
};

export function ContactSection({ id, tag, title, sub, phone, email, address, mapHref, hours }: Props) {
  return (
    <SectionShell id={id} className="bg-[var(--surface)]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--accent-light)] mb-3">
            {tag}
          </div>
          <h2 className="text-white font-extrabold tracking-tight leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
            {title}
          </h2>
          {sub && <p className="text-white/55 text-base leading-relaxed max-w-md">{sub}</p>}

          <div className="mt-9 space-y-7">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 min-w-[44px] rounded-xl bg-[var(--accent)]/12 border border-[var(--accent)]/25 flex items-center justify-center text-[var(--accent-light)]">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/45 mb-0.5">Phone</h4>
                <a href={`tel:${phone.replace(/\D/g, "")}`} className="text-white text-[15px] hover:text-[var(--accent-light)] transition">
                  {phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 min-w-[44px] rounded-xl bg-[var(--accent)]/12 border border-[var(--accent)]/25 flex items-center justify-center text-[var(--accent-light)]">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/45 mb-0.5">Email</h4>
                <a href={`mailto:${email}`} className="text-white text-[15px] hover:text-[var(--accent-light)] transition break-all">
                  {email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 min-w-[44px] rounded-xl bg-[var(--accent)]/12 border border-[var(--accent)]/25 flex items-center justify-center text-[var(--accent-light)]">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/45 mb-0.5">Address</h4>
                <a href={mapHref} target="_blank" rel="noreferrer" className="text-white text-[15px] hover:text-[var(--accent-light)] transition leading-snug block">
                  {address}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 min-w-[44px] rounded-xl bg-[var(--accent)]/12 border border-[var(--accent)]/25 flex items-center justify-center text-[var(--accent-light)]">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/45 mb-0.5">Hours</h4>
                <ul className="space-y-1 text-white text-[14px]">
                  {hours.map((h) => (
                    <li key={h.day}>
                      <span className="text-white/55">{h.day}</span> · <span className="font-bold">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact form on the right */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          action={`mailto:${email}`}
          method="post"
          encType="text/plain"
          className="bg-[var(--surface-2)] border border-[var(--accent)]/12 rounded-2xl p-8 sm:p-9"
        >
          <h3 className="text-white text-lg font-bold mb-6">Request a Tow or Quote</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Field label="Name" name="name" type="text" required />
            <Field label="Phone" name="phone" type="tel" required />
          </div>
          <Field label="Email" name="email" type="email" required className="mb-4" />
          <FieldArea label="Message" name="message" required />
          <button
            type="submit"
            className="mt-6 w-full bg-[var(--accent)] text-white font-bold py-4 rounded-lg hover:bg-[var(--accent-light)] transition shadow-[0_4px_24px_rgba(204,17,17,0.4)]"
          >
            Send Request →
          </button>
        </motion.form>
      </div>
    </SectionShell>
  );
}

function Field({
  label,
  name,
  type,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/45">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="bg-[var(--bg)] border border-[var(--accent)]/12 rounded-lg px-3.5 py-3 text-white text-sm outline-none transition focus:border-[var(--accent)]"
      />
    </div>
  );
}
function FieldArea({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/45">
        {label}
      </label>
      <textarea
        name={name}
        required={required}
        rows={4}
        className="bg-[var(--bg)] border border-[var(--accent)]/12 rounded-lg px-3.5 py-3 text-white text-sm outline-none transition focus:border-[var(--accent)] resize-y min-h-[110px]"
      />
    </div>
  );
}

