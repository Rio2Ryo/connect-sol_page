export default function Consulting() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
            alt="営業コンサルティング" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">営業コンサルティング</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1200px] w-[85%] mx-auto py-16">
        <div className="bg-white shadow-lg rounded-xl p-8 md:p-12">
          {/* Features Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">特長</h2>
            <h3 className="text-xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2">愛される商材を生み出す営業組織づくりをサポート</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature Card 1 */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80" 
                  alt="営業コンサルティングサービス" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Feature Card 2 */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
                  alt="営業コンサルティングサービス" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              当社は、インハウス型営業コンサルティングを提供し、企業の営業組織づくりを支援します。お客様の商材や製品に対し、営業担当者が愛着を持ち、大切に感じながら効果的に販売できる体制を構築することを目指します。また、個々の営業担当者としてのスキル向上はもちろん、組織全体の営業力を強化するための具体的な施策を提案し、実現までサポートいたします。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}