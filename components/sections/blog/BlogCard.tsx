import React from 'react';
import type { Blog } from '@/types/blog';
import Image from 'next/image';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => (
  <div className="flex flex-col md:flex-row gap-4 bg-white bg-opacity-10 p-4 rounded-lg shadow-md">
    <div className="flex-shrink-0">
      <Image src={blog.image} alt={blog.title} width={120} height={80} className="rounded" />
    </div>
    <div className="flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-lg font-semibold mb-1 dark:text-white">{blog.title}</h3>
        <p className="text-gray-300 text-sm mb-2">{blog.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">{blog.publishAt}</span>
        {blog.link && (
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accentColor underline text-xs"
          >
            Read more
          </a>
        )}
      </div>
    </div>
  </div>
);

export default BlogCard; 