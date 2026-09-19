import "./TutorialCard.css"

function TutorialCard({
  image,
  title,
  description,
  technology,
  rating,
  author
}) {

  return (
    <div className="tutorial-card">

      <img
        src={image}
        alt={title}
      />

      <div className="tutorial-content">

        <h2>
          {title}
        </h2>

        <p>
          {description}
        </p>

        <p className="technology">
          {technology}
        </p>

        <div className="tutorial-info">

          <span>
            ⭐ {rating}
          </span>

          <span>
            {author}
          </span>

        </div>

      </div>

    </div>
  )
}

export default TutorialCard