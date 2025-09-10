import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Why are we doing better?",
      answer: "We provide students a hassle-free admission process, ensuring complete solutions for their education and career. Our personalized approach, extensive college network, and dedicated support team make us stand out in the educational consultancy field."
    },
    {
      question: "How to contact us?",
      answer: "You can mail or call us anytime for admission guidance or counseling support. We are available through phone (+91 98765 43210), WhatsApp, email (info@studentshelpcorner.com), and our contact form. Our team responds within 24 hours."
    },
    {
      question: "To which area colleges admissions are we helping out with?",
      answer: "We mainly provide admission services in the NCR region and are expanding to other areas of India. Our primary focus areas include Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad, with growing services across major Indian cities."
    },
    {
      question: "In what course admissions are we helping the students?",
      answer: "We guide admissions in Management (BBA, MBA), Technology (BCA, MCA, B.Tech), Law (LLB, LLM), Pharma (B.Pharma, M.Pharma), Diploma courses, and Medical courses (MBBS, BDS, Nursing). We cover all major undergraduate and postgraduate programs."
    },
    {
      question: "Do you charge for your counseling services?",
      answer: "Our counseling is transparent and affordable. Initial consultation and career guidance sessions are often complimentary. For detailed admission processing and documentation support, we have nominal charges. Contact us for specific pricing details."
    },
    {
      question: "How do you help Bihar students with BRCC loans?",
      answer: "We assist Bihar students with the entire BRCC (Bihar Rural Credit Corporation) education loan process, making financing easier. This includes application guidance, documentation support, eligibility assessment, and follow-up with financial institutions."
    },
    {
      question: "Can low-budget students really get into good colleges?",
      answer: "Yes! We specialize in securing seats for low-budget students in reputed colleges. Through scholarships, merit-based admissions, management quotas, and financial aid guidance, we ensure quality education remains accessible regardless of financial constraints."
    },
    {
      question: "Do you guide for colleges outside Bihar?",
      answer: "Absolutely. We provide career counseling and admissions support across India. While we have specialized services for Bihar students, our network covers colleges throughout India, with particular expertise in NCR, Karnataka, Punjab, and other major educational hubs."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | Students Help Corner Educational Consultancy</title>
        <meta name="description" content="Get answers to frequently asked questions about our educational consultancy services, BRCC loan guidance, admission process, and career counseling support." />
        <meta name="keywords" content="educational consultancy FAQ, BRCC loan help, admission guidance questions, career counseling support, NCR college admissions" />
        
        <meta property="og:title" content="FAQ - Educational Consultancy Questions Answered" />
        <meta property="og:description" content="Find answers to common questions about our educational services, admission guidance, and student support programs." />
        
        {/* FAQ Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-blue-600">Questions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our educational consultancy services, admission guidance, and student support
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
                <p className="text-gray-600 mb-6">
                  Our counseling team is always ready to help you with personalized guidance and support.
                </p>
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
                >
                  Contact Us
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Support</h3>
                <p className="text-gray-600 mb-6">
                  Get instant answers to your questions through our WhatsApp support service.
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-block"
                >
                  Chat Now
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule a Call</h3>
                <p className="text-gray-600 mb-6">
                  Book a free consultation call with our expert counselors for detailed guidance.
                </p>
                <a
                  href="tel:+919876543210"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Thousands of Students
              </h2>
              <p className="text-xl text-blue-100">
                Our commitment to excellence in educational consultancy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-200">Students Guided</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">College Partners</div>
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
      </div>
    </>
  );
};

export default FAQ;