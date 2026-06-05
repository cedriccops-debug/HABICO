import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Profielen from './pages/Profielen'
import ProfielDetail from './pages/ProfielDetail'
import HoeWerktHet from './pages/HoeWerktHet'
import Referenties from './pages/Referenties'
import WordPartner from './pages/WordPartner'
import OverHabico from './pages/OverHabico'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profielen" element={<Profielen />} />
          <Route path="/profielen/:slug" element={<ProfielDetail />} />
          <Route path="/hoe-werkt-het" element={<HoeWerktHet />} />
          <Route path="/referenties" element={<Referenties />} />
          <Route path="/word-partner" element={<WordPartner />} />
          <Route path="/over-habico" element={<OverHabico />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
