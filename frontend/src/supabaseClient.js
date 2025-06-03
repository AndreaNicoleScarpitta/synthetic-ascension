import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cckcoshyzzzooojezoav.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNja2Nvc2h5enp6b29vamV6b2F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NjIyNzYsImV4cCI6MjA2NDUzODI3Nn0.FMbnBu4_ktyYVgCTSpS7qAH4OQSONQc5XciGfMlvWOI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
