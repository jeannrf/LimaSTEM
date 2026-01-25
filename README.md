# LimaSTEM 🚀

**LimaSTEM** es una plataforma integral diseñada para centralizar eventos, becas y fomentar el networking en tiempo real entre estudiantes de carreras STEM (Ciencia, Tecnología, Ingeniería y Matemáticas) en Lima, Perú.

El objetivo es reducir la brecha de información y conectar a los futuros ingenieros y científicos de la capital con oportunidades que impulsen su carrera académica y profesional.

---

## 📌 Visión General
En el ecosistema académico de Lima, la información de becas y eventos suele estar dispersa. **LimaSTEM** actúa como un nodo central que ofrece:
- **Directorio Inteligente:** Becas y eventos de instituciones como PRONABEC, Concytec, y universidades (UNI, UNMSM, PUCP, UTEC).
- **Networking Online:** Perfiles de estudiantes con filtros por carrera, universidad y habilidades técnicas.
- **Interacción Realtime:** Chats grupales automáticos por evento para coordinar asistencias, compartir transporte o colaborar.

---

## 🛠️ Stack Tecnológico
Para garantizar escalabilidad, seguridad y una experiencia de usuario fluida, el proyecto utiliza:

- **Frontend:** [Next.js](https://nextjs.org/) + **React** (Arquitectura basada en componentes).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Diseño responsivo y moderno).
- **Lenguaje:** **TypeScript** (Tipado fuerte para reducir errores en desarrollo).
- **Backend as a Service (BaaS):** [Supabase](https://supabase.com/)
  - **PostgreSQL:** Base de datos relacional robusta.
  - **Auth:** Gestión de sesiones segura con Google/GitHub.
  - **Realtime:** Comunicación bidireccional vía WebSockets para el chat instantáneo.
- **Despliegue:** [Vercel](https://vercel.com/) (Infraestructura de alto rendimiento).

---

## 📋 Ingeniería de Requerimientos

### Requerimientos Funcionales (RF)
- **RF1: Feed de Oportunidades:** Listado dinámico de becas y eventos con filtros por área STEM.
- **RF2: Gestión de Perfiles:** Registro de datos académicos (Universidad, ciclo, carrera, skills).
- **RF3: Confirmación de Asistencia (RSVP):** Posibilidad de marcar interés en eventos y visualizar a otros asistentes.
- **RF4: Networking en Tiempo Real:** Chat grupal habilitado automáticamente al confirmar asistencia a un evento.
- **RF5: Sistema de Alertas:** Notificaciones personalizadas antes del cierre de convocatorias de becas.

### Requerimientos No Funcionales (RNF)
- **RNF1: Performance:** Carga optimizada mediante renderizado híbrido (SSR/SSG) de Next.js.
- **RNF2: Seguridad:** Implementación de Políticas de Seguridad a Nivel de Fila (RLS) en la base de datos.
- **RNF3: Experiencia de Usuario:** Interfaz intuitiva y optimizada para dispositivos móviles (Mobile-First).

---

## 🏗️ Arquitectura de Software
La aplicación sigue un modelo de **Arquitectura Desacoplada (BaaS)**:



1. El **Frontend (Next.js)** gestiona la lógica de la interfaz y las rutas.
2. La **Capa de Datos (Supabase)** maneja la persistencia y la seguridad sin necesidad de un backend tradicional pesado.
3. El **Motor Realtime** permite que los mensajes de chat se distribuyan instantáneamente a todos los clientes conectados.

---

## 📂 Estructura del Proyecto
```text
├── docs/                   # Documentación de ingeniería y diagramas
├── public/                 # Recursos estáticos (Imágenes, Iconos)
├── src/
│   ├── components/         # Componentes React reutilizables (Chat, Cards)
│   ├── layouts/            # Estructuras base de las páginas
│   ├── lib/                # Configuración de cliente Supabase
│   ├── pages/              # Rutas de la aplicación (Eventos, Perfil, Becas)
│   └── styles/             # Tailwind CSS y estilos globales
├── tailwind.config.js
└── package.json