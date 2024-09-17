import React, { useState } from 'react';
import './navbar.css';
import './BlogMenu.css'; // Import the CSS file

const BlogMenu = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Welcome to Our New Guest House',
      date: '2023-09-01',
      content: 'We are excited to announce the grand opening of our guest house! Come and experience...',
      image: 'https://source.unsplash.com/400x200/?nature'
    },
    {
      id: 2,
      title: 'Top 5 Local Attractions',
      date: '2023-09-15',
      content: 'Discover the hidden gems in our area! From picturesque hiking trails to charming cafes...',
      image: '/api/placeholder/400/200'
    },
    {
      id: 3,
      title: 'Autumn Special: Cozy Stays and Fall Foliage',
      date: '2023-10-01',
      content: 'As the leaves turn golden, enjoy our special autumn packages. Includes guided nature walks...',
      image: '/api/placeholder/400/200'
    }
  ]);

  return (
    <div className="blog-menu p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      
      <div className="space-y-6">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="blog-post-content p-4">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{post.date}</p>
              <p className="text-gray-700">{post.content}</p>
              <a href="#" className="read-more-button mt-4 text-blue-600 hover:text-blue-800 transition duration-200">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogMenu;