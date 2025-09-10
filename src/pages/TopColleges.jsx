import { Helmet } from 'react-helmet-async';
import { Star, MapPin, Users, Award } from 'lucide-react';

const TopColleges = () => {
  const colleges = [
    {
      name: 'Amity University',
      location: 'Noida, NCR',
      image: 'https://www.amity.edu/backoffice/uploads/HomeBanner/1fblg_noida-cam-img.jpg',
      rating: 4.5,
      programs: ['BBA', 'MBA', 'BCA', 'MCA', 'B.Tech'],
      highlights: ['Industry Partnerships', 'Modern Infrastructure', 'International Exposure'],
      fees: '₹2-5 Lakhs/Year'
    },
    {
      name: 'Manipal University',
      location: 'Karnataka & NCR',
      image: 'https://websiteupload.s3.ap-south-1.amazonaws.com/2024/05/manipal-uni.jpg',
      rating: 4.4,
      programs: ['Engineering', 'Medical', 'Management', 'Arts'],
      highlights: ['Research Excellence', 'Global Recognition', 'Alumni Network'],
      fees: '₹3-8 Lakhs/Year'
    },
    {
      name: 'Lovely Professional University (LPU)',
      location: 'Punjab',
      image: 'https://happenings.lpu.in/wp-content/uploads/2024/09/Lovely-Professional-University-LPU-campus-1-scaled.jpg',
      rating: 4.3,
      programs: ['All Streams', 'Distance Learning', 'Professional Courses'],
      highlights: ['Largest Campus', 'Industry Interface', 'Placement Support'],
      fees: '₹1.5-4 Lakhs/Year'
    },
    {
      name: 'Jain University',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
      rating: 4.2,
      programs: ['Management', 'Engineering', 'Sciences', 'Commerce'],
      highlights: ['Innovation Hub', 'Startup Incubation', 'Industry Connect'],
      fees: '₹2-6 Lakhs/Year'
    },
    {
      name: 'University of Petroleum and Energy Studies (UPES)',
      location: 'Dehradun',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg',
      rating: 4.1,
      programs: ['Engineering', 'Management', 'Law', 'Design'],
      highlights: ['Industry Focused', 'Corporate Partnerships', 'Specialized Programs'],
      fees: '₹3-7 Lakhs/Year'
    },
    {
      name: 'SRM Institute of Science and Technology',
      location: 'Chennai & NCR',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
      rating: 4.0,
      programs: ['Engineering', 'Medical', 'Management', 'Sciences'],
      highlights: ['Research Focus', 'International Collaborations', 'Innovation'],
      fees: '₹2.5-6 Lakhs/Year'
    }
  ];

  const whyChooseSection = [
    {
      icon: Award,
      title: 'NAAC Accredited',
      description: 'All recommended colleges have proper accreditation and recognition'
    },
    {
      icon: Users,
      title: 'Strong Alumni Network',
      description: 'Extensive alumni networks providing career guidance and opportunities'
    },
    {
      icon: MapPin,
      title: 'Strategic Locations',
      description: 'Located in major cities and NCR region for better exposure'
    },
    {
      icon: Star,
      title: 'Industry Partnerships',
      description: 'Strong ties with industries for internships and placements'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Top Colleges in India - Amity, Manipal, LPU, Jain, UPES | NCR College Admissions</title>
        <meta name="description" content="Discover top private universities in India including Amity, Manipal, LPU, Jain, UPES, SRM. Get expert NCR college admissions consultancy and guidance for admission in best colleges." />
        <meta name="keywords" content="NCR college admissions consultancy, top private universities India, Amity University admission, Manipal University, LPU admission, Jain University, UPES college" />
        
        <meta property="og:title" content="Top Colleges in India - NCR College Admissions Consultancy" />
        <meta property="og:description" content="Expert guidance for admissions in top private universities across India with comprehensive college information and support." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Top <span className="text-blue-600">Colleges & Universities</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the best educational institutions across India with our NCR college admissions consultancy expertise
              </p>
            </div>
          </div>
        </section>

        {/* Colleges Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {colleges.map((college, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={college.image}
                    alt={`${college.name} campus - top private university in India for quality education and career opportunities`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{college.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-semibold text-gray-900">{college.rating}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Popular Programs:</h4>
                      <div className="flex flex-wrap gap-2">
                        {college.programs.map((program, programIndex) => (
                          <span
                            key={programIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {college.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-sm text-gray-600">Fee Range: </span>
                        <span className="font-semibold text-gray-900">{college.fees}</span>
                      </div>
                      <a
                        href="/contact"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
                      >
                        Get Admission Info
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose These Colleges */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose These Top Universities?
              </h2>
              <p className="text-xl text-gray-600">
                Key factors that make these institutions stand out in the educational landscape
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseSection.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* College Selection Process */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our College Selection Process
              </h2>
              <p className="text-xl text-blue-100">
                How we help you choose the right college for your career goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-blue-100">Evaluate your academic background, interests, and career goals</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Research</h3>
                <p className="text-blue-100">Detailed analysis of colleges matching your preferences and budget</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Comparison</h3>
                <p className="text-blue-100">Compare fees, placements, faculty, and infrastructure</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Decision</h3>
                <p className="text-blue-100">Final recommendation based on comprehensive analysis</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect College?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get personalized college recommendations and admission guidance from our NCR consultancy experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Get College Recommendations
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white text-lg font-semibold rounded-lg hover:bg-green-800 transform hover:scale-105 transition-all duration-200"
              >
                Speak with Expert
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TopColleges;