// Mock data for Solar ROI Calculator
export const zipData = {
  "90001": {   // Los Angeles, CA
    state: "CA",
    electricityPrice: 0.25,
    sunlightHours: 5.5,
    incentiveFederal: 0.30,
    incentiveState: 0.10
  },
  "73301": {   // Austin, TX
    state: "TX",
    electricityPrice: 0.14,
    sunlightHours: 5.0,
    incentiveFederal: 0.30,
    incentiveState: 0.05
  },
  "10001": {   // New York, NY
    state: "NY",
    electricityPrice: 0.22,
    sunlightHours: 4.2,
    incentiveFederal: 0.30,
    incentiveState: 0.08
  },
  "33101": {   // Miami, FL
    state: "FL",
    electricityPrice: 0.16,
    sunlightHours: 5.2,
    incentiveFederal: 0.30,
    incentiveState: 0.04
  },
  "85001": {   // Phoenix, AZ
    state: "AZ",
    electricityPrice: 0.13,
    sunlightHours: 6.5,
    incentiveFederal: 0.30,
    incentiveState: 0.07
  }
};

export const defaultData = {
  state: "US",
  electricityPrice: 0.18,
  sunlightHours: 4.8,
  incentiveFederal: 0.30,
  incentiveState: 0.00
};
