import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solucoes from './pages/Solucoes'
import SobreMim from './pages/SobreMim'
import Contato from './pages/Contato'
import Infoprodutos from './pages/Infoprodutos'
import { Analytics } from "@vercel/analytics/react"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
    <Analytics />  
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/sobre"    element={<SobreMim />} />
          <Route path="/contato"      element={<Contato />} />
          <Route path="/infoprodutos" element={<Infoprodutos />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
