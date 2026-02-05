"use client";

import BlogPortfolio from "@/components/ui/blog-portfolio";
import { BlogPost } from "@/lib/blog-data";

interface InsightsClientProps {
  blogPosts: BlogPost[];
  config: {
    timeZone?: string;
    timeUpdateInterval?: number;
    idleDelay?: number;
  };
}

export default function InsightsClient({ blogPosts, config }: InsightsClientProps) {
  return <BlogPortfolio blogPosts={blogPosts} config={config} />;
}
