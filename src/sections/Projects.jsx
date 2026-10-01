import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section container projects-section"
      tabIndex={-1}
      aria-label="Selected projects"
    >
      <div className="projects-heading">
        <SectionHeading
          number="03"
          eyebrow="Learning through building"
          title={
            <>
              Selected <em>Projects.</em>
            </>
          }
        >
          Full-stack systems, real-time communication, frameworks, simulations,
          and a little bit of play.
        </SectionHeading>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
