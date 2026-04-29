import { useCallback, useId, useState } from 'react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  const close = useCallback(() => setOpen(false), [])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-logo" href="#hero" onClick={close}>
          All <span>Tech'd Out</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6L18 18M18 6L6 18"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7H20M4 12H20M4 17H20"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
        <nav
          id={menuId}
          className={`site-nav${open ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a className="site-nav__cta" href="#contact" onClick={close}>
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}
