import React from 'react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import AchievementCard from '../components/AchievementCard';

export default function Home() {
  const achievements = [
    {
      title: 'ウェアラブルデバイス',
      image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80'
    },
    {
      title: '化粧品',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80'
    },
    {
      title: '健康食品',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80'
    },
    {
      title: 'YouTube',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80'
    },
    {
      title: 'ブログ',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80'
    },
    {
      title: '店舗',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80'
    },
    {
      title: '会社',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
    },
    {
      title: 'タッチ名刺',
      image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
            alt="コネクトソル" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xl text-white/90 mb-8">
            つながりが生む奇跡、輝き続ける未来。
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            お問い合わせ
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="relative w-full py-24">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
            alt="企業理念"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-[900px] w-[85%] mx-auto">
          <div className="bg-blue-900/90 p-12 text-white max-w-[600px]">
            <h2 className="text-3xl font-bold mb-8">太陽のように明るく、人と人を繋ぐ</h2>
            <div className="space-y-6">
              <p>私たちは、独自のアプローチと革新的なソリューションを活用してクライアントのニーズに応え、ビジネスの成長をサポートしています。</p>
              <p>私たちのサービスには、ビジネスコンサルティング、デジタルマーケティング、ITソリューションなどが含まれます。例えば、ビジネスコンサルティングでは、クライアントの課題や目標を分析し、最適な戦略を策定します。デジタルマーケティングでは、オンラインプレゼンスの構築やSNS戦略の立案など、顧客とのつながりを強化するための施策を提供しています。</p>
              <p>また、私たちのITソリューションは、クラウドサービス、セキュリティ対策、カスタムアプリケーション開発など、多岐にわたります。これらのサービスを通じて、私たちはお客様のビジネスを効率化し、競争力を高めるための手助けをしています。</p>
              <p>私たちは常にお客様の成功を第一に考え、太陽のように明るさで、新たな可能性を切り拓くパートナーとしてお客様のビジネスをサポートしています。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-[900px] w-[85%] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">事業内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="営業代行"
              description="効率的な営業活動を代行し、成果を最大化します"
              link="/sales-agency"
              image="https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&q=80"
            />
            <ServiceCard
              title="営業コンサルティング"
              description="戦略的なアプローチで営業力を強化します"
              link="/consulting"
              image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            />
            <ServiceCard
              title="M&A支援"
              description="企業の成長戦略をM&Aでサポートします"
              link="/ma-support"
              image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white py-24">
        <div className="max-w-[900px] w-[85%] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">実績紹介</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {achievements.slice(0, 4).map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                image={achievement.image}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.slice(4).map((achievement, index) => (
              <AchievementCard
                key={index + 4}
                title={achievement.title}
                image={achievement.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-24" id="contact">
        <div className="max-w-[900px] w-[85%] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr>
                  <th className="w-1/3 bg-orange-50 p-4 text-left border-b">住所</th>
                  <td className="p-4 border-b">東京都千代田区神田錦町3</td>
                </tr>
                <tr>
                  <th className="w-1/3 bg-orange-50 p-4 text-left border-b">電話番号</th>
                  <td className="p-4 border-b">03-1234-5678</td>
                </tr>
                <tr>
                  <th className="w-1/3 bg-orange-50 p-4 text-left border-b">メール</th>
                  <td className="p-4 border-b">info@connectsol.co.jp</td>
                </tr>
                <tr>
                  <th className="w-1/3 bg-orange-50 p-4 text-left">営業時間</th>
                  <td className="p-4">平日 9:00-18:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
