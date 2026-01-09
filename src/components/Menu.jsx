import { useState } from 'react'
import menuData from '../menuData.ts'

// 導覽分類映射
const navCategories = {
  '牛肉堡': ['牛肉堡'],
  '雞肉/熱狗': ['雞肉堡', '熱狗', '素食'],
  '點心': ['點心'],
  '飲品/甜點': ['飲品/甜點']
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('全部')

  // 根據選中的分類過濾菜單
  const getFilteredMenu = () => {
    if (activeCategory === '全部') {
      return menuData
    }
    
    const categoriesToShow = navCategories[activeCategory as keyof typeof navCategories] || []
    return menuData.filter(item => categoriesToShow.includes(item.category))
  }

  const filteredMenu = getFilteredMenu()

  // 按分類分組（用於顯示分類標題）
  const groupedMenu = filteredMenu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, typeof menuData>)

  // 獲取顯示順序
  const getCategoryOrder = () => {
    if (activeCategory === '全部') {
      return ['牛肉堡', '雞肉堡', '熱狗', '素食', '點心', '飲品/甜點']
    }
    return navCategories[activeCategory as keyof typeof navCategories] || []
  }

  const categoryOrder = getCategoryOrder()

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-burger-gray to-burger-black">
      <div className="max-w-7xl mx-auto">
        {/* 固定導覽列 */}
        <div className="sticky top-0 z-50 bg-burger-black/95 backdrop-blur-sm border-b-2 border-burger-red/30 mb-12">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {['全部', '牛肉堡', '雞肉/熱狗', '點心', '飲品/甜點'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-lg font-bold text-sm md:text-base transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-burger-yellow text-burger-black shadow-lg scale-105'
                      : 'bg-burger-gray text-burger-yellow hover:bg-burger-gray/80 hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 菜單區塊 */}
        <div className="fade-in mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-burger-yellow">
            完整菜單
          </h2>
          
          {filteredMenu.length === 0 ? (
            <div className="text-center text-white/70 py-20">
              <p className="text-xl">該分類暫無商品</p>
            </div>
          ) : (
            /* 按分類顯示 */
            categoryOrder.map((category) => (
              groupedMenu[category] && (
                <div key={category} className="mb-16">
                  <h3 className="text-3xl md:text-4xl font-bold text-burger-yellow mb-8 pb-4 border-b-2 border-burger-red/30">
                    {category}
                    {category === '點心' && <span className="text-lg text-white/70 ml-2">(Finger Food)</span>}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupedMenu[category].map((item) => (
                      <div
                        key={item.id}
                        className="bg-burger-gray rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-burger-red/20"
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-burger-yellow mb-1">
                                {item.name_zh}
                              </h4>
                              <p className="text-sm text-white/60 mb-2">
                                {item.name_en}
                              </p>
                            </div>
                            {item.isRecommended && (
                              <span className="text-2xl ml-2" title="推薦">👆</span>
                            )}
                          </div>
                          <p className="text-white/70 mb-4 text-sm leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-white">
                              NT$ {item.price}
                            </span>
                            {item.isRecommended && (
                              <span className="text-xs bg-burger-red text-white px-2 py-1 rounded-full font-semibold">
                                推薦
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))
          )}
        </div>

      </div>
    </section>
  )
}

export default Menu
