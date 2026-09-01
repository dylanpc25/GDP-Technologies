import "./Team.css";

import dylanImage from "../../assets/images/dylanpalmalinkedin.jpg";
import gabrielImage from "../../assets/images/gabrielherreralinkedin.jpg";
import pabloImage from "../../assets/images/pablocamposlinkedin.jpg";

const teamMembers = [
  {
    name: "Dylan Palma Campos",
    role: "Fundador",
    position: "Desarrollador Full-Stack y Especialista en Frontend",
    image: dylanImage,

    linkedin:
      "https://www.linkedin.com/in/dylan-palma-campos-9382111bb/",
    github: "https://github.com/dylanpc25",
    whatsapp: "50689119353",
  },

  {
    name: "Gabriel Herrera Solís",
    role: "Co-Fundador",
    position: "Desarrollador Full-Stack y Especialista en Datos",
    image: gabrielImage,

    linkedin:
      "https://www.linkedin.com/in/gabriel-josu%C3%A9-herrera-sol%C3%ADs-a3147a2a5/",
    github: "https://github.com/HerreraGabo1708",
    whatsapp: "50684844839",
  },

  {
    name: "Pablo Campos Barrantes",
    role: "Co-Fundador",
    position: "Desarrollador Full-Stack y Especialista en QA",
    image: pabloImage,

    linkedin:
      "https://www.linkedin.com/in/pablo-campos-barrantes/",
    github: "https://github.com/pcampos19",
    whatsapp: "50671022021",
  },
];

export function Team() {
  return (
    <main className="team-page">
      <section className="team-hero">
        <span className="team-label">NUESTRO EQUIPO</span>

        <h1>
          Las personas detrás de{" "}
          <span>Growth Digital Projects.</span>
        </h1>

        <p>
          Un equipo comprometido con transformar ideas en soluciones
          tecnológicas modernas, funcionales y preparadas para crecer.
        </p>
      </section>

      <section className="team-container">
        {teamMembers.map((member) => (
          <article className="team-card" key={member.name}>
            <div className="team-photo-container">
              <img
                src={member.image}
                alt={member.name}
                className="team-photo"
              />
            </div>

            <div className="team-info">
              <h2>{member.name}</h2>

              <span className="team-role">
                {member.role}
              </span>

              <p className="team-position">
                {member.position}
              </p>

              <div className="team-socials">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(
                    "Hola, vi tu contacto en Growth Digital Projects y me gustaría recibir información."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}