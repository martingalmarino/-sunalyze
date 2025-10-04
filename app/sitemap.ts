import { MetadataRoute } from 'next'
import { statesSolarData } from '../lib/statesData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sunalyze.vercel.app'
  
  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/solar-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // State pages
  const statePages = statesSolarData.map((state) => ({
    url: `${baseUrl}/solar-calculator/${state.name.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...routes, ...statePages]
}
