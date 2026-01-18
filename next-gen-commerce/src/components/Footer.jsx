import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/next_gen_comlogo.png" 
                alt="Next Gen Commerce Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
              <h3 className="text-xl sm:text-2xl font-bold">Next Gen Commerce</h3>
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Empowering students to excel in Commerce and Business Studies through 
              personalized online education.
            </p>
            <div className="text-blue-100">
              <p className="font-semibold text-white">Tutor: Dinunima Samandi</p>
              <p className="text-sm">BA (Hons) Professional Accounting (UG)</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#home" className="hover:text-white transition duration-300 block">Home</a></li>
              <li><a href="#about" className="hover:text-white transition duration-300 block">About</a></li>
              <li><a href="#classes" className="hover:text-white transition duration-300 block">Classes</a></li>
              <li><a href="#features" className="hover:text-white transition duration-300 block">Features</a></li>
              <li><a href="#contact" className="hover:text-white transition duration-300 block">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Classes</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="mr-2">📚</span>
                <span>O/L Commerce (Grade 10 & 11)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🎓</span>
                <span>A/L Business Studies (Grade 12 & 13)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">👤</span>
                <span>Individual Classes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">👥</span>
                <span>Group Classes</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="text-blue-100 space-y-3">
              <a href="tel:0711237015" className="flex items-center hover:text-white transition duration-300">
                <span className="mr-2">📞</span>
                <span>0711237015</span>
              </a>
              <a href="https://wa.me/94711237015" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition duration-300">
                <span className="mr-2">💬</span>
                <span>WhatsApp</span>
              </a>
              <p className="flex items-start">
                <span className="mr-2">🌐</span>
                <span>Online Classes via Zoom</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">🗣️</span>
                <span>Sinhala Medium</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">⏰</span>
                <span>Mon - Sun: 8AM - 10PM</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-8 lg:mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm text-center sm:text-left">
              © 2026 Next Gen Commerce. All rights reserved.
            </p>
            <p className="text-blue-100 text-sm text-center sm:text-right">
              Designed for educational excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer