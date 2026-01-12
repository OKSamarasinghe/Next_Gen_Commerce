import React from 'react'

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Learning",
      description: "Tailored teaching approach based on individual student needs and learning pace"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Regular assessments and progress monitoring to ensure continuous improvement"
    },
    {
      icon: "💡",
      title: "Exam Strategies",
      description: "Proven exam techniques and strategies to maximize marks in O/L and A/L"
    },
    {
      icon: "📱",
      title: "Digital Resources",
      description: "Access to comprehensive digital study materials and practice questions"
    },
    {
      icon: "⏰",
      title: "Flexible Timing",
      description: "Convenient class schedules that fit your daily routine and commitments"
    },
    {
      icon: "🏆",
      title: "Proven Results",
      description: "Track record of helping students achieve excellent results in examinations"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Next Gen Commerce?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the unique advantages that set our online commerce and business studies classes apart
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Learning Journey?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have already improved their grades with our expert guidance
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
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