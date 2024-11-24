export default function SalesAgency() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&q=80" 
            alt="営業代行" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">営業代行</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1200px] w-[85%] mx-auto py-16">
        <div className="bg-white shadow-lg rounded-xl p-8 md:p-12">
          {/* Features Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">特長</h2>
            <h3 className="text-xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2">本当に優れたものだけを</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature Card 1 */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                  alt="営業代行サービス" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Feature Card 2 */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&q=80" 
                  alt="営業代行サービス" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              当社は営業代行サービスを提供しています。取り扱う商材は、私たち自身が実際に使用し、深く理解した上で「本当に優れたもの」と確信したものだけです。さらに、営業代行を担うチームは、対象となる商材を自ら体験し、その魅力を十分に理解しているメンバーで構成されています。これにより、クライアントの商品やサービスの価値を的確に伝え、信頼性の高い営業活動を実現します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}