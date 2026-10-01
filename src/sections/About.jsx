import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section
      id="about"
      className="section container about-section"
      tabIndex={-1}
      aria-label="About"
    >
      <SectionHeading
        number="01"
        eyebrow="A little background"
        title={
          <>
            Built on curiosity.
            <br />
            <em>Learned by doing.</em>
          </>
        }
      />
      <div className="about-copy" data-reveal>
        <p>
          I’m a Computer Science graduate from the{' '}
          <strong>University of Bahrain</strong>, currently developing my skills
          through <strong>Reboot01’s</strong> project-based software engineering
          program. I also hold a Software Engineering certification from{' '}
          <strong>General Assembly</strong>.
        </p>
        <p>
          My interests span full-stack development, backend systems, real-time
          applications, algorithms, systems programming, and game and simulation
          development.
        </p>
        <p>
          I learn best by building complete projects and understanding how the
          pieces work internally.
        </p>
        <div className="about-note">
          <span />
          An engineering mindset, with room to explore.
        </div>
      </div>
    </section>
  )
}
