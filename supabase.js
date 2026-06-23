const SUPABASE_URL = 'https://hahjbyevjggcfbxdsnge.supabase.co/rest/v1/'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhaGpieWV2amdnY2ZieGRzbmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NTQzMjIsImV4cCI6MjA5NzIzMDMyMn0.9xwV0ejQbameioX5BV1Ha9XG8V_k6ulbVSpJTWEBx8Q'

const { createClient } = supabase
const db = createClient(SUPABASE_URL, SUPABASE_KEY)