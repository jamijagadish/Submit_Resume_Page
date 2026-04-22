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

const defaultRole = "Select Role Applying For";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  profession: "",
  role: defaultRole,
  customRole: "",
  whyJoin: "",
  resume: null,
  agreedToTerms: false,
};

const allowedResumeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function RecruitmentPage() {
  // Form ke saare input values ko ek jagah manage karta hai.
  const [formData, setFormData] = useState(initialFormData);
  // Har field ke validation error ko yahan store kiya jata hai.
  const [errors, setErrors] = useState({});
  // Successful submit ke baad confirmation message dikhane ke liye.
  const [submitMessage, setSubmitMessage] = useState("");

  // Form ke sab inputs ko same look dene ke liye shared Tailwind styles.
  const inputClassName =
    "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-blue-600 focus:ring-4 focus:ring-blue-200/70";

  const errorInputClassName =
    "border-red-400 focus:border-red-500 focus:ring-red-100";

  const updateField = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });

    setSubmitMessage("");
  };

  const getInputClassName = (field) =>
    errors[field] ? `${inputClassName} ${errorInputClassName}` : inputClassName;

  const validateForm = () => {
    const nextErrors = {};
    const trimmedFullName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedCountry = formData.country.trim();
    const trimmedProfession = formData.profession.trim();
    const trimmedWhyJoin = formData.whyJoin.trim();
    const trimmedCustomRole = formData.customRole.trim();
    const normalizedPhone = trimmedPhone.replace(/[^\d+]/g, "");

    if (!trimmedFullName) {
      nextErrors.fullName = "Full name is required.";
    } else if (trimmedFullName.length < 3) {
      nextErrors.fullName = "Full name must be at least 3 characters.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!trimmedPhone) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^\+?\d{8,15}$/.test(normalizedPhone)) {
      nextErrors.phone = "Enter a valid phone number with 8 to 15 digits.";
    }

    if (!trimmedCountry) {
      nextErrors.country = "Country is required.";
    }

    if (!trimmedProfession) {
      nextErrors.profession = "Current profession is required.";
    }

    if (formData.role === defaultRole) {
      nextErrors.role = "Please select the role you are applying for.";
    }

    if (formData.role === "Other" && !trimmedCustomRole) {
      nextErrors.customRole = "Please type the role you want to apply for.";
    }

    if (!trimmedWhyJoin) {
      nextErrors.whyJoin = "Please tell us why you want to join.";
    } else if (trimmedWhyJoin.length < 20) {
      nextErrors.whyJoin = "Please write at least 20 characters.";
    }

    if (!formData.resume) {
      nextErrors.resume = "Please upload your resume.";
    } else {
      if (!allowedResumeTypes.includes(formData.resume.type)) {
        nextErrors.resume = "Only PDF, DOC, or DOCX files are allowed.";
      } else if (formData.resume.size > 5 * 1024 * 1024) {
        nextErrors.resume = "Resume file size must be 5MB or smaller.";
      }
    }

    if (!formData.agreedToTerms) {
      nextErrors.agreedToTerms = "You must agree before submitting.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitMessage("");
      return;
    }

    setSubmitMessage("Application submitted successfully.");
    setFormData(initialFormData);
  };

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
            Secure Careers - Build Impact
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

          <form className="flex flex-col gap-4" noValidate onSubmit={handleSubmit}>
            <div>
              <input
                className={getInputClassName("fullName")}
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
              />
              {errors.fullName ? (
                <p className="mt-1.5 text-sm text-red-500">{errors.fullName}</p>
              ) : null}
            </div>

            <div>
              <input
                className={getInputClassName("email")}
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
              {errors.email ? (
                <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  className={getInputClassName("phone")}
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                />
                {errors.phone ? (
                  <p className="mt-1.5 text-sm text-red-500">{errors.phone}</p>
                ) : null}
              </div>

              <div>
                <input
                  className={getInputClassName("country")}
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={(event) => updateField("country", event.target.value)}
                />
                {errors.country ? (
                  <p className="mt-1.5 text-sm text-red-500">{errors.country}</p>
                ) : null}
              </div>
            </div>

            <div>
              <input
                className={getInputClassName("profession")}
                type="text"
                placeholder="Current Profession"
                value={formData.profession}
                onChange={(event) => updateField("profession", event.target.value)}
              />
              {errors.profession ? (
                <p className="mt-1.5 text-sm text-red-500">{errors.profession}</p>
              ) : null}
            </div>

            <div>
              <select
                className={getInputClassName("role")}
                value={formData.role}
                onChange={(event) => updateField("role", event.target.value)}
              >
                <option>{defaultRole}</option>
                <option>SOC Analyst</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Security Engineer</option>
                <option>Fullstack Developer</option>
                <option>Cyber Investigator</option>
                <option>Intern</option>
                <option>Other</option>
              </select>
              {errors.role ? (
                <p className="mt-1.5 text-sm text-red-500">{errors.role}</p>
              ) : null}
            </div>

            {/* Ye extra input tabhi dikhega jab user "Other" role select karega. */}
            {formData.role === "Other" ? (
              <div>
                <input
                  className={`${getInputClassName("customRole")} opacity-0 animate-fade-up`}
                  type="text"
                  placeholder="Type your role"
                  aria-label="Custom role"
                  value={formData.customRole}
                  onChange={(event) => updateField("customRole", event.target.value)}
                />
                {errors.customRole ? (
                  <p className="mt-1.5 text-sm text-red-500">{errors.customRole}</p>
                ) : null}
              </div>
            ) : null}

            <div>
              <textarea
                className={`${getInputClassName("whyJoin")} min-h-[120px] resize-y`}
                placeholder="Why do you want to join us?"
                value={formData.whyJoin}
                onChange={(event) => updateField("whyJoin", event.target.value)}
              ></textarea>
              {errors.whyJoin ? (
                <p className="mt-1.5 text-sm text-red-500">{errors.whyJoin}</p>
              ) : null}
            </div>

            <div>
              <label
                className={`block cursor-pointer rounded-3xl border-2 border-dashed px-5 py-7 text-center transition duration-200 hover:-translate-y-0.5 hover:bg-blue-50 ${
                  errors.resume
                    ? "border-red-300 bg-red-50/40 hover:border-red-400"
                    : "border-blue-200 hover:border-blue-600"
                }`}
              >
                <input
                  className="hidden"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) =>
                    updateField("resume", event.target.files?.[0] ?? null)
                  }
                />
                <span className="mb-1 block font-bold text-slate-900">
                  {formData.resume ? formData.resume.name : "Upload Resume"}
                </span>
                <span className="text-[0.95rem] text-slate-500">
                  PDF, DOC, DOCX (Max 5MB)
                </span>
              </label>
              {errors.resume ? (
                <p className="mt-1.5 text-sm text-red-500">{errors.resume}</p>
              ) : null}
            </div>

            <div>
              <label className="flex items-start gap-2.5 text-[0.95rem] text-slate-600">
                <input
                  className="mt-1 w-auto accent-blue-600"
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(event) =>
                    updateField("agreedToTerms", event.target.checked)
                  }
                />
                <span className="leading-6">
                  I agree to the Terms, Privacy Policy and recruitment
                  communication.
                </span>
              </label>
              {errors.agreedToTerms ? (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.agreedToTerms}
                </p>
              ) : null}
            </div>

            {submitMessage ? (
              <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                {submitMessage}
              </p>
            ) : null}

            <button
              type="submit"
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
