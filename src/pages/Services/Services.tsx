import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    icon: "</>",
    title: "Desarrollo Web",
    description:
      "Creamos sitios web modernos, rápidos y responsivos enfocados en ofrecer una excelente experiencia a tus clientes.",
    tags: ["React", "Web", "Responsive"],
  },
  {
    number: "02",
    icon: "⌘",
    title: "Sistemas",
    description:
      "Desarrollamos sistemas empresariales adaptados a los procesos y necesidades específicas de tu organización.",
    tags: ["Automatización", "Gestión", "Software"],
  },
  {
    number: "03",
    icon: "▦",
    title: "Aplicaciones",
    description:
      "Construimos aplicaciones digitales intuitivas, escalables y preparadas para acompañar el crecimiento de tu negocio.",
    tags: ["Apps", "UX/UI", "Escalabilidad"],
  },
  {
    number: "04",
    icon: "◇",
    title: "Consultoría",
    description:
      "Analizamos tus necesidades tecnológicas y te ayudamos a encontrar las mejores soluciones para alcanzar tus objetivos.",
    tags: ["Estrategia", "Tecnología", "Optimización"],
  },
  {
    number: "05",
    icon: "●",
    title: "Soporte",
    description:
      "Te acompañamos después de cada implementación con mantenimiento, mejoras y soporte para tus soluciones digitales.",
    tags: ["Mantenimiento", "Mejoras", "Asistencia"],
  },
  {
    number: "06",
    icon: "🖥",
    title: "Soporte de Hardware",
    description:
      "Brindamos asistencia técnica para computadoras y equipos tecnológicos, incluyendo diagnóstico de fallas, configuración, instalación de componentes y solución de problemas.",
    tags: ["Diagnóstico", "Configuración", "Reparación"],
  },
  {
    number: "07",
    icon: "⚙",
    title: "Mantenimiento de Hardware",
    description:
      "Realizamos mantenimiento preventivo y correctivo de equipos para prolongar su vida útil, mejorar su rendimiento y prevenir fallas.",
    tags: ["Limpieza", "Optimización", "Prevención"],
  },
];

export const Services = () => {
  return (
    <section id="servicios" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>NUESTROS SERVICIOS</span>

            <h2>
              Tecnología creada para
              <span> resolver necesidades reales.</span>
            </h2>
          </div>

          <p>
            Desde una idea inicial hasta una solución completamente funcional,
            en GDP desarrollamos productos digitales pensados para aportar valor
            y hacer crecer tu negocio.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.card} key={service.title}>
              <div className={styles.cardTop}>
                <div className={styles.icon}>
                  {service.icon}
                </div>

                <span className={styles.number}>
                  {service.number}
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className={styles.tags}>
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a href="#contacto" className={styles.cardLink}>
                Quiero saber más
                <span>→</span>
              </a>
            </article>
          ))}

          <article className={styles.ctaCard}>
            <div className={styles.ctaGlow}></div>

            <div className={styles.ctaContent}>
              <span className={styles.ctaLabel}>
                ¿TIENES UNA IDEA?
              </span>

              <h3>
                Hagamos realidad
                <br />
                tu próximo proyecto.
              </h3>

              <p>
                Cuéntanos qué necesitas y encontremos juntos la solución
                tecnológica adecuada para tu negocio.
              </p>

              <a href="#contacto" className={styles.ctaButton}>
                Hablemos
                <span>→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};