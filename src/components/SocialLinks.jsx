import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`}>
      <a href={profile.github} target="_blank" rel="noreferrer">
        GitHub <ArrowUpRight aria-hidden="true" />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        LinkedIn <ArrowUpRight aria-hidden="true" />
      </a>
      <a href={`mailto:${profile.email}`}>
        Email <ArrowUpRight aria-hidden="true" />
      </a>
    </div>
  )
}
