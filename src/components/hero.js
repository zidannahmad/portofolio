export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Decorative Elements - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block absolute top-20 left-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="hidden md:block absolute top-40 right-10 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="hidden md:block absolute -bottom-8 left-20 w-56 h-56 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-fadeIn text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
                <span className="block transform hover:scale-105 transition-transform duration-300">Halo, Saya</span>
                <span className="block font-semibold mt-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Zidan
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto sm:mx-0 animate-slideUp">
                Seorang Web Developer yang berdedikasi untuk menciptakan solusi digital yang elegan dan efektif
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 animate-fadeIn animation-delay-300">
                <a 
                  href="#projects" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gray-900 text-white text-base sm:text-lg relative overflow-hidden group text-center"
                >
                  <span className="absolute inset-0 w-0 bg-gray-700 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative">Lihat Portfolio</span>
                </a>
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-gray-900 text-gray-900 text-base sm:text-lg relative overflow-hidden group text-center"
                >
                  <span className="absolute inset-0 w-0 bg-gray-100 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative">Hubungi Saya</span>
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Image Container with Animation */}
              <div className="relative z-10 rounded-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/40 to-gray-900/0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src="/gambar-portofolio.jpg"
                  alt="Zidan's Portrait"
                  className="w-64 sm:w-80 h-64 sm:h-80 object-cover rounded-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-900/5 to-gray-900/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-900/10 to-gray-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Decoration - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-0 right-0 w-32 h-32 bg-dots-gray-200"></div>
    </section>
  );
}