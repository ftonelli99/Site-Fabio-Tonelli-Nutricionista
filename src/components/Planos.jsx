const plans = [
  {
    tier: 'BRONZE',
    badge: 'BRONZE',
    badgeClass: 'badge-bronze',
    name: 'Avulsa',
    btnClass: 'btn-bronze',
    cardClass: 'plano-bronze',
    items: [
      '1 consulta online',
      'Plano alimentar personalizado',
      'Suporte integral por 30 dias',
      'Check-in quinzenal para feedbacks',
      'Material de apoio + eBook de receitas',
    ],
    whatsapp: 'Consulta%20Avulsa',
  },
  {
    tier: 'PLANO',
    badge: 'OURO',
    badgeClass: 'badge-ouro',
    name: 'Semestral',
    btnClass: 'btn-ouro',
    cardClass: 'plano-ouro',
    destaque: 'MAIS ESCOLHIDO',
    items: [
      '6 consultas online',
      'Plano alimentar personalizado',
      'Suporte integral por 180 dias',
      'Check-in quinzenal para feedbacks',
      'Material de apoio + eBook de receitas',
      'Avaliação física periódica',
      'Descontos especiais em parceiros',
      'Prioridade no agendamento',
    ],
    whatsapp: 'Plano%20Semestral',
  },
  {
    tier: 'PLANO',
    badge: 'PRATA',
    badgeClass: 'badge-prata',
    name: 'Trimestral',
    btnClass: 'btn-prata',
    cardClass: 'plano-prata',
    items: [
      '3 consultas online',
      'Plano alimentar personalizado',
      'Suporte integral por 90 dias',
      'Check-in quinzenal para feedbacks',
      'Material de apoio + eBook de receitas',
      'Avaliação física periódica',
      'Descontos em parceiros',
    ],
    whatsapp: 'Plano%20Trimestral',
  },
]

export default function Planos() {
  return (
    <section id="planos" className="section planos">
      <div className="container">
        <h2 className="section-title center" data-aos="fade-up">
          Escolha o plano ideal <span className="gold-text">para você</span>
        </h2>
        <div className="planos-grid">
          {plans.map((plan, i) => (
            <div
              className={`plano-card ${plan.cardClass}`}
              key={plan.name}
              data-aos="fade-up"
              data-aos-delay={(i + 1) * 100}
            >
              <div className={`plano-badge ${plan.badgeClass}`}>{plan.badge}</div>
              {plan.destaque && (
                <div className="plano-badge badge-mais-escolhido">{plan.destaque}</div>
              )}
              <div className="plano-header">
                <span className="plano-tipo">{plan.tier}</span>
                <h3>{plan.name}</h3>
              </div>
              <ul className="plano-beneficios">
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={`https://wa.me/5511973643442?text=Olá%20Fábio,%20vim%20pelo%20site%20e%20tenho%20interesse%20no%20${plan.whatsapp}.`}
                className={`btn-primary ${plan.btnClass}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                QUERO ESSE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
