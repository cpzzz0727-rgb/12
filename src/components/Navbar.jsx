import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-light text-gray-900 hover:text-gray-600 transition-colors tracking-wide">
            BURGER O'CLOCK TAIPEI
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/') || isActive('')
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              首頁
            </Link>
            <Link
              to="/menu"
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/menu')
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              美味菜單
            </Link>
            <Link
              to="/info"
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/info')
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              聯絡我們
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
