import { createClient } from '@supabase/supabase-js'

// Configuration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || ''
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY || ''

// Initialize Supabase client
export const supabaseClient = SUPABASE_URL && SUPABASE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_KEY)
  : null

export default supabaseClient
