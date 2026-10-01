import { ArrowUpRight, Asterisk } from 'lucide-react'
import { profile } from '../data/profile'
import SocialLinks from '../components/SocialLinks'

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section container"
      tabIndex={-1}
      aria-labelledby="contact-heading"
    >
      <div className="contact-panel" data-reveal>
        <div className="contact-copy">
          <p className="eyebrow">
            <span className="section-number">05</span>What’s next?
          </p>
          <h2 id="contact-heading">
            Let’s <em>Connect.</em>
          </h2>
          <p>
            I’m open to software engineering opportunities and conversations
            about interesting projects.
          </p>
          <a className="button button-light" href={`mailto:${profile.email}`}>
            Send me an email <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-details">
          <Asterisk
            className="contact-asterisk"
            size={104}
            strokeWidth={1}
            aria-hidden="true"
          />
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
