-- Add occupation column to profiles
alter table public.profiles 
add column if not exists occupation text default 'Estudiante STEM';

-- Update RLS if needed (usually 'update' policy covers all columns, but good to be safe)
-- The existing policy "Users can update own profile" covers it.
