import { useState, useEffect } from 'react'

const slogans = [
  '人生就是吃堡睡，睡飽吃',
  'What time is it? It\'s Burger O\'clock!'
]

function Hero() {
  const [currentSlogan, setCurrentSlogan] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden -mt-16">
      {/* 背景圖片預留位置 */}
      <div className="absolute inset-0 bg-gradient-to-b from-burger-black via-burger-gray to-burger-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 內容 */}
      <div className="relative z-10 text-center px-4 fade-in pt-16">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-burger-yellow drop-shadow-2xl">
          Burger O'clock
        </h1>
        
        <div className="h-20 md:h-24 flex items-center justify-center">
          <p className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white transition-opacity duration-1000">
            {slogans[currentSlogan]}
          </p>
        </div>

        {/* 輪播指示器 */}
        <div className="flex justify-center gap-2 mt-8">
          {slogans.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlogan
                  ? 'bg-burger-yellow w-8'
                  : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlogan(index)}
              aria-label={`切換到標語 ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 向下滾動提示 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-burger-yellow"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
