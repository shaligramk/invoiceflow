import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/blog/${post.slug}`}>
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-6">
          <div className="flex gap-2 mb-3">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs text-primary px-2 py-1 bg-primary-light rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-accent mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}