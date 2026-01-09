import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import InfoPage from './pages/InfoPage'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff'
    }}>
      <Navbar />
      <main style={{
        flex: 1,
        width: '100%'
      }}>
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
        borderTop: '1px solid #e5e7eb',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          <div style={{
            fontSize: '0.875rem',
            color: '#4b5563',
            lineHeight: '1.6'
          }}>
            <p style={{ margin: '0 0 0.5rem 0' }}>
              地址：111 臺北市士林區中山北路七段36號
            </p>
            <p style={{ margin: 0 }}>
              營業時間：7:00 pm - 3:00 am
            </p>
          </div>
          <div style={{
            marginTop: '1rem',
            paddingTop: '1rem',
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
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
