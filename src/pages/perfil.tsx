import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import MainLayout from '@/layouts/MainLayout';
import { User, Mail, Calendar, Shield, Edit2, Camera, LogOut } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function Profile() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) return null;

  const initials = user.user_metadata?.full_name
    ? user.user_metadata.full_name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase()
    : user.email?.[0].toUpperCase();

  return (
    <MainLayout title="Mi Perfil | LimaSTEM">
      <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7b2cbf] opacity-10 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-medium text-white mb-8">Mi Perfil</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Identify Card */}
            <div className="md:col-span-1 space-y-6">
              <div className="premium-card p-6 flex flex-col items-center text-center">
                <div className="relative mb-4 group cursor-pointer">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7b2cbf] to-[#9d4edd] flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-[#9d4edd]/20">
                    {initials}
                  </div>
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera size={24} className="text-white" />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-1">{user.user_metadata?.full_name}</h2>
                <p className="text-sm text-slate-400 mb-4">{user.email}</p>

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
                <button className="w-full flex items-center gap-3 p-4 hover:bg-white/5 transition-colors text-left text-sm text-slate-300 hover:text-white border-b border-white/5">
                  <Calendar size={16} /> Mis Eventos Guardados
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
                  <Button variant="outline" size="sm" className="h-8 text-xs">
                    <Edit2 size={12} className="mr-2" /> Editar
                  </Button>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Nombre Completo"
                      defaultValue={user.user_metadata?.full_name}
                      icon={User}
                      disabled
                      className="bg-white/[0.02]"
                    />
                    <Input
                      label="Correo Electrónico"
                      defaultValue={user.email}
                      icon={Mail}
                      disabled
                      className="bg-white/[0.02]"
                    />
                  </div>

                  <div className="pt-4 pb-2">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Intereses</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Desarrollo Web', 'Inteligencia Artificial', 'Becas'].map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#9d4edd]/10 border border-[#9d4edd]/20 text-[#c77dff] text-xs font-bold">
                          {tag}
                        </span>
                      ))}
                      <button type="button" className="px-3 py-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 text-xs font-bold transition-all">
                        + Añadir
                      </button>
                    </div>
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
