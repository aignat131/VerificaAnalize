import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://cnxcqrmavekggjombjxg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueGNxcm1hdmVrZ2dqb21ianhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5MDk4MzQsImV4cCI6MjAyMjQ4NTgzNH0.GWUHlHOD7evFnTmR5Au6Uq_PDJcTBkIVUIOMaSH9W1Y";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;