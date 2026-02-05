import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { blogPosts, BlogPost } from '@/lib/blog-data';

// Get related articles by category (same category, excluding current)
function getRelatedArticles(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

// If not enough in same category, get from other categories
function getMoreRelatedArticles(currentSlug: string, category: string, existing: BlogPost[], limit: number = 3): BlogPost[] {
  if (existing.length >= limit) return existing;

  const needed = limit - existing.length;
  const existingSlugs = new Set([currentSlug, ...existing.map(p => p.slug)]);

  const additional = blogPosts
    .filter(post => !existingSlugs.has(post.slug))
    .slice(0, needed);

  return [...existing, ...additional];
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// AEO-optimized dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  const title = post.title.replace(/\?/g, '');

  return {
    title: `${title} | RIV Solar`,
    description: `Learn about ${post.title.toLowerCase()}. Expert guide by ${post.author.name} for homeowners on solar panels, savings, and installation.`,
    keywords: [post.category.toLowerCase(), 'California solar', 'Florida solar', 'Puerto Rico solar', 'solar panels', 'solar savings', post.title.split(' ').slice(0, 3).join(' ')],
    openGraph: {
      title: post.title,
      description: `Expert guide by ${post.author.name}: ${post.title}. Everything homeowners need to know.`,
      type: 'article',
      url: `https://rivsolar.com/insights/${slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      publishedTime: '2026-01-01T00:00:00Z',
      modifiedTime: new Date(post.lastUpdated).toISOString(),
      authors: [post.author.name],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: `Expert guide by ${post.author.name}: ${post.title}`,
      images: [post.image],
    },
    alternates: {
      canonical: `https://rivsolar.com/insights/${slug}`,
    },
  };
}

// Map slugs to filenames
const slugToFilename: Record<string, string> = {
  // California articles (1-30)
  "is-solar-worth-it-california-2026": "01-is-solar-worth-it-california-2026.md",
  "should-i-go-solar-or-wait": "02-should-i-go-solar-or-wait.md",
  "is-solar-worth-it-low-electric-bill": "03-is-solar-worth-it-low-electric-bill.md",
  "should-i-get-solar-before-or-after-ev": "04-should-i-get-solar-before-or-after-ev.md",
  "is-solar-worth-it-inland-empire": "05-is-solar-worth-it-inland-empire.md",
  "what-is-30-percent-federal-solar-tax-credit": "06-what-is-30-percent-federal-solar-tax-credit.md",
  "what-solar-incentives-available-california-2026": "07-what-solar-incentives-available-california-2026.md",
  "will-solar-panels-increase-property-taxes-california": "08-will-solar-panels-increase-property-taxes-california.md",
  "pge-rates-2026-why-bill-keeps-rising": "09-pge-rates-2026-why-bill-keeps-rising.md",
  "sdge-highest-rates-america-how-to-fight-back": "10-sdge-highest-rates-america-how-to-fight-back.md",
  "how-much-can-i-save-solar-sce-bill": "11-how-much-can-i-save-solar-sce-bill.md",
  "why-california-electricity-rates-so-high-2026": "12-why-california-electricity-rates-so-high-2026.md",
  "how-to-read-pge-bill-solar-makes-sense": "13-how-to-read-pge-bill-solar-makes-sense.md",
  "what-is-nem-3-how-affect-solar-savings": "14-what-is-nem-3-how-affect-solar-savings.md",
  "how-much-does-solar-cost-california-2026": "15-how-much-does-solar-cost-california-2026.md",
  "how-long-solar-panels-pay-for-themselves": "16-how-long-solar-panels-pay-for-themselves.md",
  "how-many-solar-panels-do-i-need-home": "17-how-many-solar-panels-do-i-need-home.md",
  "solar-lease-vs-buy-california": "18-solar-lease-vs-buy-california.md",
  "what-is-solar-ppa-good-deal": "19-what-is-solar-ppa-good-deal.md",
  "can-i-afford-solar-0-down-financing-options": "20-can-i-afford-solar-0-down-financing-options.md",
  "do-i-need-battery-storage-with-solar": "21-do-i-need-battery-storage-with-solar.md",
  "what-happens-solar-panels-during-power-outage": "22-what-happens-solar-panels-during-power-outage.md",
  "tesla-powerwall-vs-enphase-battery": "23-tesla-powerwall-vs-enphase-battery.md",
  "how-does-solar-installation-work-5-step-process": "24-how-does-solar-installation-work-5-step-process.md",
  "best-time-of-year-install-solar-california": "25-best-time-of-year-install-solar-california.md",
  "how-long-does-solar-installation-take": "26-how-long-does-solar-installation-take.md",
  "will-solar-panels-damage-my-roof": "27-will-solar-panels-damage-my-roof.md",
  "what-happens-solar-panels-when-sell-house": "28-what-happens-solar-panels-when-sell-house.md",
  "does-solar-work-on-cloudy-days-california": "29-does-solar-work-on-cloudy-days-california.md",
  "how-choose-solar-company-california-red-flags": "30-how-choose-solar-company-california-red-flags.md",
  // Florida articles (31-60)
  "what-is-solar-energy-florida": "31-what-is-solar-energy-florida.md",
  "net-metering-florida-fpl-duke": "32-net-metering-florida-fpl-duke.md",
  "solar-battery-backup-florida": "33-solar-battery-backup-florida.md",
  "florida-solar-tax-exemptions": "34-florida-solar-tax-exemptions.md",
  "pace-financing-solar-florida": "35-pace-financing-solar-florida.md",
  "federal-solar-tax-credit-florida": "36-federal-solar-tax-credit-florida.md",
  "how-to-go-solar-florida": "37-how-to-go-solar-florida.md",
  "choose-best-solar-installer-florida": "38-choose-best-solar-installer-florida.md",
  "finance-solar-zero-down-florida": "39-finance-solar-zero-down-florida.md",
  "maximize-net-metering-credits-florida": "40-maximize-net-metering-credits-florida.md",
  "hoa-solar-panels-florida-rights": "41-hoa-solar-panels-florida-rights.md",
  "prepare-florida-home-solar-installation": "42-prepare-florida-home-solar-installation.md",
  "solar-panel-cost-florida-2026": "43-solar-panel-cost-florida-2026.md",
  "solar-panels-vs-fpl-cost-25-years": "44-solar-panels-vs-fpl-cost-25-years.md",
  "solar-roi-payback-period-florida": "45-solar-roi-payback-period-florida.md",
  "solar-financing-buy-lease-ppa-pace-florida": "46-solar-financing-buy-lease-ppa-pace-florida.md",
  "true-cost-not-going-solar-florida": "47-true-cost-not-going-solar-florida.md",
  "can-solar-panels-survive-florida-hurricane": "48-can-solar-panels-survive-florida-hurricane.md",
  "tesla-powerwall-vs-enphase-vs-franklin-florida": "49-tesla-powerwall-vs-enphase-vs-franklin-florida.md",
  "solar-battery-ac-running-florida-storms": "50-solar-battery-ac-running-florida-storms.md",
  "florida-power-outages-getting-worse-solar": "51-florida-power-outages-getting-worse-solar.md",
  "best-solar-companies-florida-2026": "52-best-solar-companies-florida-2026.md",
  "solar-energy-miami-homeowner-guide": "53-solar-energy-miami-homeowner-guide.md",
  "solar-energy-tampa-bay-guide": "54-solar-energy-tampa-bay-guide.md",
  "solar-energy-orlando-central-florida": "55-solar-energy-orlando-central-florida.md",
  "solar-energy-jacksonville-north-florida": "56-solar-energy-jacksonville-north-florida.md",
  "solar-myths-florida-homeowners": "57-solar-myths-florida-homeowners.md",
  "fpl-rates-rising-exit-strategy-solar": "58-fpl-rates-rising-exit-strategy-solar.md",
  "best-year-go-solar-florida-2026": "59-best-year-go-solar-florida-2026.md",
  "solar-not-for-everyone-right-for-you-florida": "60-solar-not-for-everyone-right-for-you-florida.md",
  // Puerto Rico articles (61-90)
  "what-is-solar-energy-puerto-rico": "61-what-is-solar-energy-puerto-rico.md",
  "net-metering-puerto-rico-luma": "62-net-metering-puerto-rico-luma.md",
  "solar-battery-backup-puerto-rico": "63-solar-battery-backup-puerto-rico.md",
  "solar-tax-exemptions-puerto-rico": "64-solar-tax-exemptions-puerto-rico.md",
  "puerto-rico-energy-resilience-fund": "65-puerto-rico-energy-resilience-fund.md",
  "federal-solar-tax-credit-puerto-rico": "66-federal-solar-tax-credit-puerto-rico.md",
  "how-to-go-solar-puerto-rico": "67-how-to-go-solar-puerto-rico.md",
  "survive-luma-power-outages-solar": "68-survive-luma-power-outages-solar.md",
  "choose-best-solar-installer-puerto-rico": "69-choose-best-solar-installer-puerto-rico.md",
  "finance-solar-zero-down-puerto-rico": "70-finance-solar-zero-down-puerto-rico.md",
  "apply-free-solar-programs-puerto-rico": "71-apply-free-solar-programs-puerto-rico.md",
  "maximize-net-metering-luma-credits": "72-maximize-net-metering-luma-credits.md",
  "solar-panel-cost-puerto-rico-2026": "73-solar-panel-cost-puerto-rico-2026.md",
  "solar-panels-vs-luma-cost-25-years": "74-solar-panels-vs-luma-cost-25-years.md",
  "solar-roi-payback-period-puerto-rico": "75-solar-roi-payback-period-puerto-rico.md",
  "solar-financing-buy-lease-ppa-puerto-rico": "76-solar-financing-buy-lease-ppa-puerto-rico.md",
  "hidden-costs-not-going-solar-puerto-rico": "77-hidden-costs-not-going-solar-puerto-rico.md",
  "can-solar-panels-survive-hurricane-puerto-rico": "78-can-solar-panels-survive-hurricane-puerto-rico.md",
  "tesla-powerwall-vs-enphase-vs-franklin-puerto-rico": "79-tesla-powerwall-vs-enphase-vs-franklin-puerto-rico.md",
  "solar-battery-lights-on-hurricane-season": "80-solar-battery-lights-on-hurricane-season.md",
  "puerto-rico-grid-failures-energy-independence": "81-puerto-rico-grid-failures-energy-independence.md",
  "best-solar-companies-puerto-rico-2026": "82-best-solar-companies-puerto-rico-2026.md",
  "solar-energy-san-juan-guide": "83-solar-energy-san-juan-guide.md",
  "solar-panels-rural-puerto-rico-off-grid": "84-solar-panels-rural-puerto-rico-off-grid.md",
  "puerto-rico-solar-boom-just-getting-started": "85-puerto-rico-solar-boom-just-getting-started.md",
  "bilingual-solar-support-puerto-rico": "86-bilingual-solar-support-puerto-rico.md",
  "solar-myths-puerto-rico-homeowners": "87-solar-myths-puerto-rico-homeowners.md",
  "luma-energy-rates-rising-exit-strategy": "88-luma-energy-rates-rising-exit-strategy.md",
  "best-year-go-solar-puerto-rico-2026": "89-best-year-go-solar-puerto-rico-2026.md",
  "solar-not-for-everyone-right-for-you-puerto-rico": "90-solar-not-for-everyone-right-for-you-puerto-rico.md",
};

function parseMarkdown(content: string): string {
  const lines = content.split('\n');
  const result: string[] = [];
  let inList = false;
  let listType = '';
  let inTable = false;
  let isFirstTableRow = false;

  const closeList = () => {
    if (inList) {
      result.push(listType === 'ul' ? '</ul>' : '</ol>');
      inList = false;
    }
  };

  const closeTable = () => {
    if (inTable) {
      result.push('</tbody></table></div>');
      inTable = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Skip empty lines but close lists/tables
    if (line.trim() === '') {
      closeList();
      closeTable();
      continue;
    }

    // Check if this is a table separator line (skip it)
    if (line.includes('|') && line.includes('---')) {
      continue;
    }

    // Headers
    if (line.startsWith('### ')) {
      closeList(); closeTable();
      result.push(`<h3 class="text-xl font-semibold text-white mt-8 mb-4">${formatInline(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      closeList(); closeTable();
      result.push(`<h2 class="text-2xl font-semibold text-white mt-10 mb-5">${formatInline(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith('# ')) {
      closeList(); closeTable();
      result.push(`<h1 class="text-3xl md:text-4xl font-bold text-white mb-6">${formatInline(line.slice(2))}</h1>`);
      continue;
    }

    // Horizontal rule
    if (line.trim() === '---') {
      closeList(); closeTable();
      result.push('<hr class="my-8 border-zinc-700" />');
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      closeList(); closeTable();
      result.push(`<blockquote class="border-l-4 border-violet-500 pl-4 my-4 text-zinc-300 italic">${formatInline(line.slice(2))}</blockquote>`);
      continue;
    }

    // Bullet list
    if (line.startsWith('- ')) {
      closeTable();
      if (!inList || listType !== 'ul') {
        closeList();
        result.push('<ul class="list-disc ml-6 mb-4 space-y-2">');
        inList = true;
        listType = 'ul';
      }
      const itemContent = formatInline(line.slice(2));
      result.push(`<li class="text-zinc-300">${itemContent}</li>`);
      continue;
    }

    // Numbered list
    const numMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (numMatch) {
      closeTable();
      if (!inList || listType !== 'ol') {
        closeList();
        result.push('<ol class="list-decimal ml-6 mb-4 space-y-2">');
        inList = true;
        listType = 'ol';
      }
      const itemContent = formatInline(numMatch[2]);
      result.push(`<li class="text-zinc-300">${itemContent}</li>`);
      continue;
    }

    // Table row
    if (line.includes('|')) {
      closeList();
      const cells = line.split('|').filter(c => c.trim());

      if (!inTable) {
        // Start new table
        result.push('<div class="overflow-x-auto my-6"><table class="w-full border-collapse bg-zinc-900/50 rounded-lg overflow-hidden">');
        result.push('<thead><tr class="bg-zinc-800">');
        cells.forEach(c => {
          result.push(`<th class="py-3 px-4 text-left text-white font-semibold border-b border-zinc-700">${formatInline(c.trim())}</th>`);
        });
        result.push('</tr></thead><tbody>');
        inTable = true;
        isFirstTableRow = true;
      } else {
        // Data row
        result.push('<tr class="border-b border-zinc-800 hover:bg-zinc-800/50">');
        cells.forEach(c => {
          result.push(`<td class="py-3 px-4 text-zinc-300">${formatInline(c.trim())}</td>`);
        });
        result.push('</tr>');
      }
      continue;
    }

    // Regular paragraph
    closeList(); closeTable();
    const formattedLine = formatInline(line);
    result.push(`<p class="text-zinc-300 leading-relaxed mb-4">${formattedLine}</p>`);
  }

  // Close any open elements
  closeList();
  closeTable();

  return result.join('\n');
}

function formatInline(text: string): string {
  return text
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
    // Italic
    .replace(/\*([^*]+)\*/g, '<em class="text-zinc-200">$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-violet-400 hover:text-violet-300 underline">$1</a>');
}

// Generate AEO Schema for individual blog posts
function generateBlogSchema(post: BlogPost, slug: string) {
  // Parse the lastUpdated date
  const modifiedDate = new Date(post.lastUpdated).toISOString();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": `Expert guide by ${post.author.name}: ${post.title}. Everything homeowners need to know about solar.`,
    "image": post.image,
    "datePublished": "2026-01-01T00:00:00Z",
    "dateModified": modifiedDate,
    "author": post.author.name === "RIV Solar Team" ? {
      "@type": "Organization",
      "name": "RIV Solar",
      "url": "https://rivsolar.com"
    } : {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "description": post.author.bio,
      "worksFor": {
        "@type": "Organization",
        "name": "RIV Solar",
        "url": "https://rivsolar.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "RIV Solar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rivsolar.com/images/riv-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://rivsolar.com/insights/${slug}`
    },
    "articleSection": post.category,
    "wordCount": 2500,
    "inLanguage": "en-US"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rivsolar.com" },
      { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://rivsolar.com/insights" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://rivsolar.com/insights/${slug}` }
    ]
  };

  return [articleSchema, breadcrumbSchema];
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blogPost = blogPosts.find(post => post.slug === slug);
  const filename = slugToFilename[slug];

  if (!blogPost || !filename) {
    notFound();
  }

  // Read the markdown file
  const filePath = path.join(process.cwd(), 'content', 'blogs', filename);
  let content = '';

  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch {
    notFound();
  }

  const htmlContent = parseMarkdown(content);
  const schemas = generateBlogSchema(blogPost, slug);

  // Get related articles
  const sameCategoryArticles = getRelatedArticles(slug, blogPost.category, 3);
  const relatedArticles = getMoreRelatedArticles(slug, blogPost.category, sameCategoryArticles, 3);

  return (
    <main className="min-h-screen bg-zinc-950">
      {/* AEO Schema Markup */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <Link
              href="/insights"
              className="text-xs uppercase tracking-widest text-zinc-500 hover:text-violet-400 transition-colors font-mono"
            >
              ← Back to Insights
            </Link>
            <Link
              href="/"
              className="text-xs uppercase tracking-widest text-zinc-500 hover:text-violet-400 transition-colors font-mono"
            >
              RIV Solar
            </Link>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="pt-24 pb-20 px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Meta */}
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-zinc-500 font-mono">
            <span className="text-violet-400">{blogPost.category}</span>
            <span>·</span>
            <span>{blogPost.readTime}</span>
            <span>·</span>
            <span>Updated {blogPost.lastUpdated}</span>
          </div>

          {/* Author Byline - E-E-A-T Signal */}
          <div className="mb-10 flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800/50 rounded-xl">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0">
              {blogPost.author.avatar.includes('riv-logo') ? (
                <Image
                  src={blogPost.author.avatar}
                  alt={blogPost.author.name}
                  fill
                  className="object-contain p-2 invert"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-violet-400 text-lg font-semibold">
                  {blogPost.author.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div>
              <p className="text-white font-medium text-sm">{blogPost.author.name}</p>
              <p className="text-violet-400 text-xs">{blogPost.author.role}</p>
              <p className="text-zinc-500 text-xs mt-1 hidden sm:block">{blogPost.author.bio}</p>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-invert prose-zinc max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Ready to see your savings?</h3>
            <p className="text-zinc-400 mb-6">Get a free, personalized solar quote for your home in California, Florida, or Puerto Rico.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#savings"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-all"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/ai-tools"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-all border border-zinc-700"
              >
                Try AI Bill Analyzer
              </Link>
            </div>
          </div>

          {/* Related Articles - Internal Linking */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-semibold text-white mb-6">Related Articles</h2>
              <div className="grid gap-4">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/insights/${article.slug}`}
                    className="group flex items-center justify-between p-4 bg-zinc-900/30 hover:bg-zinc-900/60 border border-zinc-800/50 hover:border-violet-500/30 rounded-lg transition-all"
                  >
                    <div className="flex-1 min-w-0 pr-4">
                      <p className="text-white text-sm font-medium group-hover:text-violet-400 transition-colors line-clamp-1">
                        {article.title}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-violet-400/70 text-xs">{article.category}</span>
                        <span className="text-zinc-600 text-xs">{article.readTime}</span>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-zinc-600 group-hover:text-violet-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <Link
              href="/insights"
              className="text-sm text-zinc-500 hover:text-violet-400 transition-colors font-mono uppercase tracking-widest"
            >
              ← View All Insights
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
