-- 1. Create PROFILES table (Publicly accessible user data)
create table public.profiles (
  id uuid references auth.users not null primary key,
  full_name text,
  avatar_url text,
  role text default 'student', -- 'student', 'mentor', 'admin'
  interests text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for profiles
alter table public.profiles enable row level security;

-- Policies for profiles
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- 2. Create EVENTS table
create table public.events (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  date timestamp with time zone not null,
  location text not null,
  category text not null, -- 'Conferencia', 'Taller', 'Webinar'
  image_url text,
  is_featured boolean default false,
  created_by uuid references public.profiles(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for events
alter table public.events enable row level security;

create policy "Events are viewable by everyone."
  on events for select
  using ( true );

create policy "Authenticated users can insert events (for demo purposes)."
  on events for insert
  with check ( auth.role() = 'authenticated' );

-- 3. Create SCHOLARSHIPS table
create table public.scholarships (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  organization text not null,
  description text,
  amount text, -- e.g., "$50,000", "Full Ride"
  deadline timestamp with time zone,
  category text, -- 'Pregrado', 'Maestría', 'Intercambio'
  image_url text,
  apply_link text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.scholarships enable row level security;

create policy "Scholarships are viewable by everyone."
  on scholarships for select
  using ( true );

-- 4. Create HACKATHONS table
create table public.hackathons (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  date timestamp with time zone,
  location text, -- 'Virtual', 'Lima, PE'
  prize_pool text, -- e.g., "S/ 10,000"
  team_size text, -- "3-5 personas"
  image_url text,
  register_link text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.hackathons enable row level security;

create policy "Hackathons are viewable by everyone."
  on hackathons for select
  using ( true );

-- 5. FUNCTION & TRIGGER: Auto-create profile on signup
-- This ensures that when a user signs up via Auth, a row is created in 'profiles'
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url, role)
  values (
    new.id, 
    new.raw_user_meta_data->>'full_name', 
    new.raw_user_meta_data->>'avatar_url',
    'student'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 6. Insert some DUMMY DATA to start with
insert into public.events (title, description, date, location, category, is_featured) values
('IA Summit Lima 2026', 'El evento más grande de IA en Perú.', now() + interval '10 days', 'UTEC - Barranco', 'Conferencia', true),
('Taller de React Avanzado', 'Aprende patrones de renderizado.', now() + interval '5 days', 'Virtual', 'Taller', false),
('Networking para Devs', 'Conoce a otros desarrolladores.', now() + interval '2 days', 'Miraflores', 'Meetup', false);

insert into public.scholarships (title, organization, amount, deadline, category) values
('Beca Generación Digital', 'Oracle', '100% Cobertura', now() + interval '30 days', 'Bootcamp'),
('Beca Mujeres en Ciencia', 'Concytec', 'S/ 5,000 Mensuales', now() + interval '60 days', 'Maestría');

insert into public.hackathons (title, location, prize_pool, team_size) values
('HackMIT Perú Edition', 'PUCP - San Miguel', '$5,000 USD', '3-5 personas'),
('NASA Space Apps Lima', 'Virtual', 'Incubación', '2-6 personas');
