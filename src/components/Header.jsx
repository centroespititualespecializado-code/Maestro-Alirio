
function Header({ onContactClick }) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <div className="brand">
          <span className="brand-accent">Maestro</span> Alirio{' '}
          <span className="mini">🔮</span>
        </div>
        <nav className="main-nav">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#galeria">Galería</a>
        </nav>
        <button 
          className="btn-outline"
          onClick={onContactClick}
          style={{ border: 'none', padding: '0.45rem 0.9rem', cursor: 'pointer', background: 'transparent' }}
        >
          Contacto
        </button>
      </div>
    </header>
  )
}

export default Header
