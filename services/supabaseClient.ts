import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

// The placeholder keeps the public landing page usable when configuration is missing.
// Authentication always checks this flag before attempting a request.
export const isSupabaseConfigured = Boolean(url && key);
export const supabase = createClient(url || 'https://unconfigured.invalid', key || 'unconfigured');
