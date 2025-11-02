export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Chem App</h1>
          <p className="text-lg sm:text-xl text-blue-100">
            Explore Chemistry Like Never Before – In Augmented Reality!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          {/* About Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">About the App</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Chem App is an innovative AR-based chemistry simulation application designed for students to virtually
              experience lab experiments in a safe, interactive, and educational format. It transforms traditional
              chemistry learning by providing immersive augmented reality experiences that make complex chemical
              concepts easier to understand and retain.
            </p>
          </section>

          {/* How it Helps */}
          <section className="mb-12 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">How Chem App Helps in Chemistry</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Allows safe virtual experimentation without the risks of a physical lab</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Visualizes molecular reactions and chemical processes in 3D space</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Reinforces theoretical knowledge with practical, hands-on simulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>Provides unlimited repetition for better concept mastery</span>
              </li>
            </ul>
          </section>

          {/* Key Features Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Key Features</h2>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <span className="text-teal-500 mr-3 text-xl">✓</span>
                <span>Immersive AR-based chemical experiments</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-teal-500 mr-3 text-xl">✓</span>
                <span>Safe virtual interaction with lab equipment</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-teal-500 mr-3 text-xl">✓</span>
                <span>Step-by-step guided simulations</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-teal-500 mr-3 text-xl">✓</span>
                <span>Voice narration and interactive instructions</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-teal-500 mr-3 text-xl">✓</span>
                <span>Observation tables and quiz</span>
              </div>
            </div>
          </section>

          {/* Project Team Section */}
          <section className="mb-12 border-t pt-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Project Team</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Group</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Rutuja Jamdhade</span>
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Jyoti Gavali</span>
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-3">✓</span>
                  <span>Kalyani Gophane</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Guide</h3>
              <p className="text-gray-700 font-semibold">Prof. Poonma L. Patil</p>
            </div>
          </section>

          {/* Special Thanks Section */}
          <section className="mb-12 border-t pt-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Special Thanks</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Special appreciation to <span className="font-semibold">Dr. Dipak Patil</span> and{" "}
              <span className="font-semibold">K.K. Wagh College of Pharmacy, Nashik</span> for their guidance and
              support.
            </p>
          </section>

          {/* Download Button */}
          <section className="border-t pt-12 text-center">
            <a
              href="https://chem-lab-ar-dupli-d18.base44.app"
              download
              className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              <span className="text-xl">⬇️</span>
              Download APK
            </a>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-12">
        <p>© 2025 Chem App. Developed by the Chem App Team.</p>
      </footer>
    </div>
  )
}
