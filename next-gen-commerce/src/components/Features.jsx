import React from 'react'

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Learning",
      description: "Tailored teaching approach based on individual student needs and learning pace",
      color: "from-blue-50 to-blue-100"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Regular assessments and progress monitoring to ensure continuous improvement",
      color: "from-purple-50 to-purple-100"
    },
    {
      icon: "💡",
      title: "Exam Strategies",
      description: "Proven exam techniques and strategies to maximize marks in O/L and A/L",
      color: "from-green-50 to-green-100"
    },
    {
      icon: "📱",
      title: "Digital Resources",
      description: "Access to comprehensive digital study materials and practice questions",
      color: "from-orange-50 to-orange-100"
    },
    {
      icon: "⏰",
      title: "Flexible Timing",
      description: "Convenient class schedules that fit your daily routine and commitments",
      color: "from-pink-50 to-pink-100"
    },
    {
      icon: "🏆",
      title: "Proven Results",
      description: "Track record of helping students achieve excellent results in examinations",
      color: "from-indigo-50 to-indigo-100"
    }
  ]

  const testimonials = [
    {
      name: "Kavindi Perera",
      grade: "Grade 11 - O/L Commerce",
      feedback: "Miss Dinunima's teaching method is amazing! She explains everything clearly in Sinhala and makes Commerce so easy to understand. My grades improved from C to A!",
      rating: 5,
      image: "👩‍🎓"
    },
    {
      name: "Dasun Silva",
      grade: "Grade 13 - A/L Business Studies",
      feedback: "Best teacher I've ever had! Her individual attention helped me understand complex business concepts. Highly recommend for A/L students!",
      rating: 5,
      image: "👨‍🎓"
    },
    {
      name: "Nimasha Fernando",
      grade: "Grade 10 - O/L Commerce",
      feedback: "The online classes are very interactive and flexible. Miss provides excellent study materials and past papers. My confidence has increased a lot!",
      rating: 5,
      image: "👩‍🎓"
    },
    {
      name: "Tharindu Jayasinghe",
      grade: "Grade 12 - A/L Business Studies",
      feedback: "Thanks to Miss Dinunima, I now understand Business Studies better than ever. Her teaching is very professional and she's always available to clarify doubts.",
      rating: 5,
      image: "👨‍🎓"
    },
    {
      name: "Sachini Rajapaksha",
      grade: "Grade 11 - O/L Commerce",
      feedback: "I love the group classes! Miss makes learning fun and engaging. The practice questions and regular tests really help in exam preparation.",
      rating: 5,
      image: "👩‍🎓"
    },
    {
      name: "Kavindu Wickramasinghe",
      grade: "Grade 13 - A/L Business Studies",
      feedback: "Got excellent results in my A/L thanks to Miss Dinunima's guidance. Her exam strategies and case study analysis methods are top-notch!",
      rating: 5,
      image: "👨‍🎓"
    }
  ]

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">Why Choose Next Gen Commerce?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover the unique advantages that set our online commerce and business studies classes apart
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div key={index} className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-2`}>
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Student Testimonials Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">What Our Students Say</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Real feedback from students who have achieved success with Next Gen Commerce
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base sm:text-lg">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-blue-600">{testimonial.grade}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Ready to Start Your Learning Journey?</h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join hundreds of students who have already improved their grades with our expert guidance
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features