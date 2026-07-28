/* Groot woordmerk op lage dekking, als achtergrondaccent in donkerblauwe secties.
   Puur decoratief: aria-hidden en niet klikbaar.
   De sectie eromheen moet position: relative en overflow: hidden hebben. */
export default function Watermerk({ kant = 'rechts', dekking = 0.04, formaat = 'clamp(6rem, 15vw, 15rem)' }) {
  return (
    <div
      aria-hidden="true"
      className="watermerk"
      style={{
        [kant === 'links' ? 'left' : 'right']: '-0.05em',
        fontSize: formaat,
        color: `rgba(255, 255, 255, ${dekking})`,
      }}
    >
      HABICO
    </div>
  )
}
