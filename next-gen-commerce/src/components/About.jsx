import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Your Tutor</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the experienced educator who will guide you to academic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Dinunima Samandi</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700">BA (Hons) Professional Accounting (UG)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700">Specialized in Commerce & Business Studies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700">Expert in Sinhala Medium Teaching</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mr-4"></div>
                  <span className="text-lg text-gray-700">Years of Online Teaching Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3">Teaching Philosophy</h4>
              <p>
                I believe every student has the potential to excel. My personalized approach 
                ensures each student receives the attention and guidance they need to succeed 
                in their academic journey.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3">Why Choose Me?</h4>
              <ul className="space-y-2">
                <li>• Proven track record of student success</li>
                <li>• Interactive and engaging teaching methods</li>
                <li>• Flexible scheduling for individual needs</li>
                <li>• Comprehensive study materials provided</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About