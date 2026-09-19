import "./Projects.css"
import ProjectCard from "./ProjectCard"

function Projects() {

  const projects = [
    {
      image: "/Project1.jpeg",
      title: "Arduino Nano Sensor Monitor",
      description:
        "An Arduino Nano project that measures temperature, humidity and light levels."
    },

    {
      image: "/Project2.jpeg",
      title: "Weather Dashboard",
      description:
        "A dashboard designed to display current weather information and forecasts."
    },

    {
      image: "/Project3.jpeg",
      title: "BMI Calculator",
      description:
        "A simple web application for calculating Body Mass Index using height and weight."
    }
  ]

  return (
    <section id="work" className="projects-section">

      <h1>
        My Projects
      </h1>

      <div className="projects">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}

      </div>

    </section>
  )
}

export default Projects