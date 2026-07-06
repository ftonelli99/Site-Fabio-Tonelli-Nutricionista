const faqs = [
  { pergunta: 'Aceita convênio?', resposta: 'Não, o atendimento é particular. Emito nota fiscal para que você solicite reembolso diretamente ao seu convênio.' },
  { pergunta: 'As consultas são presenciais ou online?', resposta: 'Todas as consultas são realizadas de forma online, com todo o cuidado e acompanhamento que você merece.' },
  { pergunta: 'O acompanhamento serve apenas para emagrecimento?', resposta: 'Não. O acompanhamento atende diversos objetivos: emagrecimento, ganho de massa muscular, melhora de exames, reeducação alimentar e muito mais.' },
  { pergunta: 'Vou receber uma dieta pronta?', resposta: 'Você recebe um plano alimentar totalmente individualizado, considerando sua rotina, horários, preferências e objetivos.' },
  { pergunta: 'Terei suporte durante o acompanhamento?', resposta: 'Sim! Durante todo o período do seu plano, você conta com suporte integral para dúvidas e ajustes.' },
]

export default function FAQ() {
  const handleToggle = (i) => {
    const items = document.querySelectorAll('.faq-item')
    items[i]?.classList.toggle('active')
  }

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <h2 className="section-title center" data-aos="fade-up">
          Dúvidas <span className="gold-text">Frequentes</span>
        </h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i} data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
              <button className="faq-pergunta" onClick={() => handleToggle(i)}>
                {faq.pergunta}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-resposta">
                <p>{faq.resposta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
