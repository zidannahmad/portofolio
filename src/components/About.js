export default function About() {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "PHP", "Laravel", "MySQL", "MongoDB"]
    },
    {
      category: "Tools & Methods",
      items: ["Git", "VS Code", "Agile", "RESTful APIs", "Responsive Design"]
    }
  ];

  const education = [
    {
      degree: "S1 Pendidikan Teknologi Informasi",
      school: "Universitas Negeri Malang",
      year: "2020 - 2024",
      description: "Fokus pada pengembangan aplikasi web dan teknologi pembelajaran"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-gray-100 bg-[size:20px_20px] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            About Me
            <div className="h-1 w-20 bg-gradient-to-r from-gray-900 to-gray-700 mt-4 mx-auto"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Saya adalah seorang Web Developer dan Guru yang bersemangat dalam menciptakan solusi digital 
            dan berbagi pengetahuan teknologi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Skills */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="text-lg font-medium text-gray-900">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-700 text-sm
                                   hover:border-gray-300 hover:bg-gray-50 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Languages</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Bahasa Indonesia</span>
                  <span className="text-gray-600">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">English</span>
                  <span className="text-gray-600">Professional Working</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Experience */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 bg-gray-200 rounded-full"></div>
                    <h4 className="text-lg font-medium text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-600 mt-1">{edu.school}</p>
                    <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
                    <p className="text-gray-600 mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Interests & Goals</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Pengembangan teknologi pendidikan yang inovatif
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Integrasi AI dalam pembelajaran
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-gray-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Pengembangan aplikasi web yang user-friendly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}