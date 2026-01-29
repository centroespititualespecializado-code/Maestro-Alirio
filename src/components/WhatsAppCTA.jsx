
function WhatsAppCTA() {
  const whatsappURL = 'https://wa.me/525537188949?text=Hola%20Maestro%20Alirio,%20vi%20su%20sitio%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20ceremonias%20y%20limpiezas.'
  const handleConversionClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion()
    }
  }

  return (
    <a 
      className="whatsapp-cta" 
      href={whatsappURL}
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contacto por WhatsApp"
      onClick={handleConversionClick}
    >
      <img src="assets/icons/icon-whatsapp.svg" alt="" className="whatsapp-icon" />{' '}
      Publicidad / WhatsApp
    </a>
  )
}

export default WhatsAppCTA
