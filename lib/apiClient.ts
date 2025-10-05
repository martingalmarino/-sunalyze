import axios from "axios";

const NREL_API = "https://developer.nrel.gov/api/solar/solar_resource/v1.json";
const EIA_API = "https://api.eia.gov/v2/electricity/retail-sales/data/";

// ZIP to State mapping for MVP
const ZIP_TO_STATE: { [key: string]: string } = {
  "9": "CA", "90": "CA", "91": "CA", "92": "CA", "93": "CA", "94": "CA", "95": "CA", "96": "CA",
  "7": "TX", "75": "TX", "76": "TX", "77": "TX", "78": "TX", "79": "TX",
  "1": "NY", "10": "NY", "11": "NY", "12": "NY", "13": "NY", "14": "NY",
  "3": "FL", "32": "FL", "33": "FL", "34": "FL", "35": "FL", "36": "FL", "37": "FL",
  "85": "AZ", "86": "AZ", "87": "AZ",
  "80": "CO", "81": "CO", "82": "CO", "83": "CO", "84": "CO",
  "07": "NJ", "08": "NJ", "09": "NJ",
  "01": "MA", "02": "MA", "03": "MA", "04": "MA", "05": "MA", "06": "MA",
  "60": "IL", "61": "IL", "62": "IL", "63": "IL", "64": "IL", "65": "IL",
  "27": "NC", "28": "NC", "29": "NC",
  "30": "GA", "31": "GA",
  "20": "VA", "21": "VA", "22": "VA", "23": "VA", "24": "VA", "25": "VA", "26": "VA",
  "98": "WA", "99": "WA",
  "97": "OR",
  "88": "NV", "89": "NV"
};

const STATE_COORDINATES: { [key: string]: { lat: number; lon: number } } = {
  CA: { lat: 34.05, lon: -118.24 },
  TX: { lat: 31.97, lon: -99.90 },
  NY: { lat: 40.71, lon: -74.00 },
  FL: { lat: 28.54, lon: -81.38 },
  AZ: { lat: 33.45, lon: -112.07 },
  CO: { lat: 39.74, lon: -104.99 },
  NJ: { lat: 40.22, lon: -74.76 },
  MA: { lat: 42.36, lon: -71.06 },
  IL: { lat: 41.88, lon: -87.63 },
  NC: { lat: 35.78, lon: -78.64 },
  GA: { lat: 33.75, lon: -84.39 },
  VA: { lat: 37.54, lon: -77.43 },
  WA: { lat: 47.61, lon: -122.33 },
  OR: { lat: 45.52, lon: -122.67 },
  NV: { lat: 36.17, lon: -115.15 }
};

export function getStateFromZip(zip: string): string {
  const prefix = zip.substring(0, 2);
  return ZIP_TO_STATE[prefix] || "CA";
}

export function getCoordinatesFromState(stateCode: string): { lat: number; lon: number } {
  return STATE_COORDINATES[stateCode] || STATE_COORDINATES.CA;
}

export async function getSunlightHours(lat: number, lon: number): Promise<number> {
  console.log(`Getting sunlight hours for lat: ${lat}, lon: ${lon}`);
  if (lat > 45) return 4.0;
  if (lat > 40) return 4.5;
  if (lat > 35) return 5.0;
  if (lat > 30) return 5.5;
  return 6.0;
}

export async function getElectricityPrice(stateCode: string): Promise<number> {
  console.log(`Getting electricity price for state: ${stateCode}`);
  const fallbackPrices: { [key: string]: number } = {
    CA: 0.28, NY: 0.22, TX: 0.14, FL: 0.13, AZ: 0.12,
    CO: 0.13, NJ: 0.18, MA: 0.25, IL: 0.14, NC: 0.12,
    GA: 0.13, VA: 0.13, WA: 0.11, OR: 0.11, NV: 0.12
  };
  return fallbackPrices[stateCode] || 0.15;
}

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
