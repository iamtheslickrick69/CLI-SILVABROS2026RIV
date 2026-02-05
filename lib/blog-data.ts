// Blog data for the Insights page
export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  lastUpdated: string;
  image: string;
  author: Author;
}

// Expert authors for credibility (E-E-A-T)
export const authors: Record<string, Author> = {
  marcus: {
    name: "Marcus Chen",
    role: "Solar Energy Specialist",
    avatar: "/images/authors/marcus.jpg",
    bio: "10+ years in California solar industry. NABCEP certified. Former utility rate analyst."
  },
  sarah: {
    name: "Sarah Martinez",
    role: "Energy Finance Expert",
    avatar: "/images/authors/sarah.jpg",
    bio: "Solar financing specialist with expertise in tax credits, PPAs, and loan structures."
  },
  david: {
    name: "David Park",
    role: "Installation Director",
    avatar: "/images/authors/david.jpg",
    bio: "Licensed contractor (CSLB). 15+ years managing residential solar installations across California."
  },
  team: {
    name: "RIV Solar Team",
    role: "Expert Contributors",
    avatar: "/images/riv-logo.png",
    bio: "Our team of certified solar professionals serving California, Florida & Puerto Rico."
  }
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "IS SOLAR WORTH IT IN CALIFORNIA IN 2026?",
    slug: "is-solar-worth-it-california-2026",
    category: "SOLAR ROI",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "February 3, 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 2,
    title: "SHOULD I GO SOLAR OR WAIT?",
    slug: "should-i-go-solar-or-wait",
    category: "DECISION GUIDE",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 2, 2026",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 3,
    title: "IS SOLAR WORTH IT WITH A LOW ELECTRIC BILL?",
    slug: "is-solar-worth-it-low-electric-bill",
    category: "SOLAR ROI",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 30, 2026",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 4,
    title: "SOLAR BEFORE OR AFTER BUYING AN EV?",
    slug: "should-i-get-solar-before-or-after-ev",
    category: "EV + SOLAR",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "January 28, 2026",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 5,
    title: "IS SOLAR WORTH IT IN THE INLAND EMPIRE?",
    slug: "is-solar-worth-it-inland-empire",
    category: "LOCAL GUIDE",
    readTime: "9 MIN",
    date: "2026",
    lastUpdated: "January 25, 2026",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1200&q=80",
    author: authors.david
  },
  {
    id: 6,
    title: "WHAT IS THE 30% FEDERAL SOLAR TAX CREDIT?",
    slug: "what-is-30-percent-federal-solar-tax-credit",
    category: "TAX CREDITS",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "February 1, 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 7,
    title: "CALIFORNIA SOLAR INCENTIVES IN 2026",
    slug: "what-solar-incentives-available-california-2026",
    category: "INCENTIVES",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 3, 2026",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 8,
    title: "WILL SOLAR INCREASE MY PROPERTY TAXES?",
    slug: "will-solar-panels-increase-property-taxes-california",
    category: "TAX GUIDE",
    readTime: "5 MIN",
    date: "2026",
    lastUpdated: "January 20, 2026",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 9,
    title: "PG&E RATES IN 2026: WHY YOUR BILL KEEPS RISING",
    slug: "pge-rates-2026-why-bill-keeps-rising",
    category: "PG&E",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 4, 2026",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 10,
    title: "SDG&E: HIGHEST RATES IN AMERICA",
    slug: "sdge-highest-rates-america-how-to-fight-back",
    category: "SDG&E",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 4, 2026",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 11,
    title: "HOW MUCH CAN I SAVE WITH SOLAR ON SCE?",
    slug: "how-much-can-i-save-solar-sce-bill",
    category: "SCE",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "February 2, 2026",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 12,
    title: "WHY ARE CALIFORNIA RATES SO HIGH IN 2026?",
    slug: "why-california-electricity-rates-so-high-2026",
    category: "RATES",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 3, 2026",
    image: "https://images.unsplash.com/photo-1518173946687-a4c036bc4089?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 13,
    title: "HOW TO READ YOUR PG&E BILL",
    slug: "how-to-read-pge-bill-solar-makes-sense",
    category: "PG&E",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 22, 2026",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 14,
    title: "WHAT IS NEM 3.0 AND HOW DOES IT AFFECT SAVINGS?",
    slug: "what-is-nem-3-how-affect-solar-savings",
    category: "NEM 3.0",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "February 5, 2026",
    image: "https://images.unsplash.com/photo-1545209463-e2827c2acac5?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 15,
    title: "HOW MUCH DOES SOLAR COST IN CALIFORNIA?",
    slug: "how-much-does-solar-cost-california-2026",
    category: "PRICING",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 1, 2026",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 16,
    title: "HOW LONG FOR SOLAR TO PAY FOR ITSELF?",
    slug: "how-long-solar-panels-pay-for-themselves",
    category: "SOLAR ROI",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 28, 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 17,
    title: "HOW MANY SOLAR PANELS DO I NEED?",
    slug: "how-many-solar-panels-do-i-need-home",
    category: "SYSTEM SIZE",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 26, 2026",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1200&q=80",
    author: authors.david
  },
  {
    id: 18,
    title: "SOLAR LEASE VS BUY: WHICH IS BEST?",
    slug: "solar-lease-vs-buy-california",
    category: "FINANCING",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 30, 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 19,
    title: "WHAT IS A SOLAR PPA?",
    slug: "what-is-solar-ppa-good-deal",
    category: "FINANCING",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 25, 2026",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 20,
    title: "$0 DOWN SOLAR FINANCING OPTIONS",
    slug: "can-i-afford-solar-0-down-financing-options",
    category: "FINANCING",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "February 2, 2026",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 21,
    title: "DO I NEED BATTERY STORAGE WITH SOLAR?",
    slug: "do-i-need-battery-storage-with-solar",
    category: "BATTERIES",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 29, 2026",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&q=80",
    author: authors.david
  },
  {
    id: 22,
    title: "SOLAR PANELS DURING A POWER OUTAGE",
    slug: "what-happens-solar-panels-during-power-outage",
    category: "BATTERIES",
    readTime: "5 MIN",
    date: "2026",
    lastUpdated: "January 24, 2026",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80",
    author: authors.david
  },
  {
    id: 23,
    title: "TESLA POWERWALL VS ENPHASE BATTERY",
    slug: "tesla-powerwall-vs-enphase-battery",
    category: "BATTERIES",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "February 1, 2026",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1200&q=80",
    author: authors.david
  },
  {
    id: 24,
    title: "THE 5-STEP SOLAR INSTALLATION PROCESS",
    slug: "how-does-solar-installation-work-5-step-process",
    category: "INSTALLATION",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 27, 2026",
    image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=1200&q=80",
    author: authors.david
  },
  {
    id: 25,
    title: "BEST TIME OF YEAR TO INSTALL SOLAR",
    slug: "best-time-of-year-install-solar-california",
    category: "INSTALLATION",
    readTime: "5 MIN",
    date: "2026",
    lastUpdated: "January 23, 2026",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
    author: authors.david
  },
  {
    id: 26,
    title: "HOW LONG DOES SOLAR INSTALLATION TAKE?",
    slug: "how-long-does-solar-installation-take",
    category: "INSTALLATION",
    readTime: "5 MIN",
    date: "2026",
    lastUpdated: "January 21, 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    author: authors.david
  },
  {
    id: 27,
    title: "WILL SOLAR PANELS DAMAGE MY ROOF?",
    slug: "will-solar-panels-damage-my-roof",
    category: "INSTALLATION",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 19, 2026",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1200&q=80",
    author: authors.david
  },
  {
    id: 28,
    title: "SELLING YOUR HOUSE WITH SOLAR PANELS",
    slug: "what-happens-solar-panels-when-sell-house",
    category: "HOME VALUE",
    readTime: "5 MIN",
    date: "2026",
    lastUpdated: "January 26, 2026",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 29,
    title: "DOES SOLAR WORK ON CLOUDY DAYS?",
    slug: "does-solar-work-on-cloudy-days-california",
    category: "SOLAR 101",
    readTime: "5 MIN",
    date: "2026",
    lastUpdated: "January 18, 2026",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&q=80",
    author: authors.team
  },
  {
    id: 30,
    title: "HOW TO CHOOSE A SOLAR COMPANY",
    slug: "how-choose-solar-company-california-red-flags",
    category: "BUYER GUIDE",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 4, 2026",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    author: authors.team
  }
];

export const insightsConfig = {
  timeZone: "America/Los_Angeles",
  timeUpdateInterval: 1000,
  idleDelay: 4000,
  debounceDelay: 100
};
