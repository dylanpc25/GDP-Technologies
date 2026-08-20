import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../assets/images/gdp-logo.png";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.logoWrapper}>
          <div className={styles.logoBox}>
            <img
              src={logo}
              alt="Growth Digital Projects"
              className={styles.logoImage}
            />
          </div>
        </NavLink>

        <div className={styles.links}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
          >
            Servicios
          </NavLink>

          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/proyectos"
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
          >
            Proyectos
          </NavLink>
        </div>

        <NavLink to="/contacto" className={styles.contactButton}>
          Contáctanos
        </NavLink>
      </nav>
    </header>
  );
};