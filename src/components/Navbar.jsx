import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    const currentPath = location.pathname
    if (path === '/') {
      return currentPath === '/' || currentPath === '/12/' || currentPath === '/12'
    }
    return currentPath === path || currentPath === `/12${path}`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[99999] bg-white border-b border-gray-200 shadow-sm" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-base sm:text-lg font-light text-gray-900 hover:text-gray-600 transition-colors tracking-wide whitespace-nowrap"
          >
            BURGER O'CLOCK TAIPEI
          </Link>
          <div className="flex items-center gap-4 sm:gap-8">
            <Link
              to="/"
              className={`text-xs sm:text-sm font-medium transition-all duration-200 pb-1 px-2 ${
                isActive('/')
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              首頁
            </Link>
            <Link
              to="/menu"
              className={`text-xs sm:text-sm font-medium transition-all duration-200 pb-1 px-2 ${
                isActive('/menu')
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              美味菜單
            </Link>
            <Link
              to="/info"
              className={`text-xs sm:text-sm font-medium transition-all duration-200 pb-1 px-2 ${
                isActive('/info')
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
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
