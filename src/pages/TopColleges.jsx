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
    },
    {
      name: 'Noida International College',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwss67YOD4E9Bb1zfaP0JHMurIzE2Reu8WfQ&s',
      rating: 4.3,
      programs: ['All Streams', 'Distance Learning', 'Professional Courses'],
      highlights: ['Largest Campus', 'Industry Interface', 'Placement Support'],
    },
    {
      name: 'IIMT Group of College',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnW9g5TVhdcp8m2S9g7WwBbkxvFOXnkYDwQ&s',
      rating: 4.2,
      programs: ['Management', 'Engineering', 'Sciences', 'Commerce'],
      highlights: ['Innovation Hub', 'Startup Incubation', 'Industry Connect'],
    },
    {
      name: 'IIMT University',
      location: 'Meerut',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSanRD7eGrQ1ssrjj253cMZI4aYMI3Qc47evoe590e7Xw&s=10',
      rating: 4.2,
      programs: ['Management', 'Engineering', 'Sciences', 'Commerce'],
      highlights: ['Innovation Hub', 'Startup Incubation', 'Industry Connect'],
    },
    {
      name: 'GL Bajaj Institute of Technology & Management',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8cbMBFF4tH-S4qyFo2Vi7e3u1gCAx2YVqw&s',
      rating: 4.1,
      programs: ['Engineering', 'Management', 'Law', 'Design'],
      highlights: ['Industry Focused', 'Corporate Partnerships', 'Specialized Programs'],
    },
    {
      name: 'Galgotias University',
      location: 'Greater Noida, NCR',
      image: 'https://websiteupload.s3.ap-south-1.amazonaws.com/2024/05/galgotias-university-infrastructure-highlights-that-make-it-a-university-of-choice-for-students.jpg',
      rating: 4.0,
      programs: ['Engineering', 'Medical', 'Management', 'Sciences'],
      highlights: ['Research Focus', 'International Collaborations', 'Innovation'],
    },
    {
      name: 'Galgotias College of Engineering',
      location: 'Greater Noida, NCR',
      image: 'https://cdn.npfs.co/uploads/college/image/5f00829984e0c947250279_12.png',
      rating: 4.5,
      programs: ['BBA', 'MBA', 'BCA', 'MCA', 'B.Tech'],
      highlights: ['Industry Partnerships', 'Modern Infrastructure', 'International Exposure'],
    },
    {
      name: 'NIET',
      location: 'Greater Noida, NCR',
      image: 'https://images.shiksha.com/mediadata/images/1579768182phpGpR05q.jpeg',
      rating: 4.4,
      programs: ['Engineering', 'Medical', 'Management', 'Arts'],
      highlights: ['Research Excellence', 'Global Recognition', 'Alumni Network'],
    },
    {
      name: 'GNIOT',
      location: 'Greater Noida, NCR',
      image: 'https://cipher.tagoreeducons.com/uploaded_images/42058GNIOT.jpg',
      rating: 4.3,
      programs: ['All Streams', 'Distance Learning', 'Professional Courses'],
      highlights: ['Largest Campus', 'Industry Interface', 'Placement Support'],
    },
    {
      name: 'GN Group of Institutions',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAIIBzxEO1-ztwlyJAjsxbEbutSgyO5T81Q&s',
      rating: 4.2,
      programs: ['Management', 'Engineering', 'Sciences', 'Commerce'],
      highlights: ['Innovation Hub', 'Startup Incubation', 'Industry Connect'],
    },
    {
      name: 'ITS',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlNNrK5mAt9clcDt66aP7N3PDLvbdw9Z0baN9fIUphQ&s=10',
      rating: 4.1,
      programs: ['Engineering', 'Management', 'Law', 'Design'],
      highlights: ['Industry Focused', 'Corporate Partnerships', 'Specialized Programs'],
    },
    {
      name: 'United',
      location: 'Greater Noida, NCR',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
      rating: 4.0,
      programs: ['Engineering', 'Medical', 'Management', 'Sciences'],
      highlights: ['Research Focus', 'International Collaborations', 'Innovation'],
    },
    {
      name: 'Innovative',
      location: 'Greater Noida, NCR',
      image: 'https://www.amity.edu/backoffice/uploads/HomeBanner/1fblg_noida-cam-img.jpg',
      rating: 4.5,
      programs: ['BBA', 'MBA', 'BCA', 'MCA', 'B.Tech'],
      highlights: ['Industry Partnerships', 'Modern Infrastructure', 'International Exposure'],
    },
    {
      name: 'KCC',
      location: 'Greater Noida, NCR',
      image: 'https://websiteupload.s3.ap-south-1.amazonaws.com/2024/05/manipal-uni.jpg',
      rating: 4.4,
      programs: ['Engineering', 'Medical', 'Management', 'Arts'],
      highlights: ['Research Excellence', 'Global Recognition', 'Alumni Network'],
    },
    {
      name: 'IILM',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vSJCXhKvXeIt4BIDJnhfKfGZNp_UXY1Nm5zEkFO3Yg&s=10',
      rating: 4.3,
      programs: ['All Streams', 'Distance Learning', 'Professional Courses'],
      highlights: ['Largest Campus', 'Industry Interface', 'Placement Support'],
    },
    {
      name: 'Lloyd ',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiWm5YrDptMm74imrLGA2r68qOSsEqULT0g&s',
      rating: 4.2,
      programs: ['Management', 'Engineering', 'Sciences', 'Commerce'],
      highlights: ['Innovation Hub', 'Startup Incubation', 'Industry Connect'],
    },
    {
      name: 'I Business Institute',
      location: 'Delhi NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemGH0w8_g2esmVZFqGb5eKN1dfr9A5jTYVw&s',
      rating: 4.1,
      programs: ['Engineering', 'Management', 'Law', 'Design'],
      highlights: ['Industry Focused', 'Corporate Partnerships', 'Specialized Programs'],
    },
    {
      name: 'Dronacharya',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlWJHilNTVqZ10Q7mE07fzsfz4GOC0jmP7A&s',
      rating: 4.0,
      programs: ['Engineering', 'Medical', 'Management', 'Sciences'],
      highlights: ['Research Focus', 'International Collaborations', 'Innovation'],
    },
    {
      name: 'Sharda University',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gfrhbEYjBeV4bIL6tcrwt5IF9-D5YTwPRqOuFOavbA&s=10',
      rating: 4.5,
      programs: ['BBA', 'MBA', 'BCA', 'MCA', 'B.Tech'],
      highlights: ['Industry Partnerships', 'Modern Infrastructure', 'International Exposure'],
    },
    {
      name: 'Ishan Institute of Law',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYmQEdgMPQXyiImFEYCXc1NcO0O_FBQ3hMw&s',
      rating: 4.4,
      programs: ['Engineering', 'Medical', 'Management', 'Arts'],
      highlights: ['Research Excellence', 'Global Recognition', 'Alumni Network'],
    },
    {
      name: 'Kailash Institute of Nursing',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDW9lx6rCLe15BcDlym4wXOBXVKfCM455Qw&s',
      rating: 4.3,
      programs: ['All Streams', 'Distance Learning', 'Professional Courses'],
      highlights: ['Largest Campus', 'Industry Interface', 'Placement Support'],
    },
    {
      name: 'HIMT',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7twbBNfVqbjwwOnVUcy0WfeHZR-rUDJ8gfQ&s',
      rating: 4.2,
      programs: ['Management', 'Engineering', 'Sciences', 'Commerce'],
      highlights: ['Innovation Hub', 'Startup Incubation', 'Industry Connect'],
    },
    {
      name: 'Accurate Group of Institutes',
      location: 'Greater Noida, NCR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhgr_7jmT1fdQcq1TKge0m8aekNBY1fNJ8P44VbrDgQ&s=10',
      rating: 4.0,
      programs: ['Engineering', 'Medical', 'Management', 'Sciences'],
      highlights: ['Research Focus', 'International Collaborations', 'Innovation'],
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {colleges.map((college, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                >
                  <img
                    src={college.image}
                    alt={`${college.name} campus - top private university in India for quality education and career opportunities`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8 flex flex-col flex-grow">
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

                    {/* Programs */}
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

                    {/* Highlights */}
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

                    {/* Centered Button */}
                    <div className="pt-4 border-t mt-auto flex justify-center">
                      <a
                        href="/contact"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
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
                href="tel:+919546369339"
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