import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import InfoPage from './pages/InfoPage'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  )
}

export default App
