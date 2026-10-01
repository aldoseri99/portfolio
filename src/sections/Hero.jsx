import { ArrowDown, ArrowDownRight } from 'lucide-react'
import CVButton from '../components/CVButton'
import SocialLinks from '../components/SocialLinks'

function SystemsArtwork() {
  return (
    <div className="systems-art" aria-hidden="true">
      <div className="art-topline">
        <span>EXPLORATIONS IN SOFTWARE</span>
        <span>FIG. 01</span>
      </div>
      <svg viewBox="0 0 440 390" fill="none" className="orbit-art">
        <defs>
          <pattern
            id="art-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".7" fill="currentColor" opacity=".23" />
          </pattern>
        </defs>
        <rect width="440" height="390" fill="url(#art-grid)" />
        <g stroke="currentColor" strokeWidth="1">
          <path
            d="M220 35V355M60 195H380"
            opacity=".22"
            strokeDasharray="3 5"
          />
          <circle cx="220" cy="195" r="139" opacity=".35" />
          <ellipse
            cx="220"
            cy="195"
            rx="86"
            ry="139"
            transform="rotate(45 220 195)"
            opacity=".65"
          />
          <ellipse
            cx="220"
            cy="195"
            rx="86"
            ry="139"
            transform="rotate(-45 220 195)"
            opacity=".65"
          />
          <ellipse cx="220" cy="195" rx="139" ry="48" opacity=".65" />
          <ellipse cx="220" cy="195" rx="48" ry="139" opacity=".65" />
          <circle cx="220" cy="195" r="83" opacity=".25" />
          <path d="M74 48h-9v9m301-9h9v9M65 333v9h9m301-9v9h-9" opacity=".65" />
        </g>
        <g fill="currentColor">
          <circle cx="220" cy="56" r="5" />
          <circle cx="359" cy="195" r="5" />
          <circle cx="122" cy="293" r="5" />
        </g>
        <circle cx="220" cy="195" r="32" fill="#f5f3eb" stroke="currentColor" />
        <text
          x="220"
          y="204"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="monospace"
          fontSize="25"
          letterSpacing="-4"
        >
          {'</>'}
        </text>
      </svg>
      <div className="art-bottomline">
        <span>SMALL PARTS. COMPLETE SYSTEMS.</span>
        <span className="art-plus">+</span>
      </div>
      <div className="art-note">Always curious about what’s underneath.</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="hero container"
      aria-labelledby="hero-heading"
      tabIndex={-1}
    >
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="small-rule" />
            Hello, I’m Ali Aldoseri
          </p>
          <h1 id="hero-heading">
            Software
            <br />
            <em>Engineer.</em>
          </h1>
          <p className="hero-description">
            I build software across full-stack web development, real-time
            systems, games, simulations, and developer tools.
          </p>
          <p className="hero-curiosity">
            Curious about how things work, from the interface to the systems
            underneath.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <CVButton />
          </div>
          <SocialLinks />
        </div>
        <SystemsArtwork />
      </div>
      <div className="hero-footnote">
        <span>
          Full-stack development <i /> Systems <i /> Creative problem-solving
        </span>
        <a href="#about">
          A little more about me <ArrowDown size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
