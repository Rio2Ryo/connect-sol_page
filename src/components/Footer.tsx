import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-[900px] w-[85%] mx-auto text-center">
        <div className="mb-4">
          <Link to="/privacy-policy#privacy-policy" className="hover:text-gray-300 mx-4">
            プライバシーポリシー
          </Link>
          <Link to="/privacy-policy#privacy-handling" className="hover:text-gray-300 mx-4">
            個人情報の取り扱いに関する方針
          </Link>
        </div>
        <div className="text-gray-400">
          © 2024 CONNECT SOL inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}