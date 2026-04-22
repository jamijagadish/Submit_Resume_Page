import { useState } from "react";

// Page ke niche dikhne wale reusable content cards.
const perks = [
  {
    title: "Learning Culture",
    desc: "Hands-on mentorship, certifications and growth plans.",
  },
  {
    title: "Meaningful Work",
    desc: "Help fight fraud, scams and cyber abuse globally.",
  },
  {
    title: "Modern Stack",
    desc: "React, Cloud, AI automation and security tooling.",
  },
];

// Hero section ke paas dikhne wale quick highlights.
const stats = ["Remote Friendly", "Fast Hiring", "Global Team", "Career Growth"];

// Info cards me dikhne wale chhote recruitment metrics.
const metrics = [
  { value: "24h", label: "Average Review" },
  { value: "15+", label: "Open Roles" },
  { value: "100%", label: "Confidential" },
];

export default function RecruitmentPage() {
  // Dropdown se select ki gayi current role ko store karta hai.
  const [selectedRole, setSelectedRole] = useState("Select Role Applying For");

  // Form ke sab inputs ko same look dene ke liye shared Tailwind styles.
  const inputClassName =
    "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-blue-600 focus:ring-4 focus:ring-blue-200/70";

  return (
    <div className="relative overflow-hidden">
      {/* Background me decorative blurred shapes visual depth ke liye. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-24 h-64 w-64 rounded-full bg-blue-400/20 blur-xl animate-glow-float md:h-72 md:w-72" />
        <div className="absolute -left-24 bottom-24 h-72 w-72 rounded-full bg-sky-200/30 blur-xl [animation-delay:-4s] animate-glow-float md:h-80 md:w-80" />
      </div>

      {/* Upar ka header area branding aur main button ke liye. */}
      <header className="relative border-b border-blue-100/70 bg-[#0f2b5b] backdrop-blur-xl animate-fade-up">
        <div className="mx-auto flex w-[min(1120px,calc(100%-48px))] flex-col gap-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1.5 text-sm tracking-[0.3em] text-blue-100">
              CRCYBERCRIME
            </p>
            <h1 className="text-[clamp(1.9rem,2.5vw,2.4rem)] font-semibold text-white">
              Careers Portal
            </h1>
          </div>
          <button
            className="rounded-2xl bg-linear-to-r from-blue-600 to-blue-700 px-5 py-3.5 font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
            type="button"
          >
            Open Positions
          </button>
        </div>
      </header>

      {/* Main content ko left info section aur right form section me divide kiya gaya hai. */}
      <main className="relative mx-auto grid w-[min(1120px,calc(100%-48px))] gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        {/* Left side hero section jahan hiring ka main message dikh raha hai. */}
        <section className="flex flex-col gap-6 pt-6 animate-fade-right">
          <span className="inline-flex w-fit rounded-full border border-blue-100 bg-blue-100 px-4 py-2.5 text-[0.95rem] text-blue-600 opacity-0 animate-fade-up animate-badge-pulse [animation-delay:120ms,1s]">
            Secure Careers • Build Impact
          </span>
          <h2 className="text-[clamp(3rem,6vw,4.5rem)] leading-[0.96] font-semibold tracking-[-0.04em] text-slate-900 opacity-0 animate-fade-up [animation-delay:220ms]">
            Submit Your Resume &amp; Join Our Elite Team
          </h2>
          <p className="max-w-[640px] text-lg leading-7 text-slate-600 opacity-0 animate-fade-up [animation-delay:320ms]">
            We hire cybersecurity analysts, developers, investigators, SOC experts,
            researchers, content writers and interns. Work on real threats with a
            modern remote-first culture.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-blue-100 bg-white p-5 text-slate-900 opacity-0 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_22px_45px_rgba(37,99,235,0.12)] animate-fade-up"
                style={{ animationDelay: `${450 + index * 100}ms` }}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map((item, index) => (
              <article
                key={item.label}
                className="rounded-3xl border border-blue-100 bg-white p-4 opacity-0 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_22px_45px_rgba(37,99,235,0.12)] animate-fade-up"
                style={{ animationDelay: `${500 + index * 120}ms` }}
              >
                <p className="text-3xl font-extrabold text-[#0f2b5b]">{item.value}</p>
                <p className="text-slate-500">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Right side application form jahan candidate apni details submit karta hai. */}
        <section className="rounded-[32px] border border-blue-100 bg-white p-6 text-slate-900 opacity-0 shadow-[0_24px_60px_rgba(37,99,235,0.12)] animate-fade-left md:p-8 [animation-delay:180ms]">
          <div className="mb-6">
            <h3 className="mb-2 text-[2rem] font-semibold">Application Form</h3>
            <p className="text-slate-500">
              Complete the details below and upload your latest resume.
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <input className={inputClassName} type="text" placeholder="Full Name" />
            <input className={inputClassName} type="email" placeholder="Email Address" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input className={inputClassName} type="tel" placeholder="Phone Number" />
              <input className={inputClassName} type="text" placeholder="Country" />
            </div>
            <input
              className={inputClassName}
              type="text"
              placeholder="Current Profession"
            />
            <select
              className={inputClassName}
              value={selectedRole}
              onChange={(event) => setSelectedRole(event.target.value)}
            >
              <option>Select Role Applying For</option>
              <option>SOC Analyst</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Security Engineer</option>
              <option>Fullstack Developer</option>
              <option>Cyber Investigator</option>
              <option>Intern</option>
              <option>Other</option>
            </select>
            {/* Ye extra input tabhi dikhega jab user "Other" role select karega. */}
            {selectedRole === "Other" ? (
              <input
                className={`${inputClassName} opacity-0 animate-fade-up`}
                type="text"
                placeholder="Type your role"
                aria-label="Custom role"
              />
            ) : null}
            <textarea
              className={`${inputClassName} min-h-[120px] resize-y`}
              placeholder="Why do you want to join us?"
            ></textarea>
            <label className="block cursor-pointer rounded-3xl border-2 border-dashed border-blue-200 px-5 py-7 text-center transition duration-200 hover:-translate-y-0.5 hover:border-blue-600 hover:bg-blue-50">
              <input className="hidden" type="file" />
              <span className="mb-1 block font-bold text-slate-900">Upload Resume</span>
              <span className="text-[0.95rem] text-slate-500">
                PDF, DOC, DOCX (Max 5MB)
              </span>
            </label>
            <label className="flex items-start gap-2.5 text-[0.95rem] text-slate-600">
              <input className="mt-1 w-auto accent-blue-600" type="checkbox" />
              <span className="leading-6">
                I agree to the Terms, Privacy Policy and recruitment
                communication.
              </span>
            </label>
            <button
              type="button"
              className="rounded-2xl bg-linear-to-r from-blue-600 to-blue-700 px-4 py-4 font-bold text-white transition duration-200 hover:-translate-y-0.5"
            >
              Submit Application
            </button>
          </form>
        </section>
      </main>

      {/* Niche ka section company join karne ke fayde highlight karta hai. */}
      <section className="relative mx-auto w-[min(1120px,calc(100%-48px))] pb-14 opacity-0 animate-fade-up [animation-delay:450ms]">
        <div className="absolute inset-x-0 bottom-6 top-0 -z-10 rounded-[32px] bg-slate-100"></div>
        <div className="grid gap-4 md:grid-cols-3">
          {perks.map((card, index) => (
            <div
              key={card.title}
              className="rounded-3xl border border-blue-100 bg-white p-7 opacity-0 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_22px_45px_rgba(37,99,235,0.12)] animate-fade-up"
              style={{ animationDelay: `${700 + index * 120}ms` }}
            >
              <h4 className="mb-2.5 text-[1.3rem] font-semibold text-slate-900">
                {card.title}
              </h4>
              <p className="text-slate-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
