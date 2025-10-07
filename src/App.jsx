function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div>
            <div className="mb-2 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-900">AB Massage</h1>
              <p className="text-sm text-gray-600 mt-1">Adrian Batchelor Massage Therapist, DRM</p>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <div className="order-2 md:order-1">
              <img 
                src="/illustration-4.jpg" 
                alt="Massage therapy" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            {/* Bio on the right */}
            <div className="order-1 md:order-2">
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Over 20 years experience as a massage therapist, based in Sydney, Australia.
                </p>
                <p>
                  A great deal of this work has focused on the needs of elite athletes and dancers through a long association with the NSW Institute of Sport and professional dance companies.
                </p>
                <p>
                  Treatments are available for clients of all ages and with all ranges of physical capacity.
                </p>
              </div>
              <div>
                <p>Rebates for all major health funds accepted | Work cover approved | Whitecoat profile | LinkedIn profile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Remedial & sports massage
              </h3>
              <p className="text-gray-600">
                Includes the treatment of injuries and strains, the releasing of adhesions and scar tissue and maintenance of optimal function and range of movement.
              </p>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Restorative massage
              </h3>
              <p className="text-gray-600">
                Integrating the functions of muscle, fascia, nerves and circulation to bring the body into balance
              </p>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Supplementary treatments
              </h3>
              <p className="text-gray-600">
                Dry needling, gua sha and cupping are powerful therapies to support remedial and restorative treatments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Rates Section */}
      <section id="rates" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Hours & Rates
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
              <p className="text-gray-700 text-lg">
                Flexible appointment times available within and outside of standard business hours.
              </p>
              <p className="text-gray-700 text-lg">
                Appointments at Inner West clinic, <span className="font-semibold">$120/hour</span> (concessions apply) or house calls available with an additional fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Contact & Location
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call</h3>
                  <a href="tel:0411525809" className="text-indigo-600 hover:text-indigo-700 text-lg">
                    0411 525 809
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:adrianbatchelor@gmail.com" className="text-indigo-600 hover:text-indigo-700 text-lg">
                    adrianbatchelor@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit</h3>
                  <p className="text-gray-700 text-lg mb-1">Inner West Clinic</p>
                  <p className="text-gray-700">27 Percival St</p>
                  <p className="text-gray-700 mb-3">Lilyfield, Sydney 2040</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=27+Percival+St+Lilyfield+Sydney+2040" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 AB Massage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
