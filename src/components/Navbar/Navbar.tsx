import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../assets/images/gdp-logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* LOGO */}
        <NavLink
          to="/"
          className={styles.logoWrapper}
          onClick={closeMenu}
        >
          <div className={styles.logoBox}>
            <img
              src={logo}
              alt="Growth Digital Projects"
              className={styles.logoImage}
            />
          </div>
        </NavLink>

        {/* LINKS */}
        <div
          className={`${styles.links} ${
            menuOpen ? styles.linksOpen : ""
          }`}
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/servicios"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
          >
            Servicios
          </NavLink>

          <NavLink
            to="/nosotros"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/equipo"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
          >
            Equipo
          </NavLink>

          <NavLink
            to="/proyectos"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? styles.active : undefined
            }
          >
            Proyectos
          </NavLink>
        </div>

        {/* ACCIONES DERECHA */}
        <div className={styles.actions}>
          <NavLink
            to="/contacto"
            className={styles.contactButton}
            onClick={closeMenu}
          >
            Contáctanos
          </NavLink>

          <button
            type="button"
            className={`${styles.menuButton} ${
              menuOpen ? styles.menuButtonOpen : ""
            }`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
};