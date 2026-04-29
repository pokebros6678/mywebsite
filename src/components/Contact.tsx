const CONTACT_EMAIL = 'mailto:owner@alltechdout.ca'
const CONTACT_PHONE = 'tel:+12507103986'

export function Contact() {
  return (
    <section
      id="contact"
      className="section section--alt"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <h2 id="contact-heading" className="section__title">
          Contact
        </h2>
        <p className="section__lead">
          Prefer email or a quick call? Reach me directly—no forms required.
          Based in Southern Vancouver Island.
        </p>
        <div className="contact__grid">
          <a className="contact-card" href={CONTACT_EMAIL}>
            <p className="contact-card__label">Email</p>
            <p className="contact-card__value">owner@alltechdout.ca</p>
          </a>
          <a className="contact-card" href={CONTACT_PHONE}>
            <p className="contact-card__label">Phone</p>
            <p className="contact-card__value">+1 250 710 3986</p>
          </a>
        </div>
      </div>
    </section>
  )
}
