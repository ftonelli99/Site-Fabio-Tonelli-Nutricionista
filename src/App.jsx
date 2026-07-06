import { useEffect } from 'react'
import AOS from 'aos'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Sobre from './components/Sobre'
import ComoFunciona from './components/ComoFunciona'
import Processo from './components/Processo'
import Planos from './components/Planos'
import FAQ from './components/FAQ'
import Depoimentos from './components/Depoimentos'
import InstagramSection from './components/InstagramSection'
import Footer from './components/Footer'
import FloatButtons from './components/FloatButtons'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <>
      <Hero />
      <Marquee text="FÁBIO TONELLI" />
      <Sobre />
      <Marquee text="EMAGRECIMENTO • DOENÇAS CRÔNICAS • OBESIDADE • NUTRIÇÃO CLÍNICA • REEDUCAÇÃO ALIMENTAR • PERFORMANCE • SAÚDE • BEM-ESTAR" duration="120s" />
      <ComoFunciona />
      <Marquee text="FÁBIO TONELLI" />
      <Processo />
      <Marquee text="EMAGRECIMENTO • DOENÇAS CRÔNICAS • OBESIDADE • NUTRIÇÃO CLÍNICA • REEDUCAÇÃO ALIMENTAR • PERFORMANCE • SAÚDE • BEM-ESTAR" duration="120s" />
      <Planos />
      <Marquee text="EMAGRECIMENTO • DOENÇAS CRÔNICAS • OBESIDADE • NUTRIÇÃO CLÍNICA • REEDUCAÇÃO ALIMENTAR • PERFORMANCE • SAÚDE • BEM-ESTAR" duration="120s" />
      <FAQ />
      <Marquee text="EMAGRECIMENTO • DOENÇAS CRÔNICAS • OBESIDADE • NUTRIÇÃO CLÍNICA • REEDUCAÇÃO ALIMENTAR • PERFORMANCE • SAÚDE • BEM-ESTAR" duration="120s" />
      <Depoimentos />
      <InstagramSection />
      <Footer />
      <FloatButtons />
    </>
  )
}
