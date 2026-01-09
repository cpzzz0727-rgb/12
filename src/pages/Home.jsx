function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      paddingTop: '64px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 漢堡背景圖片 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80)',
        backgroundAttachment: 'fixed',
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
      
      {/* 內容區域 */}
      <div style={{ 
        position: 'relative',
        zIndex: 2,
        height: 'calc(100vh - 64px)', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '1rem' 
      }}>
        {/* 品牌大圖區域 */}
        <div style={{ textAlign: 'center' }}>
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
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
          }}>
            在 Burger O'clock，我們相信每一口漢堡都應該承載著滿滿的靈魂。
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
