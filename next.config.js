const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  // Setting Phase
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD
  console.log(`isDev:${isDev}  isProd:${isProd}`)

  const reactStrictMode = true;
  
  const env = {
    SERVER_NAME: (() => {
      if (isDev) return 'http://localhost:3000/api'
      if (isProd) return 'https://myzodiac.vercel.app/api'
    })(),
    GOOGLE_ANALYTICS_ID: 'G-N6PP7TSZ1F',
  }

  // Next.config is an object
  return {
    reactStrictMode,
    env,
  }
}