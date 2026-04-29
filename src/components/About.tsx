export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section__title">
          About
        </h2>
        <p className="section__lead">
          A focused one-person IT practice delivering hands-on support without
          endless handoffs.
        </p>
        <div className="about__grid">
          <div>
            <p>
              All Tech'd Out supports small and mid-sized organizations across
              Southern Vancouver Island that need enterprise-grade reliability
              without enterprise bloat. Every engagement starts with listening:
              I map how your business operates, where data lives, and what
              success looks like for uptime and security.
            </p>
            <p>
              From there, I build a practical roadmap—quick wins first, then
              deeper improvements—so you see value early and always know what is
              next.
            </p>
          </div>
          <div className="about__stats">
            <div className="about__stat">
              <strong>24/7</strong>
              <span>Monitoring options for critical systems</span>
            </div>
            <div className="about__stat">
              <strong>SLA</strong>
              <span>Clear response targets you can hold us to</span>
            </div>
            <div className="about__stat">
              <strong>One expert</strong>
              <span>Direct support from the same person every time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
