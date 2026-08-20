import { useState, type FormEvent } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;

    if (!formspreeUrl) {
      setError(
        "El formulario no está configurado correctamente. Inténtalo nuevamente más tarde."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Error enviando formulario:", error);

      setError(
        "No pudimos enviar tu solicitud. Inténtalo nuevamente o contáctanos por WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.contact}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>CONTÁCTANOS</span>

            <h1>
              Cuéntanos tu idea.
              <span> Nosotros te ayudamos a construirla.</span>
            </h1>

            <p>
              Ya sea que necesites desarrollar una página web, un sistema,
              una aplicación, asesoría tecnológica o soporte para tus equipos,
              queremos conocer tu proyecto.
            </p>
          </div>

          <div className={styles.heroMessage}>
            <div className={styles.heroMessageHeader}>
              <div className={styles.status}>
                <span></span>
                Disponible
              </div>

              <span>GDP</span>
            </div>

            <div className={styles.heroMessageBody}>
              <span className={styles.messageLabel}>
                ¿TIENES UN PROYECTO?
              </span>

              <h2>
                Empecemos con una
                <br />
                conversación.
              </h2>

              <p>
                No necesitas tener todo definido. Cuéntanos qué necesitas
                resolver y te ayudaremos a encontrar el mejor camino.
              </p>

              <div className={styles.messageFooter}>
                <span>Growth Digital Projects</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO + FORMULARIO */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* INFORMACIÓN */}
            <div className={styles.contactInfo}>
              <span className={styles.eyebrow}>HABLEMOS</span>

              <h2>¿En qué podemos ayudarte?</h2>

              <p className={styles.introText}>
                Cuéntanos brevemente qué necesitas. Revisaremos tu solicitud
                para entender tu proyecto y encontrar una solución adecuada.
              </p>

              <div className={styles.contactOptions}>
                <a
                  href="mailto:TU_CORREO@ejemplo.com"
                  className={styles.contactOption}
                >
                  <div className={styles.optionIcon}>@</div>

                  <div>
                    <span>Correo electrónico</span>
                    <strong>gdp.technologies.cr@gmail.com</strong>
                  </div>

                  <span className={styles.arrow}>→</span>
                </a>

                <a
                  href="https://wa.me/50689119353"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactOption}
                >
                  <div className={styles.optionIcon}>W</div>

                  <div>
                    <span>WhatsApp</span>
                    <strong>Escríbenos directamente</strong>
                  </div>

                  <span className={styles.arrow}>→</span>
                </a>

                <div className={styles.contactOption}>
                  <div className={styles.optionIcon}>CR</div>

                  <div>
                    <span>Ubicación</span>
                    <strong>Costa Rica</strong>
                  </div>
                </div>
              </div>

              <div className={styles.availability}>
                <div className={styles.availabilityDot}></div>

                <div>
                  <strong>
                    Estamos disponibles para nuevos proyectos
                  </strong>

                  <span>
                    Software · Consultoría · Hardware
                  </span>
                </div>
              </div>
            </div>

            {/* FORMULARIO */}
            <div className={styles.formWrapper}>
              <div className={styles.formHeader}>
                <span>CUÉNTANOS SOBRE TU PROYECTO</span>

                <h2>Empecemos.</h2>

                <p>
                  Completa la información y nos pondremos en contacto contigo.
                </p>
              </div>

              {!submitted ? (
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                >
                  <div className={styles.twoColumns}>
                    <div className={styles.field}>
                      <label htmlFor="name">
                        Nombre
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="company">
                        Empresa
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Nombre de empresa"
                      />
                    </div>
                  </div>

                  <div className={styles.twoColumns}>
                    <div className={styles.field}>
                      <label htmlFor="email">
                        Correo electrónico
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="correo@ejemplo.com"
                        required
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="phone">
                        Teléfono
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+506 0000 0000"
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="service">
                      ¿Qué servicio necesitas?
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecciona un servicio
                      </option>

                      <option value="Desarrollo Web">
                        Desarrollo Web
                      </option>

                      <option value="Sistemas">
                        Sistemas
                      </option>

                      <option value="Aplicaciones">
                        Aplicaciones
                      </option>

                      <option value="Consultoría Tecnológica">
                        Consultoría Tecnológica
                      </option>

                      <option value="Soporte de Hardware">
                        Soporte de Hardware
                      </option>

                      <option value="Mantenimiento de Hardware">
                        Mantenimiento de Hardware
                      </option>

                      <option value="Otro">
                        Otro
                      </option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message">
                      Cuéntanos sobre tu proyecto
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Describe brevemente qué necesitas, qué problema quieres resolver o qué idea tienes..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={loading}
                  >
                    {loading
                      ? "Enviando..."
                      : "Enviar solicitud"}

                    {!loading && <span>→</span>}
                  </button>

                  {error && (
                    <p className={styles.errorMessage}>
                      {error}
                    </p>
                  )}

                  <p className={styles.formNote}>
                    Al enviar este formulario aceptas que utilicemos la
                    información únicamente para responder tu solicitud.
                  </p>
                </form>
              ) : (
                <div className={styles.success}>
                  <div className={styles.successIcon}>
                    ✓
                  </div>

                  <span>SOLICITUD ENVIADA</span>

                  <h3>¡Gracias por contactarnos!</h3>

                  <p>
                    Hemos recibido tu solicitud correctamente. Nuestro equipo
                    revisará la información y se pondrá en contacto contigo lo
                    antes posible.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                    }}
                    className={styles.backButton}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <span className={styles.eyebrow}>
              ¿QUÉ PASA DESPUÉS?
            </span>

            <h2>
              De tu mensaje a una
              <span> posible solución.</span>
            </h2>
          </div>

          <div className={styles.processGrid}>
            <article className={styles.processCard}>
              <span>01</span>

              <h3>Recibimos tu solicitud</h3>

              <p>
                Revisamos la información que nos compartiste y entendemos
                inicialmente qué necesitas.
              </p>
            </article>

            <article className={styles.processCard}>
              <span>02</span>

              <h3>Conversamos contigo</h3>

              <p>
                Coordinamos una conversación para conocer mejor tu idea,
                necesidades y objetivos.
              </p>
            </article>

            <article className={styles.processCard}>
              <span>03</span>

              <h3>Analizamos la solución</h3>

              <p>
                Evaluamos la mejor alternativa tecnológica y definimos el
                alcance inicial del proyecto.
              </p>
            </article>

            <article className={styles.processCard}>
              <span>04</span>

              <h3>Construimos juntos</h3>

              <p>
                Una vez definido el proyecto, comenzamos a transformar la idea
                en una solución funcional.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <section className={styles.quickSection}>
        <div className={styles.container}>
          <div className={styles.quickContact}>
            <div className={styles.quickGlow}></div>

            <div className={styles.quickContent}>
              <span>¿PREFIERES ALGO MÁS RÁPIDO?</span>

              <h2>
                También puedes escribirnos directamente por WhatsApp.
              </h2>

              <p>
                Ideal para consultas rápidas, soporte o para contarnos
                brevemente sobre un proyecto.
              </p>
            </div>

            <a
              href="https://wa.me/50689119353"
              target="_blank"
              rel="noreferrer"
              className={styles.whatsappButton}
            >
              Escribir por WhatsApp
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};