"use client";

import { FormEvent, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

const pains = [
  ["01", "Missed opportunities", "Calls, messages and web enquiries arrive faster than your team can respond."],
  ["02", "Manual coordination", "Bookings, handovers and follow-ups depend on memory, inboxes and spreadsheets."],
  ["03", "Limited visibility", "Management cannot see response times, conversion, workload or where revenue is leaking."],
];

const solutions = [
  { number: "01", title: "Enquiry & booking systems", body: "Give every enquiry a clear next step. We design AI-assisted voice, chat and booking experiences that answer routine questions, qualify prospects and escalate the conversations that need a person.", tags: ["Voice & chat", "Qualification", "Scheduling", "Reminders"] },
  { number: "02", title: "Workflow automation", body: "Remove repetitive coordination from your team’s day. We connect the tools you already use and automate follow-ups, approvals, handovers and notifications around a defined business process.", tags: ["Integrations", "Process design", "Follow-ups", "Human escalation"] },
  { number: "03", title: "Data & cloud foundations", body: "Turn scattered operational data into a reliable management view. We build secure cloud environments, data pipelines and dashboards that make performance visible and decisions defensible.", tags: ["Cloud architecture", "Data pipelines", "Dashboards", "Governance"] },
];

export default function Home() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  function openLeadForm() {
    setIsLeadFormOpen(true);
  }

  function closeLeadForm() {
    setIsLeadFormOpen(false);
  }

  function submitLeadForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name")}`,
      `Company: ${formData.get("company")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      `Main operational challenge: ${formData.get("challenge")}`,
    ].join("\n");

    window.location.href = `mailto:hello@zeroindex.co.za?subject=${encodeURIComponent("Enquiry & Operations Review")}&body=${encodeURIComponent(body)}`;
    closeLeadForm();
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Zero Index home"><img className="brand-mark" src="/zero-index-mark.png" alt="" /><span>ZERO INDEX</span></a>
        <nav aria-label="Primary navigation"><a href="#problems">What we solve</a><a href="#solutions">Solutions</a><a href="#results">Client results</a><a href="#approach">How we work</a></nav>
        <button className="nav-cta" type="button" onClick={openLeadForm}>Book a review <Arrow /></button>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> Operations & technology consultancy</div>
        <h1>What&apos;s Your Data<br />Telling you?</h1>
        <div className="hero-bottom">
          <p>Book a free 30-minute Enquiry & Operations Review. We will examine how work moves through your business, identify the first measurable bottleneck and outline what should happen next.</p>
          <div className="hero-actions"><button className="button button-dark" type="button" onClick={openLeadForm}>Book an operations review <Arrow /></button><a className="text-link" href="#approach">See how we work <span>↓</span></a></div>
        </div>
        <div className="hero-meta"><span>Johannesburg · South Africa</span><span>For established, high-enquiry service businesses</span></div>
      </section>

      <section className="problem-section" id="problems">
        <div className="section-label">THE OPERATING GAP / 01</div>
        <div className="section-intro"><h2>Growth exposes the gaps in manual operations.</h2><p>Your business may be winning attention, but the work between first contact and completed service is still held together by people, inboxes and disconnected tools.</p></div>
        <div className="pain-grid">{pains.map(([n, title, body]) => <article className="pain-card" key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="flow-section">
        <div className="section-label light">ONE CONNECTED SYSTEM / 02</div>
        <div className="flow-heading"><h2>From first enquiry<br />to management insight.</h2><p>We do not install isolated technology. We design the complete path from customer conversation to operational action and make the result measurable.</p></div>
        <div className="flow-list">{["Capture every enquiry", "Qualify and route", "Book and follow up", "Trigger internal work", "Measure performance"].map((item, i) => <div className="flow-item" key={item}><span>0{i + 1}</span><strong>{item}</strong><b>→</b></div>)}</div>
      </section>

      <section className="solutions-section" id="solutions">
        <div className="section-label">WHAT WE BUILD / 03</div>
        <div className="section-intro solutions-intro"><h2>Practical systems for the work that drives your business.</h2><p>Start with one costly operational problem. Build the smallest dependable solution. Expand only when the evidence supports it.</p></div>
        <div className="solution-list">{solutions.map((solution) => <article className="solution-row" key={solution.number}><span className="solution-number">{solution.number}</span><h3>{solution.title}</h3><div><p>{solution.body}</p><ul>{solution.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="fit-section">
        <div className="section-label">WHO WE HELP / 04</div>
        <div className="fit-layout"><h2>Built for businesses where response time matters.</h2><div className="fit-copy"><p>We work best with established service businesses handling a meaningful volume of calls, messages, bookings or applications, without an internal automation and data engineering team.</p><div className="sector-list"><span>Clinics & practices</span><span>Recruitment agencies</span><span>Property services</span><span>Training providers</span><span>Automotive services</span></div></div></div>
      </section>

      <section className="results-section" id="results">
        <div className="section-label light">SELECTED WORK / 05</div>
        <div className="case-study"><div className="case-kicker">OPERATIONS SYSTEM · EDUCATION</div><h2>A connected booking and learner-management experience.</h2><blockquote>“The single best investment we’ve made in our operations this year.”</blockquote><div className="case-footer"><span>Ganja University</span><p>Zero Index designed an automated booking and student-management system that reduced repetitive administration and gave the team a more dependable way to run day-to-day operations.</p></div></div>
        <div className="case-study secondary-case"><div className="case-kicker">SECURE OPERATIONS · LEGAL</div><h2>Secure digital operations for a growing legal practice.</h2><div className="case-footer"><span>Nxumalo Attorneys Incorporated</span><p>Cloud-based file management and digital workflows gave the firm a secure foundation for remote work, client communication and future automation.</p></div></div>
      </section>

      <section className="approach-section" id="approach">
        <div className="section-label">HOW WE WORK / 06</div>
        <div className="approach-heading"><h2>Measured change.<br />Not technology theatre.</h2><p>Every engagement begins with the operation, not the tool. You get a clear scope, a working system and a way to judge whether it is producing value.</p></div>
        <div className="steps">{[["01", "Diagnose", "Map the enquiry, booking or reporting process and quantify what is being lost."],["02", "Design", "Define the smallest useful system, its integrations and the measures of success."],["03", "Implement", "Configure, connect and launch the solution with your team."],["04", "Operate", "Monitor performance, support the system and improve it using real evidence."]].map(([n,t,b]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-label">YOUR FIRST STEP</div><h2>Find out where your business is losing enquiries and staff time.</h2>
        <div className="contact-bottom"><p>In a free 30-minute review, we will examine how your organisation handles enquiries, bookings and follow-ups, then identify the first process worth improving.</p><button className="button button-light" type="button" onClick={openLeadForm}>Request my free review <Arrow /></button></div>
      </section>

      <footer>
        <div className="footer-brand"><img className="footer-mark" src="/zero-index-mark-dark.png" alt="" /><strong>ZERO INDEX</strong><p>Operations, automation<br />and data systems.</p></div>
        <div><span className="footer-label">CONTACT</span><a href="mailto:hello@zeroindex.co.za">hello@zeroindex.co.za</a><span>Johannesburg, South Africa</span></div>
        <div><span className="footer-label">NAVIGATE</span><a href="#solutions">Solutions</a><a href="#results">Client results</a><a href="#approach">How we work</a><a href="/pricing">Pricing</a></div>
        <div><span className="footer-label">LEGAL</span><a href="https://zeroindex.co.za/legal/privacy">Privacy</a><a href="https://zeroindex.co.za/legal/terms">Terms</a><span>© 2026 Zero Index</span></div>
      </footer>

      {isLeadFormOpen && (
        <div className="lead-modal" role="dialog" aria-modal="true" aria-labelledby="lead-form-title">
          <button className="lead-modal-backdrop" type="button" aria-label="Close lead form" onClick={closeLeadForm} />
          <form className="lead-form" onSubmit={submitLeadForm}>
            <div className="lead-form-header">
              <span className="contact-label">BOOK A REVIEW</span>
              <button className="lead-close" type="button" aria-label="Close lead form" onClick={closeLeadForm}>×</button>
            </div>
            <h2 id="lead-form-title">Tell us where operations are leaking time.</h2>
            <div className="form-grid">
              <label>Name<input name="name" type="text" autoComplete="name" required /></label>
              <label>Company<input name="company" type="text" autoComplete="organization" required /></label>
              <label>Email<input name="email" type="email" autoComplete="email" required /></label>
              <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
            </div>
            <label>Main operational challenge<textarea name="challenge" rows={5} required /></label>
            <button className="button button-dark" type="submit">Send enquiry <Arrow /></button>
          </form>
        </div>
      )}
    </main>
  );
}
