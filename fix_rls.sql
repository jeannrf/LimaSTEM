-- ASEGURANDO PERMISOS DE EDICIÓN (RLS)

-- 1. Habilitar RLS en la tabla (por si acaso)
alter table public.profiles enable row level security;

-- 2. Borrar políticas antiguas para evitar conflictos o errores de "ya existe"
drop policy if exists "Public profiles are viewable by everyone." on public.profiles;
drop policy if exists "Users can insert their own profile." on public.profiles;
drop policy if exists "Users can update own profile." on public.profiles;
drop policy if exists "Public profiles are viewable by everyone" on public.profiles;
drop policy if exists "Users can insert their own profile" on public.profiles;
drop policy if exists "Users can update own profile" on public.profiles;

-- 3. Crear las políticas correctas

-- LECTURA: Todo el mundo puede ver los perfiles (necesario para la página Comunidad)
create policy "Public profiles are viewable by everyone"
  on public.profiles for select
  using ( true );

-- INSERCIÓN: Un usuario solo puede crear su propio perfil
create policy "Users can insert their own profile"
  on public.profiles for insert
  with check ( auth.uid() = id );

-- ACTUALIZACIÓN (La más importante para que funcione el botón Guardar):
-- Permite editar solo si el ID de la fila coincide con tu ID de usuario logueado
create policy "Users can update own profile"
  on public.profiles for update
  using ( auth.uid() = id );
