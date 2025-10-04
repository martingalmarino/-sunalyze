# 🚀 Deployment Guide - SolarCalc

## Deploy to Vercel (Recommended)

### Method 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/martingalmarino/-sunalyze.git)

### Method 2: Manual Deploy

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import from GitHub: `https://github.com/martingalmarino/-sunalyze.git`
   - Vercel will auto-detect Next.js settings

3. **Configure Project**
   - **Project Name**: `sunalyze` (or your preferred name)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

4. **Environment Variables** (Optional)
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME=SolarCalc
   NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

## 🌐 Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `sunalyze.com`)

2. **DNS Configuration**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or A records pointing to Vercel IPs (see Vercel docs)

3. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - HTTPS will be enabled automatically

## 📊 Performance Optimization

### Vercel Analytics (Optional)
1. Enable Vercel Analytics in project settings
2. Get insights on Core Web Vitals and performance

### Image Optimization
- Next.js automatically optimizes images
- Vercel provides global CDN for fast delivery

### Caching
- Static pages are cached at edge locations
- API routes use appropriate caching headers

## 🔧 Build Configuration

The project includes optimized configuration:

### `vercel.json`
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "headers": [...], // Security headers
  "redirects": [...], // SEO-friendly redirects
  "rewrites": [...] // Clean URLs
}
```

### Build Output
- **Static Pages**: 21 pre-rendered pages
- **Bundle Size**: ~95KB first load JS
- **Performance**: Optimized for Core Web Vitals

## 📈 SEO Features

### Automatic Features
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Meta tags for all pages
- ✅ Open Graph and Twitter Cards
- ✅ JSON-LD structured data

### Manual Setup
1. **Google Search Console**
   - Add your domain
   - Submit sitemap: `https://your-domain.com/sitemap.xml`

2. **Google Analytics** (Optional)
   - Add GA tracking code to `app/layout.tsx`
   - Use environment variable for GA ID

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (requires 18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **404 on State Pages**
   - Ensure `generateStaticParams` is working
   - Check that all state slugs are valid

3. **Styling Issues**
   - Verify TailwindCSS is properly configured
   - Check that all CSS classes are included in build

### Debug Commands
```bash
# Local development
npm run dev

# Type checking
npm run type-check

# Build locally
npm run build

# Start production server
npm run start
```

## 📱 Testing

### Local Testing
```bash
# Start development server
npm run dev

# Test all routes
curl http://localhost:3000
curl http://localhost:3000/solar-calculator
curl http://localhost:3000/solar-calculator/california
```

### Production Testing
1. Test all major routes after deployment
2. Verify responsive design on mobile
3. Check SEO meta tags
4. Test calculator functionality

## 🔄 Updates and Maintenance

### Automatic Deployments
- Push to `main` branch triggers automatic deployment
- Preview deployments for pull requests

### Manual Updates
1. Make changes locally
2. Test with `npm run build`
3. Commit and push to GitHub
4. Vercel automatically deploys

## 📞 Support

If you encounter issues:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review [Next.js Documentation](https://nextjs.org/docs)
3. Create an issue in the GitHub repository

---

**Live Demo**: [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/martingalmarino/-sunalyze.git)

Built with ❤️ by [Martin Galmarino](https://github.com/martingalmarino)
