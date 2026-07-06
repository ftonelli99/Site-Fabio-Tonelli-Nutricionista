export default function Sobre() {
  return (
    <section id="sobre" className="section sobre">
      <div className="container">
        <div className="sobre-grid">
          <div className="sobre-image" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="sobre-image-title">Quem é <span className="gold-text">Fábio Tonelli?</span></h2>
            <div className="image-placeholder">
              <div className="sobre-image-inner">
                <img src="/fabio-perfil.png" alt="Fábio Tonelli" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="sobre-text" data-aos="fade-left" data-aos-duration="1000">
            <p>
              Fábio Tonelli é <strong>Nutricionista Clínico</strong>, com{' '}
              <strong>Pós-Graduação em Nutrição Clínica</strong> e formado pela{' '}
              <strong>Faculdade de Medicina do ABC</strong>.
            </p>
            <p>
              Sua abordagem é centrada no paciente, com um olhar atento às necessidades individuais
              de cada pessoa. Acredita que a nutrição deve ser{' '}
              <strong>acessível, sustentável e adaptada à rotina</strong> de cada um — não o contrário.
            </p>
            <p>
              Ao longo dos anos, tem acompanhado pacientes que buscam <strong>emagrecimento</strong>,{' '}
              <strong>ganho de massa muscular</strong> e <strong>melhora da saúde de modo geral</strong>,
              sempre com estratégias práticas e aplicáveis ao dia a dia.
            </p>
            <p>Seu trabalho é guiado por um princípio simples:</p>
            <blockquote>
              &ldquo;A nutrição precisa se adaptar à sua vida, e não o contrário.&rdquo;
            </blockquote>
            <a
              href="https://wa.me/5511973643442?text=Olá%20Fábio,%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20o%20acompanhamento."
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              QUERO SABER MAIS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
