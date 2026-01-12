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
      color: "from-blue-500 to-cyan-500"
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
      color: "from-purple-500 to-pink-500"
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
      ]
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
      ]
    }
  ]

  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Classes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive online classes designed to help you excel in Commerce and Business Studies
          </p>
        </div>

        {/* Subject Classes */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {classes.map((classItem, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className={`h-2 bg-gradient-to-r ${classItem.color}`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{classItem.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{classItem.grades}</p>
                <p className="text-gray-600 mb-6">{classItem.description}</p>
                <ul className="space-y-2">
                  {classItem.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Class Types */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Class Types Available</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {classTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-6xl mb-4">{type.icon}</div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3">{type.type}</h4>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-700">• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Info */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Online Classes via Zoom</h3>
          <p className="text-xl mb-6">All classes are conducted online using the Zoom platform for interactive learning</p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">💻</div>
              <h4 className="font-semibold mb-1">Interactive Sessions</h4>
              <p className="text-sm">Real-time interaction with screen sharing</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📚</div>
              <h4 className="font-semibold mb-1">Digital Materials</h4>
              <p className="text-sm">All study materials provided digitally</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold mb-1">Sinhala Medium</h4>
              <p className="text-sm">Classes conducted in Sinhala language</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Classes