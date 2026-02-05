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
  },
  // ==================== FLORIDA ARTICLES (31-60) ====================
  {
    id: 31,
    title: "WHAT IS SOLAR ENERGY? FLORIDA HOMEOWNER GUIDE",
    slug: "what-is-solar-energy-florida",
    category: "FLORIDA",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "February 5, 2026",
    image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 32,
    title: "NET METERING IN FLORIDA: FPL & DUKE ENERGY",
    slug: "net-metering-florida-fpl-duke",
    category: "FPL",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 5, 2026",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 33,
    title: "SOLAR BATTERY BACKUP: FLORIDA HURRICANE PROTECTION",
    slug: "solar-battery-backup-florida",
    category: "BATTERIES",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 4, 2026",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&q=80",
    author: authors.david
  },
  {
    id: 34,
    title: "FLORIDA SOLAR TAX EXEMPTIONS EXPLAINED",
    slug: "florida-solar-tax-exemptions",
    category: "TAX CREDITS",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "February 4, 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 35,
    title: "WHAT IS PACE FINANCING FOR SOLAR IN FLORIDA?",
    slug: "pace-financing-solar-florida",
    category: "FINANCING",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "February 3, 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 36,
    title: "30% FEDERAL TAX CREDIT: FLORIDA ELIGIBILITY",
    slug: "federal-solar-tax-credit-florida",
    category: "TAX CREDITS",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "February 3, 2026",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 37,
    title: "HOW TO GO SOLAR IN FLORIDA: STEP-BY-STEP",
    slug: "how-to-go-solar-florida",
    category: "FLORIDA",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "February 2, 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    author: authors.team
  },
  {
    id: 38,
    title: "CHOOSE THE BEST SOLAR INSTALLER IN FLORIDA",
    slug: "choose-best-solar-installer-florida",
    category: "BUYER GUIDE",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 2, 2026",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    author: authors.team
  },
  {
    id: 39,
    title: "FINANCE SOLAR WITH $0 DOWN IN FLORIDA",
    slug: "finance-solar-zero-down-florida",
    category: "FINANCING",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "February 1, 2026",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 40,
    title: "MAXIMIZE NET METERING CREDITS IN FLORIDA",
    slug: "maximize-net-metering-credits-florida",
    category: "FPL",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "February 1, 2026",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 41,
    title: "HOA SOLAR PANELS IN FLORIDA: YOUR RIGHTS",
    slug: "hoa-solar-panels-florida-rights",
    category: "FLORIDA",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 31, 2026",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    author: authors.team
  },
  {
    id: 42,
    title: "PREPARE YOUR FLORIDA HOME FOR SOLAR",
    slug: "prepare-florida-home-solar-installation",
    category: "INSTALLATION",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 30, 2026",
    image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=1200&q=80",
    author: authors.david
  },
  {
    id: 43,
    title: "SOLAR PANEL COST IN FLORIDA 2026",
    slug: "solar-panel-cost-florida-2026",
    category: "PRICING",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 30, 2026",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 44,
    title: "SOLAR VS FPL: 25-YEAR COST COMPARISON",
    slug: "solar-panels-vs-fpl-cost-25-years",
    category: "SOLAR ROI",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "January 29, 2026",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 45,
    title: "FLORIDA SOLAR ROI: PAYBACK PERIOD EXPLAINED",
    slug: "solar-roi-payback-period-florida",
    category: "SOLAR ROI",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 28, 2026",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 46,
    title: "SOLAR FINANCING: BUY, LEASE, PPA, OR PACE?",
    slug: "solar-financing-buy-lease-ppa-pace-florida",
    category: "FINANCING",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "January 27, 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 47,
    title: "THE TRUE COST OF NOT GOING SOLAR IN FLORIDA",
    slug: "true-cost-not-going-solar-florida",
    category: "SOLAR ROI",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 26, 2026",
    image: "https://images.unsplash.com/photo-1518173946687-a4c036bc4089?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 48,
    title: "CAN SOLAR PANELS SURVIVE A FLORIDA HURRICANE?",
    slug: "can-solar-panels-survive-florida-hurricane",
    category: "FLORIDA",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 25, 2026",
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=1200&q=80",
    author: authors.david
  },
  {
    id: 49,
    title: "TESLA VS ENPHASE VS FRANKLIN: FLORIDA BATTERIES",
    slug: "tesla-powerwall-vs-enphase-vs-franklin-florida",
    category: "BATTERIES",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "January 24, 2026",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1200&q=80",
    author: authors.david
  },
  {
    id: 50,
    title: "SOLAR + BATTERY: KEEP AC RUNNING IN FL STORMS",
    slug: "solar-battery-ac-running-florida-storms",
    category: "BATTERIES",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 23, 2026",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80",
    author: authors.david
  },
  {
    id: 51,
    title: "FLORIDA POWER OUTAGES: YOUR SOLAR EXIT PLAN",
    slug: "florida-power-outages-getting-worse-solar",
    category: "FLORIDA",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 22, 2026",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 52,
    title: "BEST SOLAR COMPANIES IN FLORIDA 2026",
    slug: "best-solar-companies-florida-2026",
    category: "BUYER GUIDE",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "January 21, 2026",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    author: authors.team
  },
  {
    id: 53,
    title: "SOLAR ENERGY IN MIAMI: COMPLETE GUIDE",
    slug: "solar-energy-miami-homeowner-guide",
    category: "LOCAL GUIDE",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "January 20, 2026",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 54,
    title: "SOLAR ENERGY IN TAMPA BAY: WHY GO SOLAR",
    slug: "solar-energy-tampa-bay-guide",
    category: "LOCAL GUIDE",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 19, 2026",
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 55,
    title: "SOLAR ENERGY IN ORLANDO & CENTRAL FLORIDA",
    slug: "solar-energy-orlando-central-florida",
    category: "LOCAL GUIDE",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 18, 2026",
    image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 56,
    title: "SOLAR ENERGY IN JACKSONVILLE: NORTH FL GUIDE",
    slug: "solar-energy-jacksonville-north-florida",
    category: "LOCAL GUIDE",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 17, 2026",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 57,
    title: "5 SOLAR MYTHS FLORIDA HOMEOWNERS BELIEVE",
    slug: "solar-myths-florida-homeowners",
    category: "SOLAR 101",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 16, 2026",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80",
    author: authors.team
  },
  {
    id: 58,
    title: "FPL RATES KEEP RISING: YOUR EXIT STRATEGY",
    slug: "fpl-rates-rising-exit-strategy-solar",
    category: "FPL",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 15, 2026",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 59,
    title: "WHY 2026 IS THE BEST YEAR TO GO SOLAR IN FL",
    slug: "best-year-go-solar-florida-2026",
    category: "FLORIDA",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 14, 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 60,
    title: "IS SOLAR RIGHT FOR YOU? FLORIDA EDITION",
    slug: "solar-not-for-everyone-right-for-you-florida",
    category: "DECISION GUIDE",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 13, 2026",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
    author: authors.team
  },
  // ==================== PUERTO RICO ARTICLES (61-90) ====================
  {
    id: 61,
    title: "WHAT IS SOLAR ENERGY? PUERTO RICO GUIDE",
    slug: "what-is-solar-energy-puerto-rico",
    category: "PUERTO RICO",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "February 5, 2026",
    image: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 62,
    title: "NET METERING IN PUERTO RICO: LUMA CREDITS",
    slug: "net-metering-puerto-rico-luma",
    category: "LUMA",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 5, 2026",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 63,
    title: "SOLAR BATTERY BACKUP: WHY EVERY PR HOME NEEDS ONE",
    slug: "solar-battery-backup-puerto-rico",
    category: "BATTERIES",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 4, 2026",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&q=80",
    author: authors.david
  },
  {
    id: 64,
    title: "SOLAR TAX EXEMPTIONS IN PUERTO RICO",
    slug: "solar-tax-exemptions-puerto-rico",
    category: "TAX CREDITS",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "February 4, 2026",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 65,
    title: "PUERTO RICO ENERGY RESILIENCE FUND (PR-ERF)",
    slug: "puerto-rico-energy-resilience-fund",
    category: "INCENTIVES",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 3, 2026",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 66,
    title: "FEDERAL TAX CREDIT: CAN PR RESIDENTS CLAIM IT?",
    slug: "federal-solar-tax-credit-puerto-rico",
    category: "TAX CREDITS",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "February 3, 2026",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 67,
    title: "HOW TO GO SOLAR IN PUERTO RICO: STEP-BY-STEP",
    slug: "how-to-go-solar-puerto-rico",
    category: "PUERTO RICO",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "February 2, 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    author: authors.team
  },
  {
    id: 68,
    title: "SURVIVE LUMA OUTAGES WITH SOLAR + BATTERY",
    slug: "survive-luma-power-outages-solar",
    category: "LUMA",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 2, 2026",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80",
    author: authors.david
  },
  {
    id: 69,
    title: "CHOOSE THE BEST SOLAR INSTALLER IN PR",
    slug: "choose-best-solar-installer-puerto-rico",
    category: "BUYER GUIDE",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "February 1, 2026",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    author: authors.team
  },
  {
    id: 70,
    title: "FINANCE SOLAR WITH $0 DOWN IN PUERTO RICO",
    slug: "finance-solar-zero-down-puerto-rico",
    category: "FINANCING",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "February 1, 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 71,
    title: "FREE SOLAR PROGRAMS IN PUERTO RICO",
    slug: "apply-free-solar-programs-puerto-rico",
    category: "INCENTIVES",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 31, 2026",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 72,
    title: "MAXIMIZE NET METERING CREDITS WITH LUMA",
    slug: "maximize-net-metering-luma-credits",
    category: "LUMA",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 30, 2026",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 73,
    title: "SOLAR PANEL COST IN PUERTO RICO 2026",
    slug: "solar-panel-cost-puerto-rico-2026",
    category: "PRICING",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 30, 2026",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 74,
    title: "SOLAR VS LUMA: 25-YEAR COST COMPARISON",
    slug: "solar-panels-vs-luma-cost-25-years",
    category: "SOLAR ROI",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "January 29, 2026",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 75,
    title: "PUERTO RICO SOLAR ROI: PAYBACK PERIOD",
    slug: "solar-roi-payback-period-puerto-rico",
    category: "SOLAR ROI",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 28, 2026",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 76,
    title: "SOLAR FINANCING IN PR: BUY, LEASE, OR PPA?",
    slug: "solar-financing-buy-lease-ppa-puerto-rico",
    category: "FINANCING",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 27, 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    author: authors.sarah
  },
  {
    id: 77,
    title: "HIDDEN COSTS OF NOT GOING SOLAR IN PR",
    slug: "hidden-costs-not-going-solar-puerto-rico",
    category: "SOLAR ROI",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 26, 2026",
    image: "https://images.unsplash.com/photo-1518173946687-a4c036bc4089?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 78,
    title: "CAN SOLAR PANELS SURVIVE A PR HURRICANE?",
    slug: "can-solar-panels-survive-hurricane-puerto-rico",
    category: "PUERTO RICO",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 25, 2026",
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=1200&q=80",
    author: authors.david
  },
  {
    id: 79,
    title: "TESLA VS ENPHASE VS FRANKLIN: PR BATTERIES",
    slug: "tesla-powerwall-vs-enphase-vs-franklin-puerto-rico",
    category: "BATTERIES",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "January 24, 2026",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1200&q=80",
    author: authors.david
  },
  {
    id: 80,
    title: "SOLAR + BATTERY: LIGHTS ON DURING HURRICANES",
    slug: "solar-battery-lights-on-hurricane-season",
    category: "BATTERIES",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 23, 2026",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80",
    author: authors.david
  },
  {
    id: 81,
    title: "PR GRID FAILURES: ENERGY INDEPENDENCE NOW",
    slug: "puerto-rico-grid-failures-energy-independence",
    category: "PUERTO RICO",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 22, 2026",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 82,
    title: "BEST SOLAR COMPANIES IN PUERTO RICO 2026",
    slug: "best-solar-companies-puerto-rico-2026",
    category: "BUYER GUIDE",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "January 21, 2026",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    author: authors.team
  },
  {
    id: 83,
    title: "SOLAR ENERGY IN SAN JUAN: NEIGHBORHOOD GUIDE",
    slug: "solar-energy-san-juan-guide",
    category: "LOCAL GUIDE",
    readTime: "8 MIN",
    date: "2026",
    lastUpdated: "January 20, 2026",
    image: "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 84,
    title: "SOLAR FOR RURAL PUERTO RICO: OFF-GRID OPTIONS",
    slug: "solar-panels-rural-puerto-rico-off-grid",
    category: "PUERTO RICO",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 19, 2026",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    author: authors.david
  },
  {
    id: 85,
    title: "PUERTO RICO'S SOLAR BOOM IS JUST STARTING",
    slug: "puerto-rico-solar-boom-just-getting-started",
    category: "PUERTO RICO",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 18, 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 86,
    title: "BILINGUAL SOLAR SUPPORT: WHY IT MATTERS IN PR",
    slug: "bilingual-solar-support-puerto-rico",
    category: "PUERTO RICO",
    readTime: "5 MIN",
    date: "2026",
    lastUpdated: "January 17, 2026",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    author: authors.team
  },
  {
    id: 87,
    title: "5 SOLAR MYTHS PR HOMEOWNERS STILL BELIEVE",
    slug: "solar-myths-puerto-rico-homeowners",
    category: "SOLAR 101",
    readTime: "6 MIN",
    date: "2026",
    lastUpdated: "January 16, 2026",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80",
    author: authors.team
  },
  {
    id: 88,
    title: "LUMA RATES KEEP RISING: YOUR EXIT STRATEGY",
    slug: "luma-energy-rates-rising-exit-strategy",
    category: "LUMA",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 15, 2026",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 89,
    title: "WHY 2026 IS THE BEST YEAR TO GO SOLAR IN PR",
    slug: "best-year-go-solar-puerto-rico-2026",
    category: "PUERTO RICO",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 14, 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    author: authors.marcus
  },
  {
    id: 90,
    title: "IS SOLAR RIGHT FOR YOU? PUERTO RICO EDITION",
    slug: "solar-not-for-everyone-right-for-you-puerto-rico",
    category: "DECISION GUIDE",
    readTime: "7 MIN",
    date: "2026",
    lastUpdated: "January 13, 2026",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
    author: authors.team
  }
];

export const insightsConfig = {
  timeZone: "America/Los_Angeles",
  timeUpdateInterval: 1000,
  idleDelay: 4000,
  debounceDelay: 100
};
