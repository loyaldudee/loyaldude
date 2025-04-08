import type { NextConfig } from 'next'

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoName = 'loyaldude' // MUST match your GitHub repo name exactly

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: isGithubPages ? 'export' : undefined,
  
  // Path configuration (critical for GitHub Pages)
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  trailingSlash: true, // Ensures consistent path resolution

  // Image handling (required for static export)
  images: {
    unoptimized: true // Disables default Image Optimization API
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_URL: isGithubPages 
      ? `https://loyaldudee.github.io/${repoName}`
      : 'http://localhost:3000',
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : ''
  },

  // Webpack configuration to handle asset paths
  webpack: (config) => {
    // Fixes path issues for static files
    config.output.publicPath = isGithubPages ? `/${repoName}/` : '/'
    return config
  }
}

export default nextConfig