"use client";

import { FormEvent, useState } from "react";

const Arrow = () => <span aria-hidden="true">-&gt;</span>;

const plans = [
  {
    name: "Basic",
    price: "R6,000",
    description: "A clear online presence for a business getting established.",
    features: [
      "50% upfront project deposit",
      "Monthly development payments for the remaining balance",
      "Domain registration and setup",
      "Professional email setup",
      "One-page website with Home, About and Contact",
      "Google Business Profile setup",
      "Post-launch domain and maintenance plan",
    ],
  },
  {
    name: "Standard",
    price: "R9,000",
    description: "A complete digital foundation for a growing business.",
    featured: true,
    features: [
      "50% upfront project deposit",
      "Monthly development payments for the remaining balance",
      "Everything in Basic",
      "Website of up to five pages",
      "Facebook and Instagram page creation",
      "Brand identity with logo and colour palette",
      "One-month content plan with calendar and captions",
      "Post-launch domain and maintenance plan",
    ],
  },
  {
    name: "Premium",
    price: "R15,000",
    description: "A more capable customer experience with hands-on support.",
    features: [
      "50% upfront project deposit",
      "Monthly development payments for the remaining balance",
      "Everything in Standard",
      "Customer dashboard for bookings or enquiries",
      "AI assistant setup",
      "Client onboarding documents",
      "Dedicated project manager",
      "Google Workspace setup for Drive, Gmail and Meet",
      "Post-launch domain and maintenance plan",
    ],
  },
];

