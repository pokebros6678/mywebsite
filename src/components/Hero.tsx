export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero__grid">
        <div>
          <p className="hero__eyebrow">
            One-person IT support, local and reliable
          </p>
          <h1 id="hero-heading">
            Practical IT support for businesses in Southern Vancouver Island
          </h1>
          <p className="hero__copy">
            I design, secure, and maintain your technology so you can focus on
            your business. From cloud migrations to helpdesk and in-person
            support, I provide clear communication and measurable outcomes.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#services">
              Our services
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <aside className="hero__panel" aria-label="Highlights">
          <h2>Why clients choose All Tech'd Out</h2>
          <ul className="hero__list">
            <li>
              <IconCheck className="hero__check" />
              <span>
                Proactive monitoring and fast response when issues arise
              </span>
            </li>
            <li>
              <IconCheck className="hero__check" />
              <span>
                Security-first mindset aligned with your compliance needs
              </span>
            </li>
            <li>
              <IconCheck className="hero__check" />
              <span>
                Transparent pricing and documentation you can actually use
              </span>
            </li>
            <li>
              <IconCheck className="hero__check" />
              <span>
                On-site visits across Southern Vancouver Island when you need
                someone in the room
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
