import "./About.css"

function About() {
  return (
    <section id="about" className="about-section">

      <h1>
        About Me
      </h1>

      <div className="about-content" style = {{backgroundColor: "black", color: "white", }}>

        <img style = {{width: "180px", height: "180px", borderRadius: "50%", padding: "10px", margin: "20px"}}
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