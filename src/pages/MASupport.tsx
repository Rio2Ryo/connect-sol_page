export default function MASupport() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
            alt="M&A支援" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">M&A支援</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1200px] w-[85%] mx-auto py-16">
        <div className="bg-white shadow-lg rounded-xl p-8 md:p-12">
          {/* Features Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">特長</h2>
            <h3 className="text-xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2">経験と信頼でつなぐ、スムーズなM&A支援</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature Card 1 */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80" 
                  alt="M&A支援サービス" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Feature Card 2 */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                  alt="M&A支援サービス" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              当社は、豊富な経験と実績を活かしたM&A支援を提供しています。これまでに50件以上の取引実績があり、小規模な案件から数千万円、1億円規模の案件まで幅広く対応可能です。小規模案件ではブログやYouTubeなどのメディアの譲渡、大規模案件では事業や店舗の売却支援も行っています。

当社の強みは、売却先のリストをあらかじめ整備し、最適な相手とのマッチングを迅速に実現できる点です。売り手と買い手の双方にとって信頼性の高い選択肢を提供することで、スムーズな取引をサポートします。この双方向のアプローチにより、売却したい方、購入を検討される方双方のニーズに応え、円滑なM&Aを可能にします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}