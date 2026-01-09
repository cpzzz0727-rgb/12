import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import InfoPage from './pages/InfoPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </main>
      
      {/* Footer - 顯示在所有頁面 */}
      <footer style={{
        backgroundColor: '#ffffff',
        padding: '2rem 1rem',
        textAlign: 'center',
        borderTop: '1px solid #e5e7eb'
      }}>
        <p style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          fontWeight: 400,
          fontFamily: 'Arial, "Microsoft JhengHei", sans-serif',
          margin: 0
        }}>
          <a 
            href="https://edward920727.github.io/edward/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#111827'}
            onMouseLeave={(e) => e.target.style.color = '#6b7280'}
          >
            Edward 網頁開發
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
