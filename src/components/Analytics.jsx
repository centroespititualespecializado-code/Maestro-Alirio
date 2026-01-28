import React from 'react'

function Analytics() {
  React.useEffect(() => {
    // Google Analytics
    const googleAnalyticsId = import.meta.env.VITE_GA_ID
    if (googleAnalyticsId) {
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`
      script.async = true
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', googleAnalyticsId)
    }
  }, [])

  return null
}

export default Analytics
