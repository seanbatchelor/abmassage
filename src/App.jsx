import Button from './components/Button';

function App() {
  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900">
              a.b.<span className="font-normal">massage</span>.
            </h1>
            <p className="text-sm sm:text-base text-gray-900 mt-3">
              Adrian Batchelor Massage Therapist, DRM
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Fixed Image */}
          <div className="hidden md:block">
            <div className="fixed top-36 w-[calc((100vw-4rem)/2-1.5rem)] max-w-[calc((1280px-4rem)/2-1.5rem)]">
              <img
                src="/illustration-4.jpg"
                alt="Massage therapy"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="space-y-16">
            {/* About Section */}
            <section id="about">
              <div className="pt-14 space-y-4 text-gray-900 text-xl leading-relaxed">
                <p>
                  Over 20 years experience as a massage therapist, based in Sydney, Australia.
                </p>
                <p>
                  A great deal of this work has focused on the needs of elite athletes and dancers through a long association with the NSW Institute of Sport and professional dance companies.
                </p>
                <p>
                  Treatments are available for clients of all ages and with all ranges of physical capacity.
                </p>
                <p>
                  Rebates for all major health funds accepted. Work cover approved.
                </p>
              </div>
              <div className="mt-6">
                <Button onClick={() => window.open('https://www.linkedin.com/in/adrian-batchelor-7aa11312/', '_blank')}>
                  LinkedIn
                </Button>
              </div>
            </section>

            {/* Services Section */}
            <section id="services">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Services</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Remedial & sports massage
                  </h3>
                  <p className="text-gray-900 leading-relaxed">
                    Includes the treatment of injuries and strains, the releasing of adhesions and scar tissue and maintenance of optimal function and range of movement.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Restorative massage
                  </h3>
                  <p className="text-gray-900 leading-relaxed">
                    Integrating the functions of muscle, fascia, nerves and circulation to bring the body into balance
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Supplementary treatments
                  </h3>
                  <p className="text-gray-900 leading-relaxed">
                    Dry needling, gua sha and cupping are powerful therapies to support remedial and restorative treatments
                  </p>
                </div>
              </div>
            </section>

            {/* Rates Section */}
            <section id="rates">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Hours & Rates</h2>
              <div className="space-y-4 text-gray-900 leading-relaxed">
                <p>
                  Flexible appointment times available within and outside of standard business hours.
                </p>
                <p>
                  Appointments at Inner West clinic, <span className="font-semibold">$120/hour</span> (concessions apply) or house calls available with an additional fee.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="pb-16">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact</h2>
              <div className="space-y-6 text-gray-900">
                <div>
                  <p>
                    <span className="font-semibold">Call:</span>{' '}
                    <a
                      href="tel:0411525809"
                      className="underline hover:no-underline transition-all"
                    >
                      0411 525 809
                    </a>
                  </p>
                </div>

                <div>
                  <p>
                    <span className='font-semibold'>Email:</span>{' '}
                    <a
                      href="mailto:adrianbatchelor@gmail.com"
                      className="underline hover:no-underline transition-all"
                    >
                      adrianbatchelor@gmail.com
                    </a>
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Inner West Clinic</p>
                  <p>27 Percival St</p>
                  <p className="mb-4">Lilyfield, Sydney 2040</p>
                  <Button
                    variant='primary'
                    onClick={() => window.open('https://maps.app.goo.gl/soMAPwkJcqm6cnP47', '_blank')}
                  >
                    View on Google Maps →
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
