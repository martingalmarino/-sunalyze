"use client";
import Link from 'next/link';
import { useState } from 'react';
import { statesSolarData } from '../lib/statesData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topStates = statesSolarData.slice(0, 6);

  return (
    <header className="bg-white shadow-md border-b border-divider sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
                <span className="text-xl font-bold text-text-primary">Sunalyze</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/solar-calculator" 
              className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              Calculator
            </Link>
            
            {/* States Dropdown */}
            <div className="relative group">
              <button className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium flex items-center">
                States
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-divider opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-text-primary mb-3">Solar Savings by State</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {topStates.map((state) => (
                      <Link
                        key={state.code}
                        href={`/solar-calculator/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-text-secondary hover:text-primary hover:bg-background-light p-2 rounded transition-colors duration-200"
                      >
                        {state.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-divider">
                    <Link
                      href="/solar-calculator"
                      className="text-sm text-primary hover:text-cta font-medium"
                    >
                      View All States →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link 
              href="#faq" 
              className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/solar-calculator"
              className="bg-cta hover:bg-cta-hover text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Calculate Savings
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-primary"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-divider">
            <div className="py-4 space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-background-light rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/solar-calculator" 
                className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-background-light rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculator
              </Link>
              
              <div className="px-4 py-2">
                <p className="text-sm font-medium text-text-primary mb-2">States</p>
                <div className="grid grid-cols-2 gap-1">
                  {topStates.map((state) => (
                    <Link
                      key={state.code}
                      href={`/solar-calculator/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-text-secondary hover:text-primary hover:bg-background-light p-2 rounded transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {state.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href="#faq" 
                className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-background-light rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              
              <div className="px-4 pt-2">
                <Link
                  href="/solar-calculator"
                  className="block bg-cta hover:bg-cta-hover text-white px-4 py-2 rounded-lg font-medium text-center transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Calculate Savings
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
