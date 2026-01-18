import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1 -mt-4 sm:-mt-4">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/next_gen_comlogo.png" 
                alt="Next Gen Commerce Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
              <h3 className="text-xl sm:text-2xl font-bold">Next Gen Commerce</h3>
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed -mt-3">
              Empowering students to excel in Commerce and Business Studies through 
              personalized online education.
            </p>
            <div className="text-blue-100">
              <p className="font-semibold text-white">Tutor: Dinunima Samandi</p>
              <p className="text-sm">BA (Hons) Professional Accounting (UG)</p>
            </div>
          </div>

          <div className="ml-4 lg:ml-26">
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
                <span className="mr-2">🗣️</span>
                <span>Sinhala Medium</span>
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
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              <a href="https://www.facebook.com/share/1HfLERC4Fx/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition duration-300">
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <p className="flex items-start">
                <span className="mr-2">🌐</span>
                <span>Online Classes via Zoom</span>
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
              A Step For Next Level Success
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer