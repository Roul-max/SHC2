import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Student Help Corner</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing hassle-free college admissions, BRCC loan guidance for Bihar students, 
              low-budget student support, and career counseling across India, especially in NCR.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BgesH6bW5/?mibextid=wwXIfr" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/studenthelpcorner__?igsh=YWNpdHprcDNqZjJ6&utm_source=qr" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors duration-200">Programs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Refer & Earn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+91 9546369339</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">studenthelpcorner0@Gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-300">Greater Noida, UP, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Your personal information is secure with us.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> The information provided on Students Help Corner is intended to offer unbiased, accurate, 
              and comparative guidance on institutions and educational support. While every effort is made to keep the information 
              updated, we make no representations or warranties regarding its completeness or accuracy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;