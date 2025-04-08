const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'loyaldude';

const nextConfig = {
  output: isGithubPages ? 'export' : undefined,
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  images: { 
    unoptimized: true 
  },
  trailingSlash: true,
  reactStrictMode: true,

  // Correct experimental flags (removed invalid turbo)
  experimental: {
    optimizeCss: true, // Note the correct spelling (optimizeCss → optimizeCss)
    scrollRestoration: true,
    largePageDataBytes: 256 * 1000,
  }
};

module.exports = nextConfig;