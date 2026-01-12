import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Next Gen Commerce</h3>
            <p className="text-gray-300 mb-4">
              Empowering students to excel in Commerce and Business Studies through 
              personalized online education.
            </p>
            <div className="text-gray-300">
              <p>Tutor: Dinunima Samandi</p>
              <p>BA (Hons) Professional Accounting (UG)</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-white transition duration-300">About</a></li>
              <li><a href="#classes" className="hover:text-white transition duration-300">Classes</a></li>
              <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-300 space-y-2">
              <p>📞 0711237015</p>
              <p>🌐 Online Classes via Zoom</p>
              <p>🗣️ Sinhala Medium</p>
              <p>📚 O/L Commerce & A/L Business Studies</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2026 Next Gen Commerce. All rights reserved. | Designed for educational excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer