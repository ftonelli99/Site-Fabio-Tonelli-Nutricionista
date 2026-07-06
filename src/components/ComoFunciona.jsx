const steps = [
  { number: '01', title: 'Agendamento', text: 'Você entra em contato pelo WhatsApp e agendamos a sua consulta online.' },
  { number: '02', title: 'Avaliação', text: 'Fazemos uma avaliação completa dos seus hábitos, rotina, exames e objetivos.' },
  { number: '03', title: 'Plano Personalizado', text: 'Você recebe um plano alimentar feito sob medida, adaptado à sua realidade.' },
  { number: '04', title: 'Acompanhamento', text: 'Suporte contínuo com check-ins periódicos para ajustes e evolução.' },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="section como-funciona">
      <div className="container">
        <h2 className="section-title center" data-aos="fade-up">
          Como funciona o <span className="gold-text">acompanhamento</span>
        </h2>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card" key={step.number} data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
