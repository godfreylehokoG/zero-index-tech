"use client";

import { FormEvent, useState } from "react";

const Arrow = () => <span aria-hidden="true">-&gt;</span>;

const capabilities = [
  ["01", "Data foundations", "Bring finance, CRM, service and operational data into a governed source of truth that management can use with confidence."],
  ["02", "Analytics for action", "Design reporting that shows what is happening now, where performance is moving and which decision needs attention."],
  ["03", "Connected operations", "Make handovers, approvals, service delivery and customer communication work as one system instead of a chain of workarounds."],
  ["04", "Automation and AI", "Apply automation where it removes genuine friction, keeps people in control and creates an observable improvement."],
  ["05", "Platforms that earn their place", "Build custom portals, e-commerce and operational applications only when the business case calls for software of its own."],
];

export default function BrandingPage() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  function submitLeadForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name")}`,
      `Company: ${formData.get("company")}`,
      `Email: ${formData.get("email")}`,
      `Role: ${formData.get("role")}`,
      `Business challenge: ${formData.get("challenge")}`,
    ].join("\n");

    window.location.href = `mailto:hello@zeroindex.co.za?subject=${encodeURIComponent("Zero Index strategic enquiry")}&body=${encodeURIComponent(body)}`;
    setIsLeadFormOpen(false);
  }

  return (
    <main className="branding-page">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Zero Index home"><img className="brand-mark" src="/zero-index-mark.png" alt="" /><span>ZERO INDEX</span></a>
        <nav aria-label="Primary navigation"><a href="/#problems">What we solve</a><a href="/#solutions">Solutions</a><a href="/#results">Client results</a><a href="/#approach">How we work</a></nav>
        <button className="nav-cta" type="button" onClick={() => setIsLeadFormOpen(true)}>Start a conversation <Arrow /></button>
      </header>

      <section className="branding-hero">
        <div className="eyebrow"><span /> A clearer direction / 01</div>
        <h1>Make the business<br />easier to see, run<br />and grow.</h1>
        <div className="branding-hero-bottom"><p>Zero Index is becoming a technology partner for organisations with complex operations, valuable data and the budget to turn both into an advantage.</p><button className="button button-dark" type="button" onClick={() => setIsLeadFormOpen(true)}>Explore the fit <Arrow /></button></div>
      </section>

      <section className="branding-statement">
        <div className="section-label light">THE POSITION / 02</div>
        <div className="statement-layout"><h2>Not a website studio.<br />A systems partner.</h2><div><p>We are not pursuing work defined by page count, a faster logo or a prettier front end. Those things can matter, but they are not where meaningful operational value is created.</p><p>We work where data is fragmented, decisions are slow, customer journeys are inconsistent and teams are carrying too much of the process in their heads.</p></div></div>
      </section>

      <section className="branding-capabilities">
        <div className="section-label">WHAT ZERO INDEX BUILDS / 03</div>
        <div className="capabilities-intro"><h2>Technology with<br />an operating purpose.</h2><p>Every engagement should give leaders a clearer picture of the business and teams a more dependable way to do the work.</p></div>
        <div className="capability-list">{capabilities.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="branding-engagement">
        <div className="section-label light">HOW WE ENGAGE / 04</div>
        <div className="engagement-heading"><h2>Start with the<br />business problem.</h2><p>The tool comes later. First, establish where the operation is losing speed, visibility, customer confidence or commercial opportunity.</p></div>
        <div className="engagement-steps">
          <article><span>01</span><h3>Diagnose</h3><p>Map the process, people, data and existing technology around one material problem.</p></article>
          <article><span>02</span><h3>Define</h3><p>Agree the smallest valuable change, how it will work and how its impact will be measured.</p></article>
          <article><span>03</span><h3>Build</h3><p>Deliver the data, automation or platform capability with the people who will run it.</p></article>
          <article><span>04</span><h3>Improve</h3><p>Use the new visibility to refine the operation, not merely declare the project complete.</p></article>
        </div>
      </section>

      <section className="branding-fit">
        <div className="section-label">THE RIGHT FIT / 05</div>
        <div className="fit-layout"><h2>For leaders who are ready to invest in how the business works.</h2><div className="fit-copy"><p>The right client is not necessarily the largest company. It is an organisation with a meaningful operational challenge, an executive owner, accessible data and enough budget to make durable progress.</p><div className="sector-list"><span>Service businesses with high enquiry volume</span><span>Multi-site and multi-team operations</span><span>Organisations outgrowing spreadsheets and point tools</span><span>Leaders accountable for operational performance</span></div></div></div>
      </section>

      <section className="branding-cta">
        <div className="contact-label">STARTING POINT</div><h2>Find the first system worth fixing.</h2><div><p>Bring us the process that is slow, unclear or expensive to run. We will help you decide whether the next move is data, automation, a platform or a better operating design.</p><button className="button button-light" type="button" onClick={() => setIsLeadFormOpen(true)}>Start a conversation <Arrow /></button></div>
      </section>

      <footer>
        <div className="footer-brand"><img className="footer-mark" src="/zero-index-mark-dark.png" alt="" /><strong>ZERO INDEX</strong><p>Operations, automation<br />and data systems.</p></div>
        <div><span className="footer-label">CONTACT</span><a href="mailto:hello@zeroindex.co.za">hello@zeroindex.co.za</a><span>Johannesburg, South Africa</span></div>
        <div><span className="footer-label">NAVIGATE</span><a href="/#solutions">Solutions</a><a href="/#results">Client results</a><a href="/#approach">How we work</a><a href="/pricing">Pricing</a></div>
        <div><span className="footer-label">LEGAL</span><a href="/legal/privacy">Privacy</a><a href="/legal/terms">Terms</a><span>Copyright 2026 Zero Index</span></div>
      </footer>

      {isLeadFormOpen && <div className="lead-modal" role="dialog" aria-modal="true" aria-labelledby="branding-form-title"><button className="lead-modal-backdrop" type="button" aria-label="Close enquiry form" onClick={() => setIsLeadFormOpen(false)} /><form className="lead-form" onSubmit={submitLeadForm}><div className="lead-form-header"><span className="contact-label">START A CONVERSATION</span><button className="lead-close" type="button" aria-label="Close enquiry form" onClick={() => setIsLeadFormOpen(false)}>x</button></div><h2 id="branding-form-title">What is the business telling you?</h2><div className="form-grid"><label>Name<input name="name" type="text" autoComplete="name" required /></label><label>Company<input name="company" type="text" autoComplete="organization" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label><label>Role<input name="role" type="text" autoComplete="organization-title" /></label></div><label>What needs to work better?<textarea name="challenge" rows={5} required /></label><button className="button button-dark" type="submit">Send enquiry <Arrow /></button></form></div>}
    </main>
  );
}
