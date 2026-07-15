const parceiros = [
  {
    nome: 'Essential',
    logo: '/logoEssential.png',
  },
  {
    nome: 'Pura Vida',
    logo: '/Pura-Vida-Logo.png',
  },
  {
    nome: 'Central Nutrition',
    logo: '/central-nutrition-logo.png',
  },
]

export default function Parceiros() {
  return (
    <section id="parceiros" className="section parceiros">
      <div className="container">
        <h2 className="section-title center" data-aos="fade-up">
          Marcas com <span className="gold-text">parceria exclusiva</span>
        </h2>
        <p className="parceiros-subtitle center" data-aos="fade-up" data-aos-delay="100">
          Ao adquirir um plano de acompanhamento, você ganha acesso a códigos promocionais
          exclusivos nestas marcas.
        </p>
        <div className="parceiros-grid">
          {parceiros.map((parceiro, i) => (
            <div
              className="parceiro-card"
              key={parceiro.nome}
              data-aos="fade-up"
              data-aos-delay={(i + 1) * 100}
            >
              <img
                src={parceiro.logo}
                alt={`Logo ${parceiro.nome}`}
                className="parceiro-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
