import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../data/profile'
import CVButton from './CVButton'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggle = useRef(null)
  const header = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(entry.target.id === 'home' ? '' : entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: 0 }
    )
    document
      .querySelectorAll('main > section[id]')
      .forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const closeOutside = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false)
    }
    const media = window.matchMedia('(min-width: 901px)')
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    media.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      media.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  const navigate = (event, id) => {
    setOpen(false)
    setActive(id)
    // Move keyboard focus out of the mobile menu before it becomes hidden.
    if (event.detail === 0)
      document.getElementById(id)?.focus({ preventScroll: true })
  }

  return (
    <header className="site-header" ref={header}>
      <div className="container nav-inner">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
          Ali Aldoseri<span className="wordmark-dot">.</span>
        </a>
        <button
          ref={toggle}
          className="icon-button menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`navigation ${open ? 'is-open' : ''}`}
        >
          <div className="nav-links">
            {navigation.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => navigate(event, id)}
                aria-current={active === id ? 'location' : undefined}
              >
                {label}
              </a>
            ))}
          </div>
          <CVButton className="nav-cv" />
        </nav>
      </div>
    </header>
  )
}
