import React, { useState } from 'react';

export default function Recruitment() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form) as any).toString()
    })
      .then(() => {
        alert('応募が完了しました。');
        form.reset();
        setFormData({ name: '', gender: '', age: '', message: '' });
      })
      .catch((error) => alert('送信に失敗しました。もう一度お試しください。'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-[900px] w-[85%] mx-auto py-16">
        <h1 className="text-3xl font-bold text-center mb-4">採用応募フォーム</h1>
        <p className="text-center mb-12">
          オープンポジションで採用募集しております。<br />
          お気軽に下記フォームからご応募ください。
        </p>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <form 
            name="recruitment"
            method="POST"
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
            netlify
          >
            <input type="hidden" name="form-name" value="recruitment" />
            <div className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                性別 <span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">選択してください</option>
                <option value="male">男性</option>
                <option value="female">女性</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                年齢 <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="age"
                name="age"
                required
                min="18"
                max="100"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                応募メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}