import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import styles from "./Footer.module.css";
import logo from "../../assets/images/gdp-logo.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* MARCA */}
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

          {/* NAVEGACIÓN */}
          <div className={styles.column}>
            <h3>Navegación</h3>

            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/equipo">Equipo</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/contacto">Contacto</Link>
          </div>

          {/* SERVICIOS */}
          <div className={styles.column}>
            <h3>Servicios</h3>

            <Link to="/servicios">Desarrollo Web</Link>
            <Link to="/servicios">Sistemas</Link>
            <Link to="/servicios">Aplicaciones</Link>
            <Link to="/servicios">Consultoría Tecnológica</Link>
            <Link to="/servicios">Soporte de Hardware</Link>
            <Link to="/servicios">Mantenimiento de Hardware</Link>
          </div>

          {/* CONTACTO */}
          <div className={styles.column}>
            <h3>Hablemos</h3>

            <p className={styles.contactText}>
              ¿Tienes una idea o necesitas una solución tecnológica?
            </p>

            <Link to="/contacto" className={styles.contactButton}>
              Contáctanos
              <span>→</span>
            </Link>

            {/* REDES SOCIALES */}
            <div className={styles.socialSection}>
              <h3>Síguenos</h3>

              <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com/gdp_technologiescr?igsi=MXJ5NHJlenVmanJqbw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Growth Digital Projects"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61593470234034"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Growth Digital Projects"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.linkedin.com/company/growth-digital-projects-gdp/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Growth Digital Projects"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
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