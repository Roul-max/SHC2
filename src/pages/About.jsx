import { Helmet } from 'react-helmet-async';
import { Target, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Students Help Corner - Educational Consultancy NCR | Admission Guidance Bihar</title>
        <meta name="description" content="Learn about Students Help Corner's mission in providing educational consultancy in NCR, admission guidance in Bihar, and affordable college admission services across India." />
        <meta name="keywords" content="educational consultancy NCR, admission guidance Bihar, affordable college admissions, students help corner about" />
        
        <meta property="og:title" content="About Students Help Corner - Educational Consultancy NCR" />
        <meta property="og:description" content="Learn about our mission in providing educational consultancy in NCR and admission guidance across India." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Students Help Corner</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering students with comprehensive educational guidance and making quality education accessible to all
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At Students Help Corner, our mission is to help students make informed career decisions and 
                  secure admissions in quality institutions with comprehensive loan and counseling support.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We specialize in providing educational consultancy services across the NCR region and beyond, 
                  with particular focus on admission guidance for Bihar students and low-budget student support.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our goal is to bridge the gap between aspiring students and quality education through 
                  personalized counseling, financial guidance, and comprehensive admission support.
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg"
                  alt="Educational consultancy team providing career guidance and counseling to students"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide our educational consultancy services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Striving for excellence in every aspect of our educational consultancy services
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compassion</h3>
                <p className="text-gray-600">
                  Understanding each student's unique needs and providing personalized support
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  Maintaining transparency and honesty in all our educational guidance services
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600">
                  Building a supportive community for students across India, especially in NCR
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Students Choose Us
              </h2>
              <p className="text-xl text-gray-600">
                What makes us the preferred educational consultancy in NCR and beyond
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Unique Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive BRCC Loan Guidance</h4>
                      <p className="text-gray-600">Specialized support for Bihar students navigating education loan processes</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Low-Budget Student Solutions</h4>
                      <p className="text-gray-600">Making quality education accessible regardless of financial constraints</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-orange-600 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">NCR Region Expertise</h4>
                      <p className="text-gray-600">Deep knowledge of colleges and admission processes in the National Capital Region</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-purple-600 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personalized Career Counseling</h4>
                      <p className="text-gray-600">Individual guidance tailored to each student's aspirations and circumstances</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg"
                  alt="Career counseling session with educational consultant providing admission guidance"
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert Educational Consultants
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                Our team of experienced educational consultants is dedicated to providing the best 
                admission guidance and career counseling services across India.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-blue-200">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-blue-200">Education Experts</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="text-blue-200">Successful Placements</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;