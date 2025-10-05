export const incentivesData = {
  federal: {
    name: "Federal Investment Tax Credit (ITC)",
    creditPercent: 0.30,
    description: "The federal ITC allows homeowners to deduct 30% of the cost of a solar system from federal taxes. Valid through 2032."
  },
  states: {
    CA: { 
      name: "California", 
      rebatePercent: 0.10, 
      description: "Additional state rebate and utility-based incentives." 
    },
    NY: { 
      name: "New York", 
      rebatePercent: 0.08, 
      description: "State tax credit plus local rebates." 
    },
    TX: { 
      name: "Texas", 
      rebatePercent: 0.05, 
      description: "Property tax exemption plus some local rebates." 
    },
    FL: { 
      name: "Florida", 
      rebatePercent: 0.04, 
      description: "Sales and property tax exemptions for solar installations." 
    },
    AZ: { 
      name: "Arizona", 
      rebatePercent: 0.07, 
      description: "State tax credit up to a capped amount plus net metering benefits." 
    },
    CO: { 
      name: "Colorado", 
      rebatePercent: 0.06, 
      description: "State tax credit and local utility rebates." 
    },
    NJ: { 
      name: "New Jersey", 
      rebatePercent: 0.09, 
      description: "SREC program and state rebates." 
    },
    MA: { 
      name: "Massachusetts", 
      rebatePercent: 0.08, 
      description: "Mass Solar Loan program and SMART incentives." 
    },
    IL: { 
      name: "Illinois", 
      rebatePercent: 0.05, 
      description: "Illinois Shines program and net metering." 
    },
    NC: { 
      name: "North Carolina", 
      rebatePercent: 0.04, 
      description: "State tax credit and utility rebates." 
    },
    GA: { 
      name: "Georgia", 
      rebatePercent: 0.03, 
      description: "Property tax exemption for solar installations." 
    },
    VA: { 
      name: "Virginia", 
      rebatePercent: 0.04, 
      description: "Property tax exemption and net metering." 
    },
    WA: { 
      name: "Washington", 
      rebatePercent: 0.05, 
      description: "State sales tax exemption and local rebates." 
    },
    OR: { 
      name: "Oregon", 
      rebatePercent: 0.06, 
      description: "Energy Trust of Oregon rebates and tax credits." 
    },
    NV: { 
      name: "Nevada", 
      rebatePercent: 0.05, 
      description: "Property tax exemption and net metering." 
    }
  }
};

export function getIncentives(stateCode: string) {
  const federal = incentivesData.federal.creditPercent;
  const state = incentivesData.states[stateCode as keyof typeof incentivesData.states]?.rebatePercent || 0;
  return { federal, state };
}

export function getStateIncentiveInfo(stateCode: string) {
  const stateInfo = incentivesData.states[stateCode as keyof typeof incentivesData.states];
  return {
    name: stateInfo?.name || "Other States",
    rebatePercent: stateInfo?.rebatePercent || 0,
    description: stateInfo?.description || "Check with local utilities for available incentives."
  };
}