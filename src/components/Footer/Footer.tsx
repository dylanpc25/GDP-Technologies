import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/images/gdp-logo.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logoBox}>
              <img
                src={logo}
                alt="Growth Digital Projects"
                className={styles.logo}
              />
            </Link>

            <p>
              Creamos soluciones tecnológicas pensadas para impulsar ideas,
              optimizar procesos y acompañar el crecimiento de nuestros clientes.
            </p>
          </div>

          <div className={styles.column}>
            <h3>Navegación</h3>

            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/contacto">Contacto</Link>
          </div>

          <div className={styles.column}>
            <h3>Servicios</h3>

            <Link to="/servicios">Desarrollo Web</Link>
            <Link to="/servicios">Sistemas</Link>
            <Link to="/servicios">Aplicaciones</Link>
            <Link to="/servicios">Consultoría Tecnológica</Link>
            <Link to="/servicios">Soporte de Hardware</Link>
            <Link to="/servicios">Mantenimiento de Hardware</Link>
          </div>

          <div className={styles.column}>
            <h3>Hablemos</h3>

            <p className={styles.contactText}>
              ¿Tienes una idea o necesitas una solución tecnológica?
            </p>

            <Link to="/contacto" className={styles.contactButton}>
              Contáctanos
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Growth Digital Projects. Todos los
            derechos reservados.
          </p>

          <div className={styles.bottomLinks}>
            <span>GDP Technologies</span>
            <span>Soluciones digitales</span>
          </div>
        </div>
      </div>
    </footer>
  );
};