import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Phone, MessageCircle, Mail, GraduationCap, Target, Shield } from 'lucide-react';

const Home = () => {
  const programs = [
    { name: 'B.Tech', description: 'Bachelor of Technology', icon: '💻' },
    { name: 'MBA', description: 'Master of Business Administration', icon: '📊' },
    { name: 'BBA', description: 'Bachelor of Business Administration', icon: '💼' },
    { name: 'MCA', description: 'Master of Computer Applications', icon: '🖥️' },
    { name: 'BA', description: 'Bachelor of Arts', icon: '🎨' },
    { name: 'MA', description: 'Master of Arts', icon: '📚' },
    { name: 'M.Sc', description: 'Master of Science', icon: '⚗️' },
    { name: 'B.Sc', description: 'Bachelor of Science', icon: '🔬' },
    { name: 'B.Com', description: 'Bachelor of Commerce', icon: '💰' }
  ];

  const handleEnquireNow = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Lead Generation',
        event_label: 'Enquire Now Hero'
      });
    }
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'WhatsApp Hero'
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
        event_label: 'Call Hero'
      });
    }
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact', { method: 'Phone' });
    }
    window.location.href = 'tel:+919546369339';
  };

  return (
    <>
      <Helmet>
        <title>Students Help Corner | Career & College Admission Guidance in India</title>
        <meta name="description" content="Students Help Corner provides hassle-free college admissions, BRCC loan guidance for Bihar students, low-budget student support, and career counseling across India, especially in NCR." />
        <meta name="keywords" content="college admission guidance, BRCC loan help, Bihar student loans, low-budget admission support, NCR college consultancy, career counseling India" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Students Help Corner | Career & College Admission Guidance in India" />
        <meta property="og:description" content="Students Help Corner provides hassle-free college admissions, BRCC loan guidance for Bihar students, low-budget student support, and career counseling across India, especially in NCR." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://studentshelpcorner.com" />
        <meta property="og:image" content="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why are we doing better?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide students a hassle-free admission process, ensuring complete solutions for their education and career."
                }
              },
              {
                "@type": "Question",
                "name": "How to contact us?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can mail or call us anytime for admission guidance or counseling support."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Guiding Your Education, <span className="text-blue-600">Securing Your Future</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Get hassle-free college admissions, BRCC loan guidance for Bihar students, 
                  and expert career counseling across India, especially in the NCR region.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    onClick={handleEnquireNow}
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Enquire Now
                  </Link>
                  <button
                    onClick={handleWhatsAppClick}
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </button>
                  <button
                    onClick={handleCallClick}
                    className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white text-lg font-semibold rounded-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg"
                  alt="Students studying together with educational guidance and counseling support"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Students Help Corner?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in making education accessible and affordable for every student
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">BRCC Loan Guidance</h3>
                <p className="text-gray-600">
                  Specialized assistance for Bihar students with BRCC education loan processes, 
                  making quality education financing accessible and affordable.
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Low-Budget Student Support</h3>
                <p className="text-gray-600">
                  Expert guidance to secure admissions in reputed colleges even with budget constraints. 
                  We believe quality education should be accessible to all.
                </p>
              </div>
              <div className="bg-orange-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Counseling & Comparisons</h3>
                <p className="text-gray-600">
                  Comprehensive career guidance with detailed college comparisons across India, 
                  especially in NCR region, helping you make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Popular Programs We Support
              </h2>
              <p className="text-xl text-gray-600">
                Expert admission guidance across all major courses and disciplines
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{program.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/programs"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-200">Students Helped</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">College Partnerships</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get expert guidance for college admissions, loan assistance, and career counseling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                onClick={handleEnquireNow}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Get Free Consultation
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white text-lg font-semibold rounded-lg hover:bg-green-800 transform hover:scale-105 transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;