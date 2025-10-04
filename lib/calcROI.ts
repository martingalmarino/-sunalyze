import { zipData, defaultData } from './zipData';

export function getLocalData(zip: string) {
  return zipData[zip as keyof typeof zipData] || defaultData;
}

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
