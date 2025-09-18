import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-rapkology-black text-white pt-8 lg:pt-16 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-8 lg:mb-12">
          <h2 className="text-xl lg:text-2xl xl:text-[40px] font-bold mb-4 lg:mb-6 leading-tight font-saira-condensed">
            GELİŞMELERDEN İLK SEN<br />
            HABERDAR OL!
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-md text-sm bold font-saira border-b border-gray-600">
            <div className="flex-1">
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full bg-transparent py-2 lg:py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-rapkology-yellow transition-colors"
              />
            </div>
            <button className="text-rapkology-yellow px-0 py-2 lg:py-3 font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer">
              GÖNDER
              <img src="/common/right-arrow.svg" alt="Right Arrow" width="14" height="14" className="filter brightness-0 invert lg:w-[16px] lg:h-[16px]" />
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 lg:gap-6 mb-8 lg:mb-12">
          {/* Facebook */}
          <a href="#" className="text-rapkology-yellow hover:opacity-80 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          
          {/* Twitter */}
          <a href="#" className="text-rapkology-yellow hover:opacity-80 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          
          {/* Discord */}
          <a href="#" className="text-rapkology-yellow hover:opacity-80 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
            </svg>
          </a>
          
          {/* Spotify */}
          <a href="#" className="text-rapkology-yellow hover:opacity-80 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
          
          {/* YouTube */}
          <a href="#" className="text-rapkology-yellow hover:opacity-80 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-start">
          <div className="min-h-[2rem] flex items-center">
            <a href="#" className="text-gray-300 hover:text-rapkology-yellow transition-colors text-sm font-medium whitespace-nowrap">
              HABERLER
            </a>
          </div>
          <div className="min-h-[2rem] flex items-center">
            <a href="#" className="text-gray-300 hover:text-rapkology-yellow transition-colors text-sm font-medium whitespace-nowrap">
              ETKİNLİKLER
            </a>
          </div>
          <div className="min-h-[2rem] flex items-center">
            <a href="#" className="text-gray-300 hover:text-rapkology-yellow transition-colors text-sm font-medium whitespace-nowrap">
              MÜZİKLER
            </a>
          </div>
          <div className="min-h-[2rem] flex items-center">
            <a href="#" className="text-gray-300 hover:text-rapkology-yellow transition-colors text-sm font-medium whitespace-nowrap">
              VİDEOLAR
            </a>
          </div>
          <div className="min-h-[2rem] flex items-center">
            <a href="#" className="text-gray-300 hover:text-rapkology-yellow transition-colors text-sm font-medium whitespace-nowrap">
              İLETİŞİM
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm pb-4 lg:pb-0">
          © RAPKOLOGY All Rights Are Reserved 2022.
        </div>
      </div>
    </footer>
  );
}