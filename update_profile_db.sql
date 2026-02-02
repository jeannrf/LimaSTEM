-- 1. Add LinkedIn/Social column to profiles
alter table public.profiles 
add column if not exists linkedin_url text,
add column if not exists bio text;

-- 2. Create Storage Bucket for Avatars
-- (This usually needs to be done in UI, but we can try SQL if extension is enabled, otherwise user does it manually)
insert into storage.buckets (id, name, public) 
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

-- 3. Storage Policies (Allow public read, authed upload)
create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'avatars' );

create policy "Anyone can upload an avatar."
  on storage.objects for insert
  with check ( bucket_id = 'avatars' );

create policy "Anyone can update their own avatar."
  on storage.objects for update
  using ( auth.uid() = owner )
  with check ( bucket_id = 'avatars' );
