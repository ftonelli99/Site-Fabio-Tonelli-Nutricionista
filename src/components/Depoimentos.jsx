const depoimentos = [
  {
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
    nome: 'Ana Carolina',
    tempo: 'Há 2 meses',
    texto: '"O Fábio é um profissional incrível! Consegui finalmente organizar minha alimentação sem passar fome. O plano foi feito para a minha rotina e os resultados vieram naturalmente."',
  },
  {
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
    nome: 'Ricardo Oliveira',
    tempo: 'Há 1 mês',
    texto: '"Sempre tive dificuldade em manter dieta, mas o acompanhamento do Fábio é diferente. Ele realmente entende a rotina do paciente e adapta tudo. Perdi 8kg em 3 meses sem sofrer."',
  },
  {
    foto: 'https://randomuser.me/api/portraits/women/68.jpg',
    nome: 'Juliana Costa',
    tempo: 'Há 3 meses',
    texto: '"Profissional super atencioso e dedicado. As consultas online são muito práticas e o suporte via WhatsApp faz toda diferença. Recomendo de olhos fechados!"',
  },
]

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="section depoimentos">
      <div className="container">
        <h2 className="section-title center" data-aos="fade-up">
          Experiência de quem já passou pelo <span className="gold-text">acompanhamento</span>
        </h2>
        <div className="depoimentos-grid">
          {depoimentos.map((d, i) => (
            <div className="depoimento-card" key={d.nome} data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
              <div className="depoimento-google">Publicado no Google</div>
              <div className="depoimento-stars">★★★★★</div>
              <div className="depoimento-author-photo">
                <img src={d.foto} alt={d.nome} loading="lazy" />
                <div>
                  <strong>{d.nome}</strong>
                  <span>{d.tempo}</span>
                </div>
              </div>
              <p className="depoimento-text">{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
