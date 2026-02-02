# 🚀 LimaSTEM - Plataforma de Oportunidades STEM en Perú

**LimaSTEM** es una plataforma web diseñada para centralizar y democratizar el acceso a oportunidades en Ciencia, Tecnología, Ingeniería y Matemáticas (STEM) para estudiantes y jóvenes profesionales en Perú.

![LimaSTEM Banner](public/logo.png) *Añadir captura o logo aquí*

## ✨ Características Principales

*   **🏆 Eventos y Concursos:** Listado actualizado de Hackathones, Datathones y competencias tecnológicas.
*   **🎓 Becas:** Información sobre becas de estudio y programas de formación.
*   **👥 Comunidad Activa:**
    *   **Perfiles de Usuario:** Crea tu perfil profesional, añade tu ocupación, LinkedIn e intereses.
    *   **Networking:** Conecta con otros estudiantes y profesionales con tus mismos intereses.
*   **🔐 Autenticación Segura:** Sistema de registro e inicio de sesión seguro (Email/Password).

## 🛠️ Stack Tecnológico

Este proyecto ha sido construido utilizando tecnologías modernas para garantizar rendimiento, escalabilidad y una gran experiencia de usuario:

*   **Frontend:** [Next.js](https://nextjs.org/) (React Framework) + TypeScript
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Diseño responsivo y moderno, Glassmorphism)
*   **Backend & Base de Datos:** [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage)
*   **Despliegue:** [Vercel](https://vercel.com/)

## 🚀 Instalación y Configuración Local

Sigue estos pasos para correr el proyecto en tu máquina:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/jeannrf/LimaSTEM.git
    cd LimaSTEM
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto y añade tus credenciales de Supabase:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
    NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima
    ```

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🗄️ Esquema de Base de Datos (Supabase)

El proyecto requiere las siguientes tablas en Supabase. Puedes ejecutar los scripts SQL incluidos en la carpeta del proyecto para configurarlos:

*   `profiles`: Almacena información de usuarios (Nombre, Avatar, Rol, Ocupación, Intereses, LinkedIn).
*   `events`: Tabla para listar los eventos y hackathones.

*(Revisa el archivo `supabase_setup.sql` para el esquema completo)*

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la plataforma:

1.  Haz un Fork del proyecto.
2.  Crea una rama con tu nueva característica (`git checkout -b feature/NuevaCaracteristica`).
3.  Haz Commit de tus cambios (`git commit -m 'Añadir nueva característica'`).
4.  Haz Push a la rama (`git push origin feature/NuevaCaracteristica`).
5.  Abre un Pull Request.

## 📄 Licencia

Este proyecto es de código abierto.

---
*Desarrollado con ❤️ por Jeanpier Robles para la comunidad STEM de Perú.*