import menuData from '../menuData'

function Home() {
  // 获取推荐菜品（最多6个）
  const recommendedItems = menuData.filter(item => item.isRecommended).slice(0, 6)
  
  // 为每个推荐菜品分配图片（使用 Unsplash 无版权图片）
  const itemImages = [
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80', // 汉堡
    'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80', // 汉堡
    'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80', // 起司三重奏 - 新圖片
    'https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=800&q=80', // 汉堡
    'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&q=80', // 汉堡
    'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80', // 汉堡
  ]

  return (
    <div style={{ 
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '64px'
    }}>
      {/* 第一區塊：漢堡大圖與歡迎詞 (Hero Section) - 滿屏 */}
      <section style={{ 
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 64px)',
        height: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* 背景圖片 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
          zIndex: 0
        }}></div>
        
        {/* 深色遮罩 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>
        
        {/* 品牌大圖區域 */}
        <div style={{ 
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1rem',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 300,
            color: '#ffffff',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
          }}>
            BURGER O'CLOCK
          </h1>
          <div style={{ width: '128px', height: '4px', backgroundColor: '#fbbf24', margin: '0 auto 2rem' }}></div>
          <p style={{ 
            fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
            color: '#ffffff',
            fontWeight: 300,
            lineHeight: 1.6,
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
            maxWidth: '800px'
          }}>
            在 Burger O'clock，我們相信每一口漢堡都應該承載著滿滿的靈魂。
          </p>
        </div>
      </section>

      {/* 第二區塊：Google 地圖區域 - 獨立區塊，垂直排列在圖片下方 */}
      <section style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            width: '100%',
            height: '400px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <iframe
              src="https://www.google.com/maps?q=台北市士林區中山北路七段36號&output=embed&hl=zh-TW"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Burger O'clock 位置地圖"
            ></iframe>
          </div>
          <div style={{
            marginTop: '1rem',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '0.875rem',
              color: '#4b5563',
              margin: '0 0 1.5rem 0'
            }}>
              📍 台北市士林區中山北路七段36號
            </p>
            
            {/* Uber Eats 按鈕 */}
            <a
              href="https://www.ubereats.com/tw/tw/store/burger-oclock/xxxxx"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.5rem',
                backgroundColor: '#000000',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                border: '2px solid #000000'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff'
                e.currentTarget.style.color = '#000000'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#000000'
                e.currentTarget.style.color = '#ffffff'
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{
                  flexShrink: 0
                }}
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
              </svg>
              前往 UBER EATS
            </a>
          </div>
        </div>
      </section>

      {/* 第三區塊：熱賣餐點 - 黑底區域 */}
      <section style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#111827',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* 標題 */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 300,
              color: '#ffffff',
              marginBottom: '1rem',
              letterSpacing: '0.05em'
            }}>
              熱賣餐點
            </h2>
            <div style={{
              width: '128px',
              height: '4px',
              backgroundColor: '#fbbf24',
              margin: '0 auto'
            }}></div>
          </div>

          {/* 推薦菜品網格 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {recommendedItems.map((item, index) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#1f2937',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* 圖片 */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  backgroundColor: '#374151'
                }}>
                  <img
                    src={itemImages[index] || itemImages[0]}
                    alt={item.name_zh}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  />
                </div>

                {/* 內容 */}
                <div style={{
                  padding: '1.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      margin: 0,
                      flex: 1
                    }}>
                      {item.name_zh}
                    </h3>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      backgroundColor: '#fbbf24',
                      color: '#1f2937',
                      letterSpacing: '0.05em'
                    }}>
                      推薦
                    </span>
                  </div>
                  
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#9ca3af',
                    margin: '0 0 0.75rem 0',
                    lineHeight: 1.5
                  }}>
                    {item.name_en}
                  </p>

                  <p style={{
                    fontSize: '0.875rem',
                    color: '#d1d5db',
                    margin: '0 0 1rem 0',
                    lineHeight: 1.6
                  }}>
                    {item.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid #374151'
                  }}>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: 300,
                      color: '#fbbf24'
                    }}>
                      ${item.price === 0 ? '免費' : item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
