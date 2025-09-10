import { Helmet } from 'react-helmet-async';
import { Users, GraduationCap, CreditCard, DollarSign, Search, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Career Counseling',
      description: 'Expert guidance to help students identify their strengths, interests, and career paths with personalized counseling sessions.',
      features: ['One-on-one counseling', 'Career assessment tests', 'Industry insights', 'Skill development guidance']
    },
    {
      icon: GraduationCap,
      title: 'Admission Guidance in NCR & India',
      description: 'Comprehensive admission support for colleges and universities across NCR and India with complete application assistance.',
      features: ['College selection', 'Application support', 'Document preparation', 'Interview preparation']
    },
    {
      icon: CreditCard,
      title: 'BRCC Loan Assistance (Bihar Students)',
      description: 'Specialized support for Bihar students to navigate the BRCC education loan process with complete documentation help.',
      features: ['Loan application guidance', 'Document verification', 'Process tracking', 'Financial planning']
    },
    {
      icon: DollarSign,
      title: 'Low-Budget Student Support',
      description: 'Dedicated services to help students with financial constraints secure admissions in quality institutions.',
      features: ['Scholarship guidance', 'Fee negotiation', 'Budget planning', 'Financial aid application']
    },
    {
      icon: Search,
      title: 'College Enquiry & Comparison',
      description: 'Detailed research and comparison of colleges to help students make informed decisions about their education.',
      features: ['College research', 'Fee comparison', 'Placement statistics', 'Faculty analysis']
    },
    {
      icon: Award,
      title: 'Course Selection Guidance',
      description: 'Expert advice on choosing the right courses based on career goals, market demand, and personal interests.',
      features: ['Market analysis', 'Course curriculum review', 'Future prospects', 'Skill matching']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Educational Services - Career Counseling, BRCC Loan Help, NCR Admission Guidance</title>
        <meta name="description" content="Comprehensive educational services including career counseling, admission guidance in NCR & India, BRCC loan assistance for Bihar students, and low-budget student support." />
        <meta name="keywords" content="career counseling, admission guidance NCR, BRCC loan assistance, Bihar student loans, low-budget student support, college enquiry" />
        
        <meta property="og:title" content="Educational Services - Career Counseling & Admission Guidance" />
        <meta property="og:description" content="Professional educational services for students across India including career counseling, admission guidance, and financial support." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Educational Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive educational support services designed to help students achieve their academic and career goals
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Process
              </h2>
              <p className="text-xl text-gray-600">
                A systematic approach to ensure the best outcomes for our students
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                <p className="text-gray-600">Understanding your goals, preferences, and requirements</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning & Strategy</h3>
                <p className="text-gray-600">Developing a personalized plan based on your needs</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">Executing the plan with continuous guidance and support</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Success & Follow-up</h3>
                <p className="text-gray-600">Ensuring successful outcomes and providing ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Specializations
              </h2>
              <p className="text-xl text-blue-100">
                Areas where we excel in providing educational guidance and support
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">NCR Region Expertise</h3>
                <p className="text-blue-100">
                  Deep knowledge of colleges, admission processes, and requirements in the National Capital Region
                </p>
              </div>
              <div className="bg-blue-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Bihar Student Support</h3>
                <p className="text-blue-100">
                  Specialized services for Bihar students including BRCC loan guidance and cultural understanding
                </p>
              </div>
              <div className="bg-blue-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Budget-Friendly Solutions</h3>
                <p className="text-blue-100">
                  Expert guidance for students with financial constraints to access quality education
                </p>
              </div>
              <div className="bg-blue-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Management Courses</h3>
                <p className="text-blue-100">
                  Comprehensive guidance for BBA, MBA, and other management program admissions
                </p>
              </div>
              <div className="bg-blue-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Technology Programs</h3>
                <p className="text-blue-100">
                  Expert support for BCA, MCA, B.Tech, and other technology course admissions
                </p>
              </div>
              <div className="bg-blue-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Medical & Law Fields</h3>
                <p className="text-blue-100">
                  Specialized guidance for medical, dental, pharmacy, and law program admissions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Contact us today for personalized educational guidance and support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white text-lg font-semibold rounded-lg hover:bg-green-800 transform hover:scale-105 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;