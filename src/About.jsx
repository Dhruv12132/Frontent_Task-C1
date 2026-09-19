import "./About.css"

function About() {
  return (
    <section id="about" className="about-section">

      <h1>
        About Me
      </h1>

      <div className="about-content">

        <img
          src="/profile.jpeg"
          alt="Dhruv Profile"
        />

        <div className="about-text">

          <h2>
            Hello!
          </h2>

          <p>
            I am a software engineering student interested in
            programming, web development and technology.
          </p>

          <p>
            I enjoy learning new technologies and creating
            simple projects to improve my programming skills.
          </p>

        </div>

      </div>

    </section>
  )
}

export default About