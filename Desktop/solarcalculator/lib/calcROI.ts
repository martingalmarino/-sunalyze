import { zipData, defaultData } from './zipData';
import { getIncentives } from './incentivesData';

export function getLocalData(zip: string) {
  return zipData[zip as keyof typeof zipData] || defaultData;
}

// Legacy function for backward compatibility
export function calcROI(zip: string, bill: number, systemSize: number) {
  const data = getLocalData(zip);

  const annualBill = bill * 12;
  const annualProd = systemSize * data.sunlightHours * 365 * 0.85;
  const annualSavings = annualProd * data.electricityPrice;
  const systemCost = systemSize * 3000; // rough $/kW
  const netCost = systemCost * (1 - data.incentiveFederal - data.incentiveState);
  const roiYears = netCost / annualSavings;

  return {
    state: data.state,
    annualSavings: Math.round(annualSavings),
    roiYears: roiYears.toFixed(1)
  };
}

// New function using live data
export function calcROIWithLiveData({
  annualSunHours,
  electricityPrice,
  systemSize,
  stateCode,
  bill
}: {
  annualSunHours: number;
  electricityPrice: number;
  systemSize: number;
  stateCode: string;
  bill: number;
}) {
  const { federal, state } = getIncentives(stateCode);

  // Calculate annual energy production (kWh)
  const annualProd = systemSize * annualSunHours * 365 * 0.85; // 85% efficiency factor
  
  // Calculate annual savings
  const annualSavings = annualProd * electricityPrice;
  
  // Calculate system cost (average $3,000 per kW)
  const systemCost = systemSize * 3000;
  
  // Apply incentives to get net cost
  const netCost = systemCost * (1 - federal - state);
  
  // Calculate ROI in years
  const roiYears = netCost / annualSavings;

  // Calculate additional metrics
  const totalSystemSavings = annualSavings * 25; // 25-year system life
  const netSavings = totalSystemSavings - netCost;
  const savingsPercentage = (netSavings / systemCost) * 100;

  // Convert state code to full state name
  const stateNames: { [key: string]: string } = {
    CA: "California", TX: "Texas", NY: "New York", FL: "Florida", AZ: "Arizona",
    CO: "Colorado", NJ: "New Jersey", MA: "Massachusetts", IL: "Illinois", NC: "North Carolina",
    GA: "Georgia", VA: "Virginia", WA: "Washington", OR: "Oregon", NV: "Nevada"
  };

  return {
    state: stateNames[stateCode] || stateCode,
    annualSavings: Math.round(annualSavings),
    roiYears: roiYears.toFixed(1),
    incentives: { 
      federal: Math.round(federal * 100), 
      state: Math.round(state * 100) 
    },
    systemCost: Math.round(systemCost),
    netCost: Math.round(netCost),
    annualProduction: Math.round(annualProd),
    totalSavings: Math.round(totalSystemSavings),
    netSavings: Math.round(netSavings),
    savingsPercentage: Math.round(savingsPercentage),
    paybackYears: Math.ceil(roiYears)
  };
}