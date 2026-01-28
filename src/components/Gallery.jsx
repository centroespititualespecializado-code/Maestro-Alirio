
function Gallery() {
  const photos = [
    {
      src: 'assets/photos/img1.jpeg',
      alt: 'Ceremonia de Sanación Energética - Centro Espiritual Maestro Alirio México',
      title: 'Sanación Energética'
    },
    {
      src: 'assets/photos/img3.webp',
      alt: 'Sesión de Videncia y Clarividencia - Maestro Alirio',
      title: 'Videncia Profunda'
    },
    {
      src: 'assets/photos/img4.jpg',
      alt: 'Ceremonias Ancestrales - Centro Espiritual en México',
      title: 'Ceremonias Ancestrales'
    }
  ]

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <h2>Galería</h2>
        <div className="photos">
          {photos.map((photo, index) => (
            <figure key={index} className="photo-item">
              <img 
                src={photo.src} 
                alt={photo.alt}
                title={photo.title}
                loading="lazy"
              />
              <figcaption>{photo.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
