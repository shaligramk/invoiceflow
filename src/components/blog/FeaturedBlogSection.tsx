import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blog-posts';
import { ArrowRight } from 'lucide-react';

export function FeaturedBlogSection() {
  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-accent">Latest from Our Blog</h2>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:text-secondary transition-colors"
          >
            View all articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map(post => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group"
            >
              <article className="h-full bg-primary-light rounded-lg overflow-hidden transition-shadow hover:shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-accent group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}