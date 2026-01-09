function Home() {
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
              margin: 0
            }}>
              📍 台北市士林區中山北路七段36號
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
