import { useRef, useEffect, useState } from 'react'

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
    grande: true,
  },
  {
    nome: 'Bold',
    logo: '/BOLD-LOGO.PNG',
  },
  {
    nome: 'Souly',
    logo: '/souly-logo.png',
  },
]

export default function Parceiros() {
  const sectionRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setMousePos({ x, y })
    }

    section.addEventListener('mousemove', handleMouseMove)
    return () => section.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="parceiros" className="section parceiros" ref={sectionRef}>
      <div className="parceiros-bg-glow" />
      <div className="container">
        <h2 className="section-title center" data-aos="fade-up">
          Marcas com <span className="gold-text">parceria exclusiva</span>
        </h2>
        <p className="parceiros-subtitle center" data-aos="fade-up" data-aos-delay="100">
          Ao adquirir um plano de acompanhamento, você ganha acesso a códigos promocionais
          exclusivos nestas marcas.
        </p>
        <div className="parceiros-stage">
          {parceiros.map((parceiro, i) => (
            <div
              className="parceiro-orbit"
              key={parceiro.nome}
              data-aos="fade-up"
              data-aos-delay={(i + 1) * 150}
              style={{
                transform: `translate(${mousePos.x * (6 + i * 4)}px, ${mousePos.y * (6 + i * 4)}px)`,
              }}
            >
              <img
                src={parceiro.logo}
                alt={`Logo ${parceiro.nome}`}
                className={`parceiro-logo${parceiro.grande ? ' parceiro-logo-grande' : ''}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
