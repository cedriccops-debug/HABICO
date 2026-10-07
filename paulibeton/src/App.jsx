import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { MobileCta, ScrollToTop } from './components/common'
import Home from './pages/Home'
import Vloeren from './pages/Vloeren'
import Metselstenen from './pages/Metselstenen'
import ProductDetail from './pages/ProductDetail'
import TechnischeInfo from './pages/TechnischeInfo'
import OverOns from './pages/OverOns'
import Offerte from './pages/Offerte'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vloeren" element={<Vloeren />} />
          <Route path="/metselstenen" element={<Metselstenen />} />
          <Route path="/producten/:slug" element={<ProductDetail />} />
          <Route path="/technische-info" element={<TechnischeInfo />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/offerte" element={<Offerte />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCta />
    </BrowserRouter>
  )
}
