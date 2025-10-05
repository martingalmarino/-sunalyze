import axios from "axios";

const NREL_API = "https://developer.nrel.gov/api/solar/solar_resource/v1.json";
const EIA_API = "https://api.eia.gov/v2/electricity/retail-sales/data/";

// ZIP to State mapping for MVP
const ZIP_TO_STATE: { [key: string]: string } = {
  // California
  "9": "CA", "90": "CA", "91": "CA", "92": "CA", "93": "CA", "94": "CA", "95": "CA", "96": "CA",
  // Texas  
  "7": "TX", "75": "TX", "76": "TX", "77": "TX", "78": "TX", "79": "TX",
  // New York
  "1": "NY", "10": "NY", "11": "NY", "12": "NY", "13": "NY", "14": "NY",
  // Florida
  "3": "FL", "32": "FL", "33": "FL", "34": "FL", "35": "FL", "36": "FL", "37": "FL",
  // Arizona
  "85": "AZ", "86": "AZ", "87": "AZ",
  // Colorado
  "80": "CO", "81": "CO", "82": "CO", "83": "CO", "84": "CO",
  // New Jersey
  "07": "NJ", "08": "NJ", "09": "NJ",
  // Massachusetts
  "01": "MA", "02": "MA", "03": "MA", "04": "MA", "05": "MA", "06": "MA",
  // Illinois
  "60": "IL", "61": "IL", "62": "IL", "63": "IL", "64": "IL", "65": "IL",
  // North Carolina
  "27": "NC", "28": "NC", "29": "NC",
  // Georgia
  "30": "GA", "31": "GA",
  // Virginia
  "25": "VA", "26": "VA",
  // Washington
  "98": "WA", "99": "WA",
  // Oregon
  "97": "OR",
  // Nevada
  "88": "NV", "89": "NV",
  // Pennsylvania
  "15": "PA", "16": "PA", "17": "PA", "18": "PA", "19": "PA",
  // Maryland
  "20": "MD", "21": "MD", "22": "MD", "23": "MD", "24": "MD",
  // Minnesota
  "55": "MN", "56": "MN", "57": "MN", "58": "MN", "59": "MN",
  // Wisconsin
  "53": "WI", "54": "WI",
  // Oklahoma
  "73": "OK", "74": "OK",
  // Kansas
  "66": "KS", "67": "KS", "68": "KS", "69": "KS", "70": "KS", "71": "KS", "72": "KS"
};

// Default coordinates for states
const STATE_COORDINATES: { [key: string]: { lat: number; lon: number } } = {
  CA: { lat: 34.05, lon: -118.24 }, // Los Angeles
  TX: { lat: 31.97, lon: -99.90 },  // Austin
  NY: { lat: 40.71, lon: -74.00 },  // New York City
  FL: { lat: 28.54, lon: -81.38 },  // Orlando
  AZ: { lat: 33.45, lon: -112.07 }, // Phoenix
  CO: { lat: 39.74, lon: -104.99 }, // Denver
  NJ: { lat: 40.22, lon: -74.76 },  // Trenton
  MA: { lat: 42.36, lon: -71.06 },  // Boston
  IL: { lat: 41.88, lon: -87.63 },  // Chicago
  NC: { lat: 35.78, lon: -78.64 },  // Raleigh
  GA: { lat: 33.75, lon: -84.39 },  // Atlanta
  VA: { lat: 37.54, lon: -77.43 },  // Richmond
  WA: { lat: 47.61, lon: -122.33 }, // Seattle
  OR: { lat: 45.52, lon: -122.67 }, // Portland
  NV: { lat: 36.17, lon: -115.15 }, // Las Vegas
  PA: { lat: 40.27, lon: -76.88 },  // Harrisburg
  MD: { lat: 39.04, lon: -76.64 },  // Baltimore
  MN: { lat: 44.95, lon: -93.10 },  // Minneapolis
  WI: { lat: 43.07, lon: -89.40 },  // Madison
  OK: { lat: 35.47, lon: -97.51 },  // Oklahoma City
  KS: { lat: 39.05, lon: -95.67 }   // Topeka
};

export function getStateFromZip(zip: string): string {
  const prefix = zip.substring(0, 2);
  return ZIP_TO_STATE[prefix] || "CA"; // Default to CA if not found
}

export function getCoordinatesFromState(stateCode: string): { lat: number; lon: number } {
  return STATE_COORDINATES[stateCode] || STATE_COORDINATES.CA;
}

export async function getSunlightHours(lat: number, lon: number): Promise<number> {
  console.log(`Getting sunlight hours for lat: ${lat}, lon: ${lon}`);
  
  // Return reasonable sun hours based on latitude
  if (lat > 45) return 4.0; // Northern states (WA, OR, NY, etc.)
  if (lat > 40) return 4.5; // Mid-northern states (CO, UT, etc.)
  if (lat > 35) return 5.0; // Mid-latitude states (CA, NV, etc.)
  if (lat > 30) return 5.5; // Southern states (TX, FL, etc.)
  return 6.0; // Very southern states (AZ, NM, etc.)
}

export async function getElectricityPrice(stateCode: string): Promise<number> {
  console.log(`Getting electricity price for state: ${stateCode}`);
  
  // Use reliable fallback prices by state
  const fallbackPrices: { [key: string]: number } = {
    CA: 0.28, NY: 0.22, TX: 0.14, FL: 0.13, AZ: 0.12,
    CO: 0.13, NJ: 0.18, MA: 0.25, IL: 0.14, NC: 0.12,
    GA: 0.13, VA: 0.13, WA: 0.11, OR: 0.11, NV: 0.12,
    PA: 0.15, MD: 0.16, MN: 0.14, WI: 0.15, OK: 0.12, KS: 0.13
  };
  
  return fallbackPrices[stateCode] || 0.15;
}

// Combined function to get all solar data for a location
export async function getSolarData(zip: string): Promise<{
  stateCode: string;
  lat: number;
  lon: number;
  sunlightHours: number;
  electricityPrice: number;
}> {
  const stateCode = getStateFromZip(zip);
  const coordinates = getCoordinatesFromState(stateCode);
  
  const sunlightHours = await getSunlightHours(coordinates.lat, coordinates.lon);
  const electricityPrice = await getElectricityPrice(stateCode);
  
  return {
    stateCode,
    lat: coordinates.lat,
    lon: coordinates.lon,
    sunlightHours,
    electricityPrice
  };
}