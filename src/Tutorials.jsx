import "./Tutorials.css"
import TutorialCard from "./TutorialCard"

function Tutorials() {

  const tutorials = [
    {
      image: "/tutorial1.jpeg",
      title: "React Components",
      description: "Learn how to create and use components in React.",
      technology: "React",
      rating: 5,
      author: "Dhruv"
    },

    {
      image: "/tutorial2.jpeg",
      title: "JavaScript Basics",
      description: "Learn the basic concepts required for JavaScript programming.",
      technology: "JavaScript",
      rating: 5,
      author: "Alex"
    },

    {
      image: "/tutorial3.jpeg",
      title: "HTML and CSS",
      description: "Learn how to create and style a basic webpage.",
      technology: "HTML & CSS",
      rating: 4,
      author: "Sam"
    }
  ]

  return (
    <section className="tutorials-section">

      <h1>
        Featured Tutorials
      </h1>

      <div className="tutorials-container">

        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.title}
            image={tutorial.image}
            title={tutorial.title}
            description={tutorial.description}
            technology={tutorial.technology}
            rating={tutorial.rating}
            author={tutorial.author}
          />
        ))}

      </div>

      <button className="see-all-button">
        See all tutorials
      </button>

    </section>
  )
}

export default Tutorials