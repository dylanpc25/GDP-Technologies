import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

const projects = [
  {
    number: "01",
    type: "PROYECTO PROPIO",
    title: "Growth Digital Projects",
    description:
      "Diseño y desarrollo del sitio corporativo oficial de GDP, creado para presentar nuestros servicios, identidad y forma de trabajo.",
    technologies: ["React", "TypeScript", "Vite", "CSS Modules"],
    status: "En desarrollo",
  },
  {
    number: "02",
    type: "PROYECTO DEMO",
    title: "Sistema de Gestión Empresarial",
    description:
      "Concepto de plataforma para administrar usuarios, inventario, operaciones y reportes desde un único sistema centralizado.",
    technologies: ["React", "NestJS", "MySQL", "REST API"],
    status: "Concepto",
  },
  {
    number: "03",
    type: "PROYECTO DEMO",
    title: "Plataforma de Reservas",
    description:
      "Solución diseñada para negocios que necesitan gestionar citas, disponibilidad, clientes y seguimiento de reservaciones.",
    technologies: ["React", "TypeScript", "PostgreSQL", "API"],
    status: "Concepto",
  },
  {
    number: "04",
    type: "PROYECTO DEMO",
    title: "Dashboard Administrativo",
    description:
      "Panel administrativo orientado a visualizar estadísticas, gestionar información y facilitar la toma de decisiones.",
    technologies: ["React", "Dashboards", "Analytics", "UX/UI"],
    status: "Concepto",
  },
];

export const Projects = () => {
  return (
    <main className={styles.projects}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              PROYECTOS Y SOLUCIONES
            </span>

            <h1>
              Construimos hoy lo que
              <span> queremos llevar más lejos mañana.</span>
            </h1>

            <p>
              Estamos comenzando nuestro camino, pero no desde cero. Esta
              sección reúne proyectos propios, conceptos y soluciones creadas
              para demostrar cómo transformamos ideas en productos digitales.
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualHeader}>
                <span>GDP PROJECTS</span>
                <span>2026</span>
              </div>

              <div className={styles.visualBody}>
                <span className={styles.visualLabel}>
                  NUESTRO ENFOQUE
                </span>

                <h2>
                  Ideas.
                  <br />
                  Tecnología.
                  <br />
                  Resultados.
                </h2>

                <div className={styles.visualStats}>
                  <div>
                    <strong>Software</strong>
                    <span>Soluciones digitales</span>
                  </div>

                  <div>
                    <strong>Hardware</strong>
                    <span>Soporte tecnológico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <span className={styles.eyebrow}>
                NUESTRO PORTAFOLIO
              </span>

              <h2>
                Cada proyecto empieza
                con una necesidad real.
              </h2>
            </div>

            <div className={styles.introText}>
              <p>
                Mientras construimos nuestra experiencia comercial, estamos
                desarrollando soluciones propias y demostrativas que reflejan
                nuestra forma de trabajar, nuestras capacidades técnicas y la
                calidad que queremos ofrecer a nuestros futuros clientes.
              </p>

              <p>
                Conforme GDP crezca, esta sección evolucionará para incluir
                proyectos reales, casos de éxito y soluciones implementadas
                para distintos negocios y organizaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>
                PROYECTOS DESTACADOS
              </span>

              <h2>
                Lo que estamos
                <span> construyendo.</span>
              </h2>
            </div>

            <p>
              Proyectos propios y conceptos creados para explorar nuevas ideas,
              tecnologías y soluciones.
            </p>
          </div>

          <div className={styles.grid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.number}>
                <div className={styles.projectTop}>
                  <span className={styles.projectNumber}>
                    {project.number}
                  </span>

                  <span className={styles.projectType}>
                    {project.type}
                  </span>
                </div>

                <div className={styles.projectContent}>
                  <div className={styles.status}>
                    <span></span>
                    {project.status}
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <div className={styles.technologies}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <span>GDP</span>
                  <span>→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className={styles.futureSection}>
        <div className={styles.container}>
          <div className={styles.future}>
            <div className={styles.futureNumber}>
              +
            </div>

            <div className={styles.futureContent}>
              <span className={styles.eyebrow}>
                LO QUE VIENE
              </span>

              <h2>
                Este portafolio apenas está comenzando.
              </h2>

              <p>
                Nuestro objetivo es convertir este espacio en una colección de
                proyectos reales, casos de éxito y soluciones que hayan generado
                resultados para nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <div className={styles.ctaGlow}></div>

            <div className={styles.ctaContent}>
              <span>TU PROYECTO PUEDE SER EL SIGUIENTE</span>

              <h2>
                ¿Tienes una idea que quieras convertir en realidad?
              </h2>

              <p>
                Cuéntanos qué necesitas y construyamos juntos una solución
                pensada para tu negocio.
              </p>
            </div>

            <Link to="/contacto" className={styles.ctaButton}>
              Cuéntanos tu idea
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};