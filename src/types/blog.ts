export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  tags: string[];
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}