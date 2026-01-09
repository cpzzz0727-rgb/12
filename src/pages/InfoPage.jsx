function InfoPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* 頁面標題 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-wide">聯絡我們</h1>
          <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
        </div>

        {/* 品牌故事 */}
        <div className="space-y-8 text-gray-700 leading-relaxed mb-16">
          <p className="text-lg">
            用心的老闆是個在台灣過美國時間的人，因為老闆是真正美國人的朋友，所以對美式食物有說不出的愛。
          </p>
          <p className="text-lg">
            因為天母的宵夜選擇實在太少，在一個飢寒交迫的瞬間，腦袋突然迸出一個念頭：「來打個賭，賭上男人的生命跟榮譽，開一家深夜美式漢堡店吧！」
          </p>
        </div>

        {/* 品牌理念 */}
        <div className="bg-gray-50 p-8 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Burger O'clock 也是一個人生充電站，參與你人生的每一個時刻！<br />
            讓我們吃飽喝足後充電，一起為明天的人生加油！
          </p>
        </div>

        {/* 人生哲學 */}
        <div className="space-y-4 mb-16">
          <p className="text-sm text-gray-500 text-center">#什麼是人生</p>
          <p className="text-sm text-gray-500 text-center">#人生就是吃堡睡睡飽吃啊</p>
          <p className="text-sm text-gray-500 text-center">#在能吃飯的時候好好吃飯</p>
          <p className="text-sm text-gray-500 text-center">#在能睡覺的時候好好睡覺</p>
        </div>

        {/* 聯絡資訊 */}
        <div className="border-t border-gray-200 pt-12 space-y-6 text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Burger O'clock Taipei</h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <p className="font-medium mb-1">地址</p>
              <p>111台北市士林區中山北路七段36號</p>
              <p className="text-sm mt-1">1F, NO.36, Sec.7, Zhongshan N. Rd. Shilin Dist., Taipei City 111, Taiwan</p>
            </div>
            <div>
              <p className="font-medium mb-1">電話</p>
              <p>0900-777-093</p>
            </div>
            <div>
              <p className="font-medium mb-1">營業時間</p>
              <p>週一至週日 19:00 - 03:00</p>
              <p className="text-sm text-gray-500 mt-1">(宵夜場首選)</p>
            </div>
            {/* 社群連結 */}
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.facebook.com/burgeroclocktaipei/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook 粉專
              </a>
              
              <a 
                href="https://www.instagram.com/burger_oclock/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              
              <a 
                href="https://www.ubereats.com/store-browse-uuid/3775e491-a246-4430-a302-df86693ea25d?diningMode=DELIVERY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 10h24v4H0z"/>
                  <path d="M12 0L0 6v2h12V0zm0 24l12-6v-2H12v8z"/>
                </svg>
                Uber Eats
              </a>
            </div>
          </div>
          
          {/* 備註資訊 */}
          <div className="mt-12 pt-8 border-t border-gray-200 space-y-2">
            <p className="text-sm text-gray-600">低消 100 元</p>
            <p className="text-sm text-gray-600">無服務費</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPage
