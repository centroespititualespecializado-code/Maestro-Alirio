
function Hero() {
  const whatsappURL = 'https://wa.me/525537188949?text=Hola%20Maestro%20Alirio,%20vi%20su%20sitio%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20ceremonias%20y%20limpiezas.'

  return (
    <section 
      className="hero" 
      id="inicio"
      style={{
        backgroundImage: "url('assets/photos/hero.jpg')",
        opacity: 0.7
      }}
    >
      <div className="overlay"></div>
      <div className="container hero-inner">
        <h1>Ceremonias para la Prosperidad</h1>
        <p className="lead">
          Abre caminos de abundancia y bienestar con ceremonias ancestrales y enfoque en resultados.
        </p>
        <a 
          className="btn-primary" 
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctame
        </a>
      </div>
    </section>
  )
}

export default Hero
