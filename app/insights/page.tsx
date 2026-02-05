import { Metadata } from "next";
import { blogPosts, insightsConfig } from "@/lib/blog-data";
import InsightsClient from "./insights-client";

// AEO-optimized metadata
export const metadata: Metadata = {
  title: "Solar Insights & Guides | Expert Solar Education | RIV Solar",
  description: "90+ expert guides on solar panels, NEM 3.0, battery storage, tax credits, financing options, and real savings. Serving California, Florida & Puerto Rico. Learn everything about going solar in 2026.",
  keywords: ["California solar", "Florida solar", "Puerto Rico solar", "NEM 3.0", "solar tax credit", "solar battery storage", "PG&E rates", "SDG&E rates", "SCE rates", "solar financing", "solar installation"],
  openGraph: {
    title: "Solar Insights & Guides | RIV Solar",
    description: "90+ expert guides on solar energy. Learn about NEM 3.0, tax credits, battery storage, and how much you can save in California, Florida & Puerto Rico.",
    type: "website",
    url: "https://rivsolar.com/insights",
    images: [{ url: "https://rivsolar.com/images/insights-og.jpg", width: 1200, height: 630, alt: "RIV Solar Insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Insights & Guides | RIV Solar",
    description: "90+ expert guides on solar energy. Learn about NEM 3.0, tax credits, battery storage, and savings.",
  },
  alternates: {
    canonical: "https://rivsolar.com/insights",
  },
};

// JSON-LD Schema for AEO
function generateSchema() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Solar Insights & Guides",
    "description": "Expert guides on California solar panels, NEM 3.0, battery storage, tax credits, and financing options.",
    "url": "https://rivsolar.com/insights",
    "publisher": {
      "@type": "Organization",
      "name": "RIV Solar",
      "url": "https://rivsolar.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rivsolar.com/images/riv-logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": blogPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://rivsolar.com/insights/${post.slug}`,
        "name": post.title
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rivsolar.com" },
      { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://rivsolar.com/insights" }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RIV Solar",
    "url": "https://rivsolar.com",
    "logo": "https://rivsolar.com/images/riv-logo.png",
    "description": "Trusted residential solar company serving California, Florida & Puerto Rico. AI-powered tools, transparent pricing, 25-year warranty.",
    "areaServed": [
      { "@type": "State", "name": "California" },
      { "@type": "State", "name": "Florida" },
      { "@type": "AdministrativeArea", "name": "Puerto Rico" }
    ],
    "sameAs": [
      "https://facebook.com/rivsolar",
      "https://instagram.com/rivsolar",
      "https://linkedin.com/company/rivsolar"
    ]
  };

  return [collectionSchema, breadcrumbSchema, organizationSchema];
}

export default function InsightsPage() {
  const schemas = generateSchema();

  return (
    <>
      {/* AEO Schema Markup */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <InsightsClient blogPosts={blogPosts} config={insightsConfig} />
    </>
  );
}
