import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Programs', href: '/programs' },
    { name: 'Colleges', href: '/top-colleges' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleWhatsAppClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'WhatsApp Header'
      });
    }
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact', { method: 'WhatsApp' });
    }
    window.open('https://wa.me/919546369339', '_blank');
  };

  const handleCallClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'Call Header'
      });
    }
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact', { method: 'Phone' });
    }
    window.location.href = 'tel:+919546369339';
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Student Help Corner</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleCallClick}
              className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium px-4 py-2 transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={handleCallClick}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;