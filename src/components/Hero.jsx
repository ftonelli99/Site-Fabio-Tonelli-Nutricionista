export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-logo animate-fade" data-aos="zoom-in" data-aos-duration="1000">
          <img src="/logo.png" alt="Fábio Tonelli" />
        </div>
        <h2 className="hero-name" data-aos="fade-up" data-aos-delay="100">Fábio Tonelli</h2>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          NUTRICIONISTA CLÍNICO
        </p>
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="400">
          Dieta restritiva não funciona.<br /><span className="gold-text">Nutrição personalizada, sim.</span>
        </h1>
        <p className="hero-text" data-aos="fade-up" data-aos-delay="600">
          Com um plano alimentar feito sob medida para a sua rotina e acompanhamento contínuo,
          você aprende a comer bem sem abrir mão do que gosta.
        </p>
        <a
          href="https://wa.me/5511973643442?text=Olá%20Fábio,%20vim%20pelo%20site%20e%20tenho%20interesse%20em%20agendar%20uma%20consulta."
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          AGENDAR CONSULTA
        </a>
      </div>
    </section>
  )
}
