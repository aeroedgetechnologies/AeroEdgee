import { useEffect } from 'react';

const SITE_URL = 'https://aetechnologies.in';
const DEFAULT_TITLE = 'AeroEdge Technologies | Drones, Surveillance & Defence Automation';
const DEFAULT_DESCRIPTION =
  'AeroEdge Technologies delivers military-grade drones, surveillance systems, anti-UAV solutions, and automation for defence, energy, agriculture, and logistics across India.';

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  keywords,
}) {
  const fullTitle = title ? `${title} | AeroEdge Technologies` : DEFAULT_TITLE;
  const canonical = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', 'AeroEdge Technologies', 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setCanonical(canonical);
  }, [fullTitle, description, canonical, keywords]);

  return null;
}

export { SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_TITLE };
