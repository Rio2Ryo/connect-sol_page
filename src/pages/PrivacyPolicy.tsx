import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-[900px] w-[85%] mx-auto py-16">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* 個人情報の取り扱いに関する方針 Section */}
          <div className="p-8 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              個人情報の取り扱いに関する方針
            </h1>
            <p className="text-gray-700 leading-relaxed">
              当社は、お客様からお預かりする個人情報を厳格に管理し、適切かつ安全に取り扱うことを重要な責務と考えています。当社の業務において取得する個人情報は、その利用目的を明確にし、適法かつ公正な手段により収集いたします。また、法令を遵守するとともに、情報漏洩や不正アクセスを防ぐための管理体制を整備し、個人情報の保護に努めます。
            </p>
          </div>

          {/* プライバシーポリシー Section */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              プライバシーポリシー
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  1. 個人情報の収集と利用について
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  当社は、お客様の個人情報を適切に収集し、その利用目的を明確に定めた上で、その範囲内でのみ利用します。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  2. 個人情報の管理について
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  取得した個人情報は、厳格なセキュリティ対策を講じて適切に管理し、漏洩・紛失・改ざん・不正利用を防止します。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  3. 第三者提供について
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  お客様の個人情報を、事前の同意なく第三者に提供することはありません。ただし、法令に基づく場合や、業務委託先に必要な範囲で提供する場合を除きます。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  4. 法令遵守と見直し
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  当社は、個人情報保護に関する法令およびその他の規範を遵守するとともに、必要に応じてプライバシーポリシーを見直し、継続的な改善に努めます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}