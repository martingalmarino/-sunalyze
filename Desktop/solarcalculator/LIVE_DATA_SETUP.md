# 🌞 Sunalyze - Live Data Integration Setup

## 🚀 New Features Added

### ✅ Live Data Integration
- **NREL API**: Real-time solar resource data (sunlight hours)
- **EIA API**: Current electricity prices by state
- **Federal & State Incentives**: Comprehensive incentive database

### 🔧 Technical Implementation
- **Axios**: HTTP client for API calls
- **Environment Variables**: Secure API key management
- **Fallback System**: Graceful degradation to mock data
- **Enhanced UI**: Detailed financial breakdown and location data

---

## 📋 Setup Instructions

### 1. Environment Variables
Copy the example file and add your API keys:

```bash
cp env.example .env.local
```

Update `.env.local` with your actual API keys:
```env
NREL_API_KEY=kTpZclTkeEL4yC5vIlH4Bz6BFQm2EwECozC6fX75
EIA_API_KEY=Izv7B5RXELPgGcpTEbQzElbTtpEwgizT4LLp8w2e
```

### 2. API Keys
- **NREL API**: Get free key at https://developer.nrel.gov/
- **EIA API**: Get free key at https://www.eia.gov/opendata/

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

---

## 🎯 New Calculator Features

### 📊 Enhanced Data Display
- **Location Data**: State, electricity rate, sun hours, annual production
- **Financial Summary**: System cost, net cost after incentives, payback period
- **Incentives Breakdown**: Federal tax credit (30%) + state incentives
- **25-Year Projection**: Total net savings over system lifetime

### 🔄 Data Source Toggle
- **Live Data Mode**: Real-time data from NREL & EIA APIs
- **Mock Data Mode**: Fallback for development/testing

### 🎨 Improved UI
- **Loading States**: Spinner during API calls
- **Error Handling**: Graceful fallback messages
- **Responsive Design**: Mobile-friendly layout
- **Visual Hierarchy**: Clear data organization

---

## 📁 New Files Added

```
lib/
├── incentivesData.ts    # Federal & state incentive database
├── apiClient.ts         # NREL & EIA API integration
└── calcROI.ts          # Enhanced ROI calculations

components/
└── SolarCalculator.tsx  # Updated with live data support

.env.local               # Environment variables (create from env.example)
LIVE_DATA_SETUP.md       # This documentation
```

---

## 🔧 API Integration Details

### NREL Solar Resource API
- **Endpoint**: `https://developer.nrel.gov/api/solar/solar_resource/v1.json`
- **Data**: Annual average peak sun hours
- **Fallback**: Latitude-based estimates

### EIA Retail Sales API
- **Endpoint**: `https://api.eia.gov/v2/electricity/retail-sales/data/`
- **Data**: Residential electricity prices by state
- **Fallback**: State-specific average prices

### Incentives Database
- **Federal**: 30% Investment Tax Credit (ITC)
- **States**: 15 states with specific rebate percentages
- **Expandable**: Easy to add new states

---

## 🚀 Deployment

### Vercel Environment Variables
Add these to your Vercel project settings:

```
NREL_API_KEY=kTpZclTkeEL4yC5vIlH4Bz6BFQm2EwECozC6fX75
EIA_API_KEY=Izv7B5RXELPgGcpTEbQzElbTtpEwgizT4LLp8w2e
```

### Production Build
```bash
npm run build
npm start
```

---

## 🎯 MVP Ready Features

✅ **Live Data Integration**: Real-time solar and electricity data  
✅ **Comprehensive Incentives**: Federal + 15 state incentives  
✅ **Enhanced UI**: Detailed financial breakdown  
✅ **Error Handling**: Graceful fallback to mock data  
✅ **Responsive Design**: Mobile-friendly interface  
✅ **Production Ready**: Optimized build and deployment  

---

## 📞 Support

For questions or issues:
- **Email**: martingalmarino@gmail.com
- **GitHub**: https://github.com/martingalmarino/-sunalyze.git
- **Live Site**: https://www.sunalyze.net

---

*Built with Next.js 14, TypeScript, TailwindCSS, and live data from NREL & EIA*
