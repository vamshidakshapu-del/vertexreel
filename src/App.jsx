import { useEffect, useRef, useState } from 'react'
import { BRAND } from './config'
import { services, process, whyUs } from './data'
import { Logo, ServiceIcon, InstagramIcon, ArrowIcon, MenuIcon } from './components/Icons'

/* Reveal-on-scroll wrapper */
function Reveal({ children, as: Tag = 'div', className = '', style }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    ['Services', '#services'],
    ['Why us', '#why'],
    ['Process', '#process'],
    ['Contact', '#contact'],
  ]
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <Logo />
          {BRAND.name}
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-menu-cta"
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <InstagramIcon />
            Contact us on Instagram
          </a>
        </nav>
        <div className="nav-cta">
          <a
            className="btn btn-primary nav-desktop-cta"
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
            <span>Contact us</span>
          </a>
          <button
            className="menu-btn"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const tags = ['App Development', 'Website Design', 'Video Editing', 'Brand Reels', 'Motion Graphics', 'UI / UX']
  return (
    <section className="hero" id="top">
      <span className="glow a" />
      <span className="glow b" />
      <div className="container">
        <span className="pill">
          <span className="dot" />
          New studio — now taking our first projects
        </span>
        <h1>
          We build <span className="gradient-text">the tech</span>. We cut{' '}
          <span className="gradient-text">the story</span>.
        </h1>
        <p className="lead">
          {BRAND.name} is a creative studio building applications and websites, and editing
          video that actually gets watched. Design, build and edit — all under one roof.
        </p>
        <div className="hero-actions">
          <a className="btn ig-btn" href={BRAND.instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon />
            Contact us on Instagram
          </a>
          <a className="btn btn-ghost" href="#services">
            Explore services <ArrowIcon />
          </a>
        </div>

        <div className="hero-marquee">
          <div className="marquee-track">
            {[...tags, ...tags].map((t, i) => (
              <span key={i}>{t} •</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">What we do</span>
          <h2 className="section-title">Three crafts, one team.</h2>
          <p>
            From the first wireframe to the final export, we handle the whole build so your
            brand looks and feels premium everywhere.
          </p>
        </Reveal>
        <div className="cards">
          {services.map((s, i) => (
            <Reveal className="card" key={s.title} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="ic">
                <ServiceIcon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section id="why">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Why us</span>
          <h2 className="section-title">A fresh studio, fully invested in your project.</h2>
          <p>
            We&apos;re just getting started — which means your project gets our full focus, our
            best pricing, and work we&apos;re determined to be proud of.
          </p>
        </Reveal>
        <div className="why-grid">
          {whyUs.map((w, i) => (
            <Reveal className="card" key={w.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <h3>{w.title}</h3>
              <p style={{ marginBottom: 0 }}>{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">A clear path from idea to launch.</h2>
        </Reveal>
        <div className="steps">
          {process.map((p, i) => (
            <Reveal className="step" key={p.step} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="num gradient-text">{p.step}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <Reveal className="cta-box">
          <h2>Let&apos;s build something worth sharing.</h2>
          <p>
            Tell us about your project — app, website or video. We reply to every message on
            Instagram, usually within a day.
          </p>
          <a className="btn ig-btn" href={BRAND.instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon />
            Contact us on Instagram
          </a>
          <div className="handle">@{BRAND.instagramHandle}</div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#top" className="brand">
          <Logo />
          {BRAND.name}
        </a>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#why">Why us</a>
          <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <div>
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
