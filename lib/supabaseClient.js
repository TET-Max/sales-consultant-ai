// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// ✅ Use environment variables to protect your keys
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
