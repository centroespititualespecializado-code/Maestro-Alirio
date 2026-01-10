// Inicializa el cliente Supabase (usa valores definidos en `supabase-config.js` o en `supabase-config.example.js` si copiaste)
if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) {
  console.warn('Supabase: falta SUPABASE_URL o SUPABASE_ANON_KEY. Rellena supabase-config.js a partir de supabase-config.example.js');
}
const supabaseClient = supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
window.supabaseClient = supabaseClient;
