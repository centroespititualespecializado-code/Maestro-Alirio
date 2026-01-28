import { useState } from 'react'
import { supabaseClient } from '../config/supabase-config'

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('Enviando...')

    if (!supabaseClient) {
      setStatus('Supabase no configurado. Revisa supabase-config.js')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabaseClient
        .from('contacts')
        .insert([formData])

      if (error) {
        setStatus('Error al enviar. Intenta de nuevo.')
        console.error(error)
        return
      }

      setStatus('Gracias. Responderemos pronto.')
      setFormData({ name: '', phone: '', message: '' })
      
      setTimeout(() => {
        onClose()
        setStatus('')
      }, 1600)
    } catch (err) {
      console.error(err)
      setStatus('Error inesperado.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal" aria-hidden={!isOpen}>
      <div className="modal-content">
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h3>Contactar</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre
            <br />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Teléfono
            <br />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mensaje
            <br />
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <div style={{ marginTop: '0.6rem' }}>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
        {status && <div role="status" style={{ marginTop: '.6rem' }}>{status}</div>}
      </div>
    </div>
  )
}

export default ContactModal
