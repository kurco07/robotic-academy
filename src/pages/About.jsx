import React from "react";

const About = () => {
  return (
    <div className="about-container">
      {/* Encabezado */}
      <header className="about-header">
        <h1>Sobre Nosotros</h1>
      </header>

      {/* Introducción */}
      <section className="about-intro">
        <h2>Nuestra Misión</h2>
        <p>
          Somos una plataforma educativa dedicada a transformar la forma en que
          las personas aprenden robótica. Nuestro objetivo es empoderar a
          estudiantes, entusiastas y profesionales mediante cursos prácticos,
          interactivos y diseñados para todos los niveles de conocimiento. Ya
          sea que estés dando tus primeros pasos en este emocionante campo o
          buscando profundizar en habilidades avanzadas, ¡tenemos algo para ti!
          Hecho por Pedro Liccioni mentira pedro le pago 200$ a Carlos ternera
          alias el chanchito para que haga todo ajjajaj
        </p>
      </section>

      {/* Qué ofrecemos */}
      <section className="about-offer">
        <h2>¿Qué Ofrecemos?</h2>
        <ul>
          <li>
            <strong>Cursos Personalizados:</strong> Adaptados a diferentes
            niveles, desde principiantes hasta expertos.
          </li>
          <li>
            <strong>Proyectos Prácticos:</strong> Aprende construyendo robots
            reales y resolviendo desafíos tecnológicos.
          </li>
          <li>
            <strong>Material Multimedia:</strong> Videos dinámicos,
            presentaciones y guías en PDF para un aprendizaje integral.
          </li>
          <li>
            <strong>Soporte y Comunidad:</strong> Accede a foros y sesiones en
            vivo para resolver dudas y compartir avances.
          </li>
        </ul>
      </section>

      {/* Valores */}
      <section className="about-values">
        <h2>Nuestros Valores</h2>
        <p>
          Creemos que la robótica es una puerta hacia el futuro y que todos
          deberían tener la oportunidad de explorarlo. Por eso, nuestros valores
          fundamentales son:
        </p>
        <ul>
          <li>Accesibilidad: Cursos asequibles y adaptados para todos.</li>
          <li>Innovación: Siempre a la vanguardia de la tecnología.</li>
          <li>Practicidad: Métodos efectivos para aprender haciendo.</li>
          <li>
            Inclusión: Creemos en la diversidad y en una comunidad global.
          </li>
        </ul>
      </section>

      {/* Historia */}
      <section className="about-history">
        <h2>Nuestra Historia</h2>
        <p>
          Fundada por apasionados de la tecnología y la educación, nuestra
          plataforma nació con la idea de cerrar la brecha entre el conocimiento
          teórico y práctico en robótica. Desde entonces, hemos ayudado a
          cientos de estudiantes y profesionales a dar vida a sus ideas,
          inspirándolos a ser los innovadores del mañana.
        </p>
      </section>
    </div>
  );
};

export default About;
