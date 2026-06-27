const SUPABASE_URL = 'https://wflajmjnltdleifvqvtg.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmbGFqbWpubHRkbGVpZnZxdnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMDE2NTEsImV4cCI6MjA5NjU3NzY1MX0.sI0Od0mSSqUTvGDKTOTWS5SgkKAgwD1ifrtw5XvsFYE'

const { createClient } = supabase
const db = createClient(SUPABASE_URL, SUPABASE_KEY)