const addons = [
  ["Booking system", "R1,500"],
  ["AI smart booking system", "Coming soon"],
  ["API integration", "R800"],
  ["Login portal", "R1,200"],
  ["AI chatbot", "R1,500"],
  ["AI voice assistant", "Coming soon"],
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("a tailored package");
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  function openLeadForm(plan = "a tailored package") {
    setSelectedPlan(plan);
    setIsLeadFormOpen(true);
  }

  function closeLeadForm() {
    setIsLeadFormOpen(false);
  }

  function submitLeadForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Package: ${selectedPlan}`,
      `Name: ${formData.get("name")}`,
      `Company: ${formData.get("company")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      `Project details: ${formData.get("challenge")}`,
    ].join("\n");

    window.location.href = `mailto:hello@zeroindex.co.za?subject=${encodeURIComponent(`Website enquiry: ${selectedPlan}`)}&body=${encodeURIComponent(body)}`;
    closeLeadForm();
  }

  return (
    <main className="pricing-page">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Zero Index home"><img className="brand-mark" src="/zero-index-mark.png" alt="" /><span>ZERO INDEX</span></a>
        <nav aria-label="Primary navigation"><a href="/#problems">What we solve</a><a href="/#solutions">Solutions</a><a href="/#approach">How we work</a><a href="/pricing">Pricing</a></nav>
        <button className="nav-cta" type="button" onClick={() => openLeadForm()}>Start a project <Arrow /></button>
      </header>

      <section className="pricing-hero">
        <div className="eyebrow"><span /> Website pricing / 01</div>
        <h1>Build the right<br />digital foundation.</h1>
        <div className="pricing-hero-bottom">
          <p>Choose a starting point for the website, presence and systems your business needs now. Every package begins with a clear scope and a practical route to launch.</p>
          <button className="button button-dark" type="button" onClick={() => openLeadForm()}>Discuss your project <Arrow /></button>
        </div>
      </section>

      <section className="pricing-plans">
        <div className="section-label">WEBSITE PACKAGES / 02</div>
        <div className="pricing-intro"><h2>Clear work.<br />Clear cost.</h2><p>The monthly figure covers the remaining development balance while your site is being built. Every project starts with a 50% deposit.</p></div>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article className={`pricing-plan${plan.featured ? " featured" : ""}`} key={plan.name}>
              <div className="plan-topline"><span>{plan.featured ? "RECOMMENDED" : "WEBSITE PACKAGE"}</span><span>{plan.featured ? "02" : plan.name === "Basic" ? "01" : "03"}</span></div>
              <h2>{plan.name}</h2>
              <p className="plan-price">{plan.price}<small> / month</small></p>
              <p className="plan-description">{plan.description}</p>
              <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <button className={`plan-button${plan.featured ? " plan-button-featured" : ""}`} type="button" onClick={() => openLeadForm(plan.name)}>Choose {plan.name} <Arrow /></button>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-model">
        <div className="section-label light">HOW PAYMENT WORKS / 03</div>
        <div className="pricing-model-intro"><h2>Simple from<br />first payment to care.</h2><p>The aim is to make launch manageable, then keep the essential work of looking after your site covered.</p></div>
        <div className="payment-steps">
          <article><span>01</span><h3>Start with 50% upfront</h3><p>Your deposit reserves development time and covers planning, setup and onboarding.</p></article>
          <article><span>02</span><h3>Pay monthly during development</h3><p>The outstanding project balance is split into monthly payments while the work is in progress.</p></article>
          <article><span>03</span><h3>Continue with post-launch care</h3><p>After launch, a monthly care plan covers domains, maintenance, updates, backups and support.</p></article>
        </div>
      </section>

      <section className="addons-section-clean">
        <div className="section-label">ADD-ON SERVICES / 04</div>
        <div className="addons-heading"><h2>Extend the work<br />where it counts.</h2><p>Add focused capability to the base package when it supports a real customer or operational need.</p></div>
        <div className="addons-list">
          {addons.map(([name, price], index) => <div className="addon-row" key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><b className={price === "Coming soon" ? "coming-soon" : ""}>{price}</b></div>)}
        </div>
      </section>

      <section className="pricing-cta">
        <div className="contact-label">PROJECT ENQUIRY</div>
        <h2>Need something more specific?</h2>
        <div><p>Tell us what your business needs to do better. We will help you find the smallest useful starting point.</p><button className="button button-light" type="button" onClick={() => openLeadForm()}>Request a tailored quote <Arrow /></button></div>
      </section>

      <footer>
        <div className="footer-brand"><img className="footer-mark" src="/zero-index-mark-dark.png" alt="" /><strong>ZERO INDEX</strong><p>Operations, automation<br />and data systems.</p></div>
        <div><span className="footer-label">CONTACT</span><a href="mailto:hello@zeroindex.co.za">hello@zeroindex.co.za</a><span>Johannesburg, South Africa</span></div>
        <div><span className="footer-label">NAVIGATE</span><a href="/#solutions">Solutions</a><a href="/#results">Client results</a><a href="/#approach">How we work</a><a href="/pricing">Pricing</a></div>
        <div><span className="footer-label">LEGAL</span><a href="/legal/privacy">Privacy</a><a href="/legal/terms">Terms</a><span>Copyright 2026 Zero Index</span></div>
      </footer>

      {isLeadFormOpen && (
        <div className="lead-modal" role="dialog" aria-modal="true" aria-labelledby="lead-form-title">
          <button className="lead-modal-backdrop" type="button" aria-label="Close lead form" onClick={closeLeadForm} />
          <form className="lead-form" onSubmit={submitLeadForm}>
            <div className="lead-form-header"><span className="contact-label">PROJECT ENQUIRY</span><button className="lead-close" type="button" aria-label="Close lead form" onClick={closeLeadForm}>x</button></div>
            <h2 id="lead-form-title">Let&apos;s talk about {selectedPlan}.</h2>
            <div className="form-grid"><label>Name<input name="name" type="text" autoComplete="name" required /></label><label>Company<input name="company" type="text" autoComplete="organization" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" /></label></div>
            <label>What do you need your website to do?<textarea name="challenge" rows={5} required /></label>
            <button className="button button-dark" type="submit">Send enquiry <Arrow /></button>
          </form>
        </div>
      )}
    </main>
  );
}
