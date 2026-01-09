function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1f2937', paddingTop: '64px' }}>
      <div style={{ height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        {/* 品牌大圖區域 */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 300,
            color: '#ffffff',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            BURGER O'CLOCK
          </h1>
          <div style={{ width: '128px', height: '4px', backgroundColor: '#fbbf24', margin: '0 auto 2rem' }}></div>
          <p style={{ 
            fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
            color: '#d1d5db',
            fontWeight: 300,
            lineHeight: 1.6
          }}>
            在 Burger O'clock，我們相信每一口漢堡都應該承載著滿滿的靈魂。
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
