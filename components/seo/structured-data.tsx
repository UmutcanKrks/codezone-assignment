import Script from 'next/script'

interface StructuredDataProps {
  type?: 'website' | 'organization' | 'article' | 'musicGroup'
  data?: Record<string, any>
}

export default function StructuredData({ type = 'website', data = {} }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    }

    switch (type) {
      case 'website':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: 'Rapkology',
          description: "Türkiye'nin en büyük rap müzik platformu. En son haberler, etkinlikler, müzikler ve videolar.",
          url: 'https://rapkology.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://rapkology.com/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Rapkology',
            logo: {
              '@type': 'ImageObject',
              url: 'https://rapkology.com/logos/rapkology-logo.png'
            }
          },
          ...data
        }

      case 'organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: 'Rapkology',
          description: "Türkiye'nin en büyük rap müzik platformu",
          url: 'https://rapkology.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://rapkology.com/logos/rapkology-logo.png',
            width: 235,
            height: 60
          },
          sameAs: [
            'https://twitter.com/rapkology',
            'https://instagram.com/rapkology',
            'https://youtube.com/rapkology',
            'https://spotify.com/rapkology'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: ['Turkish', 'English']
          },
          ...data
        }

      case 'article':
        return {
          ...baseData,
          '@type': 'Article',
          headline: data.title || 'Rapkology Article',
          description: data.description || '',
          image: data.image || 'https://rapkology.com/logos/rapkology-logo.png',
          author: {
            '@type': 'Person',
            name: data.author || 'Rapkology'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Rapkology',
            logo: {
              '@type': 'ImageObject',
              url: 'https://rapkology.com/logos/rapkology-logo.png'
            }
          },
          datePublished: data.datePublished || new Date().toISOString(),
          dateModified: data.dateModified || new Date().toISOString(),
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url || 'https://rapkology.com'
          },
          ...data
        }

      case 'musicGroup':
        return {
          ...baseData,
          '@type': 'MusicGroup',
          name: data.name || 'Artist Name',
          description: data.description || '',
          image: data.image || '',
          genre: ['Hip Hop', 'Rap', 'Turkish Rap'],
          foundingLocation: {
            '@type': 'Place',
            name: 'Turkey'
          },
          ...data
        }

      default:
        return baseData
    }
  }

  const structuredData = getStructuredData()

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

// Convenience components for specific types
export function WebsiteStructuredData(props: Omit<StructuredDataProps, 'type'>) {
  return <StructuredData type="website" {...props} />
}

export function OrganizationStructuredData(props: Omit<StructuredDataProps, 'type'>) {
  return <StructuredData type="organization" {...props} />
}

export function ArticleStructuredData(props: Omit<StructuredDataProps, 'type'>) {
  return <StructuredData type="article" {...props} />
}

export function MusicGroupStructuredData(props: Omit<StructuredDataProps, 'type'>) {
  return <StructuredData type="musicGroup" {...props} />
}