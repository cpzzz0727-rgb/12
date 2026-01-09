import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 當路由變化時關閉選單
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const isActive = (path) => {
    let currentPath = location.pathname
    if (currentPath.startsWith('/12')) {
      currentPath = currentPath.replace('/12', '')
    }
    
    if (path === '/') {
      return currentPath === '/' || currentPath === ''
    }
    return currentPath === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { path: '/', label: '首頁' },
    { path: '/menu', label: '美味菜單' },
    { path: '/info', label: '聯絡資訊' }
  }

  // 漢堡圖標 SVG（不使用外部庫，確保顯示）
  const HamburgerIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )

  const CloseIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )

  return (
    <>
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
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(0.5rem, 2vw, 1rem)' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            height: '64px'
          }}>
            {/* 品牌 Logo */}
            <Link 
              to="/" 
              style={{ 
                fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
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

            {/* 漢堡選單按鈕 - 所有尺寸都顯示 */}
            <button
              onClick={toggleMenu}
              type="button"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#111827',
                transition: 'color 0.2s',
                outline: 'none',
                zIndex: 100000
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
              aria-label={isMenuOpen ? '關閉選單' : '開啟選單'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* 側邊欄選單 - 所有尺寸都使用 */}
      <>
        {/* 半透明遮罩 */}
        <div
          onClick={toggleMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 99998,
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease',
            pointerEvents: isMenuOpen ? 'auto' : 'none'
          }}
        />

        {/* 側邊欄 */}
        <div
          style={{
            position: 'fixed',
            top: '64px',
            right: 0,
            width: '320px',
            maxWidth: '85vw',
            height: 'calc(100vh - 64px)',
            backgroundColor: '#ffffff',
            zIndex: 99999,
            boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.15)',
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
            overflowY: 'auto'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem 0'
          }}>
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                style={{
                  padding: '1.25rem 2rem',
                  fontSize: '1.125rem',
                  fontWeight: isActive(item.path) ? 600 : 500,
                  color: isActive(item.path) ? '#111827' : '#4b5563',
                  textDecoration: 'none',
                  borderLeft: isActive(item.path) ? '4px solid #111827' : '4px solid transparent',
                  backgroundColor: isActive(item.path) ? '#f9fafb' : 'transparent',
                  transition: 'all 0.2s',
                  borderBottom: index < menuItems.length - 1 ? '1px solid #e5e7eb' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.backgroundColor = '#f9fafb'
                    e.target.style.color = '#111827'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#4b5563'
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </>
    </>
  )
}

export default Navbar
