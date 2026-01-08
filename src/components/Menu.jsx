const menuItems = [
  {
    id: 1,
    name: '經典美式漢堡',
    description: '100% 純牛肉、新鮮生菜、番茄、洋蔥、特製醬料',
    price: 180,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80'
  },
  {
    id: 2,
    name: '起司雙層堡',
    description: '雙層牛肉、雙倍起司、培根、酸黃瓜',
    price: 250,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'
  },
  {
    id: 3,
    name: '日式照燒雞腿堡',
    description: '照燒雞腿、鳳梨、生菜、特製日式醬料',
    price: 200,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80'
  },
  {
    id: 4,
    name: 'BBQ 煙燻牛肉堡',
    description: '煙燻牛肉、洋蔥圈、BBQ 醬、切達起司',
    price: 220,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433f?w=400&q=80'
  },
  {
    id: 5,
    name: '素食蘑菇堡',
    description: '烤蘑菇、酪梨、生菜、特製素食醬料',
    price: 160,
    image: 'https://images.unsplash.com/photo-1525059696034-4967a729002e?w=400&q=80'
  },
  {
    id: 6,
    name: '限定聯名堡',
    description: '與合作品牌共同開發的限定口味',
    price: 280,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80',
    isSpecial: true
  }
]

const collaborations = [
  {
    name: '咖啡品牌聯名',
    description: '與在地精品咖啡店合作，推出咖啡風味漢堡',
    status: '進行中'
  },
  {
    name: '精釀啤酒聯名',
    description: '與精釀啤酒廠合作，打造完美搭配組合',
    status: '規劃中'
  },
  {
    name: '文創品牌聯名',
    description: '與在地文創品牌合作，推出限定包裝與口味',
    status: '規劃中'
  }
]

function Menu() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-burger-gray to-burger-black">
      <div className="max-w-7xl mx-auto">
        {/* 菜單區塊 */}
        <div className="fade-in mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-burger-yellow">
            精選菜單
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-burger-gray rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-burger-red/20"
              >
                <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-burger-black/80 to-transparent"></div>
                  {item.isSpecial && (
                    <div className="absolute top-4 right-4 bg-burger-red text-white px-3 py-1 rounded-full text-sm font-bold">
                      限定
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-burger-yellow mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">
                      NT$ {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 品牌合作區塊 */}
        <div className="fade-in mt-20">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-burger-yellow">
            品牌合作開發
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg text-white/80 mb-12">
              我們致力於與不同領域的品牌合作，創造獨特的味覺體驗與文化連結。
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {collaborations.map((collab, index) => (
                <div
                  key={index}
                  className="bg-burger-gray/50 p-6 rounded-lg border border-burger-yellow/30 hover:border-burger-yellow transition-all"
                >
                  <h3 className="text-xl font-bold text-burger-yellow mb-3">
                    {collab.name}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm">
                    {collab.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    collab.status === '進行中'
                      ? 'bg-burger-red text-white'
                      : 'bg-burger-gray text-burger-yellow border border-burger-yellow'
                  }`}>
                    {collab.status}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-white/60 mb-4">
                有興趣與我們合作嗎？
              </p>
              <a
                href="#information"
                className="inline-block bg-burger-yellow text-burger-black px-8 py-3 rounded-lg font-bold hover:bg-burger-yellow/90 transition-colors"
              >
                聯絡我們
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
