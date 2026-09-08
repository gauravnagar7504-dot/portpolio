import { useEffect } from 'react';

export default function SEOHead({
  title = 'Dynamic Designing | Premium Website Development & Design Studio',
  description = 'Dynamic Designing is a luxury website development & UI/UX studio. We build ultra-fast, bespoke websites for ambitious brands across India and worldwide.',
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://www.dynamicdesigninng.com/images/frame%201.png',
  schemaData = null,
}) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper to update or create meta tag
    const setMeta = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta
    if (description) {
      setMeta('name', 'description', description);
    }

    // 3. Canonical URL
    const canonicalHref = canonicalUrl || window.location.href.split('#')[0];
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalHref);

    // 4. Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalHref);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage);

    // 5. Twitter
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 6. Structured Data (JSON-LD)
    let schemaScript = document.getElementById('page-structured-data');
    if (schemaData) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'page-structured-data';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      // Cleanup custom structured data if needed
      const customScript = document.getElementById('page-structured-data');
      if (customScript) {
        customScript.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, ogImage, schemaData]);

  return null;
}
