import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import blogsData from './data/blogs.json';
import './App.css';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Shuffle the blogs on every refresh
    const shuffledBlogs = blogsData.sort(() => 0.5 - Math.random());
    setBlogs(shuffledBlogs);
  }, []);

  return (
    <div className="app">
      <h1>Latest Cricket Blogs </h1>
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <Blog key={index} title={blog.title} content={blog.content} />
        ))}
      </div>
    </div>
  );
};

export default App;
