function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-16">
      <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4">
        {/* 品牌大圖區域 */}
        <div className="text-center mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wide">
            BURGER O'CLOCK
          </h1>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
            在 Burger O'clock，我們相信每一口漢堡都應該承載著滿滿的靈魂。
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
