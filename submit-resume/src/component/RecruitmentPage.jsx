import { useState } from "react";

// Perks section ke cards ka static data.
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

// Hero section ke short highlight items.
const stats = ["Remote Friendly", "Fast Hiring", "Global Team", "Career Growth"];

// Hiring-related quick metrics ko alag array me rakha gaya hai.
const metrics = [
  { value: "24h", label: "Average Review" },
  { value: "15+", label: "Open Roles" },
  { value: "100%", label: "Confidential" },
];

export default function RecruitmentPage() {
  // Dropdown ki current selected value ko state me store kiya ja raha hai.
  const [selectedRole, setSelectedRole] = useState("Select Role Applying For");

  return (
    <div className="page-shell">
      {/* Decorative background layer */}
      <div className="ambient-glow"></div>

      <header className="site-header">
        <div className="container header-row">
          <div>
            <p className="eyebrow">CRCYBERCRIME</p>
            <h1>Careers Portal</h1>
          </div>
          <button className="primary-button" type="button">
            Open Positions
          </button>
        </div>
      </header>

      <main className="container hero-grid">
        {/* Left side par hiring message aur summary cards show ho rahe hain */}
        <section className="hero-copy">
          <span className="badge">Secure Careers • Build Impact</span>
          <h2>Submit Your Resume &amp; Join Our Elite Team</h2>
          <p className="lead">
            We hire cybersecurity analysts, developers, investigators, SOC experts,
            researchers, content writers and interns. Work on real threats with a
            modern remote-first culture.
          </p>

          <div className="stats-grid">
            {/* map() har stats item ke liye ek card create karta hai */}
            {stats.map((item) => (
              <div key={item} className="stat-card">
                {item}
              </div>
            ))}
          </div>

          <div className="metrics-grid">
            {/* Metrics bhi array se dynamically render ho rahe hain */}
            {metrics.map((item) => (
              <article key={item.label} className="metric-card">
                <p className="metric-value">{item.value}</p>
                <p className="metric-label">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Right side par candidate application form hai */}
        <section className="form-panel">
          <div className="form-copy">
            <h3>Application Form</h3>
            <p>Complete the details below and upload your latest resume.</p>
          </div>

          <form className="application-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <div className="two-column">
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Country" />
            </div>
            <input type="text" placeholder="Current Profession" />
            <select
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
            {/* Agar "Other" choose ho, tab extra input field dikhegi */}
            {selectedRole === "Other" ? (
              <input
                type="text"
                placeholder="Type your role"
                aria-label="Custom role"
              />
            ) : null}
            <textarea placeholder="Why do you want to join us?"></textarea>
            <label className="upload-box">
              <input type="file" />
              <span className="upload-title">Upload Resume</span>
              <span className="upload-subtitle">PDF, DOC, DOCX (Max 5MB)</span>
            </label>
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>
                I agree to the Terms, Privacy Policy and recruitment
                communication.
              </span>
            </label>
            <button type="button" className="submit-button">
              Submit Application
            </button>
          </form>
        </section>
      </main>

      <section className="container perks-section">
        {/* Neeche company benefits ko cards ki form me dikhaya gaya hai */}
        <div className="perks-grid">
          {perks.map((card) => (
            <div key={card.title} className="perk-card">
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
