function BrandStory() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-burger-black to-burger-gray">
      <div className="max-w-4xl mx-auto fade-in">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-burger-yellow">
          品牌故事
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/90">
          <p className="text-center">
            在 Burger O'clock，我們相信每一口漢堡都應該承載著滿滿的靈魂。
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-burger-gray/50 rounded-lg border border-burger-red/20">
              <div className="text-5xl mb-4">🇺🇸</div>
              <h3 className="text-2xl font-bold text-burger-yellow mb-3">美式精神</h3>
              <p className="text-white/80">
                豪邁、大份量、不羈的靈魂，每一口都是對經典美式漢堡的致敬。
              </p>
            </div>
            
            <div className="text-center p-6 bg-burger-gray/50 rounded-lg border border-burger-red/20">
              <div className="text-5xl mb-4">🇯🇵</div>
              <h3 className="text-2xl font-bold text-burger-yellow mb-3">日式態度</h3>
              <p className="text-white/80">
                對細節的執著、對品質的堅持，用職人的精神打造每一份漢堡。
              </p>
            </div>
            
            <div className="text-center p-6 bg-burger-gray/50 rounded-lg border border-burger-red/20">
              <div className="text-5xl mb-4">🇹🇼</div>
              <h3 className="text-2xl font-bold text-burger-yellow mb-3">台灣價格</h3>
              <p className="text-white/80">
                平實親民的價格，讓每個人都能享受高品質的漢堡，無負擔的美味。
              </p>
            </div>
          </div>
          
          <p className="text-center mt-12 text-xl md:text-2xl font-semibold text-burger-yellow">
            這就是 Burger O'clock — 用美式的精神、日式的態度，<br className="hidden md:block" />
            提供台灣小吃般的平實價格，給所有漢堡子民。
          </p>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
