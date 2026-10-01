import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const education = [
  {
    institution: 'University of Bahrain',
    qualification: 'Bachelor’s Degree in Computer Science',
    description: 'A foundation in computer science and software development.',
    label: 'Degree'
  },
  {
    institution: 'Reboot01',
    qualification: 'Software Engineering Program',
    description:
      'An intensive, project-based program spanning software development, algorithms, systems, networking, and collaborative projects.',
    label: 'Currently learning'
  },
  {
    institution: 'General Assembly',
    qualification: 'Software Engineering Certification',
    description: 'Practical training in software engineering.',
    label: 'Certification'
  }
]

export default function Education() {
  return (
    <section
      id="education"
      className="section education-section"
      tabIndex={-1}
      aria-label="Education and learning"
    >
      <div className="container education-layout">
        <SectionHeading
          number="04"
          eyebrow="The foundation"
          title={
            <>
              Education &<br />
              <em>Learning.</em>
            </>
          }
        >
          A formal foundation.
          <br />
          An ongoing practice.
        </SectionHeading>
        <div className="education-list">
          {education.map((item) => (
            <article
              className="education-item"
              key={item.institution}
              data-reveal
            >
              <div className="education-item-heading">
                <h3>{item.institution}</h3>
                <span
                  className={`education-label ${item.label === 'Currently learning' ? 'is-current' : ''}`}
                >
                  {item.label}
                </span>
              </div>
              <p className="qualification">{item.qualification}</p>
              <p>{item.description}</p>
            </article>
          ))}
          <p className="learning-note">
            <ArrowUpRight size={16} aria-hidden="true" /> Always learning.
            Always building.
          </p>
        </div>
      </div>
    </section>
  )
}
