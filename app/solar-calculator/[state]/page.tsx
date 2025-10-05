import { Metadata } from "next";
import { statesSolarData, getStateBySlug } from "../../../lib/statesData";
import SolarCalculator from "../../../components/SolarCalculator";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Link from "next/link";

export async function generateStaticParams() {
  return statesSolarData.map(s => ({ state: s.name.toLowerCase().replace(/\s+/g,'-') }));
}

export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
  const data = getStateBySlug(params.state);
  const title = data
    ? `Solar ROI & Savings in ${data.name} – 2025 Calculator`
    : "Solar Panel Savings Calculator";
  const description = data
    ? `Estimate your solar panel savings in ${data.name} with our free calculator. Includes ${new Date().getFullYear()} incentives & rebates.`
    : "Estimate your savings with solar energy across the US.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  };
}

export default function StateSolarPage({ params }: { params: { state: string } }) {
      const data = getStateBySlug(params.state);
      if (!data) return <div className="p-10 text-center">State not found.</div>;

      const breadcrumbItems = [
        { label: "Solar Calculator", href: "/solar-calculator" },
        { label: data.name, href: undefined }
      ];

      return (
        <main className="min-h-screen bg-background">
          {/* Breadcrumbs */}
          <section className="bg-white border-b border-divider py-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
          </section>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-primary to-secondary text-white py-16 overflow-hidden">
            {/* State-specific solar pattern overlay */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-12 right-12 w-36 h-36 bg-white rounded-full blur-3xl"></div>
              <div className="absolute top-20 left-20 w-24 h-24 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-white rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full blur-2xl"></div>
              {/* Subtle hexagonal pattern */}
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 2px, transparent 2px),
                                 radial-gradient(circle at 25% 25%, rgba(255,255,255,0.04) 1px, transparent 1px),
                                 radial-gradient(circle at 75% 75%, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Solar Panel Savings in {data.name}
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Residents of {data.name} pay an average of <span className="font-semibold">${data.avgElectricityPrice.toFixed(2)}/kWh</span> for electricity and enjoy about <span className="font-semibold">{data.sunlightHours} peak sunlight hours</span> per day. With a federal tax credit of <span className="font-semibold">{Math.round(data.incentiveFederal*100)}%</span> and an additional state rebate of <span className="font-semibold">{Math.round(data.incentiveState*100)}%</span>, switching to solar can deliver excellent long-term savings.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SolarCalculator defaultState={data.name} />
        </div>
      </section>

      {/* State Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Solar Conditions in {data.name}
                </h2>
              </div>
          <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-background-light p-6 rounded-xl text-center border border-divider">
                  <div className="w-16 h-16 bg-cta rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Electricity Rate</h3>
                  <p className="text-3xl font-bold text-cta">${data.avgElectricityPrice.toFixed(2)}</p>
                  <p className="text-text-secondary">per kWh</p>
                </div>
                <div className="bg-background-light p-6 rounded-xl text-center border border-divider">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Daily Sun Hours</h3>
                  <p className="text-3xl font-bold text-secondary">{data.sunlightHours}</p>
                  <p className="text-text-secondary">peak hours</p>
                </div>
                <div className="bg-background-light p-6 rounded-xl text-center border border-divider">
                  <div className="w-16 h-16 bg-cta rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">State Rebate</h3>
                  <p className="text-3xl font-bold text-cta">{Math.round(data.incentiveState*100)}%</p>
                  <p className="text-text-secondary">additional savings</p>
                </div>
          </div>
        </div>
      </section>

          {/* FAQ Section */}
          <section className="py-16 bg-background-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  FAQs – Solar in {data.name}
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-background rounded-xl p-6 shadow-md border border-divider">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">How much can I save annually?</h3>
                  <p className="text-text-secondary leading-relaxed mb-3">Use the calculator above to estimate annual savings based on your electricity bill and system size.</p>
                  <Link href="/solar-calculator" className="text-primary hover:text-primary-dark font-medium">
                    Try the general calculator →
                  </Link>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-md border border-divider">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">What incentives are available?</h3>
                  <p className="text-text-secondary leading-relaxed mb-3">{data.name} residents can claim the {Math.round(data.incentiveFederal*100)}% Federal Tax Credit plus an additional {Math.round(data.incentiveState*100)}% state rebate.</p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/" className="text-primary hover:text-primary-dark font-medium text-sm">
                      Learn about all incentives →
                    </Link>
                    <Link href="/solar-calculator" className="text-primary hover:text-primary-dark font-medium text-sm">
                      Calculate with incentives →
                    </Link>
                  </div>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-md border border-divider">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">What is the typical payback period?</h3>
                  <p className="text-text-secondary leading-relaxed mb-3">In most cases, homeowners in {data.name} see ROI within 5-8 years depending on energy usage and system size.</p>
                  <Link href="/solar-calculator" className="text-primary hover:text-primary-dark font-medium">
                    Calculate your payback period →
                  </Link>
                </div>
              </div>
          
          {/* FAQ Schema Markup */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much can I save annually with solar panels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Use the calculator above to estimate annual savings based on your electricity bill and system size."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What solar incentives are available in " + data.name + "?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": data.name + " residents can claim the " + Math.round(data.incentiveFederal*100) + "% Federal Tax Credit plus an additional " + Math.round(data.incentiveState*100) + "% state rebate."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the typical payback period for solar panels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "In most cases, homeowners in " + data.name + " see ROI within 5-8 years depending on energy usage and system size."
                    }
                  }
                ]
              })
            }}
          />
        </div>
      </section>

          {/* Other States Section */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Compare with Other States
                </h2>
                <p className="text-lg text-text-secondary mb-6">
                  See how {data.name} compares to other states for solar savings potential
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/"
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Back to Home
                  </Link>
                  <Link
                    href="/solar-calculator"
                    className="bg-background-light hover:bg-divider text-text-primary px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-divider"
                  >
                    General Calculator
                  </Link>
                </div>
              </div>
              
              {/* Similar States */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  States with Similar Solar Conditions
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {statesSolarData
                    .filter(s => s.code !== data.code && Math.abs(s.sunlightHours - data.sunlightHours) <= 0.5)
                    .slice(0, 6)
                    .map(s => (
                    <Link
                      key={s.code}
                      href={`/solar-calculator/${s.name.toLowerCase().replace(/\s+/g,'-')}`}
                      className="group bg-background-light hover:bg-background rounded-lg p-4 transition-all duration-300 border border-divider hover:border-primary shadow-md hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-text-primary group-hover:text-primary">{s.name}</span>
                        <span className="text-sm text-text-secondary group-hover:text-primary">{s.sunlightHours} hrs</span>
                      </div>
                      <div className="text-sm text-text-secondary">
                        <div className="flex justify-between">
                          <span>Electricity:</span>
                          <span className="font-medium">${s.avgElectricityPrice.toFixed(2)}/kWh</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rebate:</span>
                          <span className="font-medium">{Math.round(s.incentiveState * 100)}%</span>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-primary text-sm">
                        <span>Compare Savings</span>
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* All States */}
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  All States
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {statesSolarData
                    .filter(s => s.code !== data.code)
                    .map(s => (
                    <Link
                      key={s.code}
                      href={`/solar-calculator/${s.name.toLowerCase().replace(/\s+/g,'-')}`}
                      className="group bg-background-light hover:bg-background rounded-lg p-3 transition-all duration-300 border border-divider hover:border-primary shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-text-primary group-hover:text-primary text-sm">{s.name}</span>
                        <span className="text-xs text-text-secondary group-hover:text-primary">${s.avgElectricityPrice.toFixed(2)}/kWh</span>
                      </div>
                      <div className="mt-1 flex items-center text-primary text-xs">
                        <span>Calculate</span>
                        <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
    </main>
  );
}
