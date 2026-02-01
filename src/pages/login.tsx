import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Mail, Lock, ArrowLeft, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <>
      <Head>
        <title>Iniciar Sesión - LimaSTEM</title>
        <meta name="description" content="Ingresa a tu cuenta en LimaSTEM" />
      </Head>

      <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-[#0b011d]">
        {/* Background Elements */}
        <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver al inicio
            </Link>

            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                Bienvenido <span className="text-linear">de nuevo</span>
              </h1>
              <p className="text-gray-400 text-sm">
                Ingresa tus credenciales para acceder a tu cuenta
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="premium-card p-8 shadow-2xl shadow-black/50"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <Input
                label="Correo Electrónico"
                type="email"
                placeholder="ejemplo@correo.com"
                icon={Mail}
              />

              <div className="space-y-1">
                <Input
                  label="Contraseña"
                  type="password"
                  placeholder="••••••••"
                  icon={Lock}
                />
                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-xs text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Iniciar Sesión
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#130725] px-2 text-gray-500">
                    O continúa con
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button" className="w-full font-normal">
                  <Github className="mr-2 h-4 w-4" /> Github
                </Button>
                <Button variant="outline" type="button" className="w-full font-normal">
                  <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                  Google
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              ¿No tienes una cuenta?{' '}
              <Link href="/register" className="font-semibold text-primary-400 hover:text-primary-300 transition-colors">
                Regístrate
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
