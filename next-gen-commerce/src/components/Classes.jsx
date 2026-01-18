import React from 'react'

const Classes = () => {
  const classes = [
    {
      title: "O/L Commerce",
      grades: "Grade 10 & 11",
      description: "Comprehensive O/L Commerce classes covering all syllabus requirements",
      features: [
        "Complete syllabus coverage",
        "Past paper discussions",
        "Practical examples",
        "Regular assessments"
      ],
      color: "from-blue-500 to-cyan-500",
      icon: "📚"
    },
    {
      title: "A/L Business Studies",
      grades: "Grade 12 & 13",
      description: "Advanced A/L Business Studies preparation for university entrance",
      features: [
        "Advanced concepts explained",
        "Case study analysis",
        "Exam technique guidance",
        "University preparation"
      ],
      color: "from-purple-500 to-pink-500",
      icon: "🎓"
    }
  ]

  const classTypes = [
    {
      type: "Individual Classes",
      description: "One-on-one personalized attention",
      icon: "👤",
      benefits: [
        "Personalized learning pace",
        "Individual attention",
        "Flexible scheduling",
        "Customized study plans"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      type: "Group Classes",
      description: "Interactive group learning experience",
      icon: "👥",
      benefits: [
        "Peer interaction",
        "Cost-effective",
        "Group discussions",
        "Collaborative learning"
      ],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="classes" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">Our Classes</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Choose from our comprehensive range of Commerce and Business Studies programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {classes.map((classItem, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${classItem.color} p-6 sm:p-8 text-white`}>
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{classItem.icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{classItem.title}</h3>
                <p className="text-base sm:text-lg opacity-90">{classItem.grades}</p>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{classItem.description}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {classItem.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Class Types Available</h3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {classTypes.map((classType, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${classType.color} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-6 mx-auto shadow-lg`}>
                  {classType.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">{classType.type}</h4>
                <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-6">{classType.description}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {classType.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base">
                      <span className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-10 lg:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Ready to Start Learning?</h3>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
            Join our classes today and take the first step towards academic excellence
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Classes