function Illustration({ type }) {
  if (type === 'network')
    return (
      <svg viewBox="0 0 400 260" fill="none">
        <g stroke="currentColor" strokeWidth="1.2">
          <circle cx="200" cy="130" r="94" opacity=".3" strokeDasharray="3 5" />
          <path
            d="m114 85 172 90M114 175l172-90M200 130V36M200 130v94M114 85v90m172-90v90M114 85l86-49 86 49M114 175l86 49 86-49"
            opacity=".6"
          />
          <circle cx="200" cy="130" r="34" />
          <circle cx="200" cy="130" r="43" opacity=".4" />
        </g>
        <g fill="var(--visual-bg)" stroke="currentColor" strokeWidth="1.5">
          <circle cx="114" cy="85" r="15" />
          <circle cx="286" cy="85" r="15" />
          <circle cx="114" cy="175" r="15" />
          <circle cx="286" cy="175" r="15" />
          <circle cx="200" cy="36" r="9" />
          <circle cx="200" cy="224" r="9" />
        </g>
        <g fill="currentColor">
          <circle cx="200" cy="123" r="8" />
          <path d="M186 146a14 14 0 0 1 28 0Z" />
          <circle cx="114" cy="85" r="4" />
          <circle cx="286" cy="85" r="4" />
          <circle cx="114" cy="175" r="4" />
          <circle cx="286" cy="175" r="4" />
        </g>
      </svg>
    )
  if (type === 'road')
    return (
      <svg viewBox="0 0 400 260" fill="none">
        <g stroke="currentColor" strokeWidth="1.2">
          <path
            d="M158 20v70H75m167-70v70h83M158 240v-70H75m167 70v-70h83"
            opacity=".75"
          />
          <path
            d="M200 20v65m0 90v65M75 130h70m110 0h70"
            strokeDasharray="6 8"
            opacity=".5"
          />
          <path
            d="M179 240V143q0-34-34-34H75M325 151H220q-41 0-41-41V20M221 20v90q0 41 41 41h63"
            opacity=".4"
          />
          <circle cx="200" cy="130" r="95" strokeDasharray="2 6" opacity=".3" />
        </g>
        <g fill="currentColor">
          <rect x="173" y="185" width="12" height="24" rx="2" />
          <rect x="215" y="49" width="12" height="24" rx="2" />
          <rect x="275" y="145" width="24" height="12" rx="2" />
          <rect x="105" y="103" width="24" height="12" rx="2" />
        </g>
      </svg>
    )
  if (type === 'framework')
    return (
      <svg viewBox="0 0 400 260" fill="none">
        <g stroke="currentColor" strokeWidth="1.2">
          <path d="m200 35 115 60-115 60L85 95Z" />
          <path d="m85 130 115 60 115-60M85 165l115 60 115-60" />
          <path
            d="M85 95v70m115-10v70m115-130v70"
            opacity=".35"
            strokeDasharray="3 5"
          />
          <path d="m200 65 58 30-58 30-58-30Z" opacity=".4" />
        </g>
        <text
          x="200"
          y="103"
          textAnchor="middle"
          fontSize="25"
          fontFamily="monospace"
          fill="currentColor"
        >
          {'{ }'}
        </text>
      </svg>
    )
  if (type === 'forum')
    return (
      <svg viewBox="0 0 400 260" fill="none">
        <g stroke="currentColor" strokeWidth="1.5">
          <path d="M100 65h145v90H135l-35 25V65Z" />
          <path d="M158 176h107l35 25V111h-39" opacity=".5" />
          <path d="M127 94h92m-92 20h65m-65 20h78" opacity=".5" />
        </g>
      </svg>
    )
  return (
    <svg viewBox="0 0 400 260" fill="none">
      <g stroke="currentColor">
        <circle cx="200" cy="130" r="86" opacity=".3" />
        <path d="M200 27v24m0 158v24M97 130h24m158 0h24" opacity=".5" />
      </g>
      <g fill="currentColor">
        <path d="M164 90h12v12h-12Zm60 0h12v12h-12Zm-48 12h48v12h-48Zm-12 12h72v12h-72Zm-12 12h24v12h-24Zm36 0h24v12h-24Zm36 0h24v12h-24Zm-72 12h96v12h-96Zm0 12h12v24h-12Zm84 0h12v24h-12Zm-60 12h12v12h-12Zm36 0h12v12h-12Z" />
      </g>
    </svg>
  )
}

export default function ProjectVisual({ project, number }) {
  if (project.image) {
    return (
      <div className="project-visual has-image">
        <img
          src={project.image}
          alt={project.imageAlt || `${project.title} project screenshot`}
          loading="lazy"
          width="800"
          height="500"
        />
      </div>
    )
  }
  return (
    <div
      className={`project-visual visual-${project.visual}`}
      aria-hidden="true"
    >
      <div className="visual-top">
        <span>PROJECT / {number}</span>
        <span className="visual-cross">+</span>
      </div>
      <div className="project-illustration">
        <Illustration type={project.visual} />
      </div>
      <div className="visual-bottom">
        <span>{project.caption}</span>
        <span>{number}</span>
      </div>
    </div>
  )
}
