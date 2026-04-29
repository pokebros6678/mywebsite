const services = [
  {
    title: 'Managed IT & helpdesk',
    description:
      'Endpoint management, patching, and friendly support your staff will actually enjoy.',
    icon: IconMonitor,
  },
  {
    title: 'On-site & in-person support',
    description:
      'Scheduled visits and same-day callouts across Southern Vancouver Island when you need hands at the desk—hardware swaps, wiring checks, AV, and walk-up help.',
    icon: IconOnsite,
  },
  {
    title: 'Cloud & infrastructure',
    description:
      'Architecture, migrations, and cost-aware operations on Microsoft 365, Azure, and AWS.',
    icon: IconCloud,
  },
  {
    title: 'Security & compliance',
    description:
      'Hardening, backups, MFA rollout, and practical policies that reduce risk without slowing you down.',
    icon: IconShield,
  },
  {
    title: 'Network & connectivity',
    description:
      'Wi-Fi, VPNs, firewalls, and site-to-site links designed for reliability and easy troubleshooting.',
    icon: IconNetwork,
  },
  {
    title: 'Business continuity',
    description:
      'Disaster recovery planning and testing so outages are rare—and recoverable when they happen.',
    icon: IconRefresh,
  },
  {
    title: 'Project delivery',
    description:
      'Office moves, new-hire onboarding kits, and vendor coordination with one accountable IT partner.',
    icon: IconClipboard,
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="section section--alt"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <h2 id="services-heading" className="section__title">
          Services
        </h2>
        <p className="section__lead">
          End-to-end IT partnership from a single trusted provider: strategy,
          implementation, and ongoing support tailored to your organization.
        </p>
        <div className="service-grid">
          {services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="service-card">
              <div className="service-card__icon" aria-hidden="true">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function IconMonitor() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="4"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 20h8M12 16v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconCloud() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 18h11a4 4 0 000-8 5 5 0 00-9.7-1.5A3.5 3.5 0 007 18z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconNetwork() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="6" r="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6.5 7.5L10 16M17.5 7.5L14 16"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function IconRefresh() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12a8 8 0 0113.657-5.657L20 8M20 4v4h-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12a8 8 0 01-13.657 5.657L4 16M4 20v-4h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconClipboard() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 5h6M9 5a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 9h4M10 13h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconOnsite() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}
