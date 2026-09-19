import "./ProjectCard.css"

function ProjectCard({ image, title, description }) {
  return (
    <div className="project-card">

      <img
        src={image}
        alt={title}
      />

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <a href="#">
        View Project
      </a>

    </div>
  )
}

export default ProjectCard