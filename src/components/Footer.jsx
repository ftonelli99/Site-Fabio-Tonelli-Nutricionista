export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-top">
            <a href="#" className="logo">
              <img src="/logo.png" alt="Fábio Tonelli" className="logo-img logo-img-footer" />
            </a>
            <span className="footer-divider" />
            <span className="footer-name">Fábio Tonelli</span>
          </div>
          <p className="footer-desc">
            Nutricionista Com Atendimento Especializado Em Nutrição Clínica, Emagrecimento, Doenças Crônicas E Reeducação Alimentar.
          </p>
        </div>
        <div className="footer-contato">
          <h4>Contato</h4>
          <a href="mailto:fabiotonelli.nutri@hotmail.com">fabiotonelli.nutri@hotmail.com</a>
          <a href="https://wa.me/5511973643442">(11) 97364-3442</a>
        </div>
        <div className="footer-social">
          <h4>Redes Sociais</h4>
          <a href="https://instagram.com/ftonelli_" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://tiktok.com/@fabiotonelli.nutri" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://linkedin.com/in/fabiotonellinutri" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Fábio Tonelli. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
