export default function Projects() {
  const data = [
    { 
      name: "GUMEL APP", 
      desc: "Aplikasi manajemen nilai guru yang efisien dan mudah digunakan untuk meningkatkan produktivitas", 
      link: "#",
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "AI Generate Text", 
      desc: "Platform generasi teks berbasis AI menggunakan arsitektur MVC modern dengan PHP", 
      link: "#",
      tech: ["PHP", "MVC", "Machine Learning"],
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Kurikulum App", 
      desc: "Sistem manajemen kurikulum sekolah yang komprehensif dan user-friendly", 
      link: "#",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Decorative Elements - Responsive sizes */}
      <div className="absolute inset-0 bg-grid-gray-100 bg-[size:20px_20px] sm:bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-12 sm:mb-16 relative">
          {/* Hash symbol - Hidden on mobile */}
          <span className="hidden sm:block absolute -left-4 -top-2 text-4xl sm:text-5xl md:text-6xl text-gray-100 font-bold opacity-50">#</span>
          
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 animate-fadeIn">
            Selected Projects
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-gray-900 to-gray-700 mt-4"></div>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 animate-slideUp">
            Beberapa proyek terbaik yang telah saya kembangkan
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg p-6 sm:p-8 border border-gray-100 hover:border-gray-300 
                       transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1
                       animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-4 sm:mb-6">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-lg blur opacity-0 
                              group-hover:opacity-20 transition duration-500`}></div>
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {project.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-50 text-gray-600 rounded-full
                             border border-gray-100 transition-all duration-300
                             hover:border-gray-300 hover:bg-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.link} 
                className="inline-flex items-center text-gray-900 hover:text-gray-600 
                         transition-all duration-300 group/link text-sm sm:text-base"
              >
                <span className="relative">
                  View Project
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gray-900 
                                transform scale-x-0 transition-transform duration-300 
                                group-hover/link:scale-x-100"></span>
                </span>
                <svg 
                  className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 
                           group-hover/link:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}