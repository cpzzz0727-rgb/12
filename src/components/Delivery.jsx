function Delivery() {
  const uberEatsUrl = 'https://www.ubereats.com/tw'

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-burger-gray to-burger-black">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-burger-yellow">
          外送服務
        </h2>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12">
          不想出門？沒問題！<br className="md:hidden" />
          動動手指，美味漢堡送到家
        </p>
        
        <div className="bg-burger-gray/50 p-12 rounded-lg border border-burger-yellow/30">
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-burger-yellow mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h3 className="text-3xl font-bold text-white mb-4">
              現在就訂餐
            </h3>
            <p className="text-white/70 mb-8">
              透過 Uber Eats 享受快速、便利的外送服務
            </p>
          </div>
          
          <a
            href={uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-burger-yellow text-burger-black px-12 py-5 rounded-lg text-xl font-bold hover:bg-burger-yellow/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M0 10h24v4H0z"/>
              <path d="M12 0L0 6v2h12V0zm0 24l12-6v-2H12v8z"/>
            </svg>
            前往 Uber Eats 訂餐
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Delivery
