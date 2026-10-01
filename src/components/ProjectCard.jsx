import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project, index }) {
  return (
    <article
      className={`project-card ${index === 0 ? 'project-lead' : ''} ${project.featured ? '' : 'project-secondary'}`}
      data-reveal
    >
      <ProjectVisual
        project={project}
        number={String(index + 1).padStart(2, '0')}
      />
      <div className="project-content">
        <p className="eyebrow project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tech-tags" aria-label={`${project.title} technologies`}>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
