
function SEOSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Maestro Alirio - Centro Espiritual',
    'description': 'Centro Espiritual especializado en sanación energética, videncia, tarot y amarres de amor',
    'url': 'https://maestroalirio.mx',
    'telephone': '+525537188949',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'MX',
      'addressRegion': 'Ciudad de México'
    },
    'priceRange': '$',
    'servesCuisine': 'Servicios Espirituales',
    'serviceArea': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': '19.4326',
        'longitude': '-99.1332'
      },
      'geoRadius': '50000'
    },
    'sameAs': [
      'https://www.instagram.com/maestroalirio',
      'https://www.facebook.com/maestroalirio',
      'https://wa.me/525537188949'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

export default SEOSchema
