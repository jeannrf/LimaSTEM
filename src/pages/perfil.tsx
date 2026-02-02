import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import MainLayout from '@/layouts/MainLayout';
import { User, Mail, Calendar, Shield, Edit2, Camera, LogOut, Linkedin, X, Save, Loader2, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { supabase } from '@/lib/supabase';

const AVAILABLE_INTERESTS = [
  'Desarrollo Web', 'Inteligencia Artificial', 'Data Science',
  'Ciberseguridad', 'Blockchain', 'Diseño UX/UI',
  'Mobile Apps', 'Cloud Computing', 'Robótica',
  'Videojuegos', 'DevOps', 'Machine Learning'
];

export default function Profile() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  // Local State for Profile Data (Editable)
  const [profileData, setProfileData] = useState({
    full_name: '',
    email: '',
    linkedin_url: '',
    avatar_url: '',
    occupation: '',
    interests: [] as string[]
  });

  // Store original data to revert on Cancel
  const [originalData, setOriginalData] = useState<{
    full_name: string;
    email: string;
    linkedin_url: string;
    avatar_url: string;
    occupation: string;
    interests: string[];
  } | null>(null);

  const [loadingData, setLoadingData] = useState(true);

  // Editing Mode State
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // File Upload Ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    } else if (user) {
      loadProfile();
    }
  }, [user, loading, router]);

  async function loadProfile() {
    try {
      setLoadingData(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      const loadedData = {
        full_name: data?.full_name || user?.user_metadata?.full_name || '',
        email: user?.email || '',
        linkedin_url: data?.linkedin_url || '',
        avatar_url: data?.avatar_url || '',
        occupation: data?.occupation || '',
        interests: data?.interests || []
      };

      setProfileData(loadedData);
      setOriginalData(loadedData);

      // If profile doesn't exist in DB (old user), create it silently
      if (!data && user) {
        const { error: insertError } = await supabase.from('profiles').insert([{
          id: user.id,
          full_name: user.user_metadata?.full_name || '',
          email: user.email,
          role: 'student',
          interests: []
        }]);
        if (!insertError) loadProfile(); // Reload to get fresh data
      }

    } catch (err) {
      console.error("Error loading profile", err);
    } finally {
      setLoadingData(false);
    }
  }

  // --- Handlers ---
  const handleSave = async () => {
    try {
      setIsSaving(true);
      console.log("Intentando guardar:", profileData);

      // Usamos UPSERT en lugar de UPDATE
      const { data, error } = await supabase
        .from('profiles')
        .upsert({
          id: user?.id,
          full_name: profileData.full_name,
          linkedin_url: profileData.linkedin_url,
          interests: profileData.interests,
          avatar_url: profileData.avatar_url,
          occupation: profileData.occupation,
          role: 'student'
        })
        .select();

      if (error) {
        console.error("Error devuelto por Supabase:", error);
        throw error;
      }

      console.log("Guardado exitoso:", data);

      setOriginalData(profileData);
      setIsEditing(false);

    } catch (err: any) {
      console.error("Error saving profile (CATCH):", err);
      alert(`Error al guardar: ${err.message || JSON.stringify(err)}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    // Revert to original data
    if (originalData) {
      setProfileData(originalData);
    }
    setIsEditing(false);
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    try {
      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // Update State & DB immediately
      setProfileData(prev => ({ ...prev, avatar_url: publicUrl }));
      setOriginalData(prev => prev ? ({ ...prev, avatar_url: publicUrl }) : null);

      await supabase.from('profiles').update({ avatar_url: publicUrl }).eq('id', user.id);

    } catch (error) {
      console.error('Error uploading avatar:', error);
      alert('Error al subir la imagen');
    }
  };

  const toggleInterest = (interest: string) => {
    setProfileData(prev => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  if (loading || !user || loadingData) {
    return (
      <div className="min-h-screen pt-32 flex justify-center bg-[#050011]">
        <Loader2 className="animate-spin text-[#9d4edd]" />
      </div>
    );
  }

  const initials = profileData.full_name
    ? profileData.full_name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase()
    : "US";

  return (
    <MainLayout title="Mi Perfil | LimaSTEM">
      <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-[#050011]">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7b2cbf] opacity-10 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-medium text-white mb-8">Mi Perfil</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Identify Card */}
            <div className="md:col-span-1 space-y-6">
              <div className="premium-card p-6 flex flex-col items-center text-center relative overflow-hidden">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                />
                <div onClick={() => fileInputRef.current?.click()} className="relative mb-4 group cursor-pointer">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7b2cbf] to-[#9d4edd] p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#130725] flex items-center justify-center overflow-hidden">
                      {profileData.avatar_url ? (
                        <img src={profileData.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-3xl font-bold text-white">{initials}</span>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera size={24} className="text-white" />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-1">{profileData.full_name}</h2>
                <p className="text-sm font-medium text-[#c77dff] mb-1 uppercase tracking-wider bg-[#c77dff]/10 px-3 py-1 rounded-full border border-[#c77dff]/20">
                  {profileData.occupation || 'Estudiante STEM'}
                </p>
                <p className="text-xs text-slate-400 mb-4 truncate w-full">{profileData.email}</p>

                {profileData.linkedin_url && (
                  <a href={profileData.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#0077b5] text-sm font-bold bg-[#0077b5]/10 px-3 py-1.5 rounded-lg hover:bg-[#0077b5]/20 transition-colors mb-4">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                )}

                <div className="w-full pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
                    <span>ID de Usuario</span>
                  </div>
                  <code className="block w-full bg-[#0b011d] p-2 rounded-lg text-[10px] text-slate-400 font-mono truncate">
                    {user.id}
                  </code>
                </div>
              </div>

              <div className="premium-card p-0 overflow-hidden">
                <button className="w-full flex items-center gap-3 p-4 hover:bg-white/5 transition-colors text-left text-sm text-slate-300 hover:text-white border-b border-white/5">
                  <Shield size={16} /> Seguridad y Contraseña
                </button>
                <button
                  onClick={() => signOut()}
                  className="w-full flex items-center gap-3 p-4 hover:bg-red-500/10 transition-colors text-left text-sm text-red-400 hover:text-red-300"
                >
                  <LogOut size={16} /> Cerrar Sesión
                </button>
              </div>
            </div>

            {/* Right Column: Edit Details */}
            <div className="md:col-span-2">
              <div className="premium-card p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Información Personal</h3>
                  {!isEditing ? (
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="h-9 text-xs">
                      <Edit2 size={12} className="mr-2" /> Editar Perfil
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={handleCancel} className="h-9 text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 border-red-500/20">
                        Cancelar
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleSave}
                        className="h-9 text-xs bg-[#7b2cbf] hover:bg-[#9d4edd]"
                        disabled={isSaving}
                      >
                        {isSaving ? <Loader2 className="animate-spin" size={14} /> : <Save size={14} className="mr-2" />}
                        Guardar
                      </Button>
                    </div>
                  )}
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Nombre Completo"
                      value={profileData.full_name}
                      onChange={(e) => setProfileData({ ...profileData, full_name: e.target.value })}
                      icon={User}
                      disabled={!isEditing}
                      className={!isEditing ? "opacity-70" : ""}
                    />
                    <Input
                      label="Ocupación / Carrera"
                      placeholder="Ej: Estudiante de Sistemas, Científico de Datos..."
                      value={profileData.occupation}
                      onChange={(e) => setProfileData({ ...profileData, occupation: e.target.value })}
                      icon={Shield}
                      disabled={!isEditing}
                      className={!isEditing ? "opacity-70" : ""}
                    />
                    <Input
                      label="Perfil de LinkedIn (URL)"
                      value={profileData.linkedin_url}
                      onChange={(e) => setProfileData({ ...profileData, linkedin_url: e.target.value })}
                      icon={Linkedin}
                      placeholder="https://linkedin.com/in/..."
                      disabled={!isEditing}
                      className={!isEditing ? "opacity-70" : ""}
                    />
                  </div>

                  <div className="pt-4 pb-2">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Intereses</h4>

                    {/* Selected Interests (View Mode) */}
                    {!isEditing && (
                      <div className="flex flex-wrap gap-2">
                        {profileData.interests.length > 0 ? profileData.interests.map(tag => (
                          <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#9d4edd]/10 border border-[#9d4edd]/20 text-[#c77dff] text-xs font-bold">
                            {tag}
                          </span>
                        )) : (
                          <span className="text-slate-500 text-sm italic">Sin intereses seleccionados</span>
                        )}
                      </div>
                    )}

                    {/* Editing Mode: Selection Grid */}
                    {isEditing && (
                      <div className="flex flex-wrap gap-2">
                        {AVAILABLE_INTERESTS.map(interest => {
                          const isSelected = profileData.interests.includes(interest);
                          return (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => toggleInterest(interest)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${isSelected
                                ? 'bg-[#9d4edd] border-[#9d4edd] text-white shadow-lg shadow-[#9d4edd]/20'
                                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                                }`}
                            >
                              {interest} {isSelected && <X size={12} className="inline-block ml-1" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
