import "./Articles.css"
import ArticleCard from "./ArticleCard"

function Articles() {

  const articles = [
    {
      image: "/article1.jpeg",
      title: "Getting Started with React",
      description: "Learn the basic concepts of React and how to create your first component.",
      technology: "React",
      rating: 5,
      author: "Dhruv"
    },

    {
      image: "/article2.jpeg",
      title: "Introduction to JavaScript",
      description: "Understand variables, functions and basic JavaScript programming.",
      technology: "JavaScript",
      rating: 5,
      author: "Alex"
    },

    {
      image: "/article3.jpeg",
      title: "Building Web Applications",
      description: "Learn how HTML, CSS and JavaScript work together to create websites.",
      technology: "Web Development",
      rating: 4,
      author: "Sam"
    }
  ]

  return (
    <section className="articles-section">

      <h1>
        Featured Articles
      </h1>

      <div className="articles-container">

        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            image={article.image}
            title={article.title}
            description={article.description}
            technology={article.technology}
            rating={article.rating}
            author={article.author}
          />
        ))}

      </div>

      <button className="see-all-button">
        See all articles
      </button>

    </section>
  )
}

export default Articles