export interface StateSolarData {
  code: string;
  name: string;
  avgElectricityPrice: number;  // USD/kWh
  sunlightHours: number;        // avg daily peak hours
  incentiveFederal: number;     // fixed 0.30
  incentiveState: number;       // state rebate (0.00-0.15)
}

export const statesSolarData: StateSolarData[] = [
  { code: "CA", name: "California", avgElectricityPrice: 0.25, sunlightHours: 5.5, incentiveFederal: 0.30, incentiveState: 0.10 },
  { code: "TX", name: "Texas", avgElectricityPrice: 0.14, sunlightHours: 5.0, incentiveFederal: 0.30, incentiveState: 0.05 },
  { code: "NY", name: "New York", avgElectricityPrice: 0.22, sunlightHours: 4.2, incentiveFederal: 0.30, incentiveState: 0.08 },
  { code: "FL", name: "Florida", avgElectricityPrice: 0.16, sunlightHours: 5.2, incentiveFederal: 0.30, incentiveState: 0.04 },
  { code: "AZ", name: "Arizona", avgElectricityPrice: 0.13, sunlightHours: 6.5, incentiveFederal: 0.30, incentiveState: 0.07 },
  { code: "WA", name: "Washington", avgElectricityPrice: 0.10, sunlightHours: 3.8, incentiveFederal: 0.30, incentiveState: 0.00 },
  { code: "OR", name: "Oregon", avgElectricityPrice: 0.11, sunlightHours: 4.0, incentiveFederal: 0.30, incentiveState: 0.03 },
  { code: "NV", name: "Nevada", avgElectricityPrice: 0.12, sunlightHours: 6.2, incentiveFederal: 0.30, incentiveState: 0.06 },
  { code: "UT", name: "Utah", avgElectricityPrice: 0.11, sunlightHours: 5.8, incentiveFederal: 0.30, incentiveState: 0.05 },
  { code: "CO", name: "Colorado", avgElectricityPrice: 0.13, sunlightHours: 5.3, incentiveFederal: 0.30, incentiveState: 0.04 },
  { code: "NM", name: "New Mexico", avgElectricityPrice: 0.12, sunlightHours: 6.0, incentiveFederal: 0.30, incentiveState: 0.05 },
  { code: "HI", name: "Hawaii", avgElectricityPrice: 0.32, sunlightHours: 5.5, incentiveFederal: 0.30, incentiveState: 0.08 },
  { code: "GA", name: "Georgia", avgElectricityPrice: 0.12, sunlightHours: 4.8, incentiveFederal: 0.30, incentiveState: 0.03 },
  { code: "NC", name: "North Carolina", avgElectricityPrice: 0.12, sunlightHours: 4.6, incentiveFederal: 0.30, incentiveState: 0.04 },
  { code: "SC", name: "South Carolina", avgElectricityPrice: 0.13, sunlightHours: 4.8, incentiveFederal: 0.30, incentiveState: 0.03 }
];

export function getStateBySlug(slug: string) {
  return statesSolarData.find(s => s.name.toLowerCase().replace(/\s+/g,'-') === slug);
}

export function getStateByCode(code: string) {
  return statesSolarData.find(s => s.code.toLowerCase() === code.toLowerCase());
}
