import { useState } from 'react'

const BENEFITS = [
  {
    id: 'b1',
    title: 'Paz interior',
    icon: 'assets/icons/icon-peace.svg',
    description: 'Recupera una serenidad profunda y duradera, reduce la ansiedad y el estrés cotidiano. Conecta con el silencio interior a través de prácticas ancestrales y meditación guiada. Aprenderás a tomar decisiones más claras, desde la calma y la lucidez espiritual.'
  },
  {
    id: 'b2',
    title: 'Amor y relaciones',
    icon: 'assets/icons/icon-relationships.svg',
    description: 'Experimenta mejoras significativas en tus relaciones afectivas. Recibe orientación personalizada y rituales poderosos como amarres de amor y prácticas tradicionales ancestrales. Transforma conflictos en armonía y atrae relaciones basadas en amor verdadero y respeto mutuo.'
  },
  {
    id: 'b3',
    title: 'Protección espiritual',
    icon: 'assets/icons/icon-protection.svg',
    description: 'Desarrolla una barrera energética impenetrable contra negatividad y ataques espirituales. Mediante ceremonias de protección probadas y limpiezas profundas, sentirás mayor seguridad emocional. Vive libre de energías oscuras y malas intenciones con una protección permanente.'
  },
  {
    id: 'b4',
    title: 'Claridad y propósito',
    icon: 'assets/icons/icon-clarity.svg',
    description: 'Descubre tu verdadero propósito de vida y misión espiritual. Recibe orientación clara sobre tu camino personal y profesional. Alinéate con tu propósito más profundo y vive una vida plena de significado, enfoque y realización en todos los aspectos de tu existencia.'
  }
]

function Benefits() {
  const [expandedId, setExpandedId] = useState(null)

  const toggleBenefit = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="module" id="beneficios">
      <h2>Beneficios</h2>
      <div className="accordion">
        {BENEFITS.map((benefit) => (
          <div key={benefit.id}>
            <button
              className="accordion-item"
              aria-expanded={expandedId === benefit.id}
              onClick={() => toggleBenefit(benefit.id)}
            >
              <img src={benefit.icon} className="icon" alt="" />
              <span>{benefit.title}</span>
            </button>
            {expandedId === benefit.id && (
              <div className="panel">
                <p>{benefit.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefits
