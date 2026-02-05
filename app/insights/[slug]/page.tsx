import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';

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
    description: `Learn about ${post.title.toLowerCase()}. Expert guide for California homeowners on solar panels, savings, and installation.`,
    keywords: [post.category.toLowerCase(), 'California solar', 'solar panels', 'solar savings', post.title.split(' ').slice(0, 3).join(' ')],
    openGraph: {
      title: post.title,
      description: `Expert guide: ${post.title}. Everything California homeowners need to know.`,
      type: 'article',
      url: `https://rivsolar.com/insights/${slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      publishedTime: '2026-01-01T00:00:00Z',
      authors: ['RIV Solar'],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: `Expert guide: ${post.title}`,
      images: [post.image],
    },
    alternates: {
      canonical: `https://rivsolar.com/insights/${slug}`,
    },
  };
}

// Map slugs to filenames
const slugToFilename: Record<string, string> = {
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
function generateBlogSchema(post: typeof blogPosts[0], slug: string) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": `Expert guide: ${post.title}. Everything California homeowners need to know about solar.`,
    "image": post.image,
    "datePublished": "2026-01-01T00:00:00Z",
    "dateModified": "2026-01-01T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "RIV Solar",
      "url": "https://rivsolar.com"
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
          <div className="mb-8 flex items-center gap-4 text-xs uppercase tracking-widest text-zinc-500 font-mono">
            <span className="text-violet-400">{blogPost.category}</span>
            <span>·</span>
            <span>{blogPost.readTime}</span>
            <span>·</span>
            <span>{blogPost.date}</span>
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-zinc max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Ready to see your savings?</h3>
            <p className="text-zinc-400 mb-6">Get a free, personalized solar quote for your California home.</p>
            <Link 
              href="/#savings"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-all"
            >
              Get Your Free Quote
            </Link>
          </div>

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
