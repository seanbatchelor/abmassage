import Button from './components/Button';

function App() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-5xl font-bold text-gray-900">a.b.<span className="font-normal">massage</span>.</h1>
          <p className="text-base text-gray-600 mt-1">Adrian Batchelor Massage Therapist, DRM</p>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image on the left */}
            <div className="order-2 md:order-1">
              <img 
                src="/illustration-4.jpg" 
                alt="Massage therapy" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Bio on the right */}
            <div className="order-1 md:order-2">
              <div className="space-y-4 text-gray-900 text-2xl leading-relaxed mb-6">
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
              <div className="text-gray-600 text-xl leading-relaxed">
                <p>Rebates for all major health funds accepted. Work cover approved.</p>
              </div>
              <div className="mt-6">
                <Button onClick={() => window.open('https://www.linkedin.com/in/adrian-batchelor-7aa11312/', '_blank')}>
                  LinkedIn
                </Button>
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
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Remedial & sports massage
              </h2>
              <p>
                Includes the treatment of injuries and strains, the releasing of adhesions and scar tissue and maintenance of optimal function and range of movement.
              </p>
            </div>
            
            {/* Service Card 2 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Restorative massage
              </h2>
              <p>
                Integrating the functions of muscle, fascia, nerves and circulation to bring the body into balance
              </p>
            </div>
            
            {/* Service Card 3 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Supplementary treatments
              </h2>
              <p>
                Dry needling, gua sha and cupping are powerful therapies to support remedial and restorative treatments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Rates Section */}
      <section id="rates" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hours & Rates - 2 columns */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Hours & Rates
              </h2>
              <div className="space-y-4">
                <p>
                  Flexible appointment times available within and outside of standard business hours.
                </p>
                <p>
                  Appointments at Inner West clinic, <span className="font-semibold">$120/hour</span> (concessions apply) or house calls available with an additional fee.
                </p>
              </div>
            </div>

            {/* Contact Details - 1 column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact
              </h2>
              <div className="space-y-6">
                <div>
                  <p><span className="font-semibold">Call:</span> <a href="tel:0411525809" className="hover:opacity-80" style={{ color: 'var(--color-primary)' }}>0411 525 809</a></p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:adrianbatchelor@gmail.com" className="hover:opacity-80" style={{ color: 'var(--color-primary)' }}>
                    adrianbatchelor@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit</h3>
                  <p className="mb-1">Inner West Clinic</p>
                  <p>27 Percival St</p>
                  <p className="mb-3">Lilyfield, Sydney 2040</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=27+Percival+St+Lilyfield+Sydney+2040" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:opacity-80"
                    style={{ color: 'var(--color-primary)' }}
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
