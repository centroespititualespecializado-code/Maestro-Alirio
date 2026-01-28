
function WhatsAppCTA() {
  const whatsappURL = 'https://wa.me/525537188949?text=Hola%20Maestro%20Alirio,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios'

  return (
    <a 
      className="whatsapp-cta" 
      href={whatsappURL}
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contacto por WhatsApp"
    >
      <img src="assets/icons/icon-whatsapp.svg" alt="" className="whatsapp-icon" />
      Publicidad / WhatsApp
    </a>
  )
}

export default WhatsAppCTA
