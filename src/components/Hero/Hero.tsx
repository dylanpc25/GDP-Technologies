import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.topGlow}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span></span>
            Soluciones digitales para tu negocio
          </div>

          <h1>
            Transformamos ideas en
            <span> soluciones digitales</span>
          </h1>

          <p>
            Diseñamos y desarrollamos páginas web, sistemas empresariales,
            aplicaciones y soluciones tecnológicas pensadas para impulsar el
            crecimiento de tu negocio.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primaryButton}>
              Cuéntanos tu idea
              <span>→</span>
            </a>

            <a href="#servicios" className={styles.secondaryButton}>
              Ver servicios
            </a>
          </div>

          <div className={styles.trust}>
            <div>
              <strong>100%</strong>
              <span>Soluciones a medida</span>
            </div>

            <div className={styles.separator}></div>

            <div>
              <strong>GDP</strong>
              <span>Tu aliado tecnológico</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualGlow}></div>

          <div className={styles.dashboard}>
            <div className={styles.dashboardHeader}>
              <div className={styles.windowControls}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className={styles.dashboardTitle}>
                GDP Digital Studio
              </span>
            </div>

            <div className={styles.dashboardBody}>
              <span className={styles.dashboardLabel}>
                GROWTH DIGITAL PROJECTS
              </span>

              <h2>
                Creamos tecnología
                <br />
                para hacer crecer ideas.
              </h2>

              <div className={styles.codeCard}>
                <div>
                  <span className={styles.lineNumber}>01</span>

                  <code>
                    <span className={styles.blue}>const</span>{" "}
                    <span className={styles.white}>idea</span> ={" "}
                    <span className={styles.green}>"tu proyecto"</span>;
                  </code>
                </div>

                <div>
                  <span className={styles.lineNumber}>02</span>

                  <code>
                    <span className={styles.blue}>const</span>{" "}
                    <span className={styles.white}>solution</span> ={" "}
                    <span className={styles.yellow}>GDP</span>
                    <span className={styles.white}>.build(idea);</span>
                  </code>
                </div>

                <div>
                  <span className={styles.lineNumber}>03</span>

                  <code className={styles.comment}>
                    // Diseñamos. Desarrollamos. Impulsamos.
                  </code>
                </div>
              </div>

              <div className={styles.dashboardFooter}>
                <div className={styles.status}>
                  <span></span>
                  Proyecto listo para crecer
                </div>

                <span className={styles.version}>GDP v1.0</span>
              </div>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.webCard}`}>
            <div className={styles.icon}>{"</>"}</div>

            <div>
              <strong>Desarrollo Web</strong>
              <span>Experiencias modernas</span>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.appCard}`}>
            <div className={styles.icon}>▦</div>

            <div>
              <strong>Aplicaciones</strong>
              <span>Soluciones a medida</span>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.supportCard}`}>
            <div className={styles.statusIcon}>
              <span></span>
            </div>

            <div>
              <strong>Soporte</strong>
              <span>Estamos contigo</span>
            </div>
          </div>

          <div className={styles.bottomBadge}>
            <span></span>
            Innovación · Desarrollo · Tecnología
          </div>
        </div>
      </div>
    </section>
  );
};