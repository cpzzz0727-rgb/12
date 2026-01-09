import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-lg font-light text-gray-900 hover:text-gray-600 transition-colors tracking-wide"
          >
            BURGER O'CLOCK TAIPEI
          </Link>
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-200 pb-1 ${
                isActive('/') || location.pathname === '/12/' || location.pathname === '/12'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              首頁
            </Link>
            <Link
              to="/menu"
              className={`text-sm font-medium transition-all duration-200 pb-1 ${
                isActive('/menu')
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              美味菜單
            </Link>
            <Link
              to="/info"
              className={`text-sm font-medium transition-all duration-200 pb-1 ${
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
