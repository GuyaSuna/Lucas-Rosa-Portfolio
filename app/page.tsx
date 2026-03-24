export default function Home() {
  return (
    <div className="selection:bg-tertiary selection:text-on-tertiary">
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-8 py-4 bg-[#131316]/80 backdrop-blur-md border-b border-[#353438]/30 z-50">
        <div className="text-xl font-bold tracking-tighter text-primary">
          PRECISION_ENG
        </div>
        <nav className="hidden md:flex gap-8">
          <a
            className="font-headline tracking-widest uppercase text-[0.75rem] font-bold text-primary border-b-2 border-primary pb-1"
            href="#experiencia"
          >
            EXPERIENCIA
          </a>
          <a
            className="font-headline tracking-widest uppercase text-[0.75rem] font-bold text-[#a1a1aa] hover:text-primary transition-colors"
            href="#perfil"
          >
            PERFIL
          </a>
          <a
            className="font-headline tracking-widest uppercase text-[0.75rem] font-bold text-[#a1a1aa] hover:text-primary transition-colors"
            href="#aptitudes"
          >
            APTITUDES
          </a>
          <a
            className="font-headline tracking-widest uppercase text-[0.75rem] font-bold text-[#a1a1aa] hover:text-primary transition-colors"
            href="#contacto"
          >
            CONTACTO
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:bg-surface-container-high transition-all duration-200 p-2">
            settings_input_component
          </span>
        </div>
      </header>
      <main className="pt-16">
        <section className="relative min-h-[88vh] md:h-[920px] flex items-center overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-30 grayscale blur-sm"
              alt="Planta industrial moderna con brazos robóticos y luz azul ambiental"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU8l2VJZbFHPe6evyjx5Ns2LVIIpfifgfIYkEf9aYcwaqeoCZMbHAbdJ-1LONsVvQvyYMuvUWx-DrL9NQSQeuke9Jcj8Y1D245bBaOmHZy8s9RCw7otdWFda_oJpInzsFMLiIJpti6eeM4sQuQffSXkUINZvoY7Bt5gSD7Juamms8MkpNyo4tfYrRKBUXw0oiepoculqEf38EPPRwhgU8yS0Do4z7lzn6DJpnVAY9MmQaXl13-lFncAn7dCz0SZAOs7wKj-snQnkDv"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="blueprint-grid absolute inset-0 z-0"></div>
          <div className="container mx-auto px-6 md:px-8 z-10">
            <div className="max-w-4xl">
              <div className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container font-label text-[0.65rem] tracking-[0.2rem] uppercase mb-6">
                SISTEMAS_ACTIVOS // V4.0.2
              </div>
              <h1 className="font-headline text-4xl md:text-7xl font-bold leading-tight tracking-tighter text-on-surface mb-6">
                Precisión en <span className="text-primary">Sistemas</span>{" "}
                Industriales
              </h1>
              <p className="font-body text-lg md:text-2xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                Luca Rosa, Tecnólogo Industrial Mecánico/Electromecánico. Enfocado
                en optimizar procesos y traducir requisitos industriales en
                soluciones de alto rendimiento.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold uppercase tracking-widest text-xs hover:scale-95 transition-transform"
                  href="#contacto"
                >
                  INICIAR_CONTACTO
                </a>
                <a
                  className="px-8 py-4 border border-outline-variant text-on-surface font-bold uppercase tracking-widest text-xs hover:bg-surface-container-high transition-colors"
                  href="#experiencia"
                >
                  VER_EXPERIENCIA
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full bg-surface-container-low py-4 px-6 md:px-8 border-y border-outline-variant/15">
          <div className="container mx-auto flex flex-wrap justify-between gap-6">
            <div className="flex flex-col">
              <span className="text-[0.65rem] text-primary/60 font-label uppercase tracking-widest">
                Operador
              </span>
              <span className="font-label font-bold text-on-surface">
                LUCA_ROSA
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] text-primary/60 font-label uppercase tracking-widest">
                Especialidad
              </span>
              <span className="font-label font-bold text-on-surface">
                MECÁNICA / ELECTROMECÁNICA
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] text-primary/60 font-label uppercase tracking-widest">
                Base
              </span>
              <span className="font-label font-bold text-on-surface">
                JUAN_LACAZE, COLONIA
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] text-primary/60 font-label uppercase tracking-widest">
                Disponibilidad
              </span>
              <span className="font-label font-bold text-on-surface">
                BUSQUEDA_ACTIVA
              </span>
            </div>
          </div>
        </div>
        <section id="perfil" className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-5 relative">
                <div className="aspect-[4/5] bg-surface-container-highest relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                    alt="Retrato profesional en un entorno técnico con planos y equipos de fondo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0DD6BmedMWD6l4pBcajwMk_Pi8llMG3ja6ycbPEV0p6mLewLSdC1ZWf1oTNwZkhrxITBUiYrWxqNgcl7359a-PHyMKw0isZJsp-Ei4NIXxEBMSwBsG6crX3xDtRKFcfp5TS9afmSG38xRO53bs1MCLIGZ6KAM7GeeW4vxdSdpmrwS4ODUdcpyWWe7KsqGXt1oNq7XXNvu61f8ViP7pAMIlmxQHx3NeEgi5ySFirXXOFbIarSeBtcv7cvSqqX0U6WFPWl-JKJtrhH1"
                  />
                  <div className="absolute bottom-0 left-0 bg-primary p-4">
                    <span className="material-symbols-outlined text-on-primary text-3xl">
                      verified
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-tertiary"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary"></div>
              </div>
              <div className="md:col-span-7">
                <h2 className="font-headline text-4xl font-bold mb-8 text-on-surface tracking-tight">
                  PERFIL_TÉCNICO
                </h2>
                <div className="space-y-6 font-body text-on-surface-variant leading-relaxed text-lg">
                  <p>
                    Profesional con 2 años de experiencia en gestión del
                    mantenimiento de maquinaria. Experiencia reciente en
                    gestión de mantenimiento industrial en industria de gran
                    porte, participando en la planificación de parada de
                    planta, coordinación de tareas y trato directo con personal
                    operativo y técnico.
                  </p>
                  <p>
                    Cuento con formación y experiencia previa como mecánico
                    industrial en entornos productivos de gran escala. En
                    búsqueda activa de nuevas oportunidades, con alta
                    predisposición para asumir nuevos retos.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-headline text-tertiary font-bold mb-2 uppercase text-sm tracking-tighter">
                      01. ANÁLISIS
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Seguimiento de parámetros y diagnóstico de mantenimientos
                      críticos.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-headline text-primary font-bold mb-2 uppercase text-sm tracking-tighter">
                      02. EJECUCIÓN
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Coordinación de tareas con foco en continuidad operativa.
                    </p>
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-outline-variant/30 pt-8">
                  <div>
                    <span className="font-label text-tertiary uppercase tracking-[0.3rem] text-xs">
                      EDUCACIÓN
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-on-surface mt-3 mb-4">
                      Formación Académica
                    </h3>
                    <p className="text-sm text-on-surface-variant">
                      Tecnólogo Industrial Mecánico / FING – UDELAR. Facultad de
                      Ingeniería, Montevideo (2020 - 2025).
                    </p>
                    <p className="text-sm text-on-surface-variant mt-3">
                      Bachillerato de Electromecánica / UTU – Universidad del
                      Trabajo del Uruguay, Juan Lacaze (2017 - 2019).
                    </p>
                  </div>
                  <div>
                    <span className="font-label text-tertiary uppercase tracking-[0.3rem] text-xs">
                      DATOS_BASE
                    </span>
                    <div className="mt-3 space-y-3 text-sm text-on-surface-variant">
                      <p>
                        Dirección: José Campomar 532, Juan Lacaze, Colonia.
                      </p>
                      <p>Edad: 24 años.</p>
                      <p>Contacto: 091321365 · lucarosa2001@hotmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experiencia" className="py-24 bg-surface">
          <div className="container mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end mb-16 gap-6">
              <div>
                <span className="font-label text-tertiary uppercase tracking-[0.3rem] text-xs">
                  Historial_Operativo
                </span>
                <h2 className="font-headline text-5xl font-bold mt-2 text-on-surface">
                  EXPERIENCIA
                </h2>
              </div>
              <div className="hidden md:block h-px bg-outline-variant/30 flex-grow"></div>
              <span className="font-label text-on-surface-variant text-xs">
                TOTAL: 3 PUESTOS
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <article className="group relative bg-surface-container-low border border-outline-variant/10 p-8 hover:bg-surface-container-high transition-all duration-300">
                <div className="aspect-video mb-8 overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    alt="Entorno de planificación industrial con planos y cronogramas de mantenimiento"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWYNuOO7RUO9Wvfli2cuLeVdbe_SL89RpAKqfRV1u1KqbryVt5ch1vzRC5lPHJJZyrV0K7Frz1XOwE_pDRbOcBm4HQhqj4yBmHTb4Y5sMEDou6AUMUoOunXNcl_IZM2cDQ0fzPICg91tptVxC3ctgWtvqYlqhf4v_v19af9qZgHWScm6qhnfe0_6jXdGWWjA8NuePjd15cnnrbQ85Xi7k7GU4C5U6JsfQ3NSUq3886hI6grtrtNp2tS58rsyyQRH72sBZIznlJJO5C"
                  />
                </div>
                <span className="font-label text-[0.65rem] text-primary uppercase mb-2 block">
                  SET 2025 - DIC 2025
                </span>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                  Pasante Técnico · ANDRITZ Uruguay SA
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">
                  Soporte en la planificación y gestión del mantenimiento en
                  distintas áreas, participación en parada de planta,
                  coordinación con personal interno y subcontratistas mediante
                  SAP y Microsoft Project. Elaboración de procedimientos de
                  montaje, desmontaje y mantenimiento.
                </p>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Referencia: Renzo Bazo · 092129666
                </p>
              </article>
              <article className="group relative bg-surface-container border border-outline-variant/10 p-8 hover:bg-surface-container-high transition-all duration-300">
                <div className="aspect-video mb-8 overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    alt="Panel de control de flota y mantenimiento vial"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcbUnidWu3eZyjfmmVwPlaxjkYohkIZQQtkwUyzbc0IUqNAic9s9pJ_5KYGBqv5SOkdWbuC78bAIaUyXAyUtYaaXKdjM_W6xGnp_0y7cR8g_YmmBgnpb-Bms0bHIMBHprwV4EiRoU6vojluj25P7_K2-ENiMuwHt_ofdYbia1UmWlGRn98OdAJ7frQ-Zeucq6zJ463kBFSLObGGHVUFN09nGZr9VVoeizx9kJKc6OGNIyhRy1FeTxVMl7pE0ZwWHI57aDAdhzfgwOW"
                  />
                </div>
                <span className="font-label text-[0.65rem] text-primary uppercase mb-2 block">
                  JUL 2023 - JUL 2025
                </span>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                  Pasante Gestión de Mantenimiento · Intendencia de Montevideo
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">
                  Gestión del mantenimiento de maquinaria vial y flota de
                  vehículos, seguimiento de parámetros, planificación de
                  compras y mantenimiento edilicio. Asesoramiento en compras de
                  servicios y herramientas.
                </p>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Referencia: Piero Benedetti · 096080807
                </p>
              </article>
              <article className="group relative bg-surface-container-low border border-outline-variant/10 p-8 hover:bg-surface-container-high transition-all duration-300">
                <div className="aspect-video mb-8 overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    alt="Línea de ensamblaje automatizada en planta industrial"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3E6NotbuY4XD_sXGLUG0GepgG3-msk82dhxolmy6PbPTCmZNJ-6Y2g6kaYMDuErv1cPQxIxTDWI82qedY2YXQpvNX8lK3rIv44oZzSKCrOBjwOnNRVWwKOckJ1LLO0TAP8_vpinYausBfIoTuSqn9kQEU2fFqEl_WmSxq_FO1kDAvDagBjn7KJifAj8SqtbGoGMVyPEBYtLcESfXuKY_8huOJfvnThfOz4gV43YGbZyyvToQh5cnnUi8tkAV1GqdNOZ3Y2c75kIxA"
                  />
                </div>
                <span className="font-label text-[0.65rem] text-primary uppercase mb-2 block">
                  OCT 2019 - DIC 2019
                </span>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                  Mecánico Industrial · Technik (Montes del Plata y UPM 1)
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">
                  Mantenimiento correctivo y preventivo en plantas industriales,
                  incluyendo desmontaje y montaje de bombas centrífugas
                  horizontales de gran tamaño.
                </p>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                  Referencia: Rubén Chans · 095225877
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="aptitudes" className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <h2 className="font-headline text-4xl font-bold mb-6 text-on-surface">
                  APTITUDES_TÉCNICAS
                </h2>
                <p className="font-body text-on-surface-variant mb-12">
                  Competencias clave en mantenimiento industrial, gestión de
                  equipos y análisis de datos técnicos.
                </p>
                <div className="space-y-10">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-label font-bold uppercase tracking-widest text-xs">
                        SAP / Excel / Office
                      </span>
                      <span className="font-label text-xs text-primary">
                        92%
                      </span>
                    </div>
                    <div className="h-1 w-full bg-surface-container-highest">
                      <div className="h-full bg-primary" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-label font-bold uppercase tracking-widest text-xs">
                        Gestión de equipos
                      </span>
                      <span className="font-label text-xs text-primary">
                        88%
                      </span>
                    </div>
                    <div className="h-1 w-full bg-surface-container-highest">
                      <div className="h-full bg-primary" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-label font-bold uppercase tracking-widest text-xs">
                        Análisis de datos de mantenimiento
                      </span>
                      <span className="font-label text-xs text-primary">
                        90%
                      </span>
                    </div>
                    <div className="h-1 w-full bg-surface-container-highest">
                      <div className="h-full bg-primary" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-label font-bold uppercase tracking-widest text-xs">
                        Mecánica industrial
                      </span>
                      <span className="font-label text-xs text-primary">
                        94%
                      </span>
                    </div>
                    <div className="h-1 w-full bg-surface-container-highest">
                      <div className="h-full bg-primary" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-px bg-outline-variant/20 border border-outline-variant/20">
                <div className="bg-surface p-10 flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-4xl text-tertiary mb-4">
                    precision_manufacturing
                  </span>
                  <span className="font-label font-bold text-xs uppercase tracking-widest">
                    Mantenimiento
                  </span>
                </div>
                <div className="bg-surface p-10 flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-4xl text-tertiary mb-4">
                    architecture
                  </span>
                  <span className="font-label font-bold text-xs uppercase tracking-widest">
                    Planificación
                  </span>
                </div>
                <div className="bg-surface p-10 flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-4xl text-tertiary mb-4">
                    analytics
                  </span>
                  <span className="font-label font-bold text-xs uppercase tracking-widest">
                    Optimización
                  </span>
                </div>
                <div className="bg-surface p-10 flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-4xl text-tertiary mb-4">
                    hub
                  </span>
                  <span className="font-label font-bold text-xs uppercase tracking-widest">
                    Integración
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contacto" className="py-24 bg-surface relative overflow-hidden">
          <div className="blueprint-grid absolute inset-0 z-0"></div>
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto bg-surface-container-low border border-outline-variant/10 shadow-2xl p-8 md:p-16">
              <div className="mb-12 text-center">
                <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">
                  INICIAR_CONTACTO
                </h2>
                <p className="font-body text-on-surface-variant uppercase text-xs tracking-[0.2rem]">
                  Canal seguro / enlace directo
                </p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-[0.65rem] uppercase tracking-widest text-primary">
                    Nombre_Completo
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 text-on-surface font-body p-4 focus:ring-0 focus:border-primary transition-colors"
                    placeholder="APELLIDO, NOMBRE"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[0.65rem] uppercase tracking-widest text-primary">
                    Empresa
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 text-on-surface font-body p-4 focus:ring-0 focus:border-primary transition-colors"
                    placeholder="ENTIDAD_INDUSTRIAL"
                    type="text"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="font-label text-[0.65rem] uppercase tracking-widest text-primary">
                    Consulta
                  </label>
                  <textarea
                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/30 text-on-surface font-body p-4 focus:ring-0 focus:border-primary transition-colors"
                    placeholder="DESCRIBA_REQUERIMIENTOS..."
                    rows={4}
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button
                    className="w-full py-5 bg-tertiary text-on-tertiary font-bold uppercase tracking-[0.3rem] text-sm hover:brightness-110 active:scale-95 transition-all"
                    type="submit"
                  >
                    TRANSMITIR_DATOS
                  </button>
                </div>
              </form>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs uppercase tracking-widest text-on-surface-variant">
                <div className="flex flex-col gap-2">
                  <span className="text-primary/60">Teléfono</span>
                  <span className="text-on-surface">091321365</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-primary/60">Email</span>
                  <span className="text-on-surface">lucarosa2001@hotmail.com</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-primary/60">Dirección</span>
                  <span className="text-on-surface">
                    José Campomar 532, Juan Lacaze, Colonia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full flex flex-col md:flex-row justify-between items-center gap-4 bg-[#131316] py-12 px-6 md:px-8 border-t border-[#353438]">
        <div className="font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">memory</span>
          PRECISION_ENG
        </div>
        <div className="font-body text-[0.65rem] uppercase tracking-[0.2rem] text-[#a1a1aa] text-center">
          ©2026 LUCA_ROSA // TODOS_LOS_DERECHOS_RESERVADOS
        </div>
        <nav className="flex gap-6">
          <a
            className="font-body text-[0.65rem] uppercase tracking-[0.2rem] text-[#a1a1aa] hover:text-tertiary transition-colors"
            href="#perfil"
          >
            PERFIL
          </a>
          <a
            className="font-body text-[0.65rem] uppercase tracking-[0.2rem] text-[#a1a1aa] hover:text-tertiary transition-colors"
            href="#experiencia"
          >
            EXPERIENCIA
          </a>
          <a
            className="font-body text-[0.65rem] uppercase tracking-[0.2rem] text-[#a1a1aa] hover:text-tertiary transition-colors"
            href="#contacto"
          >
            CONTACTO
          </a>
        </nav>
      </footer>
    </div>
  );
}
