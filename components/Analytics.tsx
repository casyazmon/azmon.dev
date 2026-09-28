import Script from "next/script";

/**
 * Umami analytics (cookieless, no consent banner needed). Renders nothing unless
 * NEXT_PUBLIC_UMAMI_WEBSITE_ID is set at build time, and only counts visits on
 * azmon.dev so local and preview traffic stays out of the numbers.
 */
const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

const Analytics = () =>
  websiteId ? (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id={websiteId}
      data-domains="azmon.dev,www.azmon.dev"
      strategy="afterInteractive"
    />
  ) : null;

export default Analytics;
