# Sunalyze - Solar Panel Savings Calculator

A comprehensive Next.js application for calculating solar panel savings and ROI across different US states. Built with TypeScript, TailwindCSS, and optimized for SEO.

## 🌟 Features

- **Interactive Solar Calculator**: Calculate potential savings based on ZIP code, monthly bill, and system size
- **State-Specific Pages**: 15 US states with localized data and incentives
- **SEO Optimized**: Dynamic meta tags, Open Graph, Twitter Cards, and JSON-LD schema
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI/UX**: Clean, professional design with "Sunrise/Solar Warm" theme
- **Internal Linking**: Comprehensive navigation and interlinking for better SEO
- **Breadcrumbs**: User-friendly navigation with breadcrumb trails
- **Static Site Generation**: Pre-rendered pages for optimal performance

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Deployment**: Vercel
- **SEO**: Next.js Metadata API, JSON-LD Schema

## 📊 Data Coverage

### States Included
- California, Texas, New York, Florida, Arizona
- Washington, Oregon, Nevada, Utah, Colorado
- New Mexico, Hawaii, Georgia, North Carolina, South Carolina

### Data Points Per State
- Average electricity price ($/kWh)
- Daily peak sunlight hours
- Federal tax credit (30%)
- State-specific rebates (0-15%)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/martingalmarino/-sunalyze.git
   cd -sunalyze
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── sitemap.ts           # Dynamic sitemap
│   └── solar-calculator/
│       ├── page.tsx         # Calculator page
│       └── [state]/
│           └── page.tsx     # State-specific pages
├── components/
│   ├── Breadcrumbs.tsx      # Breadcrumb navigation
│   ├── Footer.tsx           # Site footer
│   ├── Header.tsx           # Site header
│   └── SolarCalculator.tsx  # Main calculator component (Sunalyze branded)
├── lib/
│   ├── calcROI.ts           # ROI calculation logic
│   ├── statesData.ts        # State data and utilities
│   └── zipData.ts           # ZIP code data
└── tailwind.config.js       # Tailwind configuration
```

## 🎨 Design System

### Color Palette (Sunrise/Solar Warm)
- **Primary**: #F9A825 (Solar Yellow)
- **Secondary**: #FF7043 (Soft Orange)
- **CTA**: #FF9800 (Main Buttons)
- **Background**: #FFFFFF / #F5F5F5
- **Text**: #212121 / #424242 / #757575

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, primary text color
- **Body**: Secondary text color
- **Captions**: Muted text color

## 🌐 SEO Features

- **Dynamic Meta Tags**: Unique titles and descriptions per page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **JSON-LD Schema**: FAQ and structured data
- **Sitemap**: Auto-generated XML sitemap
- **Breadcrumbs**: Improved navigation and SEO
- **Internal Linking**: 100+ contextual internal links

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Grid**: CSS Grid and Flexbox layouts
- **Touch Friendly**: Appropriate button sizes and spacing

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Import project from GitHub
   - Vercel will auto-detect Next.js settings

2. **Environment Variables** (if needed)
   ```bash
   # Add any required environment variables in Vercel dashboard
   ```

3. **Deploy**
   - Automatic deployments on git push
   - Preview deployments for pull requests

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 📈 Performance

- **Static Site Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Caching**: Vercel Edge Network caching

## 🔧 Configuration

### TailwindCSS
Custom theme configuration in `tailwind.config.js` with:
- Extended color palette
- Custom spacing and typography
- Component-specific utilities

### Next.js
- App Router for modern routing
- TypeScript configuration
- ESLint integration

## 📊 Analytics & Monitoring

Ready for integration with:
- Google Analytics
- Vercel Analytics
- Hotjar
- Other tracking services

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions:
- Create an issue in this repository
- Contact: [martingalmarino@gmail.com](mailto:martingalmarino@gmail.com)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Vercel for seamless deployment
- Solar energy data from EIA and NREL sources

---

**Live Demo**: [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/martingalmarino/-sunalyze.git)

Built with ❤️ by [Martin Galmarino](https://github.com/martingalmarino)