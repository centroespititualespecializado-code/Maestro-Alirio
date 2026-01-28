
const TESTIMONIALS = [
  {
    id: 't1',
    name: 'María González',
    location: 'Ciudad de México',
    text: 'El Maestro Alirio transformó completamente mi vida. Sus ceremonias de sanación me liberaron del dolor emocional que cargaba por años. Hoy siento paz y claridad en cada aspecto de mi vida. ¡Recomendado!',
    rating: 5,
    service: 'Sanación Energética'
  },
  {
    id: 't2',
    name: 'Carlos Mendoza',
    location: 'Guadalajara',
    text: 'Consulté al Maestro sobre mi futuro y sus predicciones fueron sorprendentemente precisas. Su videncia es extraordinaria y sus consejos me ayudaron a tomar decisiones importantes en mi negocio.',
    rating: 5,
    service: 'Videncia y Clarividencia'
  },
  {
    id: 't3',
    name: 'Ana Rosales',
    location: 'Monterrey',
    text: 'Después de años de soledad, el amarre de amor del Maestro Alirio funcionó. Ahora tengo una relación hermosa y estable. Sus rituales ancestrales realmente tienen poder. ¡Gracias Maestro!',
    rating: 5,
    service: 'Amarre de Amor'
  },
  {
    id: 't4',
    name: 'Roberto Sánchez',
    location: 'Cancún',
    text: 'La protección espiritual que el Maestro Alirio me proporciono cambió todo. Sentía energías negras a mi alrededor, ahora me siento seguro y protegido. Excelente servicio.',
    rating: 5,
    service: 'Protección Espiritual'
  }
]

function Testimonials() {
  return (
    <section className="testimonials" id="comentarios">
      <div className="container">
        <h2>Testimonios de Clientes Satisfechos</h2>
        <p className="testimonials-intro">
          Miles de personas han transformado sus vidas con la guía del Maestro Alirio. 
          Lee lo que nuestros clientes tienen que decir.
        </p>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-footer">
                <div>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-location">{testimonial.location}</p>
                </div>
                <div className="service-badge">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials-cta">
          <p>¿Listo para transformar tu vida?</p>
          <a 
            href="https://wa.me/525537188949?text=Hola%20Maestro%20Alirio,%20quiero%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar Consulta Ahora
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
