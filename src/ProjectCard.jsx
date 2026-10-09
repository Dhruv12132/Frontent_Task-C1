import "./ProjectCard.css"

function ProjectCard({ image, title, description }) {
  return (
    <div className="project-card" style = {{alignItems: "center", textAlign: "center" , padding: "20px", border: "1px solid #ccc", margin: "20px"}}>

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