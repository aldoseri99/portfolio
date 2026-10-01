import { Download } from 'lucide-react'
import { profile } from '../data/profile'

export default function CVButton({ className = '' }) {
  return (
    <a
      className={`button button-outline ${className}`}
      href={profile.cv}
      download
    >
      Download CV <Download size={15} aria-hidden="true" />
    </a>
  )
}
