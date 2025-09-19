import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Video, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    email: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track form submission
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        event_category: 'Lead Generation',
        event_label: 'Contact Form'
      });
    }
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry! We will contact you within 24 hours.');
      setFormData({
        name: '',
        course: '',
        email: '',
        location: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'WhatsApp Contact Page'
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
        event_label: 'Call Contact Page'
      });
    }
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact', { method: 'Phone' });
    }
    window.location.href = 'tel:+919546369339';
  };

  const courses = [
    'BBA', 'MBA', 'BA', 'MA', 'BCA', 'MCA', 'B.Sc', 'M.Sc', 'B.Com', 'B.Tech', 'M.Tech',
    'LLB', 'LLM', 'B.Pharma', 'M.Pharma', 'MBBS', 'BDS', 'Nursing', 'Diploma', 'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Students Help Corner - Educational Consultancy & Career Guidance Support</title>
        <meta name="description" content="Contact Students Help Corner for career guidance, college admission support, BRCC loan assistance, and educational consultancy. Chat, call, or video consultation available." />
        <meta name="keywords" content="contact educational consultant, career guidance support, college admission help, BRCC loan assistance, educational consultancy contact" />
        
        <meta property="og:title" content="Contact Students Help Corner - Educational Consultancy" />
        <meta property="og:description" content="Get in touch with our expert educational consultants for personalized career guidance and admission support." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in <span className="text-blue-600">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your educational journey? Contact our expert counselors for personalized guidance and support
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-green-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chat Support</h3>
                <p className="text-gray-600 mb-6">
                  Get instant responses to your queries through WhatsApp chat support
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  Start Chat
                </button>
              </div>

              <div className="text-center p-8 bg-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Call Support</h3>
                <p className="text-gray-600 mb-6">
                  Speak directly with our counselors for detailed guidance and support
                </p>
                <button
                  onClick={handleCallClick}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Call Now
                </button>
              </div>

              <div className="text-center p-8 bg-orange-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Video Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a video call for comprehensive career counseling sessions
                </p>
                <button
                  onClick={handleCallClick}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                >
                  Schedule Call
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interested *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
  <label
    htmlFor="phone"
    className="block text-sm font-medium text-gray-700 mb-2"
  >
    Phone Number *
  </label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
    placeholder="Enter your phone number"
  />
</div>


                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your city/state"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition-colors duration-200"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    <strong>Note:</strong> Your personal information is secure with us.
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+91 9546369339</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">studentshelpcorner0@Gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Office</p>
                        <p className="text-gray-600">Greater Noida, UP, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Social Media</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                    >
                      f
                    </a>
                    <a
                      href="#"
                      className="bg-blue-700 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                    >
                      in
                    </a>
                    <a
                      href="#"
                      className="bg-pink-600 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
                    >
                      ig
                    </a>
                  </div>
                </div>

                <div className="bg-green-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 7:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 10:00 AM - 5:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> 11:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Students Trust Us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-blue-200">Students Helped</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-200">College Partners</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
