import Link from 'next/link';
import { statesSolarData } from '../lib/statesData';

export default function Footer() {
  const topStates = statesSolarData.slice(0, 8);
  const remainingStates = statesSolarData.slice(8);

  return (
    <footer className="bg-background-light border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
                  <span className="text-xl font-bold text-text-primary">Sunalyze</span>
            </div>
            <p className="text-text-secondary text-sm mb-4">
              Calculate your solar panel savings with our free, accurate calculator. 
              Get personalized estimates for your home and connect with local installers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-primary transition-colors" aria-label="Follow us on Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors" aria-label="Follow us on Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors" aria-label="Follow us on LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/solar-calculator" className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm">
                  Solar Calculator
                </Link>
              </li>
              <li>
                <Link href="/solar-calculator#faq" className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/solar-calculator#how-it-works" className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/solar-calculator#incentives" className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm">
                  Solar Incentives
                </Link>
              </li>
            </ul>
          </div>

          {/* Top States */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Popular States</h3>
            <ul className="space-y-2">
              {topStates.map((state) => (
                <li key={state.code}>
                  <Link 
                    href={`/solar-calculator/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
                  >
                    Solar ROI in {state.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More States */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">More States</h3>
            <ul className="space-y-2">
              {remainingStates.map((state) => (
                <li key={state.code}>
                  <Link 
                    href={`/solar-calculator/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {state.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-divider mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-text-muted mb-4 md:mb-0">
                  © 2025 Sunalyze. All rights reserved.
              <span className="ml-2">
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <span className="mx-2">•</span>
                <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              </span>
            </div>
            <div className="text-sm text-text-muted">
              <p>Solar savings estimates are for informational purposes only.</p>
              <p className="mt-1">Actual savings may vary based on individual circumstances.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
