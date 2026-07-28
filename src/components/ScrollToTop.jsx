import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* React Router behoudt de scrollpositie bij navigatie. Zonder dit component
   opent een nieuwe pagina halverwege, op de hoogte waar je stond. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
