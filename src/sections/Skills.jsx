import {
  Code2,
  Database,
  LayoutTemplate,
  Server,
  Terminal,
  Workflow
} from 'lucide-react'
import { skills } from '../data/skills'
import SectionHeading from '../components/SectionHeading'

const icons = {
  code: Code2,
  database: Database,
  layout: LayoutTemplate,
  server: Server,
  terminal: Terminal,
  workflow: Workflow
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
      tabIndex={-1}
      aria-label="Skills and technologies"
    >
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="The toolkit"
          title={
            <>
              Tools I build <em>with.</em>
            </>
          }
        >
          A practical mix of languages, technologies, and the concepts that
          connect them.
        </SectionHeading>
        <div className="skills-grid">
          {skills.map(({ title, icon, items }) => {
            const Icon = icons[icon]
            return (
              <div className="skill-group" key={title} data-reveal>
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
