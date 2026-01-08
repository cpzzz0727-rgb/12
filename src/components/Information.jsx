function Information() {
  const address = '台北市信義區漢堡街123號'
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  
  const phone = '02-1234-5678'
  const instagram = 'https://www.instagram.com/burgeroclock'
  const facebook = 'https://www.facebook.com/burgeroclock'

  return (
    <section id="information" className="py-20 md:py-32 px-4 bg-gradient-to-b from-burger-black to-burger-gray">
      <div className="max-w-4xl mx-auto fade-in">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-burger-yellow">
          營業資訊
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* 地址 */}
          <div className="bg-burger-gray/50 p-8 rounded-lg border border-burger-red/20">
            <div className="flex items-start gap-4 mb-4">
              <svg
                className="w-8 h-8 text-burger-yellow flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-burger-yellow mb-2">地址</h3>
                <p className="text-white/80 mb-4">{address}</p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-burger-red text-white px-4 py-2 rounded-lg hover:bg-burger-red/90 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  開啟 Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* 營業時間 */}
          <div className="bg-burger-gray/50 p-8 rounded-lg border border-burger-red/20">
            <div className="flex items-start gap-4 mb-4">
              <svg
                className="w-8 h-8 text-burger-yellow flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-burger-yellow mb-4">營業時間</h3>
                <div className="space-y-2 text-white/80">
                  <div className="flex justify-between">
                    <span>營業時間</span>
                    <span className="font-semibold text-burger-yellow">11:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>最後點餐</span>
                    <span className="font-semibold text-burger-yellow">21:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>打烊時間</span>
                    <span className="font-semibold text-burger-yellow">22:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 聯絡方式 */}
        <div className="mt-12 bg-burger-gray/50 p-8 rounded-lg border border-burger-red/20">
          <h3 className="text-2xl font-bold text-burger-yellow mb-6 text-center">聯絡我們</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* 電話 */}
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 bg-burger-red text-white px-6 py-3 rounded-lg hover:bg-burger-red/90 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-semibold">{phone}</span>
            </a>

            {/* Instagram */}
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-semibold">Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="font-semibold">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
