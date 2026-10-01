export default function SectionHeading({ number, eyebrow, title, children }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">
        <span className="section-number">{number}</span>
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  )
}
