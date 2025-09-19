import { Helmet } from 'react-helmet-async';

const Programs = () => {
  const programs = [
    {
      name: 'B.Tech',
      fullName: 'Bachelor of Technlogy',
      description: 'Computer science fundamentals with programming, software development, and database management skills.',
      duration: '4 Years',
      eligibility: '12th Pass (PCM)',
      icon: '💻',
      career: ['Software Developer', 'System Analyst', 'Web Developer', 'Database Administrator']
    },
    {
      name: 'B.Pharma',
      fullName: 'Bachelor of Pharmacy',
      description: 'Pharmaceutical sciences covering drug formulation, pharmacology, and healthcare applications',
      duration: '4 Years',
      eligibility: '12th Pass',
      icon: '💉',
      career: ['Pharmacist', 'Clinical Researcher', 'Quality Analyst', 'Regulatory Affairs Specialist']
    },
    {
      name: 'D.Pharma',
      fullName: 'Diploma in Pharmacy',
      description: 'Pharmacy diploma focusing on practical skills in drug dispensing, pharmacy management, and healthcare support',
      duration: '2 Years',
      eligibility: '12th Pass',
      icon: '💊',
      career: ['Pharmacy Technician', 'Medical Representative', 'Pharmacy Assistant', 'Healthcare Support']
    },
    {
      name: 'BJMC',
      fullName: 'Bachelor of Journalism and Mass Communication',
      description: 'Media studies covering journalism, mass communication, digital media, and public relations',
      duration: '3 Years',
      eligibility: '12th Pass',
      icon: '📰',
      career: ['Journalist', 'Content Writer', 'Public Relations Officer', 'Media Planner']
    },
    {
      name: 'BA',
      fullName: 'Bachelor of Arts',
      description: 'Undergraduate program in humanities and social sciences with various specializations',
      duration: '3 Years',
      eligibility: '12th Pass',
      icon: '📚',
      career: ['Teacher', 'Writer', 'Social Worker', 'Further Studies']
    },
    {
      name: 'MCA',
      fullName: 'Master of Computer Applications',
      description: 'Advanced computer applications program with specialization in emerging technologies and software engineering.',
      duration: '2-3 Years',
      eligibility: 'BCA/B.Sc (CS)',
      icon: '🖥️',
      career: ['Software Engineer', 'IT Consultant', 'Project Manager', 'Systems Architect']
    },
    {
      name: 'BA LLB',
      fullName: 'Bachelor of Arts + Bachelor of Legislative Law',
      description: 'Integrated law program combining arts and legal studies for a comprehensive understanding of law and society.',
      duration: '5 Years',
      eligibility: '12th Pass',
      icon: '⚖️',
      career: ['Lawyer', 'Legal Advisor', 'Judge', 'Corporate Counsel']
    },
    {
      name: 'MA',
      fullName: 'Master of Arts',
      description: 'Postgraduate program in humanities and social sciences with various specializations',
      duration: '2 Years',
      eligibility: 'BA Degree',
      icon: '🎓',
      career: ['Researcher', 'Lecturer', 'Content Developer', 'Further Studies']
    },
    {
      name: 'B.Com',
      fullName: 'Bachelor of Commerce',
      description: 'Commerce and business studies covering accounting, finance, taxation, and business law with practical applications.',
      duration: '3 Years',
      eligibility: '12th Pass',
      icon: '💼',
      career: ['Accountant', 'Financial Analyst', 'Tax Consultant', 'Banking Professional']
    },
    {
      name: 'B.Com LLB',
      fullName: 'Bachelor of Commerce + Bachelor of Legislative Law',
      description: 'Integrated program combining commerce and legal studies for a comprehensive understanding of business and law.',
      duration: '5 Years',
      eligibility: '12th Pass',
      icon: '📜',
      career: ['Corporate Lawyer', 'Legal Advisor', 'Compliance Officer', 'Business Consultant']
    },
    {
      name: 'Diploma',
      fullName: 'Diploma Courses',
      description: 'Short-term diploma programs in various fields such as engineering, management, design, and healthcare.',
      duration: '1-3 Years',
      eligibility: '10th/12th Pass',
      icon: '📜',
      career: ['Technician', 'Designer', 'Healthcare Assistant', 'Business Support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Educational Programs - BBA, MBA, BA, MA, BCA, MCA, B.Sc, M.Sc, B.Com Admission Guidance</title>
        <meta name="description" content="Comprehensive admission guidance for popular programs including BBA, MBA, BA, MA, BCA, MCA, B.Sc, M.Sc, B.Com with career prospects and eligibility details." />
        <meta name="keywords" content="BBA admission, MBA guidance, BA course, MA program, BCA college, MCA admission, B.Sc course, M.Sc program, B.Com college" />
        
        <meta property="og:title" content="Educational Programs - BBA, MBA, BA, MA, BCA, MCA, B.Sc, M.Sc, B.Com" />
        <meta property="og:description" content="Expert admission guidance for all major educational programs with detailed course information and career prospects." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Educational <span className="text-blue-600">Programs</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore comprehensive information about popular courses and get expert admission guidance for your chosen program
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                    <p className="text-blue-600 font-semibold">{program.fullName}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 py-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-xs text-blue-600 font-semibold uppercase mb-1">Duration</p>
                        <p className="text-gray-900 font-medium">{program.duration}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-xs text-green-600 font-semibold uppercase mb-1">Eligibility</p>
                        <p className="text-gray-900 font-medium text-sm">{program.eligibility}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Career Opportunities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.career.map((career, careerIndex) => (
                          <span
                            key={careerIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <a
                        href="/contact"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center block"
                      >
                        Get Admission Guidance
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose These Programs */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose These Programs?
              </h2>
              <p className="text-xl text-gray-600">
                Popular courses with excellent career prospects and industry demand
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Relevant</h3>
                <p className="text-gray-600">Curriculum designed to meet current industry standards and requirements</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Opportunities</h3>
                <p className="text-gray-600">High placement rates and diverse career paths across multiple industries</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Potential</h3>
                <p className="text-gray-600">Excellent prospects for career advancement and professional growth</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Skill Development</h3>
                <p className="text-gray-600">Comprehensive skill building for both technical and soft skills</p>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Admission Process Made Easy
              </h2>
              <p className="text-xl text-blue-100">
                Our step-by-step guidance ensures smooth admission process for all programs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Course Selection</h3>
                <p className="text-blue-100">Choose the right program based on your interests and career goals</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">College Research</h3>
                <p className="text-blue-100">Find the best colleges and universities offering your chosen program</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Application Support</h3>
                <p className="text-blue-100">Complete application assistance including documentation and forms</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Admission Success</h3>
                <p className="text-blue-100">Secure your admission with our proven guidance and support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Programs;