document.addEventListener('DOMContentLoaded', function () {
  // Toggle panels
  document.querySelectorAll('.accordion-item').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = btn.getAttribute('data-target');
      const panel = document.getElementById(targetId);
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      // Toggle current
      btn.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        panel.hidden = false;
      } else {
        panel.hidden = true;
      }

      // Option: cerrar otros (comentar si quieres permitir múltiples abiertos)
      document.querySelectorAll('.accordion-item').forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const otherPanel = document.getElementById(other.getAttribute('data-target'));
          if (otherPanel) otherPanel.hidden = true;
        }
      });
    });
  });

  // Mejorar enlaces de WhatsApp (opcional: abrir con texto prellenado)
  const wa = document.querySelector('.whatsapp-cta');
  if (wa) {
    wa.addEventListener('click', function () {
      // Abre en nueva pestaña (ya viene con target=_blank). Aquí podemos capturar eventos o medir clicks.
      console.log('Contacto por WhatsApp');
    });
  }

  // Modal de contacto
  const contactBtn = document.querySelector('.btn-outline');
  const modal = document.getElementById('contact-modal');
  const closeBtn = modal && modal.querySelector('.modal-close');
  if (contactBtn && modal) {
    contactBtn.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
    });
  }
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', function () {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const phone = formData.get('phone');
      const message = formData.get('message');
      const status = document.getElementById('contact-status');
      status.textContent = 'Enviando...';

      if (!window.supabaseClient) {
        status.textContent = 'Supabase no configurado. Copia los valores en supabase-config.js';
        return;
      }

      try {
        const { data, error } = await supabaseClient.from('contacts').insert([{ name, phone, message }]);
        if (error) {
          status.textContent = 'Error al enviar. Intenta de nuevo.';
          console.error(error);
          return;
        }
        status.textContent = 'Gracias. Responderemos pronto.';
        contactForm.reset();
        setTimeout(() => { modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); status.textContent = ''; }, 1600);
      } catch (err) {
        console.error(err);
        status.textContent = 'Error inesperado.';
      }
    });
  }

  // Cargar datos desde Supabase (services, benefits, gallery)
  async function loadServices () {
    const container = document.getElementById('services-list');
    if (!container) return;
    container.innerHTML = '<div class="loader">Cargando servicios...</div>';
    if (!window.supabaseClient) { container.innerHTML = '<div class="loader">Supabase no configurado</div>'; return; }

    const { data, error } = await supabaseClient.from('services').select('*').order('order', { ascending: true });
    if (error) { container.innerHTML = '<div class="loader">Error cargando servicios</div>'; console.error(error); return; }

    if (!data || data.length === 0) { container.innerHTML = '<div class="loader">No hay servicios aún</div>'; return; }

    container.innerHTML = '';
    data.forEach(s => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <img src="${s.icon || 'assets/icons/icon-protection.svg'}" class="card-icon" alt="">
        <h3>${s.title}</h3>
        <p>${s.description}</p>
        <div class="card-cta">
          <a class="btn-green" href="https://wa.me/573249704916?text=${encodeURIComponent('Hola, quiero información sobre: ' + s.title)}" target="_blank">Solicitar</a>
          <div class="phone">(+57) 324 970 4916</div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  async function loadBenefits () {
    const container = document.getElementById('benefits');
    if (!container) return;
    if (!window.supabaseClient) { console.warn('Supabase no configurado'); return; }

    const { data, error } = await supabaseClient.from('benefits').select('*').order('order', { ascending: true });
    if (error) { console.error(error); return; }
    if (!data || data.length === 0) return;

    // Limpiar existentes
    container.innerHTML = '';
    data.forEach(b => {
      const id = 'b' + b.id;
      const btn = document.createElement('button');
      btn.className = 'accordion-item';
      btn.setAttribute('aria-expanded','false');
      btn.setAttribute('data-target', id);
      btn.innerHTML = `<img src="${b.icon || 'assets/icons/icon-peace.svg'}" class="icon" alt=""> <span>${b.title}</span>`;

      const panel = document.createElement('div');
      panel.className = 'panel';
      panel.id = id;
      panel.hidden = true;
      panel.innerHTML = `<p>${b.description}</p>`;

      container.appendChild(btn);
      container.appendChild(panel);

      // Reattach toggle behavior for dynamically added item
      btn.addEventListener('click', function () {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        panel.hidden = expanded;

        // cerrar otros
        container.querySelectorAll('.accordion-item').forEach(function (other) {
          if (other !== btn) {
            other.setAttribute('aria-expanded', 'false');
            const otherPanel = document.getElementById(other.getAttribute('data-target'));
            if (otherPanel) otherPanel.hidden = true;
          }
        });
      });
    });
  }

  async function loadGallery () {
    const container = document.getElementById('gallery-list');
    if (!container) return;
    if (!window.supabaseClient) { console.warn('Supabase no configurado'); return; }

    const { data, error } = await supabaseClient.from('gallery').select('*').order('order', { ascending: true });
    if (error) { console.error(error); return; }
    if (!data || data.length === 0) return;

    container.innerHTML = '';
    for (const item of data) {
      let src = item.url || null;
      if (!src && item.file_path) {
        try {
          const { publicURL } = supabaseClient.storage.from('photos').getPublicUrl(item.file_path);
          src = publicURL;
        } catch (err) { console.warn('No se pudo obtener publicURL', err); }
      }
      const img = document.createElement('img');
      img.src = src || 'assets/photos/center-1.svg';
      img.alt = item.title || 'Foto del centro';
      container.appendChild(img);
    }
  }

  // Inicializar carga de datos
  loadServices();
  loadBenefits();
  loadGallery();
});