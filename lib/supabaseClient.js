import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gjhxqpfqsjziwxpewirj.supabase.co"; // <-- your URL here
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; // <-- your long anon key here

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
