import React from 'react';
import { Layout } from '../components/layout/Layout';
import { BlogCard } from '../components/blog/BlogCard';
import { blogPosts } from '../data/blog-posts';
import { useEffect } from 'react';

export default function BlogPage() {
  useEffect(() => {
    // Update meta tags
    document.title = 'Invoice Tips & Guides | InvoiceFlow Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert tips and guides on creating professional invoices, getting paid faster, and managing your business finances effectively.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'invoice tips, business guides, freelance advice, payment collection, financial management');
    }
  }, []);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-accent mb-8">Latest Articles</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}