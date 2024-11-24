import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/conect-sol_logo.png"
              alt="コネクトソル"
              className="h-32"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-black hover:text-gray-600 font-medium transition-colors"
            >
              ホーム
            </Link>
            <Link
              to="/sales-agency"
              className="text-black hover:text-gray-600 font-medium transition-colors"
            >
              営業代行
            </Link>
            <Link
              to="/consulting"
              className="text-black hover:text-gray-600 font-medium transition-colors"
            >
              営業コンサルティング
            </Link>
            <Link
              to="/ma-support"
              className="text-black hover:text-gray-600 font-medium transition-colors"
            >
              M&A支援
            </Link>
            <Link
              to="/recruitment"
              className="text-black hover:text-gray-600 font-medium transition-colors"
            >
              採用情報
            </Link>
            <a
              href="/#contact"
              className="text-black hover:text-gray-600 font-medium transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            ホーム
          </Link>
          <Link
            to="/sales-agency"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            営業代行
          </Link>
          <Link
            to="/consulting"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            営業コンサルティング
          </Link>
          <Link
            to="/ma-support"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            M&A支援
          </Link>
          <Link
            to="/recruitment"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            採用情報
          </Link>
          <a
            href="/#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </nav>
  );
}
