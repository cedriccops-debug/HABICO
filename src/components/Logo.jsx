/* Eén gedeeld woordmerk. Stond eerder los gekopieerd in Navbar en Footer.
   Vervang je ooit de tekst door een echt logobestand, dan hoeft dat enkel hier. */
export default function Logo({ size = 34, light = false, style = {} }) {
  return (
    <span style={{
      fontFamily: 'Poppins, Inter, system-ui, sans-serif',
      fontWeight: 700,
      fontStyle: 'italic',
      fontSize: size,
      letterSpacing: '-0.02em',
      color: light ? '#ffffff' : '#1D4ED8',
      lineHeight: 1,
      display: 'inline-block',
      textTransform: 'uppercase',
      ...style,
    }}>
      HABICO
    </span>
  )
}
