import { useState } from 'react'

const SERVICES_LIST = [
  {
    id: 's1',
    name: 'Sanación Energética Completa',
    description: 'Limpieza profunda de tu energía vital, alineación de chakras y revitalización espiritual. Elimina bloqueos energéticos, sana traumas emocionales y recupera tu bienestar integral. Sentirás una transformación profunda en tu cuerpo y espíritu.',
    icon: '✨'
  },
  {
    id: 's2',
    name: 'Videncia y Clarividencia',
    description: 'Lectura clara y profunda de tu futuro con visión espiritual. Revelaré los caminos ocultos que se abren para ti, las lecciones que debes aprender y tu verdadero propósito de vida. Obtén claridad en tus decisiones más importantes.',
    icon: '🔮'
  },
  {
    id: 's3',
    name: 'Lectura de Tarot Profunda',
    description: 'Interpretación detallada y ancestral del tarot para desvelar respuestas a tus preguntas más profundas. Cada carta revelará verdades ocultas sobre tu situación, relaciones, trabajo y destino. Encontrarás la guía espiritual que necesitas.',
    icon: '🃏'
  },
  {
    id: 's4',
    name: 'Amarre de Compromiso Serio',
    description: 'Ritual ancestral poderoso para fortalecer compromisos duraderos y consolidar relaciones estables. Utilizo ceremonias probadas que crean lazos profundos y permanentes. Ideal para parejas que desean un compromiso verdadero y duradero.',
    icon: '💑'
  },
  {
    id: 's5',
    name: 'Amarre de Amor Definitivo',
    description: 'Ceremonias espirituales poderosas para atraer y consolidar el amor verdadero en tu vida. Utilizo técnicas ancestrales que generan atracción magnética y conexión profunda. Transforma tu vida amorosa y atrae a tu persona indicada.',
    icon: '💕'
  }
]

function Services() {
  const [expandedId, setExpandedId] = useState(null)

  const toggleService = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="module" id="servicios">
      <h2>Servicios</h2>
      <div className="accordion">
        {SERVICES_LIST.map((service) => (
          <div key={service.id}>
            <button
              className="accordion-item"
              aria-expanded={expandedId === service.id}
              onClick={() => toggleService(service.id)}
            >
              <span className="service-icon">{service.icon}</span>
              <span>{service.name}</span>
            </button>
            {expandedId === service.id && (
              <div className="panel">
                <p>{service.description}</p>
                <a 
                  href={`https://wa.me/525537188949?text=${encodeURIComponent('Estoy interesado en: ' + service.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green"
                >
                  Contactar
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
