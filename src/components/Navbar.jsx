import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // 檢測螢幕寬度
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      // 如果不是手機版，關閉選單
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

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
  ]

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

            {/* 桌面版選單 */}
            {!isMobile && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '2rem'
              }}>
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{ 
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isActive(item.path) ? '#111827' : '#4b5563',
                      textDecoration: 'none',
                      paddingBottom: '4px',
                      borderBottom: isActive(item.path) ? '2px solid #111827' : 'none',
                      transition: 'all 0.2s',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive(item.path)) {
                        e.target.style.color = '#111827'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(item.path)) {
                        e.target.style.color = '#4b5563'
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* 手機版漢堡圖標 */}
            {isMobile && (
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
                  outline: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
                aria-label={isMenuOpen ? '關閉選單' : '開啟選單'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X size={24} strokeWidth={2.5} />
                ) : (
                  <Menu size={24} strokeWidth={2.5} />
                )}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* 手機版側邊欄選單 */}
      {isMobile && (
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
              transition: 'opacity 0.3s ease, visibility 0.3s ease'
            }}
          />

          {/* 側邊欄 */}
          <div
            style={{
              position: 'fixed',
              top: '64px',
              right: 0,
              width: '280px',
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
                    padding: '1rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: isActive(item.path) ? 600 : 500,
                    color: isActive(item.path) ? '#111827' : '#4b5563',
                    textDecoration: 'none',
                    borderLeft: isActive(item.path) ? '3px solid #111827' : '3px solid transparent',
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
      )}
    </>
  )
}

export default Navbar
