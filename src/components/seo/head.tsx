import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

/**
 * SEO Head Component
 * 
 * A reusable component for managing SEO meta tags across the application.
 * Uses react-helmet-async for dynamic head management.
 * 
 * @example
 * ```tsx
 * <Head
 *   title="Dashboard - My App"
 *   description="Manage your dashboard and settings"
 *   keywords="dashboard, settings, management"
 * />
 * ```
 */
export const Head = ({
  title,
  description,
  keywords,
  author = 'Bulletproof React Vite',
  ogImage,
  ogType = 'website',
  canonical,
  noindex = false,
  children,
}: HeadProps) => {
  const siteTitle = import.meta.env.VITE_SITE_TITLE || 'Bulletproof React Vite';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:url" content={canonical || siteUrl} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      
      {/* Additional Children */}
      {children}
    </Helmet>
  );
};
