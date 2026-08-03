import { useForm, ValidationError } from "@formspree/react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

// Formspree form ID — from https://formspree.io (dashboard > your form).
const FORMSPREE_FORM_ID = "xnjeeyjg";

const infoCards = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: FiMapPin, label: "Location", value: profile.location, href: null },
];

const fieldStyle = {
  backgroundColor: "var(--bg-panel-2)",
  border: "1px solid var(--line)",
  color: "var(--text-primary)",
};

export default function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "var(--bg-panel-2)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading index="09" label="contact" title="Let's build something" description="Open to internships, freelance work, and full-time roles. Send a message below or reach me directly." />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <div className="space-y-4">
            {infoCards.map((card) => {
              const Content = (
                <div className="reveal card-surface rounded-2xl p-5 flex items-center gap-4 hover:border-[var(--color-coral)] transition-colors">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[var(--color-coral)]/10 text-[var(--color-coral)] shrink-0">
                    <card.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10.5px]" style={{ color: "var(--text-muted)" }}>{card.label}</p>
                    <p className="text-[13.5px] font-medium truncate text-[var(--text-primary)]">{card.value}</p>
                  </div>
                </div>
              );
              return card.href ? (
                <a key={card.label} href={card.href}>{Content}</a>
              ) : (
                <div key={card.label}>{Content}</div>
              );
            })}

            <div className="reveal flex items-center gap-3 pt-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="p-3 rounded-full border hover:text-[var(--color-coral)] hover:border-[var(--color-coral)] transition-colors" style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}>
                <FiGithub size={17} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full border hover:text-[var(--color-coral)] hover:border-[var(--color-coral)] transition-colors" style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}>
                <FiLinkedin size={17} />
              </a>
            </div>
          </div>

          <div className="reveal card-surface rounded-2xl p-7 sm:p-8">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#28c840]/10 text-[#28c840] mb-4">
                  <FiCheck size={26} />
                </div>
                <h3 className="font-display font-semibold text-lg text-[var(--text-primary)]">Message sent!</h3>
                <p className="mt-2 text-[13.5px] max-w-xs" style={{ color: "var(--text-muted)" }}>
                  Thanks for reaching out — I'll get back to you at your email soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>Name</label>
                    <input
                      required
                      id="name"
                      type="text"
                      name="name"
                      className="mt-2 w-full rounded-lg px-4 py-2.5 text-[13.5px] outline-none focus:border-[var(--color-coral)]"
                      style={fieldStyle}
                      placeholder="Your name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1.5 text-[11.5px] text-[var(--color-coral)]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>Email</label>
                    <input
                      required
                      id="email"
                      type="email"
                      name="email"
                      className="mt-2 w-full rounded-lg px-4 py-2.5 text-[13.5px] outline-none focus:border-[var(--color-coral)]"
                      style={fieldStyle}
                      placeholder="you@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1.5 text-[11.5px] text-[var(--color-coral)]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-lg px-4 py-2.5 text-[13.5px] outline-none focus:border-[var(--color-coral)] resize-none"
                    style={fieldStyle}
                    placeholder="Tell me about the role or project..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1.5 text-[11.5px] text-[var(--color-coral)]" />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex items-center gap-2 px-6 py-3 rounded-full btn-primary text-white font-mono text-[13px] transition disabled:opacity-60"
                >
                  {state.submitting ? "Sending..." : "Send Message"} <FiSend size={14} />
                </button>

                {state.errors && state.errors.getAllFieldErrors?.().length > 0 && (
                  <p className="flex items-center gap-2 text-[13px] text-[var(--color-coral)]">
                    <FiAlertCircle size={15} /> Please fix the errors above and try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
