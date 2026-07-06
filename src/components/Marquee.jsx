export default function Marquee({ text, duration }) {
  const items = Array.from({ length: 8 }, (_, i) => (
    <span key={i}>{text} • </span>
  ))
  return (
    <section className="marquee-section">
      <div className="marquee">
        <div className="marquee-track" style={{ animationDuration: duration || '40s' }}>
          {items}
        </div>
      </div>
    </section>
  )
}
