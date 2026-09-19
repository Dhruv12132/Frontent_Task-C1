import "./ArticleCard.css"

function ArticleCard({
  image,
  title,
  description,
  technology,
  rating,
  author
}) {

  return (
    <div className="article-card">

      <img
        src={image}
        alt={title}
      />

      <div className="article-content">

        <h2>
          {title}
        </h2>

        <p>
          {description}
        </p>

        <p className="technology">
          {technology}
        </p>

        <div className="article-info">

          <span>
            {rating}
          </span>

          <span>
            {author}
          </span>

        </div>

      </div>

    </div>
  )
}

export default ArticleCard