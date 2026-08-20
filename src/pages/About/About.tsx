import { Link } from "react-router-dom";
import styles from "./About.module.css";

const values = [
  {
    number: "01",
    title: "Innovación",
    description:
      "Buscamos constantemente nuevas formas de utilizar la tecnología para crear soluciones útiles, modernas y eficientes.",
  },
  {
    number: "02",
    title: "Compromiso",
    description:
      "Nos involucramos en cada proyecto con responsabilidad, comunicación constante y atención a los detalles.",
  },
  {
    number: "03",
    title: "Calidad",
    description:
      "Desarrollamos soluciones pensando en rendimiento, escalabilidad, seguridad y una buena experiencia para el usuario.",
  },
  {
    number: "04",
    title: "Cercanía",
    description:
      "Creemos en construir relaciones transparentes con nuestros clientes y acompañarlos durante todo el proceso.",
  },
];

const process = [
  {
    number: "01",
    title: "Entendemos",
    description:
      "Escuchamos tu idea, analizamos tus necesidades y entendemos el problema que quieres resolver.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Definimos una solución tecnológica clara, funcional y alineada con los objetivos de tu proyecto.",
  },
  {
    number: "03",
    title: "Desarrollamos",
    description:
      "Construimos el producto utilizando tecnologías modernas y buenas prácticas de desarrollo.",
  },
  {
    number: "04",
    title: "Acompañamos",
    description:
      "Después de la entrega seguimos disponibles mediante soporte, mejoras y mantenimiento.",
  },
];

export const About = () => {
  return (
    <main className={styles.about}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>SOBRE GDP</span>

            <h1>
              Tecnología construida
              <span> alrededor de tus ideas.</span>
            </h1>

            <p>
              Growth Digital Projects nace con el objetivo de convertir
              necesidades reales en soluciones tecnológicas funcionales,
              modernas y preparadas para crecer.
            </p>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardTop}>
              <span>GDP</span>
              <span>GROWTH DIGITAL PROJECTS</span>
            </div>

            <div className={styles.heroCardContent}>
              <span className={styles.cardLabel}>NUESTRA IDEA</span>

              <h2>
                Crear tecnología que genere valor y facilite el crecimiento.
              </h2>

              <div className={styles.cardFooter}>
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
      </section>

      {/* QUIÉNES SOMOS */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.sectionTitle}>
              <span className={styles.eyebrow}>QUIÉNES SOMOS</span>

              <h2>
                Más que desarrollar software, buscamos resolver problemas.
              </h2>
            </div>

            <div className={styles.storyText}>
              <p>
                Somos un emprendimiento enfocado en el desarrollo de soluciones
                tecnológicas para personas, negocios y organizaciones que
                buscan digitalizar procesos, mejorar su presencia digital o
                implementar nuevas herramientas.
              </p>

              <p>
                Nuestro enfoque combina desarrollo de software, consultoría y
                servicios técnicos para ofrecer soluciones adaptadas a las
                necesidades de cada cliente.
              </p>

              <p>
                Creemos que cada proyecto debe comenzar entendiendo el problema
                antes de pensar en la tecnología. Por eso trabajamos de forma
                cercana, flexible y orientada a resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <article className={styles.missionCard}>
              <div className={styles.missionNumber}>01</div>

              <span className={styles.smallTitle}>MISIÓN</span>

              <h3>Convertir necesidades en soluciones tecnológicas.</h3>

              <p>
                Diseñar, desarrollar e implementar soluciones digitales y
                tecnológicas que aporten valor real, ayuden a optimizar
                procesos y permitan a nuestros clientes alcanzar sus objetivos.
              </p>
            </article>

            <article className={`${styles.missionCard} ${styles.visionCard}`}>
              <div className={styles.missionNumber}>02</div>

              <span className={styles.smallTitle}>VISIÓN</span>

              <h3>Crecer junto a las personas y negocios que confían en GDP.</h3>

              <p>
                Consolidarnos como un aliado tecnológico capaz de acompañar
                proyectos desde su idea inicial hasta su crecimiento,
                evolución y mantenimiento.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <span className={styles.eyebrow}>CÓMO TRABAJAMOS</span>

            <h2>
              Un proceso claro desde la
              <span> idea hasta la solución.</span>
            </h2>
          </div>

          <div className={styles.processGrid}>
            {process.map((step) => (
              <article className={styles.processCard} key={step.number}>
                <span className={styles.processNumber}>{step.number}</span>

                <div className={styles.processLine}></div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <div>
              <span className={styles.eyebrow}>NUESTROS PRINCIPIOS</span>

              <h2>La forma en que construimos cada proyecto.</h2>
            </div>

            <p>
              Estos principios guían la manera en que diseñamos, desarrollamos
              y trabajamos con nuestros clientes.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article className={styles.valueCard} key={value.number}>
                <span className={styles.valueNumber}>{value.number}</span>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <div className={styles.ctaGlow}></div>

            <div className={styles.ctaContent}>
              <span>TRABAJEMOS JUNTOS</span>

              <h2>¿Tienes una idea que quieres convertir en realidad?</h2>

              <p>
                Cuéntanos sobre tu proyecto y encontremos juntos la solución
                tecnológica que necesitas.
              </p>
            </div>

            <Link to="/contacto" className={styles.ctaButton}>
              Hablemos de tu proyecto
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};