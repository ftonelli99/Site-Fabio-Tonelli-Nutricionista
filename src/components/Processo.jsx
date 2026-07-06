export default function Processo() {
  return (
    <section className="section processo">
      <div className="container">
        <div className="processo-grid">
          <div className="processo-text" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="section-title">Durante o <span className="gold-text">processo...</span></h2>
            <p>
              Aqui o acompanhamento vai muito além de um plano alimentar. Você terá{' '}
              <strong>check-ins regulares</strong> para avaliar seu progresso, ajustar estratégias
              e manter tudo alinhado com a sua rotina — porque o que funciona hoje pode precisar
              de ajustes amanhã.
            </p>
            <p>
              O foco não é uma dieta temporária, mas sim construir{' '}
              <strong>hábitos sustentáveis</strong> que se encaixam no seu estilo de vida.
              Cada etapa é pensada para que os resultados venham de forma natural e duradoura,
              sem radicalismo.
            </p>
            <div className="processo-metrics">
              <div className="metric-item">
                <span className="metric-value">100%</span>
                <span className="metric-label">Personalizado</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">Online</span>
                <span className="metric-label">Consultas</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">Total</span>
                <span className="metric-label">Suporte integral</span>
              </div>
            </div>
            <a
              href="https://wa.me/5511973643442?text=Olá%20Fábio,%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20acompanhamento."
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              QUERO COMEÇAR MEU ACOMPANHAMENTO
            </a>
          </div>
          <div className="processo-image" data-aos="fade-left" data-aos-duration="1000">
            <div className="processo-image-inner">
              <img src="/fabio-segurando-pecas.png" alt="Fábio Tonelli" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
