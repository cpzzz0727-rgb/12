function InfoPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* 頁面標題 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-wide">About Us</h1>
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
          <h2 className="text-2xl font-light text-gray-900 mb-8">BURGER O'CLOCK</h2>
          <div className="space-y-3 text-gray-600">
            <p>台北市士林區中山北路七段36號</p>
            <p className="text-sm">1F, NO.36, Sec.7, Zhongshan N. Rd. Shilin Dist., Taipei City 111, Taiwan</p>
            <p className="pt-4">Mobile: 0900-777-093</p>
          </div>
          <div className="pt-6">
            <p className="text-sm text-gray-500">@burgeroclocktaipei</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPage
