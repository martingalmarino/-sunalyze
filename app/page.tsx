import Link from 'next/link'
import { statesSolarData } from '../lib/statesData'

export default function Home() {
  return (
        <main className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-primary to-secondary text-white">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            {/* Clean grid pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              {/* Main grid lines */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}></div>
              {/* Diagonal mesh pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(45deg, rgba(255,255,255,0.04) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(255,255,255,0.04) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.04) 75%),
                  linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.04) 75%)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Sunalyze - Solar Panel Savings Calculator
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
                  Calculate your potential savings with solar panels and find the best local installers
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/solar-calculator"
                    className="bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Calculate Your Savings
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="bg-white text-primary hover:bg-background-light px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    How It Works
                  </Link>
                </div>
                
                {/* Quick State Links */}
                <div className="mt-12">
                  <p className="text-white/80 mb-4">Popular States:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {statesSolarData.slice(0, 6).map((state) => (
                      <Link
                        key={state.code}
                        href={`/solar-calculator/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full text-sm transition-all duration-200"
                      >
                        {state.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

      {/* Introductory Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Make an Informed Solar Decision
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Switching to solar energy can significantly reduce your electricity bills while helping the environment.
              Our Solar Panel Savings Calculator lets you quickly estimate how much you could save each year by installing solar panels in your home.
              By entering your ZIP code, monthly electricity bill, and estimated system size, you&apos;ll receive a personalized calculation showing annual savings, return on investment (ROI), and payback period.
              We use up-to-date data on local electricity rates, sunlight hours, and federal & state incentives, so your estimate reflects your actual location.
              Whether you&apos;re in California, Texas, Florida, or any other US state, our tool helps you make an informed decision and connect with trusted local installers.
            </p>
          </div>
        </div>
      </section>

          {/* Why Use Calculator Section */}
          <section className="py-16 bg-background-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Why Use a Solar Savings Calculator?
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
                  Understanding your potential return on investment before installing solar panels is essential. Our calculator helps you:
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-divider">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Compare States</h3>
                  <p className="text-text-secondary">Compare savings across different states and utility rates</p>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-divider">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Factor Incentives</h3>
                  <p className="text-text-secondary">Include federal and local incentives like the 30% Federal Solar Tax Credit</p>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-divider">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Visualize Benefits</h3>
                  <p className="text-text-secondary">See long-term benefits (5-, 10-, and 20-year savings)</p>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-divider">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Plan Budget</h3>
                  <p className="text-text-secondary">Plan your budget and reduce uncertainty about payback periods</p>
                </div>
              </div>
        </div>
      </section>

          {/* How ROI is Calculated Section */}
          <section id="how-it-works" className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  How the Solar ROI Is Calculated
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  Our algorithm estimates annual solar energy production based on your system size and local sunlight conditions, then multiplies it by the average electricity price in your area.
                  We subtract available tax credits and state rebates from the installation cost to give you a more realistic payback period.
                  This approach makes it easier to evaluate if solar is the right investment for your home today.
                </p>
                
                {/* Related Links */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/solar-calculator"
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Try the Calculator
                  </Link>
                  <Link
                    href="/solar-calculator/california"
                    className="bg-background-light hover:bg-divider text-text-primary px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-divider"
                  >
                    See California Example
                  </Link>
                  <Link
                    href="/solar-calculator/texas"
                    className="bg-background-light hover:bg-divider text-text-primary px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-divider"
                  >
                    See Texas Example
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* State Links Section */}
          <section className="py-16 bg-background-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Find Incentives and Savings by State
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
              Incentives for solar panels vary widely across the US.
              We provide localized calculators and insights for major states like California, Texas, New York, Florida, and Arizona – each with unique electricity prices, solar exposure, and rebate programs.
              Visit our dedicated state pages to learn more and estimate savings specific to your location.
            </p>
          </div>
          
              {/* State Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {statesSolarData.slice(0, 8).map((state) => (
                  <Link
                    key={state.code}
                    href={`/solar-calculator/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center px-6 py-3 bg-background text-text-secondary rounded-full shadow-md hover:shadow-lg hover:bg-background-light hover:text-primary transition-all duration-300 border border-divider hover:border-primary"
                  >
                    <span className="font-medium">{state.name}</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* Featured States */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statesSolarData.slice(0, 6).map((state) => (
                  <Link
                    key={state.code}
                    href={`/solar-calculator/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group bg-background-light rounded-lg border border-divider p-4 hover:shadow-md transition"
                  >
                    <h3 className="text-primary font-semibold text-lg">{state.name}</h3>
                    <p className="text-text-secondary text-sm">Electricity: ${state.avgElectricityPrice.toFixed(2)}/kWh</p>
                    <p className="text-text-secondary text-sm">Sun Hours: {state.sunlightHours} hrs/day</p>
                    <button className="mt-3 bg-cta hover:bg-cta-hover text-white px-3 py-2 rounded text-sm">
                      Calculate Savings
                    </button>
                  </Link>
                ))}
              </div>
        </div>
      </section>

          {/* FAQ Section */}
          <section id="faq" className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-background-light rounded-xl p-6 border border-divider">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    How accurate is the Solar Panel Savings Calculator?
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Our calculator uses reputable sources such as the US Energy Information Administration (EIA) for electricity prices and the NREL for sunlight data.
                    Results are estimates and can vary depending on your home&apos;s exact conditions and energy usage.
                  </p>
                  <Link href="/solar-calculator" className="text-primary hover:text-primary-dark font-medium">
                    Try the calculator →
                  </Link>
                </div>

                <div className="bg-background-light rounded-xl p-6 border border-divider">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    What incentives can I claim in 2025?
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Most US homeowners can claim the 30% Federal Solar Tax Credit, and many states offer additional rebates or grants.
                    Check our state pages for local details.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/solar-calculator/california" className="text-primary hover:text-primary-dark font-medium text-sm">
                      California Incentives →
                    </Link>
                    <Link href="/solar-calculator/texas" className="text-primary hover:text-primary-dark font-medium text-sm">
                      Texas Incentives →
                    </Link>
                    <Link href="/solar-calculator/florida" className="text-primary hover:text-primary-dark font-medium text-sm">
                      Florida Incentives →
                    </Link>
                  </div>
                </div>

                <div className="bg-background-light rounded-xl p-6 border border-divider">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    How long does it take to break even with solar?
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Typical ROI is between 5 and 8 years, depending on electricity costs, system size, and available incentives.
                  </p>
                  <Link href="/solar-calculator" className="text-primary hover:text-primary-dark font-medium">
                    Calculate your payback period →
                  </Link>
                </div>

                <div className="bg-background-light rounded-xl p-6 border border-divider">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    Do I need to enter personal data to use the calculator?
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    No. You only need your ZIP code, monthly electricity bill, and system size to get an estimate.
                  </p>
                  <Link href="/solar-calculator" className="text-primary hover:text-primary-dark font-medium">
                    Get your free estimate →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-16 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
            {/* Elegant grid pattern overlay */}
            <div className="absolute inset-0 opacity-12">
              {/* Main grid */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}></div>
              {/* Subtle dots pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 2px, transparent 2px),
                  radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08) 2px, transparent 2px)
                `,
                backgroundSize: '25px 25px'
              }}></div>
              {/* Crosshatch pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(255,255,255,0.03) 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.03) 75%),
                  linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.03) 75%)
                `,
                backgroundSize: '15px 15px',
                backgroundPosition: '0 0, 0 7.5px, 7.5px -7.5px, -7.5px 0px'
              }}></div>
            </div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Calculate Your Solar Savings?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get your personalized solar savings estimate in just a few clicks
              </p>
              <Link
                href="/solar-calculator"
                className="inline-flex items-center bg-cta hover:bg-cta-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculate Now
          </Link>
        </div>
      </section>
    </main>
  )
}
