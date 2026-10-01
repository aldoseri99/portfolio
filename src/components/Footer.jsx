import { ArrowUp } from 'lucide-react'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="container site-footer">
      <div>
        <a className="footer-name" href="#home">
          Ali Aldoseri <span>— Software Engineer</span>
        </a>
        <p>© {new Date().getFullYear()} Ali Aldoseri</p>
      </div>
      <SocialLinks />
      <a className="back-to-top" href="#home" aria-label="Back to top">
        <ArrowUp size={18} aria-hidden="true" />
      </a>
    </footer>
  )
}
