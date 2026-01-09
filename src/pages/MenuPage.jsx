import { useState } from 'react'
import menuData from '../menuData.ts'

// Tab 分類映射
const tabCategories = {
  '牛肉堡': ['牛肉堡'],
  '雞肉與熱狗': ['雞肉堡', '熱狗', '素食'],
  '點心': ['點心'],
  '飲品甜點': ['飲品/甜點']
}

function MenuPage() {
  const [activeTab, setActiveTab] = useState<string>('牛肉堡')

  // 根據選中的 Tab 過濾菜單
  const getFilteredMenu = () => {
    const categoriesToShow = tabCategories[activeTab as keyof typeof tabCategories] || []
    return menuData.filter(item => categoriesToShow.includes(item.category))
  }

  const filteredMenu = getFilteredMenu()

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* 頁面標題 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-wide">Menu</h1>
          <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
        </div>

        {/* Tab 分類欄 */}
        <div className="border-b border-gray-200 mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {Object.keys(tabCategories).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-sm md:text-base font-medium transition-all duration-300 border-b-2 ${
                  activeTab === tab
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 菜單內容區塊 */}
        <div className="space-y-12">
          {filteredMenu.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">該分類暫無商品</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {filteredMenu.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-100 pb-8 space-y-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-normal text-gray-900">
                          {item.name_zh}
                        </h3>
                        {item.isRecommended && (
                          <span className="text-xs text-gray-500">推薦</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {item.name_en}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-xl font-light text-gray-900 whitespace-nowrap">
                      ${item.price === 0 ? '???' : item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 備註資訊 */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              低消 100 元
            </p>
            <p className="text-sm text-gray-600">
              無服務費
            </p>
            <p className="text-sm text-gray-600">
              飲品請至櫃檯挑選
            </p>
            <p className="text-sm text-gray-600 mt-6">
              * 以上漢堡皆可升級套餐
            </p>
            <p className="text-sm text-gray-600">
              * 加35元漢堡肉即可換特醃雞腿排
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPage
