import SolarCalculator from "../../components/SolarCalculator";
import Breadcrumbs from "../../components/Breadcrumbs";
import Link from "next/link";
import { statesSolarData } from "../../lib/statesData";

export default function SolarCalculatorPage() {
  const breadcrumbItems = [
    { label: "Solar Calculator", href: undefined }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <section className="bg-white border-b border-divider py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-secondary text-white py-16 overflow-hidden">
        {/* Clean grid pattern overlay */}
        <div className="absolute inset-0 opacity-8">
          {/* Main grid lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
          {/* Subtle mesh pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.04) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(255,255,255,0.04) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.04) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.04) 75%)
            `,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
          }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sunalyze - Solar Panel Savings Calculator
              </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get your personalized solar savings estimate in just a few minutes
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SolarCalculator />
        </div>
      </section>

          {/* Info Section */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Quick & Easy</h3>
                  <p className="text-text-secondary">Get your solar savings estimate in under 2 minutes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Accurate Data</h3>
                  <p className="text-text-secondary">Based on real electricity rates and solar conditions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Free to Use</h3>
                  <p className="text-text-secondary">No hidden fees, no credit card required</p>
                </div>
              </div>
            </div>
          </section>

          {/* Popular States Section */}
          <section className="py-16 bg-background-light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Popular States for Solar
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  See solar savings estimates for the most popular states. Each state has unique electricity rates and incentives.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statesSolarData.slice(0, 6).map((state) => (
                  <Link
                    key={state.code}
                    href={`/solar-calculator/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-divider hover:border-primary transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary">
                        {state.name}
                      </h3>
                      <svg className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="space-y-2 text-sm text-text-secondary">
                      <div className="flex justify-between">
                        <span>Electricity Rate:</span>
                        <span className="font-medium">${state.avgElectricityPrice.toFixed(2)}/kWh</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sun Hours:</span>
                        <span className="font-medium">{state.sunlightHours} hrs/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span>State Rebate:</span>
                        <span className="font-medium">{Math.round(state.incentiveState * 100)}%</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-divider">
                      <span className="text-primary font-medium group-hover:text-primary-dark">
                        Calculate {state.name} Savings →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
    </main>
  );
}
