import "./Gallery.css"

function Gallery() {

  const images = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg"
  ]

  return (
    <section id="gallery" className="gallery-section">

      <h1 style={{textAlign: "center", borderTop: "10px"}} >
        Gallery
      </h1>

      <div className="gallery" style = {{display: "flex", justifyContent: "center", gap: "20px", padding: "20px"}}>

        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
          />
        ))}

      </div>

    </section>
  )
}

export default Gallery