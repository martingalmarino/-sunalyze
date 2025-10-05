"use client";
// Updated with complete toggle functionality
import React, { useState } from "react";
import { calcROI, calcROIWithLiveData } from "../lib/calcROI";
import { getSolarData } from "../lib/apiClient";
import { getStateIncentiveInfo } from "../lib/incentivesData";

interface SolarCalculatorProps {
  defaultState?: string;
  defaultBill?: number;
  defaultSize?: number;
}

interface CalculatorResult {
  state: string;
  annualSavings: number;
  roiYears: string;
  incentives: { federal: number; state: number };
  systemCost: number;
  netCost: number;
  annualProduction: number;
  totalSavings: number;
  netSavings: number;
  savingsPercentage: number;
  paybackYears: number;
  electricityPrice: number;
  sunlightHours: number;
}

export default function SolarCalculator({ 
  defaultState, 
  defaultBill = 150, 
  defaultSize = 5 
}: SolarCalculatorProps) {
  const [zip, setZip] = useState("");
  const [bill, setBill] = useState(defaultBill);
  const [size, setSize] = useState(defaultSize);
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [useLiveData, setUseLiveData] = useState(true);

  const handleCalculate = async () => {
    if (!zip.trim()) {
      setError("Please enter a ZIP code");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      if (useLiveData) {
        // Use live data from NREL and EIA via API route
        const response = await fetch('/api/solar-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ zip }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch solar data');
        }
        
        const solarData = await response.json();
        const stateInfo = getStateIncentiveInfo(solarData.stateCode);
        
        const roi = calcROIWithLiveData({
          annualSunHours: solarData.sunlightHours,
          electricityPrice: solarData.electricityPrice,
          systemSize: size,
          stateCode: solarData.stateCode,
          bill
        });

        setResult({
          ...roi,
          electricityPrice: solarData.electricityPrice,
          sunlightHours: solarData.sunlightHours
        });
      } else {
        // Use legacy mock data
        const res = calcROI(zip, bill, size);
        setResult({
          state: res.state,
          annualSavings: res.annualSavings,
          roiYears: res.roiYears,
          incentives: { federal: 30, state: 5 },
          systemCost: size * 3000,
          netCost: size * 3000 * 0.65,
          annualProduction: Math.round(size * 5 * 365 * 0.85),
          totalSavings: res.annualSavings * 25,
          netSavings: (res.annualSavings * 25) - (size * 3000 * 0.65),
          savingsPercentage: Math.round(((res.annualSavings * 25) - (size * 3000 * 0.65)) / (size * 3000) * 100),
          paybackYears: Math.ceil(parseFloat(res.roiYears)),
          electricityPrice: 0.15,
          sunlightHours: 5.0
        });
      }
    } catch (err) {
      console.error("Calculation error:", err);
      setError("Failed to fetch live data. Please try again or use mock data mode.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-background p-8 rounded-2xl shadow-md border border-divider">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">Solar Panel Savings Calculator</h1>
        <p className="text-text-secondary">Get your personalized savings estimate with live data</p>
        
        {/* Data Source Toggle */}
        <div className="mt-6">
          <p className="text-sm text-text-secondary text-center mb-3">Data Source</p>
          <div className="flex items-center justify-center bg-background-light rounded-lg p-1 border border-divider">
            <button
              onClick={() => setUseLiveData(true)}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                useLiveData
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Live Data
            </button>
            <button
              onClick={() => setUseLiveData(false)}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !useLiveData
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Mock Data
            </button>
          </div>
          <p className="text-xs text-text-muted text-center mt-2">
            {useLiveData 
              ? "Real-time solar and electricity data from government sources"
              : "Sample data for testing and demonstration"
            }
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full px-4 py-3 border border-divider rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            placeholder="e.g. 90210"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Monthly Electricity Bill ($)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary">$</span>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border border-divider rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="150"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            System Size (kW)
          </label>
          <div className="relative">
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full px-4 py-3 border border-divider rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="5"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary text-sm">kW</span>
          </div>
          <p className="text-xs text-text-muted mt-1">Typical residential systems: 3-8 kW</p>
        </div>

        <button
          onClick={handleCalculate}
          disabled={loading}
          className="w-full bg-cta hover:bg-cta-hover disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:transform-none"
        >
          <span className="flex items-center justify-center">
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {useLiveData ? "Fetching Live Data..." : "Calculating..."}
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Calculate My Savings
              </>
            )}
          </span>
        </button>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      {result && (
        <div className="mt-8 p-6 bg-background-light border border-divider rounded-xl">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Your Solar Savings Estimate</h3>
            <p className="text-sm text-text-muted">{useLiveData ? "Based on live data from NREL & EIA" : "Based on mock data"}</p>
          </div>

          <div className="space-y-4">
            {/* Location & Data Info */}
            <div className="bg-white p-4 rounded-lg border border-divider">
              <h4 className="font-semibold text-text-primary mb-3">Location Data</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-secondary">State:</span>
                  <span className="font-semibold text-text-primary ml-2">{result.state}</span>
                </div>
                <div>
                  <span className="text-text-secondary">Electricity Rate:</span>
                  <span className="font-semibold text-text-primary ml-2">${result.electricityPrice}/kWh</span>
                </div>
                <div>
                  <span className="text-text-secondary">Sun Hours:</span>
                  <span className="font-semibold text-text-primary ml-2">{result.sunlightHours} hrs/day</span>
                </div>
                <div>
                  <span className="text-text-secondary">Annual Production:</span>
                  <span className="font-semibold text-text-primary ml-2">{result.annualProduction.toLocaleString()} kWh</span>
                </div>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="bg-white p-4 rounded-lg border border-divider">
              <h4 className="font-semibold text-text-primary mb-3">Financial Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Annual Savings:</span>
                  <span className="font-bold text-cta text-lg">${result.annualSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">System Cost:</span>
                  <span className="font-semibold text-text-primary">${result.systemCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">After Incentives:</span>
                  <span className="font-semibold text-green-600">${result.netCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Payback Period:</span>
                  <span className="font-semibold text-text-primary">{result.paybackYears} years</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-divider">
                  <span className="text-text-secondary">25-Year Net Savings:</span>
                  <span className="font-bold text-green-600 text-lg">${result.netSavings.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Incentives Breakdown */}
            <div className="bg-white p-4 rounded-lg border border-divider">
              <h4 className="font-semibold text-text-primary mb-3">Incentives Applied</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Federal Tax Credit:</span>
                  <span className="font-semibold text-text-primary">{result.incentives.federal}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">State Incentives:</span>
                  <span className="font-semibold text-text-primary">{result.incentives.state}%</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-divider">
                  <span className="text-text-secondary">Total Savings:</span>
                  <span className="font-bold text-green-600">{result.savingsPercentage}% of system cost</span>
                </div>
              </div>
            </div>
          </div>
      
          <button
            onClick={() => alert("Redirect to partner quote form")}
            className="mt-6 w-full bg-cta hover:bg-cta-hover text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              Get Quotes from Local Installers
            </span>
          </button>

          <p className="text-xs text-text-muted mt-4 text-center">
            *Results are estimates based on current data. Actual savings may vary.
          </p>
        </div>
      )}
    </div>
  );
}