import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    // 處理 basename，移除前綴
    let currentPath = location.pathname
    if (currentPath.startsWith('/12')) {
      currentPath = currentPath.replace('/12', '')
    }
    
    if (path === '/') {
      return currentPath === '/' || currentPath === ''
    }
    return currentPath === path
  }

  return (
    <nav 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        width: '100%'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link 
            to="/" 
            style={{ 
              fontSize: '1.125rem',
              fontWeight: 300,
              color: '#111827',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.target.style.color = '#4b5563'}
            onMouseLeave={(e) => e.target.style.color = '#111827'}
          >
            BURGER O'CLOCK TAIPEI
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link
              to="/"
              style={{ 
                fontSize: '0.875rem',
                fontWeight: 500,
                color: isActive('/') ? '#111827' : '#4b5563',
                textDecoration: 'none',
                paddingBottom: '4px',
                borderBottom: isActive('/') ? '2px solid #111827' : 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (!isActive('/')) {
                  e.target.style.color = '#111827'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/')) {
                  e.target.style.color = '#4b5563'
                }
              }}
            >
              首頁
            </Link>
            <Link
              to="/menu"
              style={{ 
                fontSize: '0.875rem',
                fontWeight: 500,
                color: isActive('/menu') ? '#111827' : '#4b5563',
                textDecoration: 'none',
                paddingBottom: '4px',
                borderBottom: isActive('/menu') ? '2px solid #111827' : 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (!isActive('/menu')) {
                  e.target.style.color = '#111827'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/menu')) {
                  e.target.style.color = '#4b5563'
                }
              }}
            >
              美味菜單
            </Link>
            <Link
              to="/info"
              style={{ 
                fontSize: '0.875rem',
                fontWeight: 500,
                color: isActive('/info') ? '#111827' : '#4b5563',
                textDecoration: 'none',
                paddingBottom: '4px',
                borderBottom: isActive('/info') ? '2px solid #111827' : 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (!isActive('/info')) {
                  e.target.style.color = '#111827'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/info')) {
                  e.target.style.color = '#4b5563'
                }
              }}
            >
              聯絡資訊
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
