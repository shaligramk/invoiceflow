import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { blogPosts } from '../data/blog-posts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }

    // Update meta tags
    document.title = `${post.meta.title} | InvoiceFlow`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.meta.description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', post.meta.keywords.join(', '));
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        
        <div className="prose prose-lg max-w-none">
          <h1>{post.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-8">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} min read</span>
          </div>

          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Layout>
  );
}